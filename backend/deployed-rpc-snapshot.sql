-- Read-only documentation snapshot, captured 2026-11-12.
-- DO NOT RUN as a migration: grants, tables and dependencies are intentionally not recreated.

CREATE OR REPLACE FUNCTION public.find_wme_pr_colombia_guides(p_road_code text, p_start_chainage integer, p_end_chainage integer)
 RETURNS TABLE(chainage integer, longitude double precision, latitude double precision)
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$
    with params as (
        select
            upper(regexp_replace(trim(coalesce(p_road_code,'')), '[^A-Z0-9]', '', 'g')) as road_code,
            least(coalesce(p_start_chainage,0), coalesce(p_end_chainage,0)) as min_chainage,
            greatest(coalesce(p_start_chainage,0), coalesce(p_end_chainage,0)) as max_chainage
    )
    select g.chainage, g.longitude, g.latitude
    from public.wme_road_colombia_guides g
    cross join params p
    where g.road_code = p.road_code
      and g.chainage between p.min_chainage and p.max_chainage
    order by g.chainage, g.source_id;
$function$


CREATE OR REPLACE FUNCTION public.find_wme_pr_colombia_points_in_bbox(p_min_longitude double precision, p_min_latitude double precision, p_max_longitude double precision, p_max_latitude double precision, p_limit integer DEFAULT 1000)
 RETURNS TABLE(department_code text, axis text, pr_number integer, raw_point_number text, abscissa integer, point_type text, point_order double precision, longitude double precision, latitude double precision, side text, branch_id text, network_type text, road_manager text, route_id text, source_id text, source_updated_at timestamp with time zone, is_truncated boolean)
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$
    with params as (
        select
            least(p_min_longitude, p_max_longitude) as min_lon,
            greatest(p_min_longitude, p_max_longitude) as max_lon,
            least(p_min_latitude, p_max_latitude) as min_lat,
            greatest(p_min_latitude, p_max_latitude) as max_lat,
            least(greatest(coalesce(p_limit,1000),1),1000) as row_limit
    ), candidates as materialized (
        select p.*
        from public.wme_pr_colombia p
        cross join params b
        where p.point_type = 'PR'
          and point(p.longitude,p.latitude) <@ box(point(b.min_lon,b.min_lat),point(b.max_lon,b.max_lat))
        order by p.road_code,p.pr_number,p.source_id
        limit (select row_limit + 1 from params)
    )
    select
        null::text,
        c.road_code,
        c.pr_number,
        c.raw_pr,
        c.chainage,
        c.point_type,
        c.chainage::double precision / 1000.0,
        c.longitude,
        c.latitude,
        null::text,
        c.section_id,
        'CO'::text,
        r.administrator,
        r.route,
        c.source_id,
        null::timestamptz,
        (select count(*) > (select row_limit from params) from candidates)
    from candidates c
    left join public.wme_road_colombia r on r.section_id = c.section_id
    limit (select row_limit from params);
$function$


CREATE OR REPLACE FUNCTION public.find_wme_pr_colombia_target(p_road_code text, p_target_chainage integer)
 RETURNS TABLE(department_code text, axis text, pr_number integer, raw_point_number text, abscissa integer, point_type text, point_order double precision, longitude double precision, latitude double precision, side text, branch_id text, network_type text, road_manager text, route_id text, source_id text, source_updated_at timestamp with time zone, quality text, physical_side text)
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$
    with params as (
        select
            upper(regexp_replace(trim(coalesce(p_road_code, '')), '[^A-Z0-9]', '', 'g')) as road_code,
            greatest(coalesce(p_target_chainage, 0), 0) as target_chainage
    ), bounds as (
        select
            max(p.chainage) filter (where p.chainage <= params.target_chainage) as lower_chainage,
            min(p.chainage) filter (where p.chainage >= params.target_chainage) as upper_chainage
        from public.wme_pr_colombia p
        cross join params
        where p.road_code = params.road_code
    ), selected as (
        select p.*
        from public.wme_pr_colombia p
        cross join params
        cross join bounds
        where p.road_code = params.road_code
          and p.chainage in (bounds.lower_chainage, bounds.upper_chainage)
    )
    select
        null::text as department_code,
        s.road_code as axis,
        s.pr_number,
        s.raw_pr as raw_point_number,
        s.chainage as abscissa,
        s.point_type,
        s.chainage::double precision / 1000.0 as point_order,
        s.longitude,
        s.latitude,
        null::text as side,
        s.section_id as branch_id,
        'CO'::text as network_type,
        r.administrator as road_manager,
        r.route as route_id,
        s.source_id,
        null::timestamptz as source_updated_at,
        s.quality,
        s.physical_side
    from selected s
    left join public.wme_road_colombia r on r.section_id = s.section_id
    order by
        s.chainage,
        case s.point_type when 'PR' then 0 when 'DS' then 1 else 2 end,
        s.source_id;
$function$


CREATE OR REPLACE FUNCTION public.find_wme_pr_intercommunal_scopes(p_axis text)
 RETURNS TABLE(road_manager text, longitude double precision, latitude double precision, point_count bigint)
 LANGUAGE sql
 STABLE
 SET search_path TO ''
AS $function$
SELECT
    p.road_manager,
    avg(p.longitude)::double precision,
    avg(p.latitude)::double precision,
    count(*)::bigint
FROM public.wme_pr_france AS p
WHERE p.network_type = 'I'
  AND p.axis = upper(regexp_replace(trim(p_axis), '[^A-Z0-9]', '', 'g'))
  AND nullif(trim(p.road_manager), '') IS NOT NULL
  AND p.point_type IN ('PR', 'PR0', 'PRF')
GROUP BY p.road_manager
ORDER BY p.road_manager;
$function$


CREATE OR REPLACE FUNCTION public.find_wme_pr_points_in_bbox_v121(p_min_longitude double precision, p_min_latitude double precision, p_max_longitude double precision, p_max_latitude double precision, p_limit integer DEFAULT 1000, p_axis text DEFAULT NULL::text, p_network_type text DEFAULT NULL::text, p_department_code text DEFAULT NULL::text, p_manager text DEFAULT NULL::text, p_offset integer DEFAULT 0)
 RETURNS TABLE(department_code text, axis text, pr_number integer, raw_point_number text, abscissa integer, point_type text, point_order double precision, longitude double precision, latitude double precision, side text, branch_id text, network_type text, road_manager text, route_id text, source_id text, source_updated_at timestamp with time zone, terminal_pr_number integer, terminal_pr_offset integer, is_truncated boolean)
 LANGUAGE plpgsql
 STABLE
 SET search_path TO ''
 SET plan_cache_mode TO 'force_custom_plan'
AS $function$
BEGIN
RETURN QUERY
WITH parameters AS NOT MATERIALIZED (
    SELECT
        least(p_min_longitude, p_max_longitude) AS min_longitude,
        greatest(p_min_longitude, p_max_longitude) AS max_longitude,
        least(p_min_latitude, p_max_latitude) AS min_latitude,
        greatest(p_min_latitude, p_max_latitude) AS max_latitude,
        least(greatest(coalesce(p_limit, 1000), 1), 1000) AS row_limit,
        nullif(upper(regexp_replace(trim(coalesce(p_axis, '')), '[^A-Za-z0-9]', '', 'g')), '') AS axis_filter,
        nullif(upper(trim(coalesce(p_network_type, ''))), '') AS network_filter,
        nullif(upper(trim(coalesce(p_department_code, ''))), '') AS department_filter,
        nullif(trim(coalesce(p_manager, '')), '') AS manager_filter,
        least(greatest(coalesce(p_offset, 0), 0), 100000) AS row_offset
),
candidates AS MATERIALIZED (
    SELECT
        p.department_code,
        p.axis,
        p.pr_number,
        p.raw_point_number,
        p.abscissa,
        p.point_type,
        p.point_order,
        p.longitude,
        p.latitude,
        p.side,
        p.branch_id,
        p.network_type,
        p.road_manager,
        p.route_id,
        p.source_id,
        p.source_updated_at
    FROM public.wme_pr_france AS p
    CROSS JOIN parameters AS bounds
    WHERE point(p.longitude, p.latitude) <@ box(
        point(bounds.min_longitude, bounds.min_latitude),
        point(bounds.max_longitude, bounds.max_latitude)
    )
      AND p.point_type IN ('PR', 'PR0', 'PRF')
      AND (bounds.axis_filter IS NULL OR p.axis = bounds.axis_filter)
      AND (bounds.network_filter IS NULL OR p.network_type = bounds.network_filter)
      AND (bounds.department_filter IS NULL OR p.department_code = bounds.department_filter)
      AND (bounds.manager_filter IS NULL OR p.road_manager = bounds.manager_filter)
    ORDER BY
        p.department_code,
        p.network_type,
        p.axis,
        p.pr_number,
        p.source_id
    LIMIT (SELECT row_limit + 1 FROM parameters)
    OFFSET (SELECT row_offset FROM parameters)
)
SELECT
    candidate.department_code,
    candidate.axis,
    candidate.pr_number,
    candidate.raw_point_number,
    candidate.abscissa,
    candidate.point_type,
    candidate.point_order,
    candidate.longitude,
    candidate.latitude,
    candidate.side,
    candidate.branch_id,
    candidate.network_type,
    candidate.road_manager,
    candidate.route_id,
    candidate.source_id,
    candidate.source_updated_at,
    terminal_reference.pr_number AS terminal_pr_number,
    CASE
        WHEN terminal_reference.abscissa IS NOT NULL
         AND candidate.abscissa IS NOT NULL
        THEN candidate.abscissa - terminal_reference.abscissa
        ELSE NULL
    END AS terminal_pr_offset,
    (
        SELECT count(*) > (SELECT row_limit FROM parameters)
        FROM candidates
    ) AS is_truncated
FROM candidates AS candidate
LEFT JOIN LATERAL (
    SELECT
        reference.pr_number,
        reference.abscissa
    FROM public.wme_pr_france AS reference
    WHERE candidate.point_type = 'PRF'
      AND candidate.abscissa IS NOT NULL
      AND reference.department_code = candidate.department_code
      AND reference.network_type = candidate.network_type
      AND reference.axis = candidate.axis
      AND coalesce(reference.road_manager, '') =
          coalesce(candidate.road_manager, '')
      AND (
          candidate.route_id IS NULL
          OR reference.route_id = candidate.route_id
      )
      AND reference.point_type IN ('PR', 'PR0')
      AND reference.pr_number IS NOT NULL
      AND reference.abscissa IS NOT NULL
      AND reference.abscissa <= candidate.abscissa
    ORDER BY
        CASE
            WHEN candidate.side IS NULL
              OR candidate.side = 'U'
              OR reference.side IS NULL
              OR reference.side = 'U'
              OR reference.side = candidate.side
            THEN 0
            ELSE 1
        END,
        CASE
            WHEN candidate.branch_id IS NOT NULL
             AND reference.branch_id = candidate.branch_id
             AND candidate.abscissa - reference.abscissa <= 2500
            THEN 0
            ELSE 1
        END,
        candidate.abscissa - reference.abscissa,
        point(reference.longitude, reference.latitude)
            <-> point(candidate.longitude, candidate.latitude),
        reference.point_order DESC NULLS LAST,
        reference.source_id
    LIMIT 1
) AS terminal_reference ON true
ORDER BY
    candidate.department_code,
    candidate.network_type,
    candidate.axis,
    candidate.pr_number,
    candidate.source_id
LIMIT (SELECT row_limit FROM parameters);
END;
$function$


CREATE OR REPLACE FUNCTION public.find_wme_pr_points_v08(p_department_code text, p_axis text, p_pr_numbers integer[], p_network_type text, p_manager text DEFAULT NULL::text)
 RETURNS TABLE(department_code text, axis text, pr_number integer, raw_point_number text, abscissa integer, point_type text, point_order double precision, longitude double precision, latitude double precision, side text, branch_id text, network_type text, road_manager text, route_id text, source_id text, source_updated_at timestamp with time zone)
 LANGUAGE sql
 STABLE
 SET search_path TO ''
AS $function$
WITH parameters AS (
    SELECT
        nullif(upper(trim(coalesce(p_department_code, ''))), '') AS department_code,
        upper(regexp_replace(trim(p_axis), '[^A-Z0-9]', '', 'g')) AS axis,
        nullif(upper(trim(coalesce(p_network_type, ''))), '') AS network_type,
        nullif(trim(coalesce(p_manager, '')), '') AS manager
),
requested_references AS MATERIALIZED (
    SELECT p.*
    FROM public.wme_pr_france AS p
    CROSS JOIN parameters AS params
    WHERE (params.department_code IS NULL OR p.department_code = params.department_code)
      AND (params.network_type IS NULL OR p.network_type = params.network_type)
      AND (params.manager IS NULL OR p.road_manager = params.manager)
      AND p.axis = params.axis
      AND p.point_type IN ('PR', 'PR0', 'PRF')
      AND p.pr_number = ANY(coalesce(p_pr_numbers, ARRAY[]::integer[]))
),
requested_ranges AS MATERIALIZED (
    SELECT
        r.department_code,
        r.network_type,
        coalesce(r.road_manager, '') AS manager_key,
        coalesce(r.route_id, '') AS route_key,
        coalesce(nullif(upper(trim(r.side)), 'U'), '') AS side_key,
        min(r.point_order) AS minimum_order,
        max(r.point_order) AS maximum_order,
        min(r.abscissa) AS minimum_abscissa,
        max(r.abscissa) AS maximum_abscissa
    FROM requested_references AS r
    GROUP BY
        r.department_code,
        r.network_type,
        coalesce(r.road_manager, ''),
        coalesce(r.route_id, ''),
        coalesce(nullif(upper(trim(r.side)), 'U'), '')
),
candidates AS MATERIALIZED (
    SELECT r.*
    FROM requested_references AS r

    UNION

    SELECT b.*
    FROM public.wme_pr_france AS b
    JOIN requested_ranges AS bounds
      ON b.department_code = bounds.department_code
     AND b.network_type = bounds.network_type
     AND coalesce(b.road_manager, '') = bounds.manager_key
     AND (bounds.route_key = '' OR coalesce(b.route_id, '') = bounds.route_key)
     AND coalesce(nullif(upper(trim(b.side)), 'U'), '') = bounds.side_key
    CROSS JOIN parameters AS params
    WHERE b.axis = params.axis
      AND b.point_type IN ('DS', 'FS', 'PRF')
      AND (
            (
                b.point_order IS NOT NULL
                AND bounds.minimum_order IS NOT NULL
                AND b.point_order BETWEEN bounds.minimum_order AND bounds.maximum_order
            )
            OR
            (
                b.abscissa IS NOT NULL
                AND bounds.minimum_abscissa IS NOT NULL
                AND b.abscissa BETWEEN bounds.minimum_abscissa - 2000
                                   AND bounds.maximum_abscissa + 2000
            )
      )
)
SELECT
    p.department_code,
    p.axis,
    p.pr_number,
    p.raw_point_number,
    p.abscissa,
    p.point_type,
    p.point_order,
    p.longitude,
    p.latitude,
    p.side,
    p.branch_id,
    p.network_type,
    p.road_manager,
    p.route_id,
    p.source_id,
    p.source_updated_at
FROM candidates AS p
ORDER BY
    p.point_order NULLS LAST,
    p.abscissa NULLS LAST,
    p.pr_number,
    p.branch_id NULLS LAST,
    p.side NULLS LAST,
    p.source_id
LIMIT 500;
$function$


CREATE OR REPLACE FUNCTION public.list_wme_pr_intercommunal_axes(p_manager text)
 RETURNS TABLE(axis text)
 LANGUAGE sql
 STABLE
 SET search_path TO ''
AS $function$
SELECT DISTINCT p.axis
FROM public.wme_pr_france AS p
WHERE p.network_type = 'I'
  AND p.road_manager = nullif(trim(coalesce(p_manager, '')), '')
ORDER BY p.axis;
$function$


CREATE OR REPLACE FUNCTION public.list_wme_pr_intercommunal_managers()
 RETURNS TABLE(road_manager text)
 LANGUAGE sql
 STABLE
 SET search_path TO ''
AS $function$
SELECT DISTINCT p.road_manager
FROM public.wme_pr_france AS p
WHERE p.network_type = 'I'
  AND nullif(trim(p.road_manager), '') IS NOT NULL
ORDER BY p.road_manager;
$function$

