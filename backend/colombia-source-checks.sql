-- Read-only verification queries captured 2026-11-19.
-- No schema, data or privileges are modified. Run with a role permitted to inspect private source tables.

WITH point_rows AS (
 SELECT p.source,p.point_type,p.quality,
  (coalesce(p.source,'') ilike '%google%') AS direct_google,
  ((p.point_type in ('DS','FS') or p.source='INVÍAS Red Vial') AND EXISTS(SELECT 1 FROM public.wme_road_colombia r WHERE r.section_id=p.section_id AND r.source ilike '%google%')) AS derived_google
 FROM public.wme_pr_colombia p
), guide_rows AS (
 SELECT r.source, (r.section_id IS NULL OR coalesce(r.source,'') ilike '%google%') AS excluded
 FROM public.wme_road_colombia_guides g LEFT JOIN public.wme_road_colombia r ON r.section_id=g.section_id
), point_groups AS (
 SELECT source,point_type,quality,count(*) AS stored_rows,count(*) FILTER(WHERE direct_google OR derived_google) AS excluded_rows,
 count(*) FILTER(WHERE NOT direct_google AND NOT derived_google) AS eligible_rows FROM point_rows GROUP BY source,point_type,quality
), guide_groups AS (
 SELECT source,count(*) AS stored_rows,count(*) FILTER(WHERE excluded) AS excluded_rows,count(*) FILTER(WHERE NOT excluded) AS eligible_rows FROM guide_rows GROUP BY source
), road_groups AS (
 SELECT source,count(*) AS stored_sections,count(*) FILTER(WHERE coalesce(source,'') ilike '%google%') AS excluded_sections FROM public.wme_road_colombia GROUP BY source
)
SELECT jsonb_build_object(
 'checked_at',now(),'point_table','public.wme_pr_colombia',
 'points',jsonb_build_object('stored_rows',(SELECT count(*) FROM point_rows),'excluded_direct_google',(SELECT count(*) FROM point_rows WHERE direct_google),'excluded_derived',(SELECT count(*) FROM point_rows WHERE NOT direct_google AND derived_google),'eligible_rows',(SELECT count(*) FROM point_rows WHERE NOT direct_google AND NOT derived_google),'groups',(SELECT jsonb_agg(to_jsonb(p) ORDER BY source,point_type,quality) FROM point_groups p)),
 'guides',jsonb_build_object('stored_rows',(SELECT count(*) FROM guide_rows),'excluded_rows',(SELECT count(*) FROM guide_rows WHERE excluded),'eligible_rows',(SELECT count(*) FROM guide_rows WHERE NOT excluded),'groups',(SELECT jsonb_agg(to_jsonb(g) ORDER BY source) FROM guide_groups g)),
 'road_sources',(SELECT jsonb_agg(to_jsonb(r) ORDER BY source) FROM road_groups r)
) AS inventory;

WITH blocked AS MATERIALIZED (
 SELECT p.* FROM public.wme_pr_colombia p
 WHERE coalesce(p.source,'') ilike '%google%' OR
 ((p.point_type in ('DS','FS') OR p.source='INVÍAS Red Vial') AND EXISTS(SELECT 1 FROM public.wme_road_colombia r WHERE r.section_id=p.section_id AND r.source ilike '%google%'))
), target_results AS MATERIALIZED (
 SELECT t.* FROM (SELECT DISTINCT road_code,chainage FROM blocked) b
 CROSS JOIN LATERAL public.find_wme_pr_colombia_target(b.road_code,b.chainage) t
), bbox_results AS MATERIALIZED (
 SELECT t.* FROM blocked b CROSS JOIN LATERAL public.find_wme_pr_colombia_points_in_bbox(b.longitude-.00001,b.latitude-.00001,b.longitude+.00001,b.latitude+.00001,1000) t
), road_ranges AS (
 SELECT g.road_code,min(g.chainage) AS first_chainage,max(g.chainage) AS last_chainage
 FROM public.wme_road_colombia_guides g JOIN public.wme_road_colombia r USING(section_id) WHERE r.source ilike '%google%' GROUP BY g.road_code
), guide_results AS MATERIALIZED (
 SELECT t.* FROM road_ranges r CROSS JOIN LATERAL public.find_wme_pr_colombia_guides(r.road_code,r.first_chainage,r.last_chainage) t
)
SELECT now() AS checked_at,
 (SELECT count(*) FROM blocked) AS excluded_points_checked,
 (SELECT count(*) FROM target_results t WHERE EXISTS(SELECT 1 FROM blocked b WHERE b.source_id=t.source_id)) AS forbidden_target_ids,
 (SELECT count(*) FROM target_results WHERE source ilike '%google%') AS forbidden_target_sources,
 (SELECT count(*) FROM bbox_results t WHERE EXISTS(SELECT 1 FROM blocked b WHERE b.source_id=t.source_id)) AS forbidden_bbox_ids,
 (SELECT count(*) FROM bbox_results WHERE source ilike '%google%') AS forbidden_bbox_sources,
 (SELECT count(*) FROM road_ranges) AS affected_guide_routes_checked,
 (SELECT count(*) FROM guide_results WHERE source ilike '%google%') AS forbidden_guide_sources,
 (SELECT count(*) FROM guide_results WHERE source IS NULL) AS unattributed_guides,
 (SELECT count(*) FROM guide_results) AS allowed_guides_returned;
