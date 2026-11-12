// ==UserScript==
// @name         WME Localisateur de PR France
// @homepageURL  https://github.com/xenon32-WME/wme-localisateur-pr
// @supportURL   https://github.com/xenon32-WME/wme-localisateur-pr/issues
// @updateURL    https://raw.githubusercontent.com/xenon32-WME/wme-localisateur-pr/main/WME-Localisateur-de-PR-France.meta.js
// @downloadURL  https://raw.githubusercontent.com/xenon32-WME/wme-localisateur-pr/main/WME-Localisateur-de-PR-France.user.js
// @namespace    https://www.waze.com/
// @version      1.2.0
// @description  Localisation de points de repère et de zones dans WME. France IGN, Colombie BETA.
// @author       Xenon32 / OpenAI
// @license      MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAQFklEQVR42t1bbZBUVXp+3nNuf05Pz/TMMICAWSDADAiusIsWIoSPLXVdnF0tdRHWYlcrlbIqJpItLckqJlqRykZcrTL+0NLdQreCq8sqmpgq0URTlFSpBAwbRy1Eo6jMwHTPdPft2/ec8+ZHf8zt7tsfw4zGza26xTD33nPP+5znfd6Pcwf4ag4CINauXWsBaHgW7xH4f3LIomFne3zpYNCXtdoAdNkKy8L69ev/+NSpU0tc11nguu65AHfnclkJA4QiEQXQkJSBjyORyAc9PT3/9corr3yota4e0wDgrzMAsmS4lBIXXHDB2lRq5PtauxuU6/YpzQGlGK4CtGZoLlpGgJSEgAUELIKQ5FjS+n0gGHm5Mxb77VtHjrzhAUN6wf26AEDF0zz99NPBnTt3/iibGfszrdW3cnmDdIbhaiAYgO6MM3fFGR0xRjRUWMxsnpAaI5xOEVJjRHkXMmQBsTaBYIAgrcDBtrb2fzx27Ng/EZEugjAlbKCpXPUFCxZclc2m7wabpWMZjUyOeFoX65XnaXHJN11avsil+bMY3TGFaAgQkgEQjAayDmFoVOCDTyTeHrT4tcMBfuv3lhlOQsYioFhUQFqBN0OhyM7333//n4vvLrnF/xkAFgC1YsWKnlOnTj1ktLM5Yxuks6TPW2Boy3cd8YM/cTB/lgICDGgCXBT+NYWZlyZAgsdjgWDAJbz3sYVnXw3j1/8SNO9+KLi9jWUkJEAi9Fh//6Kfvvzyy6nJugRN1vjFixevTCZHfs1GzR9OQp87k2n7VlvccLmNWKcBcgTtEAwDRMWz+GbyvJ1Ngc/MhVMKhggCCAOpMwKP74/gF0+FzOenBXd3QAoZ/O+urq7r3nnnnXdKc/kqAbAAqAUL+r+bzY78xnFUNJUmtfWKvPV3N2cwY4YCMgRXEYQoiFzNW7nq7SXrafwGw4AxhIDFQAz46GMLtz0UxW8PBFUizpZlWclIJLrp+PHj/3G2IMiz9fmFCxdels2k9mdzKuRq0ru3Z6x7/jyDmGS4WQkSBCmoYpULUlnUy2rjAQ8lqPjfAoDMBJUldHUYXHN5HtEwiX89GNCCdJRZXztr+ux/Pz1y+qPi3PjLBEAC0EuXLl8xOjr8UtZ2gyQEP3XvmLx+wIZKCgAC0oKP4V7CcZX1VHsPjf+OAAgBGEUwLrD64jzmzTBi378FtQCHNbtXLVrU97uTJ08OFYWxZRAmkmUJAHzNNdd0jSRPPes4KqpYmD33psUVG3LInxaQkkHE445cmgd7geBaf6gAqygOPiYIwZAE5IcJmwdsPPbXGZl2SCtXJT7//LNnt27d2uaFe6oZIIjIpNPpX7n53KqRMVIP/TRjXbfJRv6MQCDgoTBX+bp38amJ9LBn9bmaJYXnpADcDOH85QphIrH/9YBqC+sZn578vCuZTO6fiCvIiVB/yZIlm7KZ0XuHzhi17UrXuvvmNNykQMCq4XqlzxOdhTR7mUE11wUBKgtc8m0X73wQEIcHhQoF1MrZc+a9Mjx86kSrILTqArxz587gaCr59+ms5rmzmXbdnIGxCUJWSztXUbp6/n4Xq5hTiggVwui5vxhSBQisgN1/kUFPgsnOaaTTZ/6BmVvWAdFiyDN79+7dbIzqS9swd2yzZfd0De3SeIhj9l+tsh743EcYB60mJHBV5PBcp5ImAMomzPmGi+1bcnI0I7RW+ZV9fX1XFDNEORUAaGYWmczYX6bGNC9fbHD9pTmYMUDKBpkF+djm5/6+YbJytceTBq7REGkBJk340ysdLPgjjXSWOZvNbCciTIULSADc399/oVbuN22H+MebHBlqZ2hNxblUxXXmJqmWJxQyF6dYRzsqSMG+WkIEaJfQ3q1wwxV5mbYBrfJrVqxYcV6RBWIyABAAOE7uWifPmNnL5vurHSBbUOKm+ST5iQDXkX6uMyDXyZdR4QpwCNeuc9DVwdpVEMnkmatasVG0Qn+t8uvTNrBqmStmziz4PpUobrhwciPK+xhdHR28eYPvYOyjL+MAGAeYf67Ct5cYSmcZuVx2Y9ENzNkCIADwqlWr5mit+pRirFmuiK2Cvb7dAL8UhLnOgpfE0ZP5lXy+2v56WSR5V4qAMLD6fFc4LgPM569Zs6YHlUXnhAAgABgeHl6iNIKRCMyKPk2UZ49OcWs5l58/s+dnNBBLP1ZVg1qahmJ8q9+lYACsDceHhob6mtnZFACt9QKlgO4OmG/0KkB5Ql8pOyNq7NJei2rCmn+iMyGAS0MqYP45jPY21loDruvOb1b1Ng2DWudnKg10dWgk2tm/9VBD2yqasg8iVK3wNaWhv8+zR1e4ch2gCT1xjUQcUAowJn/OpPMAAdGpNdAZY4SCBmwqo1jZOKpT4DTSNV+q+wtdbVSh2sU1QFuEEY8xlAa01vFJAxCNhmPGcKEpQQB7XkgtC6GnsS3IvydQ7zkvauT3nnEhZSZICQQkwxhGJBRunzQAhdartxrj8vx9w3XD7M+b7HB9jfBmfY2KKaLacOutIEVzAWm6a8M1mV0VvUs+ztS8EudGmSlX1c/VwHHlLeQdjz2jcHHOBCGaZ/pN76CW8njyrOhkWvXsI4T1egp+xKEiYWicvpNlgJfvSgNGA2Qa0JvJR+WrqA2qbIBWlL5edecWmFONIXnc10wBAMWXS4thJRhwqgoTarCQ1UbDVIZJqqI++7iBryiST+evCKQsVKnM3JILNAVAGyAYYHz8mYW7f5GAVqZoe23dT0SV1WsjUIma38jjxjEbT1eMPGN4WVT43WdDhGCQoNQUMIBBCAUJ//OZxt88lG0w4WZWT+XR+F0dHRGEQoCZCg2QQkApja5EO76z4RIYY8BgkN8EiOr7K/kIfb2qF9UE8WhGRUOJCiG6Kll66+0jyKQzsCxr8gAQEWzbxoUXrsQzz/4OfwjH6tWrceTokanRgLKiGoYxBsaY8TBTvmZq8wX/vjrIZ1Kevf+6uQgRQUrZdLGYC/OkFt2xNQCoVlW9IDSbmPdQSkEIcVbPl4zzW9kSSOPj8hQCwLVIl1ZeSonnn38eL7zwAmLtMRhdqzyRaATz5s7D2rVrsXDhwvKzpQk/8MADeO+99xAOh4tRZPyFlmWht7cXy5cvx7p16yClhNa6Kb1bTR1aAqAS2UrqSylx8OBBPProowiHw1BaQQo5HhLB4KL7dHZ2YsuWLdi1axdCoVD5+WeeeQYHDx5EKBSCNgZSCqBIYgZDKw3LsrBixQrs3r0bK1eubAmEqdoXAJgb+nhbWxtCoRC6u7sxrWcaQqEQBBGkEJBCoq2tDdOn94KI8OCDD2Lbtm0Vft/R0YH29nZ093Sju6sLlrSKekEIWgF0d3cjkUjgrbffwqZNm3D48OEyEyo9tVabpoQBjMa7W1prKKVgjIFt21i1ahVmzJwJNgZaawwODuLYsWOIxWI455xzsHfvXnzviu9h64+2VjyvXBdCCGy6chMi4Qi0Njhz5jQOHToEx3HQ092NoaFh7NixAy+++GJTBkxpFGjkUyX3EELAtrO47bbbsG7duvJ1x3GwY8cOPPLII+js7EQ0GsWeJ/dgy9YtZeUmIiilkUjE8csnfolQKFR+/vXXX8fmzZth2zl0dnbg0KFDGBwcRH9//7gr0JfpAtUlZwM0iAiZTAZaaziOA9d1EQqFcNddd2H69OlwHAehUBAnTpxAKpnyVfPRVApaa7iuC9d1cckll2BgYACjo6OwrAByORvHjx+vnAuX+hZfGgDkGwIrUvvifUIISCkhpYQlJYwxZfrn83kIKZHL5ZC1s3V7DiXhLbnHjBkzyj5tDMN13YZTbXVD2poM9SsbM1QhPlpraK3BzAgEAkilUjh58iSCwSCMNgiHw2hri/kCGg6HIYSAEKKczr7xxhvlyBEIBNDb2/tVhUGu6T41S1ai0WiZAQBg2zZ27tyJL774AolEAmfOnMGiRYvQ0RGvAKBQShh8+OGHSCQS0FpjbGwUjz/+BF577TV0dMRh2zZmz56NpUuX1i95J1CXtVQLtIqoMQbRaAT33Xcfnnji8WL6rDH43vsYfPddxONxMDPy+TxuvPHGmkzTsgJIpzO47PLLi503gm1nkclkEY/H4SqFZDKJn//852hvb4dSyj+LpNYbU00BKKWt5JN2eunGxVzBsgI4dOhQOUYTAcFgCJ2dnbBtGyMjI7jlllswMDAArTSkJStWjJmRs20wM6QlIaWFRGcntDHQSmPXrl246aaboLWun0JPQAubAlBuKxHqimC1exhjoJQq3+e6Gdi2jVmzZuHOO+/ErbfeWgCI/AUsEolACIFMJgMZkDDMsG0bTz75JAYGBuquPGHiHcnmGmBaA7XwTZ9ANpvF9ddfj76+vkKMlgKRcARz587FRRddhEQi4VtREghaK8Ri7di3bx+mTZuG+++/Hw8//DCmTZsGpRT279+PgYGBVhpIUxcFUBQZatLRZhTcwnEcbN26FWvWrKlbDZZWrzr8MRcqw3lz5yHeEceOHTvw3HPPYWRkBB2dHdizZw9+eN0PsfE7G31ZUE6qQC0zQbSgbD5bX/W5R0RIpVJQSiGXy5WTmVKq3Kz0LYmkMQY9PT3Yvv2vMDo2CktaCIVC+NmdP4PjOGVjG/ZOzVQAgMqPtlrZQLCkhGVZFaeU0rei9B1KFNxJa42f/OTHWH7BcoyOjiIej+PNN9/EY489BllMsPyCP03AupYAaNZdEULAktZ47J/gd4GlzFFIUcEQrTUikQjuuGMHcrkciAhdiQR2796NoaEhWJZVBQJ5ijdqCfCWU+FGg9m2DcdxMDIygkwmg3w+PyEA0uk0xsbGkBxJIplMlo0qlbwDA1di/foN+OSTT5Bzcjh+/Dhuv/12cINWHDepWSZcDfrFgRIoy5Ytw9VXX42Ojg6k02nMmTOnKWjeY+PGjZg1exaCgSCi0SjC4XD5eWMYUgrcc8/for29De3tcWilwMZgaHgYvb29lSyo+PxmcocFAP39S56KRCN82aWXulpr1lqzMabi9Duq72l0Nntea93yO7TWfPHFF7uxWIwXL178cLOFbr4zpN28IMH5YrOiVOR4V7e6K1zd9GwlhfY+7xcptFYwnq+zSnmHN3pIKSGEKFScQrDrurlJu4DK5/+zra1t29GjR/nAgQPYsGHDhLrAX/Wxb98+DA4OciQSIQNzpPUiv8611atX95w4ceJYOp2eFgwG8xs2bBBtbW3lFavtDdTTCq6zTeSt4OqXcd76o/BzYRzvPJLJJF599VVj2AQj4ciJZcuWnf/SSy+NNaoQqIUoYRYuXLg6k8n8Rik1I5VKVaWyXGHK+M9UvkoVr+IKfaooqjxbbjVbXi3swgkpEG+PIxAIfNTd3f2Do0ePHkaTP61rxVEFALN27doZn3766Q1EtMwYI40x5LszU5y4N1Ornez4J7zeVfXOyhS/xhJVkbpBBshCkJLSOjxnzpxfHThw4DSm4O8Kz6J19rU5WkzyJjbgHwoQutXK+H8BeOlLUc+zbl8AAAAASUVORK5CYII=
// @match        https://www.waze.com/editor*
// @match        https://www.waze.com/*/editor*
// @match        https://beta.waze.com/editor*
// @match        https://beta.waze.com/*/editor*
// @exclude      https://www.waze.com/*/user*
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_info
// @grant        unsafeWindow
// @connect      ygdyaciibfyqldlejyuu.supabase.co
// @connect      greasyfork.org
// @connect      update.greasyfork.org
// @run-at       document-idle
// ==/UserScript==

(function (root) {
    "use strict";

    const SCRIPT_ID = "wme_localisateur_pr_fr";
    const SCRIPT_NAME = "Localisateur de PR France";
    const VERSION = "1.2.0";
    const BUILD_ID = "20261112-xhr-transport";
    const IS_DEV_BUILD = /\.(?:dev|temp)\d+\b/i.test(VERSION);
    const SCRIPT_ICON_DATA_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAQFklEQVR42t1bbZBUVXp+3nNuf05Pz/TMMICAWSDADAiusIsWIoSPLXVdnF0tdRHWYlcrlbIqJpItLckqJlqRykZcrTL+0NLdQreCq8sqmpgq0URTlFSpBAwbRy1Eo6jMwHTPdPft2/ec8+ZHf8zt7tsfw4zGza26xTD33nPP+5znfd6Pcwf4ag4CINauXWsBaHgW7xH4f3LIomFne3zpYNCXtdoAdNkKy8L69ev/+NSpU0tc11nguu65AHfnclkJA4QiEQXQkJSBjyORyAc9PT3/9corr3yota4e0wDgrzMAsmS4lBIXXHDB2lRq5PtauxuU6/YpzQGlGK4CtGZoLlpGgJSEgAUELIKQ5FjS+n0gGHm5Mxb77VtHjrzhAUN6wf26AEDF0zz99NPBnTt3/iibGfszrdW3cnmDdIbhaiAYgO6MM3fFGR0xRjRUWMxsnpAaI5xOEVJjRHkXMmQBsTaBYIAgrcDBtrb2fzx27Ng/EZEugjAlbKCpXPUFCxZclc2m7wabpWMZjUyOeFoX65XnaXHJN11avsil+bMY3TGFaAgQkgEQjAayDmFoVOCDTyTeHrT4tcMBfuv3lhlOQsYioFhUQFqBN0OhyM7333//n4vvLrnF/xkAFgC1YsWKnlOnTj1ktLM5Yxuks6TPW2Boy3cd8YM/cTB/lgICDGgCXBT+NYWZlyZAgsdjgWDAJbz3sYVnXw3j1/8SNO9+KLi9jWUkJEAi9Fh//6Kfvvzyy6nJugRN1vjFixevTCZHfs1GzR9OQp87k2n7VlvccLmNWKcBcgTtEAwDRMWz+GbyvJ1Ngc/MhVMKhggCCAOpMwKP74/gF0+FzOenBXd3QAoZ/O+urq7r3nnnnXdKc/kqAbAAqAUL+r+bzY78xnFUNJUmtfWKvPV3N2cwY4YCMgRXEYQoiFzNW7nq7SXrafwGw4AxhIDFQAz46GMLtz0UxW8PBFUizpZlWclIJLrp+PHj/3G2IMiz9fmFCxdels2k9mdzKuRq0ru3Z6x7/jyDmGS4WQkSBCmoYpULUlnUy2rjAQ8lqPjfAoDMBJUldHUYXHN5HtEwiX89GNCCdJRZXztr+ux/Pz1y+qPi3PjLBEAC0EuXLl8xOjr8UtZ2gyQEP3XvmLx+wIZKCgAC0oKP4V7CcZX1VHsPjf+OAAgBGEUwLrD64jzmzTBi378FtQCHNbtXLVrU97uTJ08OFYWxZRAmkmUJAHzNNdd0jSRPPes4KqpYmD33psUVG3LInxaQkkHE445cmgd7geBaf6gAqygOPiYIwZAE5IcJmwdsPPbXGZl2SCtXJT7//LNnt27d2uaFe6oZIIjIpNPpX7n53KqRMVIP/TRjXbfJRv6MQCDgoTBX+bp38amJ9LBn9bmaJYXnpADcDOH85QphIrH/9YBqC+sZn578vCuZTO6fiCvIiVB/yZIlm7KZ0XuHzhi17UrXuvvmNNykQMCq4XqlzxOdhTR7mUE11wUBKgtc8m0X73wQEIcHhQoF1MrZc+a9Mjx86kSrILTqArxz587gaCr59+ms5rmzmXbdnIGxCUJWSztXUbp6/n4Xq5hTiggVwui5vxhSBQisgN1/kUFPgsnOaaTTZ/6BmVvWAdFiyDN79+7dbIzqS9swd2yzZfd0De3SeIhj9l+tsh743EcYB60mJHBV5PBcp5ImAMomzPmGi+1bcnI0I7RW+ZV9fX1XFDNEORUAaGYWmczYX6bGNC9fbHD9pTmYMUDKBpkF+djm5/6+YbJytceTBq7REGkBJk340ysdLPgjjXSWOZvNbCciTIULSADc399/oVbuN22H+MebHBlqZ2hNxblUxXXmJqmWJxQyF6dYRzsqSMG+WkIEaJfQ3q1wwxV5mbYBrfJrVqxYcV6RBWIyABAAOE7uWifPmNnL5vurHSBbUOKm+ST5iQDXkX6uMyDXyZdR4QpwCNeuc9DVwdpVEMnkmatasVG0Qn+t8uvTNrBqmStmziz4PpUobrhwciPK+xhdHR28eYPvYOyjL+MAGAeYf67Ct5cYSmcZuVx2Y9ENzNkCIADwqlWr5mit+pRirFmuiK2Cvb7dAL8UhLnOgpfE0ZP5lXy+2v56WSR5V4qAMLD6fFc4LgPM569Zs6YHlUXnhAAgABgeHl6iNIKRCMyKPk2UZ49OcWs5l58/s+dnNBBLP1ZVg1qahmJ8q9+lYACsDceHhob6mtnZFACt9QKlgO4OmG/0KkB5Ql8pOyNq7NJei2rCmn+iMyGAS0MqYP45jPY21loDruvOb1b1Ng2DWudnKg10dWgk2tm/9VBD2yqasg8iVK3wNaWhv8+zR1e4ch2gCT1xjUQcUAowJn/OpPMAAdGpNdAZY4SCBmwqo1jZOKpT4DTSNV+q+wtdbVSh2sU1QFuEEY8xlAa01vFJAxCNhmPGcKEpQQB7XkgtC6GnsS3IvydQ7zkvauT3nnEhZSZICQQkwxhGJBRunzQAhdartxrj8vx9w3XD7M+b7HB9jfBmfY2KKaLacOutIEVzAWm6a8M1mV0VvUs+ztS8EudGmSlX1c/VwHHlLeQdjz2jcHHOBCGaZ/pN76CW8njyrOhkWvXsI4T1egp+xKEiYWicvpNlgJfvSgNGA2Qa0JvJR+WrqA2qbIBWlL5edecWmFONIXnc10wBAMWXS4thJRhwqgoTarCQ1UbDVIZJqqI++7iBryiST+evCKQsVKnM3JILNAVAGyAYYHz8mYW7f5GAVqZoe23dT0SV1WsjUIma38jjxjEbT1eMPGN4WVT43WdDhGCQoNQUMIBBCAUJ//OZxt88lG0w4WZWT+XR+F0dHRGEQoCZCg2QQkApja5EO76z4RIYY8BgkN8EiOr7K/kIfb2qF9UE8WhGRUOJCiG6Kll66+0jyKQzsCxr8gAQEWzbxoUXrsQzz/4OfwjH6tWrceTokanRgLKiGoYxBsaY8TBTvmZq8wX/vjrIZ1Kevf+6uQgRQUrZdLGYC/OkFt2xNQCoVlW9IDSbmPdQSkEIcVbPl4zzW9kSSOPj8hQCwLVIl1ZeSonnn38eL7zwAmLtMRhdqzyRaATz5s7D2rVrsXDhwvKzpQk/8MADeO+99xAOh4tRZPyFlmWht7cXy5cvx7p16yClhNa6Kb1bTR1aAqAS2UrqSylx8OBBPProowiHw1BaQQo5HhLB4KL7dHZ2YsuWLdi1axdCoVD5+WeeeQYHDx5EKBSCNgZSCqBIYgZDKw3LsrBixQrs3r0bK1eubAmEqdoXAJgb+nhbWxtCoRC6u7sxrWcaQqEQBBGkEJBCoq2tDdOn94KI8OCDD2Lbtm0Vft/R0YH29nZ093Sju6sLlrSKekEIWgF0d3cjkUjgrbffwqZNm3D48OEyEyo9tVabpoQBjMa7W1prKKVgjIFt21i1ahVmzJwJNgZaawwODuLYsWOIxWI455xzsHfvXnzviu9h64+2VjyvXBdCCGy6chMi4Qi0Njhz5jQOHToEx3HQ092NoaFh7NixAy+++GJTBkxpFGjkUyX3EELAtrO47bbbsG7duvJ1x3GwY8cOPPLII+js7EQ0GsWeJ/dgy9YtZeUmIiilkUjE8csnfolQKFR+/vXXX8fmzZth2zl0dnbg0KFDGBwcRH9//7gr0JfpAtUlZwM0iAiZTAZaaziOA9d1EQqFcNddd2H69OlwHAehUBAnTpxAKpnyVfPRVApaa7iuC9d1cckll2BgYACjo6OwrAByORvHjx+vnAuX+hZfGgDkGwIrUvvifUIISCkhpYQlJYwxZfrn83kIKZHL5ZC1s3V7DiXhLbnHjBkzyj5tDMN13YZTbXVD2poM9SsbM1QhPlpraK3BzAgEAkilUjh58iSCwSCMNgiHw2hri/kCGg6HIYSAEKKczr7xxhvlyBEIBNDb2/tVhUGu6T41S1ai0WiZAQBg2zZ27tyJL774AolEAmfOnMGiRYvQ0RGvAKBQShh8+OGHSCQS0FpjbGwUjz/+BF577TV0dMRh2zZmz56NpUuX1i95J1CXtVQLtIqoMQbRaAT33Xcfnnji8WL6rDH43vsYfPddxONxMDPy+TxuvPHGmkzTsgJIpzO47PLLi503gm1nkclkEY/H4SqFZDKJn//852hvb4dSyj+LpNYbU00BKKWt5JN2eunGxVzBsgI4dOhQOUYTAcFgCJ2dnbBtGyMjI7jlllswMDAArTSkJStWjJmRs20wM6QlIaWFRGcntDHQSmPXrl246aaboLWun0JPQAubAlBuKxHqimC1exhjoJQq3+e6Gdi2jVmzZuHOO+/ErbfeWgCI/AUsEolACIFMJgMZkDDMsG0bTz75JAYGBuquPGHiHcnmGmBaA7XwTZ9ANpvF9ddfj76+vkKMlgKRcARz587FRRddhEQi4VtREghaK8Ri7di3bx+mTZuG+++/Hw8//DCmTZsGpRT279+PgYGBVhpIUxcFUBQZatLRZhTcwnEcbN26FWvWrKlbDZZWrzr8MRcqw3lz5yHeEceOHTvw3HPPYWRkBB2dHdizZw9+eN0PsfE7G31ZUE6qQC0zQbSgbD5bX/W5R0RIpVJQSiGXy5WTmVKq3Kz0LYmkMQY9PT3Yvv2vMDo2CktaCIVC+NmdP4PjOGVjG/ZOzVQAgMqPtlrZQLCkhGVZFaeU0rei9B1KFNxJa42f/OTHWH7BcoyOjiIej+PNN9/EY489BllMsPyCP03AupYAaNZdEULAktZ47J/gd4GlzFFIUcEQrTUikQjuuGMHcrkciAhdiQR2796NoaEhWJZVBQJ5ijdqCfCWU+FGg9m2DcdxMDIygkwmg3w+PyEA0uk0xsbGkBxJIplMlo0qlbwDA1di/foN+OSTT5Bzcjh+/Dhuv/12cINWHDepWSZcDfrFgRIoy5Ytw9VXX42Ojg6k02nMmTOnKWjeY+PGjZg1exaCgSCi0SjC4XD5eWMYUgrcc8/for29De3tcWilwMZgaHgYvb29lSyo+PxmcocFAP39S56KRCN82aWXulpr1lqzMabi9Duq72l0Nntea93yO7TWfPHFF7uxWIwXL178cLOFbr4zpN28IMH5YrOiVOR4V7e6K1zd9GwlhfY+7xcptFYwnq+zSnmHN3pIKSGEKFScQrDrurlJu4DK5/+zra1t29GjR/nAgQPYsGHDhLrAX/Wxb98+DA4OciQSIQNzpPUiv8611atX95w4ceJYOp2eFgwG8xs2bBBtbW3lFavtDdTTCq6zTeSt4OqXcd76o/BzYRzvPJLJJF599VVj2AQj4ciJZcuWnf/SSy+NNaoQqIUoYRYuXLg6k8n8Rik1I5VKVaWyXGHK+M9UvkoVr+IKfaooqjxbbjVbXi3swgkpEG+PIxAIfNTd3f2Do0ePHkaTP61rxVEFALN27doZn3766Q1EtMwYI40x5LszU5y4N1Ornez4J7zeVfXOyhS/xhJVkbpBBshCkJLSOjxnzpxfHThw4DSm4O8Kz6J19rU5WkzyJjbgHwoQutXK+H8BeOlLUc+zbl8AAAAASUVORK5CYII=";
    const RESULT_LAYER = "wme_localisateur_pr_result";
    const RESULT_CHECKBOX = "Localisateur PR — résultat";
    const PR_INDEX_LAYER = "wme_localisateur_pr_index";
    const PR_INDEX_CHECKBOX = "Localisateur PR — points repères";
    // Public read-only Supabase project; no private key or alternate backend.
    const SUPABASE_URL = "https://ygdyaciibfyqldlejyuu.supabase.co";
    const SUPABASE_PUBLIC_KEY = "sb_publishable_0q-t5iSyWijEAOj79VEmng_MOEM8Fuu";
    const PR_REQUEST_TIMEOUT_MS = 20000;
    const WME_ROUTE_LOAD_TIMEOUT_MS = 20000;
    const WME_ROUTE_LOAD_POLL_MS = 250;
    const ROUTE_SNAPSHOT_CACHE_TTL_MS = 1200;
    const ROUTE_SNAPSHOT_CACHE_MAX_ENTRIES = 8;
    const PR_CARTOUCHE_CACHE_MAX_ENTRIES = 2500;
    const PR_CARTOUCHE_COLLISION_PADDING_PX = 4;
    const PR_CARTOUCHE_COLLISION_STEP_PX = 18;
    const PR_CARTOUCHE_COLLISION_MAX_LEVELS = 6;
    const PR_CARTOUCHE_LEADER_THRESHOLD_PX = 26;
    const SETTINGS_PR_INDEX_ENABLED_KEY = `${SCRIPT_ID}:pr-index-layer-enabled`;
    const SETTINGS_APPEARANCE_KEY = `${SCRIPT_ID}:appearance`;
    const SETTINGS_MOTORWAY_DESTINATION_OVERRIDES_KEY = `${SCRIPT_ID}:motorway-destination-overrides-v2`;
    const SETTINGS_AUTO_SELECT_KEY = `${SCRIPT_ID}:auto-select-result`;
    const SETTINGS_DISPLAY_MODE_KEY = `${SCRIPT_ID}:display-mode`;
    const SETTINGS_FLOATING_GEOMETRY_KEY = `${SCRIPT_ID}:floating-geometry`;
    const SETTINGS_SEARCH_ROUTE_TYPE_KEY = `${SCRIPT_ID}:search-route-type`;
    const SETTINGS_INTERCOMMUNAL_MANAGER_KEY = `${SCRIPT_ID}:intercommunal-manager`;
    const SETTINGS_PR_INDEX_AXIS_FILTER_KEY = `${SCRIPT_ID}:pr-index-axis-filter`;
    const SETTINGS_GREASYFORK_UPDATE_KEY = `${SCRIPT_ID}:greasyfork-update-check-v1`;
    const GREASYFORK_UPDATE_CHECK_INTERVAL_MS = 24 * 60 * 60 * 1000;
    const GREASYFORK_PAGE_URL = "https://greasyfork.org/fr/scripts/590425-wme-localisateur-de-pr-france";
    const IGN_BDTOPO_CATALOG_URL = "https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO";
    const OPEN_LICENSE_URL = "https://www.data.gouv.fr/pages/legal/licences/etalab-2-0";
    // La table source distingue ign_bdtopo_v3 / ign_bdtopo_v3_intercommunal.
    // La date d'extraction exacte de la copie n'est pas tracée : ne pas
    // la déduire de source_updated_at (date de mise à jour d'un objet).
    const IGN_BDTOPO_IMPORT_EDITION = "WFS-IGN-EDITION-NON-VERIFIEE";

    const SETTINGS_COUNTRY_KEY = `${SCRIPT_ID}:country`;
    const SETTINGS_LANGUAGE_KEY = `${SCRIPT_ID}:language`;
    const SEARCH_MIN_ZOOM_LEVEL = 14;
    const PR_INDEX_MIN_ZOOM_LEVEL = 15;
    const PR_INDEX_FILTERED_MIN_ZOOM_LEVEL = 14;
    const PR_INDEX_MAX_FEATURES = 1000;
    const PR_INDEX_DEBOUNCE_MS = 120;
    const PR_INDEX_BBOX_PADDING_RATIO = 0.65;
    const PR_INDEX_BBOX_PADDING_ZOOM15_RATIO = 1.25;
    const PR_INDEX_RENDER_PADDING_RATIO = 0.18;
    const PR_INDEX_RENDER_PADDING_NO_LABELS_RATIO = 0.06;
    const PR_INDEX_RETRY_DELAYS_MS = Object.freeze([1500, 3500, 7000]);
    const PR_LABEL_SEGMENT_MAX_DISTANCE_METERS = 80;
    const PR_LABEL_GRID_SIZE_DEGREES = 0.0025;
    const MAX_ANCHOR_DISTANCE_METERS = 250;
    const DISCONTINUITY_MIN_GAP_METERS = 10;
    const TERMINAL_CHAINAGE_SHORTFALL_TOLERANCE_METERS = 15;
    // Recalage supplementaire uniquement pour un PRF terminal IGN exactement vise.
    // La borne doit rester proche du meme parcours WME ; aucune extrapolation aveugle.
    const EXACT_PRF_TERMINAL_MAX_SHORTFALL_METERS = 30;
    const EXACT_PRF_TERMINAL_MAX_SHORTFALL_RATIO = 0.08;
    const EXACT_PRF_TERMINAL_MAX_LATERAL_DISTANCE_METERS = 25;
    const EARTH_RADIUS_METERS = 6371008.8;
    const NATIONAL_MOTORWAY_DESTINATIONS_VERSION = "2026-08-08";
    const NATIONAL_MOTORWAY_DESTINATIONS = Object.freeze({
        "A1": Object.freeze({"1": "Lille", "2": "Paris"}),
        "A10": Object.freeze({"1": "Bordeaux", "2": "Paris"}),
        "A105": Object.freeze({"1": "Melun", "2": "Paris"}),
        "A106": Object.freeze({"1": "Orly", "2": "Paris"}),
        "A11": Object.freeze({"1": "Nantes", "2": "Paris"}),
        "A115": Object.freeze({"1": "Cergy", "2": "Paris"}),
        "A12": Object.freeze({"1": "Trappes", "2": "Paris"}),
        "A13": Object.freeze({"1": "Caen", "2": "Paris"}),
        "A131": Object.freeze({"1": "Le Havre", "2": "Rouen"}),
        "A132": Object.freeze({"1": "Deauville", "2": "Paris"}),
        "A139": Object.freeze({"1": "Rouen", "2": "Paris"}),
        "A14": Object.freeze({"1": "Orgeval", "2": "La Défense"}),
        "A140": Object.freeze({"1": "Meaux", "2": "Paris"}),
        "A15": Object.freeze({"1": "Cergy-Pontoise", "2": "Paris"}),
        "A150": Object.freeze({"1": "Le Havre", "2": "Rouen"}),
        "A151": Object.freeze({"1": "Dieppe", "2": "Rouen"}),
        "A154": Object.freeze({"1": "Évreux", "2": "Rouen"}),
        "A16": Object.freeze({"1": "Belgique", "2": "Paris"}),
        "A19": Object.freeze({"1": "Orléans", "2": "Sens"}),
        "A1@972": Object.freeze({"1": "Le Lamentin", "2": "Fort-de-France"}),
        "A2": Object.freeze({"1": "Bruxelles", "2": "Paris"}),
        "A20": Object.freeze({"1": "Montauban", "2": "Vierzon"}),
        "A21": Object.freeze({"1": "Valenciennes", "2": "Lens"}),
        "A211": Object.freeze({"1": "Lens", "2": "Arras"}),
        "A216": Object.freeze({"1": "Port de Calais", "2": "Paris"}),
        "A22": Object.freeze({"1": "Belgique", "2": "Lille"}),
        "A23": Object.freeze({"1": "Valenciennes", "2": "Lille"}),
        "A25": Object.freeze({"1": "Dunkerque", "2": "Lille"}),
        "A26": Object.freeze({"1": "Troyes", "2": "Calais"}),
        "A27": Object.freeze({"1": "Bruxelles", "2": "Lille"}),
        "A28": Object.freeze({"1": "Abbeville", "2": "Tours"}),
        "A29": Object.freeze({"1": "Saint-Quentin", "2": "Le Havre"}),
        "A3": Object.freeze({"1": "Roissy", "2": "Paris"}),
        "A30": Object.freeze({"1": "Longwy", "2": "Metz"}),
        "A304": Object.freeze({"1": "Charleville-Mézières", "2": "Rocroi"}),
        "A31": Object.freeze({"1": "Luxembourg", "2": "Beaune"}),
        "A311": Object.freeze({"1": "Dijon", "2": "Beaune"}),
        "A314": Object.freeze({"1": "Strasbourg", "2": "Metz"}),
        "A315": Object.freeze({"1": "Metz", "2": "Paris"}),
        "A320": Object.freeze({"1": "Sarrebruck", "2": "Metz"}),
        "A33": Object.freeze({"1": "Lunéville", "2": "Nancy"}),
        "A330": Object.freeze({"1": "Épinal", "2": "Nancy"}),
        "A34": Object.freeze({"1": "Reims", "2": "Sedan"}),
        "A35": Object.freeze({"1": "Bâle", "2": "Lauterbourg"}),
        "A352": Object.freeze({"1": "Molsheim", "2": "Strasbourg"}),
        "A36": Object.freeze({"1": "Beaune", "2": "Mulhouse"}),
        "A38": Object.freeze({"1": "Dijon", "2": "Pouilly-en-Auxois"}),
        "A39": Object.freeze({"1": "Bourg-en-Bresse", "2": "Dijon"}),
        "A391": Object.freeze({"1": "Poligny", "2": "Dijon"}),
        "A4": Object.freeze({"1": "Strasbourg", "2": "Paris"}),
        "A40": Object.freeze({"1": "Mâcon", "2": "Chamonix"}),
        "A404": Object.freeze({"1": "Oyonnax", "2": "Mâcon"}),
        "A406": Object.freeze({"1": "Moulins", "2": "Mâcon"}),
        "A41": Object.freeze({"1": "Genève", "2": "Grenoble"}),
        "A410": Object.freeze({"1": "Genève", "2": "Annecy"}),
        "A42": Object.freeze({"1": "Pont-d’Ain", "2": "Lyon"}),
        "A43": Object.freeze({"1": "Italie", "2": "Lyon"}),
        "A430": Object.freeze({"1": "Albertville", "2": "Chambéry"}),
        "A432": Object.freeze({"1": "Saint-Exupéry", "2": "Lyon-Nord"}),
        "A450": Object.freeze({"1": "Brignais", "2": "Lyon"}),
        "A46": Object.freeze({"1": "Givors", "2": "Anse"}),
        "A47": Object.freeze({"1": "Saint-Étienne", "2": "Lyon"}),
        "A48": Object.freeze({"1": "Grenoble", "2": "Lyon"}),
        "A480": Object.freeze({"1": "Grenoble-Sud", "2": "Grenoble-Nord"}),
        "A49": Object.freeze({"1": "Valence", "2": "Grenoble"}),
        "A5": Object.freeze({"1": "Langres", "2": "Paris"}),
        "A50": Object.freeze({"1": "Toulon", "2": "Marseille"}),
        "A500": Object.freeze({"1": "Monaco", "2": "Nice"}),
        "A51": Object.freeze({"1": "Gap", "2": "Marseille"}),
        "A51N": Object.freeze({"1": "Col du Fau", "2": "Grenoble"}),
        "A52": Object.freeze({"1": "Aubagne", "2": "Aix-en-Provence"}),
        "A54": Object.freeze({"1": "Salon-de-Provence", "2": "Nîmes"}),
        "A55": Object.freeze({"1": "Martigues", "2": "Marseille"}),
        "A57": Object.freeze({"1": "Cannet-des-Maures", "2": "Toulon"}),
        "A570": Object.freeze({"1": "Hyères", "2": "Toulon"}),
        "A6": Object.freeze({"1": "Lyon", "2": "Paris"}),
        "A61": Object.freeze({"1": "Narbonne", "2": "Toulouse"}),
        "A62": Object.freeze({"1": "Toulouse", "2": "Bordeaux"}),
        "A621": Object.freeze({"1": "Aéroport Blagnac", "2": "Toulouse"}),
        "A624": Object.freeze({"1": "Colomiers", "2": "Toulouse"}),
        "A63": Object.freeze({"1": "Espagne", "2": "Bordeaux"}),
        "A64": Object.freeze({"1": "Toulouse", "2": "Bayonne"}),
        "A645": Object.freeze({"1": "Espagne", "2": "Toulouse"}),
        "A65": Object.freeze({"1": "Pau", "2": "Langon"}),
        "A66": Object.freeze({"1": "Pamiers", "2": "Villefranche-de-Lauragais"}),
        "A660": Object.freeze({"1": "Arcachon", "2": "Bordeaux"}),
        "A68": Object.freeze({"1": "Albi", "2": "Toulouse"}),
        "A680": Object.freeze({"1": "Castres", "2": "Toulouse"}),
        "A69": Object.freeze({"1": "Castres", "2": "Toulouse"}),
        "A6A": Object.freeze({"1": "Paris", "2": "Lyon"}),
        "A6B": Object.freeze({"1": "Paris", "2": "Lyon"}),
        "A7": Object.freeze({"1": "Marseille", "2": "Lyon"}),
        "A709": Object.freeze({"1": "Béziers", "2": "Nîmes"}),
        "A71": Object.freeze({"1": "Clermont-Ferrand", "2": "Orléans"}),
        "A711": Object.freeze({"1": "Lyon", "2": "Clermont-Ferrand"}),
        "A719": Object.freeze({"1": "Vichy", "2": "Gannat"}),
        "A72": Object.freeze({"1": "Saint-Étienne", "2": "Nervieux"}),
        "A75": Object.freeze({"1": "Béziers", "2": "Clermont-Ferrand"}),
        "A750": Object.freeze({"1": "Lodève", "2": "Montpellier"}),
        "A77": Object.freeze({"1": "Nevers", "2": "Paris"}),
        "A79": Object.freeze({"1": "Digoin", "2": "Montmarault"}),
        "A7N": Object.freeze({"1": "Vienne", "2": "Lyon"}),
        "A8": Object.freeze({"1": "Italie", "2": "Aix-en-Provence"}),
        "A81": Object.freeze({"1": "Laval", "2": "Le Mans"}),
        "A811": Object.freeze({"1": "Nantes", "2": "Paris"}),
        "A813": Object.freeze({"1": "Caen", "2": "Paris"}),
        "A82": Object.freeze({"1": "Brest", "2": "Nantes"}),
        "A83": Object.freeze({"1": "Niort", "2": "Nantes"}),
        "A837": Object.freeze({"1": "Saintes", "2": "Rochefort"}),
        "A84": Object.freeze({"1": "Caen", "2": "Rennes"}),
        "A85": Object.freeze({"1": "Vierzon", "2": "Angers"}),
        "A87": Object.freeze({"1": "La Roche-sur-Yon", "2": "Angers"}),
        "A88": Object.freeze({"1": "Falaise", "2": "Sées"}),
        "A89": Object.freeze({"1": "Lyon", "2": "Bordeaux"}),
        "A9": Object.freeze({"1": "Espagne", "2": "Orange"}),
    });
    const NATIONAL_MOTORWAY_DESTINATION_COUNT = Object.keys(NATIONAL_MOTORWAY_DESTINATIONS).length;
    const APPEARANCE_DEFAULTS = Object.freeze({
        resultTargetColor: "#ff3b30",
        resultPathColor: "#00a8a8",
        resultZoneColor: "#ff8a00",
        resultAnchorColor: "#3380ff",
        resultMarkerSize: 12,
        resultLineWidth: 6,
        resultOpacity: 1,
        resultShowLabels: true,
        resultLabelStyle: "cartouche",
        resultShowSense: true,
        resultShowMotorwayDestination: true,
        resultMotorwayCartoucheColor: "#e30613",
        resultDepartmentCartoucheColor: "#f4d000",
        resultCartoucheScale: 1,
        resultCartoucheOpacity: 1,
        resultLabelOffset: 28,
        resultLabelColor: "#ff3b30",
        resultLabelSize: 14,
        resultLabelOutlineColor: "#ffffff",
        resultLabelOutlineWidth: 4,
        resultPanelBackgroundColor: "#ffffff",
        resultPanelBorderColor: "#d7dce0",
        resultPanelTitleColor: "#202124",
        resultPanelTextColor: "#3c4043",
        prLabelStyle: "cartouche",
        prShowSense: true,
        prShowMotorwayDestination: true,
        prMotorwayCartoucheColor: "#e30613",
        prDepartmentCartoucheColor: "#f4d000",
        prCartoucheScale: 1,
        prCartoucheOpacity: 1,
        prAutorouteColor: "#c62828",
        prNationalColor: "#d99600",
        prMetropolitanColor: "#7b1fa2",
        prOtherColor: "#1976d2",
        prMarkerSize: 5,
        prOpacity: 0.92,
        prLabelMode: "auto",
        prLabelMinZoom: 16,
        prLabelSize: 11,
        prLabelColor: "#202124",
        prLabelOutlineColor: "#ffffff",
        prLabelOutlineWidth: 3,
        prLabelOffset: 18,
    });

    const DEPARTMENTS_BY_REGION = [
        ["Auvergne-Rhône-Alpes", [["01", "Ain"], ["03", "Allier"], ["07", "Ardèche"], ["15", "Cantal"], ["26", "Drôme"], ["38", "Isère"], ["42", "Loire"], ["43", "Haute-Loire"], ["63", "Puy-de-Dôme"], ["69", "Rhône"], ["73", "Savoie"], ["74", "Haute-Savoie"]]],
        ["Bourgogne-Franche-Comté", [["21", "Côte-d’Or"], ["25", "Doubs"], ["39", "Jura"], ["58", "Nièvre"], ["70", "Haute-Saône"], ["71", "Saône-et-Loire"], ["89", "Yonne"], ["90", "Territoire de Belfort"]]],
        ["Bretagne", [["22", "Côtes-d’Armor"], ["29", "Finistère"], ["35", "Ille-et-Vilaine"], ["56", "Morbihan"]]],
        ["Centre-Val de Loire", [["18", "Cher"], ["28", "Eure-et-Loir"], ["36", "Indre"], ["37", "Indre-et-Loire"], ["41", "Loir-et-Cher"], ["45", "Loiret"]]],
        ["Corse", [["2A", "Corse-du-Sud"], ["2B", "Haute-Corse"]]],
        ["Grand Est", [["08", "Ardennes"], ["10", "Aube"], ["51", "Marne"], ["52", "Haute-Marne"], ["54", "Meurthe-et-Moselle"], ["55", "Meuse"], ["57", "Moselle"], ["67", "Bas-Rhin"], ["68", "Haut-Rhin"], ["88", "Vosges"]]],
        ["Hauts-de-France", [["02", "Aisne"], ["59", "Nord"], ["60", "Oise"], ["62", "Pas-de-Calais"], ["80", "Somme"]]],
        ["Île-de-France", [["75", "Paris"], ["77", "Seine-et-Marne"], ["78", "Yvelines"], ["91", "Essonne"], ["92", "Hauts-de-Seine"], ["93", "Seine-Saint-Denis"], ["94", "Val-de-Marne"], ["95", "Val-d’Oise"]]],
        ["Normandie", [["14", "Calvados"], ["27", "Eure"], ["50", "Manche"], ["61", "Orne"], ["76", "Seine-Maritime"]]],
        ["Nouvelle-Aquitaine", [["16", "Charente"], ["17", "Charente-Maritime"], ["19", "Corrèze"], ["23", "Creuse"], ["24", "Dordogne"], ["33", "Gironde"], ["40", "Landes"], ["47", "Lot-et-Garonne"], ["64", "Pyrénées-Atlantiques"], ["79", "Deux-Sèvres"], ["86", "Vienne"], ["87", "Haute-Vienne"]]],
        ["Occitanie", [["09", "Ariège"], ["11", "Aude"], ["12", "Aveyron"], ["30", "Gard"], ["31", "Haute-Garonne"], ["32", "Gers"], ["34", "Hérault"], ["46", "Lot"], ["48", "Lozère"], ["65", "Hautes-Pyrénées"], ["66", "Pyrénées-Orientales"], ["81", "Tarn"], ["82", "Tarn-et-Garonne"]]],
        ["Pays de la Loire", [["44", "Loire-Atlantique"], ["49", "Maine-et-Loire"], ["53", "Mayenne"], ["72", "Sarthe"], ["85", "Vendée"]]],
        ["Provence-Alpes-Côte d’Azur", [["04", "Alpes-de-Haute-Provence"], ["05", "Hautes-Alpes"], ["06", "Alpes-Maritimes"], ["13", "Bouches-du-Rhône"], ["83", "Var"], ["84", "Vaucluse"]]],
        ["Outre-mer", [["971", "Guadeloupe"], ["972", "Martinique"], ["973", "Guyane"], ["974", "La Réunion"], ["976", "Mayotte"]]],
    ];
    const DEPARTMENT_CODES = new Set(DEPARTMENTS_BY_REGION.flatMap(([, departments]) => departments.map(([code]) => code)));
    const DEPARTMENT_NAMES = new Map(DEPARTMENTS_BY_REGION.flatMap(([, departments]) => departments));
    const normalizeDepartmentNameKey = (value) => String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[’']/g, " ")
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .toUpperCase();
    const DEPARTMENT_CODES_BY_NAME = new Map(
        [...DEPARTMENT_NAMES.entries()].map(([code, name]) => [normalizeDepartmentNameKey(name), code]),
    );

    const Core = (() => {
        const axisPatternCache = new Map();
        const toRadians = (degrees) => degrees * Math.PI / 180;

        function isFiniteCoordinate(coordinate) {
            return Array.isArray(coordinate)
                && coordinate.length >= 2
                && Number.isFinite(Number(coordinate[0]))
                && Number.isFinite(Number(coordinate[1]));
        }

        function normalizeCoordinates(coordinates) {
            if (!Array.isArray(coordinates)) return [];
            return coordinates
                .filter(isFiniteCoordinate)
                .map((coordinate) => [Number(coordinate[0]), Number(coordinate[1])]);
        }

        function normalizeBbox(value) {
            if (!Array.isArray(value) || value.length < 4) {
                throw new Error("L’emprise visible de WME est invalide.");
            }
            const bbox = value.slice(0, 4).map(Number);
            if (!bbox.every(Number.isFinite)) throw new Error("L’emprise visible de WME est invalide.");
            const [left, bottom, right, top] = bbox;
            if (left < -180 || right > 180 || bottom < -90 || top > 90 || left >= right || bottom >= top) {
                throw new Error("L’emprise visible de WME est hors limites.");
            }
            return bbox;
        }

        function expandBbox(value, ratio = 0) {
            const [left, bottom, right, top] = normalizeBbox(value);
            const padding = Math.max(0, Number(ratio) || 0);
            const longitudePadding = (right - left) * padding;
            const latitudePadding = (top - bottom) * padding;
            return [
                Math.max(-180, left - longitudePadding),
                Math.max(-90, bottom - latitudePadding),
                Math.min(180, right + longitudePadding),
                Math.min(90, top + latitudePadding),
            ];
        }

        function bboxContains(outerValue, innerValue) {
            const [outerLeft, outerBottom, outerRight, outerTop] = normalizeBbox(outerValue);
            const [innerLeft, innerBottom, innerRight, innerTop] = normalizeBbox(innerValue);
            return outerLeft <= innerLeft
                && outerBottom <= innerBottom
                && outerRight >= innerRight
                && outerTop >= innerTop;
        }

        function isRetryablePrIndexError(error) {
            const status = Number(error?.httpStatus);
            if ([429, 500, 502, 503, 504].includes(status)) return true;
            if (error?.isTimeout || error?.isNetworkError) return true;
            const message = String(error?.message || error || "").toLowerCase();
            return message.includes("statement timeout")
                || message.includes("délai prévu")
                || message.includes("impossible de joindre");
        }

        function normalizeAppearanceSettings(value = {}) {
            const source = value && typeof value === "object" && !Array.isArray(value) ? value : {};
            const color = (name) => {
                const candidate = String(source[name] || "").trim().toLowerCase();
                return /^#[0-9a-f]{6}$/.test(candidate) ? candidate : APPEARANCE_DEFAULTS[name];
            };
            const number = (name, minimum, maximum, step = 1) => {
                const candidate = Number(source[name]);
                if (!Number.isFinite(candidate)) return APPEARANCE_DEFAULTS[name];
                const clamped = Math.max(minimum, Math.min(maximum, candidate));
                return Math.round(clamped / step) * step;
            };
            const labelMode = ["auto", "always", "never"].includes(source.prLabelMode)
                ? source.prLabelMode
                : APPEARANCE_DEFAULTS.prLabelMode;
            const labelStyle = ["simple", "cartouche"].includes(source.prLabelStyle)
                ? source.prLabelStyle
                : APPEARANCE_DEFAULTS.prLabelStyle;
            const resultLabelStyle = ["simple", "cartouche"].includes(source.resultLabelStyle)
                ? source.resultLabelStyle
                : APPEARANCE_DEFAULTS.resultLabelStyle;
            return {
                resultTargetColor: color("resultTargetColor"),
                resultPathColor: color("resultPathColor"),
                resultZoneColor: color("resultZoneColor"),
                resultAnchorColor: color("resultAnchorColor"),
                resultMarkerSize: number("resultMarkerSize", 6, 20),
                resultLineWidth: number("resultLineWidth", 2, 12),
                resultOpacity: number("resultOpacity", 0.2, 1, 0.05),
                resultShowLabels: typeof source.resultShowLabels === "boolean"
                    ? source.resultShowLabels
                    : APPEARANCE_DEFAULTS.resultShowLabels,
                resultLabelStyle,
                resultShowSense: typeof source.resultShowSense === "boolean"
                    ? source.resultShowSense
                    : APPEARANCE_DEFAULTS.resultShowSense,
                resultShowMotorwayDestination: typeof source.resultShowMotorwayDestination === "boolean"
                    ? source.resultShowMotorwayDestination
                    : APPEARANCE_DEFAULTS.resultShowMotorwayDestination,
                resultMotorwayCartoucheColor: color("resultMotorwayCartoucheColor"),
                resultDepartmentCartoucheColor: color("resultDepartmentCartoucheColor"),
                resultCartoucheScale: number("resultCartoucheScale", 0.6, 1.6, 0.05),
                resultCartoucheOpacity: number("resultCartoucheOpacity", 0.2, 1, 0.05),
                resultLabelOffset: number("resultLabelOffset", 10, 80),
                resultLabelColor: color("resultLabelColor"),
                resultLabelSize: number("resultLabelSize", 10, 22),
                resultLabelOutlineColor: color("resultLabelOutlineColor"),
                resultLabelOutlineWidth: number("resultLabelOutlineWidth", 0, 8),
                resultPanelBackgroundColor: color("resultPanelBackgroundColor"),
                resultPanelBorderColor: color("resultPanelBorderColor"),
                resultPanelTitleColor: color("resultPanelTitleColor"),
                resultPanelTextColor: color("resultPanelTextColor"),
                prLabelStyle: labelStyle,
                prShowSense: typeof source.prShowSense === "boolean"
                    ? source.prShowSense
                    : APPEARANCE_DEFAULTS.prShowSense,
                prShowMotorwayDestination: typeof source.prShowMotorwayDestination === "boolean"
                    ? source.prShowMotorwayDestination
                    : APPEARANCE_DEFAULTS.prShowMotorwayDestination,
                prMotorwayCartoucheColor: color("prMotorwayCartoucheColor"),
                prDepartmentCartoucheColor: color("prDepartmentCartoucheColor"),
                prCartoucheScale: number("prCartoucheScale", 0.6, 1.6, 0.05),
                prCartoucheOpacity: number("prCartoucheOpacity", 0.2, 1, 0.05),
                prAutorouteColor: color("prAutorouteColor"),
                prNationalColor: color("prNationalColor"),
                prMetropolitanColor: color("prMetropolitanColor"),
                prOtherColor: color("prOtherColor"),
                prMarkerSize: number("prMarkerSize", 2, 10),
                prOpacity: number("prOpacity", 0.2, 1, 0.05),
                prLabelMode: labelMode,
                prLabelMinZoom: number("prLabelMinZoom", PR_INDEX_MIN_ZOOM_LEVEL, 19),
                prLabelSize: number("prLabelSize", 9, 18),
                prLabelColor: color("prLabelColor"),
                prLabelOutlineColor: color("prLabelOutlineColor"),
                prLabelOutlineWidth: number("prLabelOutlineWidth", 0, 8),
                prLabelOffset: number("prLabelOffset", 10, 36),
            };
        }

        function haversine(a, b) {
            if (!isFiniteCoordinate(a) || !isFiniteCoordinate(b)) return Infinity;
            const lat1 = toRadians(Number(a[1]));
            const lat2 = toRadians(Number(b[1]));
            const dLat = lat2 - lat1;
            const dLon = toRadians(Number(b[0]) - Number(a[0]));
            const h = Math.sin(dLat / 2) ** 2
                + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
            return 2 * EARTH_RADIUS_METERS * Math.asin(Math.min(1, Math.sqrt(h)));
        }

        function polylineMetrics(rawCoordinates) {
            const coordinates = normalizeCoordinates(rawCoordinates);
            const cumulative = [0];
            for (let index = 1; index < coordinates.length; index += 1) {
                cumulative.push(cumulative[index - 1] + haversine(coordinates[index - 1], coordinates[index]));
            }
            return {
                coordinates,
                cumulative,
                length: cumulative[cumulative.length - 1] || 0,
            };
        }

        function pointAtOffset(rawCoordinates, requestedOffset) {
            const metrics = polylineMetrics(rawCoordinates);
            if (metrics.coordinates.length === 0) return null;
            if (metrics.coordinates.length === 1 || metrics.length === 0) {
                return { point: metrics.coordinates[0].slice(), offset: 0, segmentIndex: 0, ratio: 0 };
            }

            const offset = Math.max(0, Math.min(Number(requestedOffset) || 0, metrics.length));
            for (let index = 1; index < metrics.coordinates.length; index += 1) {
                const startOffset = metrics.cumulative[index - 1];
                const endOffset = metrics.cumulative[index];
                if (offset <= endOffset || index === metrics.coordinates.length - 1) {
                    const segmentLength = endOffset - startOffset;
                    const ratio = segmentLength > 0 ? (offset - startOffset) / segmentLength : 0;
                    const start = metrics.coordinates[index - 1];
                    const end = metrics.coordinates[index];
                    return {
                        point: [
                            start[0] + (end[0] - start[0]) * ratio,
                            start[1] + (end[1] - start[1]) * ratio,
                        ],
                        offset,
                        segmentIndex: index - 1,
                        ratio,
                    };
                }
            }
            return {
                point: metrics.coordinates[metrics.coordinates.length - 1].slice(),
                offset: metrics.length,
                segmentIndex: metrics.coordinates.length - 2,
                ratio: 1,
            };
        }

        function bearingDegrees(from, to) {
            if (!isFiniteCoordinate(from) || !isFiniteCoordinate(to) || haversine(from, to) < 0.01) return null;
            const lat1 = toRadians(Number(from[1]));
            const lat2 = toRadians(Number(to[1]));
            const dLon = toRadians(Number(to[0]) - Number(from[0]));
            const y = Math.sin(dLon) * Math.cos(lat2);
            const x = Math.cos(lat1) * Math.sin(lat2)
                - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
            return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
        }

        function bearingDifference(left, right) {
            if (!Number.isFinite(left) || !Number.isFinite(right)) return Infinity;
            const difference = Math.abs(left - right) % 360;
            return Math.min(difference, 360 - difference);
        }

        function polylineStartBearing(coordinates, sampleDistance = 20) {
            const metrics = polylineMetrics(coordinates);
            if (!(metrics.length > 0)) return null;
            const sample = pointAtOffset(metrics.coordinates, Math.min(sampleDistance, metrics.length));
            return sample?.point ? bearingDegrees(metrics.coordinates[0], sample.point) : null;
        }

        function polylineEndBearing(coordinates, sampleDistance = 20) {
            const metrics = polylineMetrics(coordinates);
            if (!(metrics.length > 0)) return null;
            const sample = pointAtOffset(metrics.coordinates, Math.max(0, metrics.length - sampleDistance));
            return sample?.point ? bearingDegrees(sample.point, metrics.coordinates[metrics.coordinates.length - 1]) : null;
        }

        function slicePolyline(rawCoordinates, requestedStart, requestedEnd) {
            const metrics = polylineMetrics(rawCoordinates);
            if (metrics.coordinates.length === 0) return [];
            const start = Math.max(0, Math.min(Number(requestedStart) || 0, metrics.length));
            const end = Math.max(0, Math.min(Number(requestedEnd) || 0, metrics.length));
            if (end < start) return slicePolyline(metrics.coordinates, end, start).reverse();

            const startPoint = pointAtOffset(metrics.coordinates, start);
            const endPoint = pointAtOffset(metrics.coordinates, end);
            if (!startPoint || !endPoint) return [];

            const result = [startPoint.point];
            for (let index = 1; index < metrics.coordinates.length - 1; index += 1) {
                if (metrics.cumulative[index] > start && metrics.cumulative[index] < end) {
                    result.push(metrics.coordinates[index].slice());
                }
            }
            result.push(endPoint.point);
            return removeConsecutiveDuplicates(result);
        }

        function removeConsecutiveDuplicates(coordinates) {
            const result = [];
            for (const coordinate of normalizeCoordinates(coordinates)) {
                const previous = result[result.length - 1];
                if (!previous || haversine(previous, coordinate) > 0.001) result.push(coordinate);
            }
            return result;
        }

        function projectPointToPolyline(point, rawCoordinates) {
            if (!isFiniteCoordinate(point)) return null;
            const metrics = polylineMetrics(rawCoordinates);
            if (metrics.coordinates.length < 2) return null;

            const latitudeOrigin = toRadians(Number(point[1]));
            const metersPerDegreeLat = Math.PI * EARTH_RADIUS_METERS / 180;
            const metersPerDegreeLon = metersPerDegreeLat * Math.cos(latitudeOrigin);
            let best = null;

            for (let index = 1; index < metrics.coordinates.length; index += 1) {
                const start = metrics.coordinates[index - 1];
                const end = metrics.coordinates[index];
                const ax = (start[0] - point[0]) * metersPerDegreeLon;
                const ay = (start[1] - point[1]) * metersPerDegreeLat;
                const bx = (end[0] - point[0]) * metersPerDegreeLon;
                const by = (end[1] - point[1]) * metersPerDegreeLat;
                const dx = bx - ax;
                const dy = by - ay;
                const squaredLength = dx * dx + dy * dy;
                const ratio = squaredLength > 0
                    ? Math.max(0, Math.min(1, -(ax * dx + ay * dy) / squaredLength))
                    : 0;
                const projectedX = ax + ratio * dx;
                const projectedY = ay + ratio * dy;
                const distance = Math.hypot(projectedX, projectedY);
                if (!best || distance < best.distance) {
                    const projectedPoint = [
                        start[0] + (end[0] - start[0]) * ratio,
                        start[1] + (end[1] - start[1]) * ratio,
                    ];
                    const offset = metrics.cumulative[index - 1] + haversine(start, projectedPoint);
                    best = {
                        point: projectedPoint,
                        distance,
                        offset,
                        segmentIndex: index - 1,
                        ratio,
                        polylineLength: metrics.length,
                    };
                }
            }
            return best;
        }

        function localMetersVector(from, to, latitudeReference = null) {
            if (!isFiniteCoordinate(from) || !isFiniteCoordinate(to)) return null;
            const latitude = Number.isFinite(Number(latitudeReference))
                ? Number(latitudeReference)
                : (Number(from[1]) + Number(to[1])) / 2;
            const metersPerDegreeLat = Math.PI * EARTH_RADIUS_METERS / 180;
            const metersPerDegreeLon = metersPerDegreeLat * Math.cos(toRadians(latitude));
            return [
                (Number(to[0]) - Number(from[0])) * metersPerDegreeLon,
                (Number(to[1]) - Number(from[1])) * metersPerDegreeLat,
            ];
        }

        function coordinateFromLocalMeters(origin, eastMeters, northMeters) {
            if (!isFiniteCoordinate(origin)) return null;
            const metersPerDegreeLat = Math.PI * EARTH_RADIUS_METERS / 180;
            const metersPerDegreeLon = metersPerDegreeLat * Math.cos(toRadians(Number(origin[1])));
            if (!(Math.abs(metersPerDegreeLon) > 0)) return origin.slice();
            return [
                Number(origin[0]) + Number(eastMeters) / metersPerDegreeLon,
                Number(origin[1]) + Number(northMeters) / metersPerDegreeLat,
            ];
        }

        function computePolylineLabelOffset(point, rawCoordinates, requestedPixelDistance = 18, options = {}) {
            const pixelDistance = Math.max(0, Number(requestedPixelDistance) || 0);
            const fallback = {
                x: 0,
                y: Math.round(pixelDistance),
                segmentDistance: Infinity,
                reason: "fallback",
            };
            const metrics = polylineMetrics(rawCoordinates);
            if (!isFiniteCoordinate(point) || metrics.coordinates.length < 2 || !(metrics.length > 0)) return fallback;
            const projection = projectPointToPolyline(point, metrics.coordinates);
            if (!projection) return fallback;

            const tangentSampleMeters = Math.max(8, Math.min(
                Number(options.tangentSampleMeters) || 28,
                Math.max(8, metrics.length / 3),
            ));
            let beforeOffset = Math.max(0, projection.offset - tangentSampleMeters);
            let afterOffset = Math.min(metrics.length, projection.offset + tangentSampleMeters);
            if (afterOffset - beforeOffset < 1) {
                beforeOffset = Math.max(0, projection.offset - Math.max(1, metrics.length / 2));
                afterOffset = Math.min(metrics.length, projection.offset + Math.max(1, metrics.length / 2));
            }
            const before = pointAtOffset(metrics.coordinates, beforeOffset)?.point;
            const after = pointAtOffset(metrics.coordinates, afterOffset)?.point;
            const tangent = localMetersVector(before, after, projection.point[1]);
            const tangentLength = tangent ? Math.hypot(tangent[0], tangent[1]) : 0;
            if (!(tangentLength > 0.01)) return { ...fallback, segmentDistance: projection.distance };

            const tangentX = tangent[0] / tangentLength;
            const tangentY = tangent[1] / tangentLength;
            const leftNormal = [-tangentY, tangentX];
            let side = 0;
            let reason = "orientation";

            const markerVector = localMetersVector(projection.point, point, projection.point[1]);
            const markerLateral = markerVector
                ? markerVector[0] * leftNormal[0] + markerVector[1] * leftNormal[1]
                : 0;
            const markerSideThresholdMeters = Math.max(0.5, Number(options.markerSideThresholdMeters) || 1.5);
            if (Math.abs(markerLateral) >= markerSideThresholdMeters) {
                side = markerLateral > 0 ? 1 : -1;
                reason = "marker-side";
            } else {
                const probeDistanceMeters = Math.max(6, Number(options.probeDistanceMeters) || 18);
                const leftProbe = coordinateFromLocalMeters(
                    projection.point,
                    leftNormal[0] * probeDistanceMeters,
                    leftNormal[1] * probeDistanceMeters,
                );
                const rightProbe = coordinateFromLocalMeters(
                    projection.point,
                    -leftNormal[0] * probeDistanceMeters,
                    -leftNormal[1] * probeDistanceMeters,
                );
                const leftClearance = projectPointToPolyline(leftProbe, metrics.coordinates)?.distance ?? 0;
                const rightClearance = projectPointToPolyline(rightProbe, metrics.coordinates)?.distance ?? 0;
                const clearanceThresholdMeters = Math.max(0.2, Number(options.clearanceThresholdMeters) || 0.75);
                if (Math.abs(leftClearance - rightClearance) >= clearanceThresholdMeters) {
                    side = leftClearance > rightClearance ? 1 : -1;
                    reason = "curve-clearance";
                }
            }

            let normalX = leftNormal[0];
            let normalY = leftNormal[1];
            if (side < 0) {
                normalX = -normalX;
                normalY = -normalY;
            } else if (side === 0 && (normalY < -0.001 || (Math.abs(normalY) <= 0.001 && normalX < 0))) {
                // Sur une portion droite, conserver un côté stable indépendamment du sens de numérisation du segment.
                normalX = -normalX;
                normalY = -normalY;
            }

            const roundedX = Math.round(normalX * pixelDistance);
            const roundedY = Math.round(normalY * pixelDistance);
            return {
                x: Object.is(roundedX, -0) ? 0 : roundedX,
                y: Object.is(roundedY, -0) ? 0 : roundedY,
                segmentDistance: projection.distance,
                reason,
            };
        }

        function cartoucheScreenRect(anchorPixel, offset, width, height, padding = 0) {
            const anchorX = Number(anchorPixel?.[0]);
            const anchorY = Number(anchorPixel?.[1]);
            const offsetX = Number(offset?.x) || 0;
            const offsetY = Number(offset?.y) || 0;
            const halfWidth = Math.max(1, Number(width) || 1) / 2 + Math.max(0, Number(padding) || 0);
            const halfHeight = Math.max(1, Number(height) || 1) / 2 + Math.max(0, Number(padding) || 0);
            const centerX = anchorX + offsetX;
            const centerY = anchorY - offsetY;
            return {
                left: centerX - halfWidth,
                right: centerX + halfWidth,
                top: centerY - halfHeight,
                bottom: centerY + halfHeight,
            };
        }

        function cartoucheRectsOverlap(left, right) {
            if (!left || !right) return false;
            return left.left < right.right
                && left.right > right.left
                && left.top < right.bottom
                && left.bottom > right.top;
        }

        function cartoucheOverlapArea(left, right) {
            if (!cartoucheRectsOverlap(left, right)) return 0;
            return Math.max(0, Math.min(left.right, right.right) - Math.max(left.left, right.left))
                * Math.max(0, Math.min(left.bottom, right.bottom) - Math.max(left.top, right.top));
        }

        function layoutCartoucheCollisions(items, options = {}) {
            const padding = Math.max(0, Number(options.padding) || 0);
            const step = Math.max(1, Number(options.step) || 18);
            const maxLevels = Math.max(1, Math.min(12, Math.round(Number(options.maxLevels) || 6)));
            const fallbackDistance = Math.max(1, Number(options.fallbackDistance) || 18);
            const leaderThreshold = Math.max(0, Number(options.leaderThreshold) || 26);

            // Index spatial écran : deux rectangles qui se chevauchent partagent
            // nécessairement au moins une cellule. On conserve donc exactement le
            // même calcul de score, mais sans reparcourir tous les cartouches placés.
            const collisionCellSize = Math.max(48, Number(options.collisionCellSize) || 128);
            const occupiedCells = new Map();
            let occupiedSequence = 0;
            const rectCellBounds = (rect) => ({
                minX: Math.floor(rect.left / collisionCellSize),
                maxX: Math.floor(rect.right / collisionCellSize),
                minY: Math.floor(rect.top / collisionCellSize),
                maxY: Math.floor(rect.bottom / collisionCellSize),
            });
            const nearbyOccupied = (rect) => {
                const bounds = rectCellBounds(rect);
                const unique = new Map();
                for (let cellX = bounds.minX; cellX <= bounds.maxX; cellX += 1) {
                    for (let cellY = bounds.minY; cellY <= bounds.maxY; cellY += 1) {
                        for (const record of occupiedCells.get(`${cellX}:${cellY}`) || []) {
                            unique.set(record.id, record);
                        }
                    }
                }
                return [...unique.values()];
            };
            const indexOccupied = (rect) => {
                const record = { id: ++occupiedSequence, rect };
                const bounds = rectCellBounds(rect);
                for (let cellX = bounds.minX; cellX <= bounds.maxX; cellX += 1) {
                    for (let cellY = bounds.minY; cellY <= bounds.maxY; cellY += 1) {
                        const key = `${cellX}:${cellY}`;
                        if (!occupiedCells.has(key)) occupiedCells.set(key, []);
                        occupiedCells.get(key).push(record);
                    }
                }
            };
            const layouts = [];

            for (const item of items || []) {
                const baseX = Number(item?.baseOffset?.x) || 0;
                const baseY = Number(item?.baseOffset?.y) || 0;
                const baseMagnitude = Math.hypot(baseX, baseY);
                const unitX = baseMagnitude > 0.001 ? baseX / baseMagnitude : 0;
                const unitY = baseMagnitude > 0.001 ? baseY / baseMagnitude : 1;
                // Le vecteur perpendiculaire permet de décaler un cartouche le long
                // de la chaussée sans jamais le faire passer de l'autre côté.
                const tangentX = -unitY;
                const tangentY = unitX;
                const baseDistance = Math.max(fallbackDistance, baseMagnitude);
                const candidates = [{ x: unitX * baseDistance, y: unitY * baseDistance, level: 0, shift: 0 }];

                // La direction du baseOffset définit le demi-plan de la chaussée.
                // Contrairement à l'ancien algorithme, aucune position miroir
                // (-unitX / -unitY) n'est proposée à l'anti-chevauchement.
                for (let level = 1; level <= maxLevels; level += 1) {
                    const radialDistance = baseDistance + level * step;
                    const tangentialShift = level * step;
                    candidates.push({
                        x: unitX * radialDistance,
                        y: unitY * radialDistance,
                        level,
                        shift: 0,
                    });
                    candidates.push({
                        x: unitX * baseDistance + tangentX * tangentialShift,
                        y: unitY * baseDistance + tangentY * tangentialShift,
                        level,
                        shift: 1,
                    });
                    candidates.push({
                        x: unitX * baseDistance - tangentX * tangentialShift,
                        y: unitY * baseDistance - tangentY * tangentialShift,
                        level,
                        shift: -1,
                    });
                }

                let selected = null;
                let selectedRect = null;
                let bestScore = Infinity;
                let bestDisplacement = Infinity;
                for (const candidate of candidates) {
                    // Sécurité supplémentaire : le centre du cartouche doit rester
                    // dans le même demi-plan que son placement initial.
                    if (candidate.x * unitX + candidate.y * unitY < baseDistance - 0.5) continue;
                    const rect = cartoucheScreenRect(
                        item.anchorPixel,
                        candidate,
                        item.width,
                        item.height,
                        padding,
                    );
                    let score = 0;
                    for (const previous of nearbyOccupied(rect)) {
                        score += cartoucheOverlapArea(rect, previous.rect);
                    }
                    const candidateDisplacement = Math.hypot(candidate.x - baseX, candidate.y - baseY);
                    if (score <= 0) {
                        selected = candidate;
                        selectedRect = rect;
                        break;
                    }
                    if (score < bestScore || (Math.abs(score - bestScore) < 0.01 && candidateDisplacement < bestDisplacement)) {
                        bestScore = score;
                        bestDisplacement = candidateDisplacement;
                        selected = candidate;
                        selectedRect = rect;
                    }
                }

                const offset = {
                    x: Math.round(selected?.x ?? baseX),
                    y: Math.round(selected?.y ?? baseY),
                };
                const displacement = Math.hypot(offset.x - baseX, offset.y - baseY);
                const radialExtension = Math.max(0, Math.hypot(offset.x, offset.y) - baseDistance);
                const collisionAdjusted = displacement > 0.5;
                const layout = {
                    ...item,
                    offset,
                    collisionAdjusted,
                    displacement,
                    radialExtension,
                    leaderRequired: collisionAdjusted && displacement >= leaderThreshold,
                };
                indexOccupied(
                    selectedRect
                    || cartoucheScreenRect(item.anchorPixel, offset, item.width, item.height, padding),
                );
                layouts.push(layout);
            }
            return layouts;
        }

        function parsePr(value) {
            const normalized = String(value ?? "")
                .trim()
                .toUpperCase()
                .replace(/^PR\s*/, "")
                .replace(/\s+/g, "");
            // Le + et le déport zéro-complété sont obligatoires afin d’éviter
            // toute ambiguïté entre un PR entier (ex. 52+000) et un déport.
            // Les déports à quatre chiffres restent autorisés pour les axes IGN
            // qui utilisent officiellement des valeurs supérieures à +999 m.
            const match = normalized.match(/^(\d+)\+(\d{3,4})$/);
            if (!match) {
                throw new Error("Saisissez le PR au format 65+352 (ou 65+1350 pour un déport supérieur à 999 m).");
            }
            const base = Number(match[1]);
            const offset = Number(match[2]);
            if (!Number.isInteger(base) || base < 0 || !Number.isInteger(offset) || offset < 0 || offset > 9999) {
                throw new Error("Le PR doit comporter un entier et un décalage de 000 à 9999 m.");
            }
            return {
                base,
                offset,
                formatted: `${base}+${String(offset).padStart(3, "0")}`,
            };
        }

        function normalizeDepartmentCode(value) {
            let code = String(value ?? "").trim().toUpperCase();
            if (/^\d$/.test(code)) code = `0${code}`;
            if (!DEPARTMENT_CODES.has(code)) {
                throw new Error("Sélectionnez un département français valide.");
            }
            return code;
        }

        function normalizeAxis(value) {
            let axis = String(value ?? "")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toUpperCase()
                .trim()
                .replace(/[._\s-]+/g, "");
            axis = axis.replace(/^RD(?=\d)/, "D").replace(/^RN(?=\d)/, "N");
            // La v0.8 accepte aussi les références intercommunales IGN (M7, RM6007, 5B, M949B8…).
            // On conserve uniquement lettres/chiffres afin d'avoir une clé stable entre la base PR et WME.
            if (!/^[A-Z0-9]{1,18}$/.test(axis) || !/\d/.test(axis)) {
                throw new Error("Saisissez une référence routière comme D62, N79, A40, M7, RM6007 ou 5B.");
            }
            return axis;
        }

        function normalizeIntercommunalAxis(value) {
            return normalizeAxis(value);
        }

        function routeFamilyFromAxis(value) {
            let axis;
            try {
                axis = normalizeAxis(value);
            } catch (error) {
                return "";
            }
            const standard = axis.match(/^([ADN])\d[A-Z0-9]{0,16}$/);
            if (standard) return standard[1];
            if (/^(?:M|RM)\d[A-Z0-9]{0,15}$/.test(axis)) return "I";
            if (/^\d{1,12}[A-Z][A-Z0-9]{0,5}$/.test(axis)) return "I";
            return "";
        }

        function axisPattern(axisValue) {
            const axis = normalizeAxis(axisValue);
            const cached = axisPatternCache.get(axis);
            if (cached) return cached;
            let tokenPattern;
            const classic = axis.match(/^([ADN])(\d+)([A-Z][A-Z0-9]{0,3})?$/);
            if (classic) {
                const prefix = classic[1];
                const number = classic[2];
                const suffix = classic[3];
                const prefixPattern = prefix === "D" ? "(?:R\\s*)?D" : prefix === "N" ? "(?:R\\s*)?N" : prefix;
                const suffixPattern = suffix ? `[\\s._-]*${suffix.split("").join("[\\s._-]*")}` : "";
                tokenPattern = `${prefixPattern}[\\s._-]*${number.split("").join("[\\s._-]*")}${suffixPattern}`;
            } else {
                tokenPattern = axis.split("").map((character) => character.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
                    .join("[\\s._-]*");
            }
            const pattern = new RegExp(`(^|[^A-Z0-9])${tokenPattern}($|[^A-Z0-9])`, "i");
            axisPatternCache.set(axis, pattern);
            return pattern;
        }

        function streetNameMatchesAxis(streetName, axisValue) {
            if (!streetName) return false;
            return axisPattern(axisValue).test(String(streetName).normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        }

        function extractAxisCodes(streetNames) {
            const results = [];
            const seen = new Set();
            for (const rawName of streetNames || []) {
                const name = String(rawName || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
                const regex = /(^|[^A-Z0-9])((?:R\s*)?[ADNM])\s*[._-]*\s*(\d{1,12})\s*([A-Z][A-Z0-9]{0,5})?(?=$|[^A-Z0-9])/g;
                let match;
                while ((match = regex.exec(name))) {
                    const prefix = match[2].replace(/\s/g, "").replace(/^RD$/, "D").replace(/^RN$/, "N");
                    const code = `${prefix}${match[3]}${match[4] || ""}`;
                    if (!seen.has(code)) {
                        seen.add(code);
                        results.push(code);
                    }
                }
                const bareIntercommunalRegex = /(^|[^A-Z0-9])(\d{1,12}[A-Z][A-Z0-9]{0,5})(?=$|[^A-Z0-9])/g;
                while ((match = bareIntercommunalRegex.exec(name))) {
                    const codeStart = match.index + String(match[1] || "").length;
                    const prefixContext = name.slice(Math.max(0, codeStart - 8), codeStart);
                    if (/(?:R\s*)?[ADNM]\s*[._-]*\s*$/i.test(prefixContext)) continue;
                    const code = match[2];
                    if (!seen.has(code)) {
                        seen.add(code);
                        results.push(code);
                    }
                }
            }
            return results;
        }

        function formatPrSideForDisplay(axisValue, sideValue) {
            const rawSide = String(sideValue ?? "").trim();
            if (!rawSide) return "";
            const normalizedSide = rawSide
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toUpperCase();
            if (/^(?:U|INDIFFERENCIE)$/.test(normalizedSide)) return "";
            try {
                normalizeAxis(axisValue);
            } catch (error) {
                return rawSide;
            }
            if (/^(?:D|SENS\s*1|1)$/.test(normalizedSide)) return "Sens 1";
            if (/^(?:G|SENS\s*2|2)$/.test(normalizedSide)) return "Sens 2";
            return rawSide;
        }

        function normalizeMotorwayDestinationScopeKey(rawValue) {
            const raw = String(rawValue ?? "").trim().toUpperCase();
            const separatorIndex = raw.indexOf("@");
            const rawAxis = separatorIndex >= 0 ? raw.slice(0, separatorIndex) : raw;
            const rawDepartment = separatorIndex >= 0 ? raw.slice(separatorIndex + 1) : "";
            const axis = normalizeAxis(rawAxis);
            if (!axis.startsWith("A")) throw new Error(`${axis} n’est pas une autoroute Axx.`);
            if (!rawDepartment) return axis;
            return `${axis}@${normalizeDepartmentCode(rawDepartment)}`;
        }

        function normalizeMotorwayDestinationTable(value = {}) {
            const source = value && typeof value === "object" && !Array.isArray(value) ? value : {};
            const normalized = {};
            for (const [rawScope, rawDestinations] of Object.entries(source)) {
                let scope;
                try {
                    scope = normalizeMotorwayDestinationScopeKey(rawScope);
                } catch (error) {
                    continue;
                }
                if (!rawDestinations || typeof rawDestinations !== "object") continue;
                const sense1 = String(rawDestinations["1"] ?? rawDestinations.sens1 ?? "").trim();
                const sense2 = String(rawDestinations["2"] ?? rawDestinations.sens2 ?? "").trim();
                if (!sense1 && !sense2) continue;
                normalized[scope] = {};
                if (sense1) normalized[scope]["1"] = sense1.slice(0, 80);
                if (sense2) normalized[scope]["2"] = sense2.slice(0, 80);
            }
            return normalized;
        }

        function parseMotorwayDestinationText(value) {
            const table = {};
            for (const [lineIndex, rawLine] of String(value ?? "").split(/\r?\n/).entries()) {
                const line = rawLine.trim();
                if (!line || line.startsWith("#")) continue;
                const columns = line.split(/\s*(?:\||;|\t)\s*/);
                if (columns.length < 2 || columns.length > 3) {
                    throw new Error(`Ligne ${lineIndex + 1} invalide : utilisez Axe[@département] | destination Sens 1 | destination Sens 2.`);
                }
                let scope;
                try {
                    scope = normalizeMotorwayDestinationScopeKey(columns[0]);
                } catch (error) {
                    throw new Error(`Ligne ${lineIndex + 1} : ${error.message}`);
                }
                const sense1 = String(columns[1] || "").trim();
                const sense2 = String(columns[2] || "").trim();
                if (!sense1 && !sense2) continue;
                table[scope] = {};
                if (sense1) table[scope]["1"] = sense1.slice(0, 80);
                if (sense2) table[scope]["2"] = sense2.slice(0, 80);
            }
            return normalizeMotorwayDestinationTable(table);
        }

        function formatMotorwayDestinationText(value) {
            const table = normalizeMotorwayDestinationTable(value);
            return Object.keys(table)
                .sort((left, right) => left.localeCompare(right, "fr", { numeric: true }))
                .map((scope) => `${scope} | ${table[scope]["1"] || ""} | ${table[scope]["2"] || ""}`)
                .join("\n");
        }

        function motorwayDestinationForSide(axisValue, sideValue, departmentCode, overridesValue = {}, nationalValue = {}) {
            let axis;
            try {
                axis = normalizeAxis(axisValue);
            } catch (error) {
                return "";
            }
            if (!axis.startsWith("A")) return "";
            const displaySide = formatPrSideForDisplay(axis, sideValue);
            const sense = displaySide === "Sens 1" ? "1" : displaySide === "Sens 2" ? "2" : "";
            if (!sense) return "";
            let department = "";
            if (departmentCode !== null && departmentCode !== undefined && String(departmentCode).trim()) {
                try {
                    department = normalizeDepartmentCode(departmentCode);
                } catch (error) {
                    department = "";
                }
            }
            const overrides = overridesValue && typeof overridesValue === "object" && !Array.isArray(overridesValue)
                ? overridesValue
                : {};
            const national = nationalValue && typeof nationalValue === "object" && !Array.isArray(nationalValue)
                ? nationalValue
                : {};
            const scopedKey = department ? `${axis}@${department}` : "";
            const candidates = [
                scopedKey ? overrides[scopedKey]?.[sense] : "",
                overrides[axis]?.[sense],
                scopedKey ? national[scopedKey]?.[sense] : "",
                national[axis]?.[sense],
            ];
            return String(candidates.find((value) => String(value || "").trim()) || "").trim();
        }

        function escapeSvgText(value) {
            return String(value ?? "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");
        }

        function estimateCartoucheTextWidth(text, size, factor = 0.62) {
            return Math.ceil(String(text ?? "").length * Math.max(1, Number(size) || 1) * factor);
        }

        function truncateCartoucheText(text, size, maxWidth, factor = 0.59) {
            const source = String(text ?? "").trim();
            if (!source || estimateCartoucheTextWidth(source, size, factor) <= maxWidth) return source;
            const ellipsis = "…";
            let value = source;
            while (value.length > 1 && estimateCartoucheTextWidth(`${value}${ellipsis}`, size, factor) > maxWidth) {
                value = value.slice(0, -1).trimEnd();
            }
            return `${value || source.charAt(0)}${ellipsis}`;
        }

        function cartoucheHeaderLayout(axisValue, destinationValue, baseSize, availableWidth) {
            const axis = String(axisValue || "").trim();
            const destination = String(destinationValue || "").trim();
            const full = `${axis}${destination ? `>${destination}` : ""}`;
            const maxWidth = Math.max(20, Number(availableWidth) || 20);
            const preferredSize = Math.max(9, Math.round(Number(baseSize) || 9));
            const minimumSingleLineSize = Math.max(7, Math.round(preferredSize * 0.78));

            for (let size = preferredSize; size >= minimumSingleLineSize; size -= 1) {
                if (estimateCartoucheTextWidth(full, size, 0.59) <= maxWidth) {
                    return { lines: [full], fontSize: size };
                }
            }

            if (!destination) {
                return {
                    lines: [truncateCartoucheText(full, minimumSingleLineSize, maxWidth, 0.59)],
                    fontSize: minimumSingleLineSize,
                };
            }

            // Pour une destination longue, rechercher une coupure lisible en priorité
            // après un espace ou un tiret. Le cartouche conserve ainsi sa largeur compacte.
            const semanticBreakpoints = new Set([0]);
            for (let index = 1; index < destination.length; index += 1) {
                const previous = destination.charAt(index - 1);
                if (/\s|-/.test(previous)) semanticBreakpoints.add(index);
            }
            const arbitraryBreakpoints = new Set();
            for (let index = 1; index < destination.length; index += 1) arbitraryBreakpoints.add(index);

            const minimumTwoLineSize = Math.max(7, Math.round(preferredSize * 0.72));
            const findTwoLineLayout = (breakpoints) => {
                for (let size = Math.max(minimumTwoLineSize, preferredSize - 1); size >= minimumTwoLineSize; size -= 1) {
                    let best = null;
                    for (const index of breakpoints) {
                        const firstDestinationPart = destination.slice(0, index).trim();
                        const secondDestinationPart = destination.slice(index).trim();
                        if (!secondDestinationPart) continue;
                        const first = `${axis}>${firstDestinationPart}`;
                        const second = secondDestinationPart;
                        const firstWidth = estimateCartoucheTextWidth(first, size, 0.59);
                        const secondWidth = estimateCartoucheTextWidth(second, size, 0.59);
                        if (firstWidth > maxWidth || secondWidth > maxWidth) continue;
                        const score = Math.max(firstWidth, secondWidth) + Math.abs(firstWidth - secondWidth) * 0.12;
                        if (!best || score < best.score) best = { lines: [first, second], fontSize: size, score };
                    }
                    if (best) return { lines: best.lines, fontSize: best.fontSize };
                }
                return null;
            };
            // Toujours privilégier une coupure naturelle, même si elle nécessite une police
            // un peu plus petite. Une coupure au milieu d'un mot n'est qu'un dernier recours.
            const semanticLayout = findTwoLineLayout(semanticBreakpoints);
            if (semanticLayout) return semanticLayout;
            const arbitraryLayout = findTwoLineLayout(arbitraryBreakpoints);
            if (arbitraryLayout) return arbitraryLayout;

            const fallbackSize = minimumTwoLineSize;
            const axisPrefix = `${axis}>`;
            const second = truncateCartoucheText(destination, fallbackSize, maxWidth, 0.59);
            return {
                lines: [truncateCartoucheText(axisPrefix, fallbackSize, maxWidth, 0.59), second],
                fontSize: fallbackSize,
            };
        }

        function buildPrCartoucheDescriptor(options = {}) {
            const axis = normalizeAxis(options.axis);
            const prText = String(options.prText ?? "").trim() || "?";
            const side = options.showSense === false ? "" : formatPrSideForDisplay(axis, options.side);
            const destination = axis.startsWith("A") && options.showMotorwayDestination !== false
                ? String(options.destination || "").trim()
                : "";
            const header = `${axis}${destination ? `>${destination}` : ""}`;
            const main = prText.replace(/^PR\s*/i, "").trim() || "?";
            const fontSize = Math.max(9, Math.min(18, Number(options.fontSize) || 11));
            const baseHeaderSize = Math.max(9, Math.round(fontSize * 0.9));
            const mainSize = Math.max(11, Math.round(fontSize * 1.2));
            const senseSize = Math.max(8, Math.round(fontSize * 0.75));
            const mainHeight = Math.max(23, Math.round(mainSize * 1.65));
            const senseHeight = side ? Math.max(13, Math.round(senseSize * 1.45)) : 0;

            // La destination ne doit plus déterminer la largeur du cartouche. La largeur
            // dépend uniquement du numéro d'axe, du PR et du sens ; le bandeau s'adapte.
            const compactWidthLimit = Math.max(64, Math.round(fontSize * 7));
            const width = Math.max(64, Math.min(compactWidthLimit, Math.max(
                estimateCartoucheTextWidth(axis, baseHeaderSize, 0.59),
                estimateCartoucheTextWidth(main, mainSize, 0.61),
                side ? estimateCartoucheTextWidth(side.toUpperCase(), senseSize, 0.59) : 0,
            ) + 16));
            const headerLayout = cartoucheHeaderLayout(axis, destination, baseHeaderSize, width - 10);
            const headerSize = headerLayout.fontSize;
            const headerLines = headerLayout.lines;
            const headerHeight = headerLines.length > 1
                ? Math.max(25, Math.round(headerSize * 2.75))
                : Math.max(18, Math.round(headerSize * 1.55));
            const height = headerHeight + mainHeight + senseHeight + 2;
            const prefix = axis.charAt(0);
            const headerColor = prefix === "A"
                ? String(options.motorwayColor || "#e30613")
                : prefix === "D"
                    ? String(options.departmentColor || "#f4d000")
                    : String(options.otherColor || "#ffffff");
            const headerTextColor = prefix === "A" ? "#ffffff" : "#111111";
            const mainCenterY = headerHeight + mainHeight / 2 + 1;
            const senseCenterY = headerHeight + mainHeight + senseHeight / 2;
            const headerTextSvg = headerLines.length > 1
                ? headerLines.map((line, index) => {
                    const y = Math.round(headerSize * (index === 0 ? 1.05 : 2.15));
                    return `<text x="${width / 2}" y="${y}" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="${headerSize}" font-weight="700" fill="${headerTextColor}">${escapeSvgText(line)}</text>`;
                }).join("")
                : `<text x="${width / 2}" y="${Math.round(headerHeight * 0.7)}" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="${headerSize}" font-weight="700" fill="${headerTextColor}">${escapeSvgText(headerLines[0] || header)}</text>`;
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`
                + `<rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="3" fill="#ffffff" stroke="#111111" stroke-width="2"/>`
                + `<path d="M2 4a2 2 0 0 1 2-2h${width - 8}a2 2 0 0 1 2 2v${headerHeight - 3}H2z" fill="${escapeSvgText(headerColor)}"/>`
                + `<line x1="1" y1="${headerHeight}" x2="${width - 1}" y2="${headerHeight}" stroke="#111111" stroke-width="2"/>`
                + headerTextSvg
                + `<text x="${width / 2}" y="${Math.round(mainCenterY + mainSize * 0.34)}" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="${mainSize}" font-weight="800" fill="#050505">${escapeSvgText(main)}</text>`
                + (side ? `<text x="${width / 2}" y="${Math.round(senseCenterY + senseSize * 0.34)}" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="${senseSize}" font-weight="700" fill="#222222">${escapeSvgText(side.toUpperCase())}</text>` : "")
                + `</svg>`;
            return {
                width,
                height,
                header,
                headerLines,
                headerFontSize: headerSize,
                main,
                side,
                dataUri: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
            };
        }

        function parsePrRecord(record) {
            if (!record || typeof record !== "object") return null;
            const pointType = String(record.point_type || "PR").trim().toUpperCase();
            const isBoundary = pointType === "DS" || pointType === "FS";
            const rawNumber = record.pr_number ?? record.number;
            const number = rawNumber !== null && rawNumber !== undefined && rawNumber !== ""
                && Number.isInteger(Number(rawNumber)) && Number(rawNumber) >= 0
                ? Number(rawNumber)
                : null;
            const coordinate = [
                Number(record.longitude ?? record.lon),
                Number(record.latitude ?? record.lat),
            ];
            if ((!isBoundary && number === null) || !isFiniteCoordinate(coordinate)) return null;
            if (coordinate[0] < -180 || coordinate[0] > 180 || coordinate[1] < -90 || coordinate[1] > 90) {
                return null;
            }
            let axis = null;
            try {
                axis = normalizeAxis(record.axis);
            } catch (error) {
                return null;
            }
            const rawAbscissa = record.abscissa;
            const rawPointOrder = record.point_order;
            return {
                number,
                abscissa: rawAbscissa !== null && rawAbscissa !== undefined && rawAbscissa !== ""
                    && Number.isSafeInteger(Number(rawAbscissa))
                    ? Number(rawAbscissa)
                    : null,
                rawPointNumber: record.raw_point_number ? String(record.raw_point_number) : null,
                pointType,
                pointOrder: rawPointOrder !== null && rawPointOrder !== undefined && rawPointOrder !== ""
                    && Number.isFinite(Number(rawPointOrder))
                    ? Number(rawPointOrder)
                    : null,
                terminalPrNumber: record.terminal_pr_number !== null && record.terminal_pr_number !== undefined
                    && record.terminal_pr_number !== "" && Number.isInteger(Number(record.terminal_pr_number))
                    ? Number(record.terminal_pr_number)
                    : null,
                terminalPrOffset: record.terminal_pr_offset !== null && record.terminal_pr_offset !== undefined
                    && record.terminal_pr_offset !== "" && Number.isSafeInteger(Number(record.terminal_pr_offset))
                    && Number(record.terminal_pr_offset) >= 0
                    ? Number(record.terminal_pr_offset)
                    : null,
                coordinate,
                axis,
                id: record.source_id ? String(record.source_id) : (record.id ? String(record.id) : null),
                side: record.side ? String(record.side) : null,
                branchId: record.branch_id ? String(record.branch_id) : null,
                departmentCode: record.department_code ? String(record.department_code).toUpperCase() : null,
                networkType: record.network_type ? String(record.network_type).toUpperCase() : null,
                roadManager: record.road_manager ? String(record.road_manager) : null,
                routeId: record.route_id ? String(record.route_id) : null,
                source: "Base PR (Supabase)",
            };
        }

        function parsePrPayload(payload) {
            if (!Array.isArray(payload)) return [];
            const unique = new Map();
            for (const record of payload) {
                const point = parsePrRecord(record);
                if (!point) continue;
                const key = point.id || `${point.departmentCode || "?"}:${point.axis}:${point.pointType}:${point.number}:${point.abscissa}:${point.coordinate[0].toFixed(7)},${point.coordinate[1].toFixed(7)}`;
                if (!unique.has(key)) unique.set(key, point);
            }
            return enrichTerminalPrDisplay([...unique.values()]);
        }

        function filterPrPoints(prPoints, axisValue, numbers = null) {
            const axis = normalizeAxis(axisValue);
            const numberSet = numbers ? new Set(numbers.map(Number)) : null;
            return (prPoints || []).filter((point) => point.axis === axis && (!numberSet || numberSet.has(point.number)));
        }

        function normalizePointType(value) {
            return String(value || "PR").trim().toUpperCase();
        }

        function referenceBaseOffset(point) {
            const number = Number(point?.number);
            const raw = String(point?.rawPointNumber || "").trim();
            const match = raw.match(/^(\d+)\+(\d{3,4})$/);
            if (!match || !Number.isInteger(number) || Number(match[1]) !== number) return 0;
            const offset = Number(match[2]);
            return Number.isSafeInteger(offset) && offset >= 0 ? offset : 0;
        }

        function terminalReferenceScore(terminal, reference) {
            if (!terminal || !reference || !hasChainage(terminal) || !hasChainage(reference)) return null;
            if (normalizePointType(terminal.pointType) !== "PRF") return null;
            if (!["PR", "PR0"].includes(normalizePointType(reference.pointType))) return null;
            if (!Number.isInteger(Number(reference.number)) || Number(reference.number) < 0) return null;
            if (String(terminal.departmentCode || "") !== String(reference.departmentCode || "")) return null;
            if (normalizeAxis(terminal.axis) !== normalizeAxis(reference.axis)) return null;
            const delta = Number(terminal.abscissa) - Number(reference.abscissa);
            if (!Number.isSafeInteger(delta) || delta < 0) return null;
            const terminalSide = normalizePrSide(terminal.side);
            const referenceSide = normalizePrSide(reference.side);
            const sidePenalty = terminalSide && referenceSide && terminalSide !== referenceSide ? 1 : 0;
            const sameBranch = Boolean(
                terminal.branchId && reference.branchId && String(terminal.branchId) === String(reference.branchId),
            );
            const branchPenalty = sameBranch && delta <= 2500 ? 0 : 1;
            const geographicDistance = isFiniteCoordinate(terminal.coordinate) && isFiniteCoordinate(reference.coordinate)
                ? haversine(terminal.coordinate, reference.coordinate)
                : Number.POSITIVE_INFINITY;
            return { sidePenalty, branchPenalty, delta, geographicDistance };
        }

        function compareTerminalReferenceScores(left, right) {
            return left.sidePenalty - right.sidePenalty
                || left.branchPenalty - right.branchPenalty
                || left.delta - right.delta
                || left.geographicDistance - right.geographicDistance;
        }

        function enrichTerminalPrDisplay(points) {
            const source = Array.isArray(points) ? points : [];
            const references = source.filter((point) => ["PR", "PR0"].includes(normalizePointType(point?.pointType)));
            return source.map((point) => {
                if (normalizePointType(point?.pointType) !== "PRF") return point;
                if (point.terminalPrNumber !== null && point.terminalPrNumber !== undefined
                    && point.terminalPrOffset !== null && point.terminalPrOffset !== undefined
                    && Number.isInteger(Number(point.terminalPrNumber))
                    && Number.isSafeInteger(Number(point.terminalPrOffset))
                    && Number(point.terminalPrOffset) >= 0) return point;
                let best = null;
                for (const reference of references) {
                    const score = terminalReferenceScore(point, reference);
                    if (!score || (best && compareTerminalReferenceScores(score, best.score) >= 0)) continue;
                    best = { reference, score };
                }
                if (!best) return point;
                return {
                    ...point,
                    terminalPrNumber: Number(best.reference.number),
                    terminalPrOffset: best.score.delta,
                    terminalPrDerivedLocally: true,
                };
            });
        }

        function formatPrPointForDisplay(point) {
            const pointType = normalizePointType(point?.pointType);
            if (pointType === "PRF") {
                const hasTerminalNumber = point?.terminalPrNumber !== null && point?.terminalPrNumber !== undefined;
                const hasTerminalOffset = point?.terminalPrOffset !== null && point?.terminalPrOffset !== undefined;
                const terminalNumber = Number(point?.terminalPrNumber);
                const terminalOffset = Number(point?.terminalPrOffset);
                if (hasTerminalNumber && hasTerminalOffset
                    && Number.isInteger(terminalNumber) && terminalNumber >= 0
                    && Number.isSafeInteger(terminalOffset) && terminalOffset >= 0) {
                    return `${terminalNumber}+${String(terminalOffset).padStart(3, "0")}`;
                }
                const rawNumber = Number(point?.number);
                if (Number.isInteger(rawNumber) && rawNumber >= 0 && rawNumber !== 999) return String(rawNumber);
                return "Fin";
            }
            const number = Number(point?.number);
            const raw = String(point?.rawPointNumber || "").trim();
            if (Number.isInteger(number) && number >= 0 && new RegExp(`^${number}\\+\\d{3,4}$`).test(raw)) return raw;
            return Number.isInteger(number) && number >= 0 ? String(number) : "?";
        }

        function isReferencePoint(point) {
            return ["PR", "PR0", "PRF"].includes(normalizePointType(point?.pointType));
        }

        function hasChainage(point) {
            return point?.abscissa !== null && point?.abscissa !== undefined
                && Number.isSafeInteger(Number(point.abscissa));
        }

        function normalizePrSide(sideValue) {
            const normalized = String(sideValue ?? "")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .trim()
                .toUpperCase();
            return /^(?:U|INDIFFERENCIE)$/.test(normalized) ? "" : normalized;
        }

        function sideMatchesPreference(point, preferredSide) {
            const wanted = normalizePrSide(preferredSide);
            if (!wanted) return true;
            const actual = normalizePrSide(point?.side);
            return !actual || actual === wanted;
        }

        function sidesAreCompatible(leftPoint, rightPoint) {
            const left = normalizePrSide(leftPoint?.side);
            const right = normalizePrSide(rightPoint?.side);
            return !left || !right || left === right;
        }

        function rankPrPoints(prPoints, axisValue, number, options = {}) {
            const preferredCoordinate = options.preferredCoordinate;
            const preferredSide = options.preferredSide;
            return filterPrPoints(prPoints, axisValue, [number])
                .filter(isReferencePoint)
                .filter((point) => sideMatchesPreference(point, preferredSide))
                .map((point) => {
                    const side = normalizePrSide(point.side);
                    const wantedSide = normalizePrSide(preferredSide);
                    const proximity = isFiniteCoordinate(preferredCoordinate)
                        ? haversine(point.coordinate, preferredCoordinate) * 0.02
                        : 0;
                    return {
                        point,
                        score: proximity
                            - (wantedSide && side === wantedSide ? 1000 : 0)
                            + (normalizePointType(point.pointType) === "PRF" ? 20 : 0),
                    };
                })
                .sort((left, right) => left.score - right.score);
        }

        function selectPrPoint(prPoints, axisValue, number, preferredCoordinate = null, preferredSide = "") {
            const candidates = rankPrPoints(prPoints, axisValue, number, { preferredCoordinate, preferredSide });
            if (!candidates.length) return null;
            return candidates[0].point;
        }

        function rankPrPairs(prPoints, axisValue, startNumber, endNumber = startNumber + 1, options = {}) {
            const starts = filterPrPoints(prPoints, axisValue, [startNumber])
                .filter(isReferencePoint)
                .filter((point) => sideMatchesPreference(point, options.preferredSide));
            const ends = filterPrPoints(prPoints, axisValue, [endNumber])
                .filter(isReferencePoint)
                .filter((point) => sideMatchesPreference(point, options.preferredSide));
            const ranked = [];
            for (const start of starts) {
                for (const end of ends) {
                    if (!sidesAreCompatible(start, end)) continue;
                    const distance = haversine(start.coordinate, end.coordinate);
                    const sameKnownBranch = start.branchId && end.branchId && start.branchId === end.branchId;
                    const conflictingKnownBranch = start.branchId && end.branchId && start.branchId !== end.branchId;
                    const sameKnownSide = normalizePrSide(start.side)
                        && normalizePrSide(start.side) === normalizePrSide(end.side);
                    const midpoint = [
                        (start.coordinate[0] + end.coordinate[0]) / 2,
                        (start.coordinate[1] + end.coordinate[1]) / 2,
                    ];
                    const preferredDistance = isFiniteCoordinate(options.preferredCoordinate)
                        ? haversine(midpoint, options.preferredCoordinate) * 0.02
                        : 0;
                    const score = Math.abs(distance - Math.abs(endNumber - startNumber) * 1000)
                        + preferredDistance
                        + (conflictingKnownBranch ? 250 : 0)
                        - (sameKnownBranch ? 750 : 0)
                        - (sameKnownSide ? 250 : 0);
                    ranked.push({
                        start,
                        end,
                        distance,
                        score,
                        sameKnownBranch: Boolean(sameKnownBranch),
                        sameKnownSide: Boolean(sameKnownSide),
                    });
                }
            }
            return ranked.sort((left, right) => left.score - right.score);
        }

        function selectPrPair(prPoints, axisValue, startNumber, endNumber = startNumber + 1, options = {}) {
            return rankPrPairs(prPoints, axisValue, startNumber, endNumber, options)[0] || null;
        }

        function requiredPrNumbers(...parsedPrValues) {
            const numbers = new Set();
            for (const parsed of parsedPrValues.filter(Boolean)) {
                numbers.add(parsed.base);
                if (parsed.offset > 0) numbers.add(parsed.base + 1);
            }
            return [...numbers];
        }

        function lookupPrNumbers(...parsedPrValues) {
            const numbers = new Set();
            for (const parsed of parsedPrValues.filter(Boolean)) {
                numbers.add(parsed.base);
                if (parsed.offset <= 0) continue;
                for (let delta = -2; delta <= 3; delta += 1) {
                    if (parsed.base + delta >= 0) numbers.add(parsed.base + delta);
                }
            }
            return [...numbers].sort((left, right) => left - right);
        }

        function referencePairScore(leftPoint, rightPoint, preferredCoordinate = null) {
            const numberGap = Math.abs(Number(rightPoint.number) - Number(leftPoint.number));
            const distance = haversine(leftPoint.coordinate, rightPoint.coordinate);
            const sameKnownBranch = leftPoint.branchId && rightPoint.branchId
                && leftPoint.branchId === rightPoint.branchId;
            const conflictingKnownBranch = leftPoint.branchId && rightPoint.branchId
                && leftPoint.branchId !== rightPoint.branchId;
            const midpoint = [
                (leftPoint.coordinate[0] + rightPoint.coordinate[0]) / 2,
                (leftPoint.coordinate[1] + rightPoint.coordinate[1]) / 2,
            ];
            const preferredDistance = isFiniteCoordinate(preferredCoordinate)
                ? haversine(midpoint, preferredCoordinate) * 0.02
                : 0;
            return Math.abs(distance - numberGap * 1000)
                + preferredDistance
                + (conflictingKnownBranch ? 250 : 0)
                - (sameKnownBranch ? 750 : 0)
                - (normalizePrSide(leftPoint.side)
                    && normalizePrSide(leftPoint.side) === normalizePrSide(rightPoint.side) ? 250 : 0);
        }

        function chainagePointSort(left, right) {
            const leftOrder = Number(left?.pointOrder);
            const rightOrder = Number(right?.pointOrder);
            if (Number.isFinite(leftOrder) && Number.isFinite(rightOrder) && leftOrder !== rightOrder) {
                return leftOrder - rightOrder;
            }
            const leftAbscissa = Number(left?.abscissa);
            const rightAbscissa = Number(right?.abscissa);
            if (leftAbscissa !== rightAbscissa) return leftAbscissa - rightAbscissa;
            const typeOrder = { PR0: 0, PR: 1, FS: 2, DS: 3, PRF: 4 };
            return (typeOrder[normalizePointType(left?.pointType)] ?? 9)
                - (typeOrder[normalizePointType(right?.pointType)] ?? 9);
        }

        function collectCandidateChainagePoints(points, start, end) {
            if (!hasChainage(start) || !hasChainage(end)) return [];
            const minimumAbscissa = Math.min(start.abscissa, end.abscissa);
            const maximumAbscissa = Math.max(start.abscissa, end.abscissa);
            const startOrder = Number(start.pointOrder);
            const endOrder = Number(end.pointOrder);
            const hasOrderRange = Number.isFinite(startOrder) && Number.isFinite(endOrder);
            const minimumOrder = Math.min(startOrder, endOrder);
            const maximumOrder = Math.max(startOrder, endOrder);
            const unique = new Map();
            for (const point of points || []) {
                if (!hasChainage(point) || !sidesAreCompatible(start, point) || !sidesAreCompatible(end, point)) continue;
                const pointOrder = Number(point.pointOrder);
                const inRange = hasOrderRange && Number.isFinite(pointOrder)
                    ? pointOrder >= minimumOrder && pointOrder <= maximumOrder
                    : point.abscissa >= minimumAbscissa && point.abscissa <= maximumAbscissa;
                if (!inRange) continue;
                const key = point.id || `${point.number}:${point.abscissa}:${normalizePointType(point.pointType)}:${point.coordinate.join(",")}`;
                if (!unique.has(key)) unique.set(key, point);
            }
            for (const point of [start, end]) {
                const key = point.id || `${point.number}:${point.abscissa}:${normalizePointType(point.pointType)}:${point.coordinate.join(",")}`;
                if (!unique.has(key)) unique.set(key, point);
            }
            return [...unique.values()].sort(chainagePointSort);
        }

        function detectDiscontinuities(points) {
            const discontinuities = [];
            const bySide = new Map();
            for (const point of (points || []).filter(hasChainage)) {
                const side = normalizePrSide(point.side);
                if (!bySide.has(side)) bySide.set(side, []);
                bySide.get(side).push(point);
            }
            for (const sidePoints of bySide.values()) {
                const ordered = sidePoints.slice().sort(chainagePointSort);
                for (let index = 0; index < ordered.length - 1; index += 1) {
                    const from = ordered[index];
                    if (normalizePointType(from.pointType) !== "FS") continue;
                    const to = ordered[index + 1];
                    if (normalizePointType(to.pointType) !== "DS") continue;
                    const geographicGap = haversine(from.coordinate, to.coordinate);
                    if (geographicGap < DISCONTINUITY_MIN_GAP_METERS) continue;
                    discontinuities.push({
                        from,
                        to,
                        chainageGap: to.abscissa - from.abscissa,
                        geographicGap,
                    });
                }
            }
            return discontinuities;
        }

        function buildTargetCandidates(prPoints, axisValue, parsedPr, options = {}) {
            const axis = normalizeAxis(axisValue);
            const points = filterPrPoints(prPoints, axis)
                .filter((point) => sideMatchesPreference(point, options.preferredSide));
            if (parsedPr.offset === 0) {
                return rankPrPoints(points, axis, parsedPr.base, options)
                    .filter(({ point }) => referenceBaseOffset(point) === 0)
                    .map(({ point, score }) => ({
                        mode: "integer",
                        start: point,
                        points: [point],
                        score,
                        estimated: false,
                    }));
            }

            const exactPairs = rankPrPairs(points, axis, parsedPr.base, parsedPr.base + 1, options)
                .filter((pair) => parsedPr.offset >= referenceBaseOffset(pair.start));
            if (exactPairs.length) {
                return exactPairs.map((pair) => {
                    // Garde-fou : conserver aussi le meilleur PR antérieur permettant
                    // d'établir le sens N-1 -> N. Il n'est utilisé que si la section
                    // N -> N+1 ne peut pas être reconstruite sur le graphe WME chargé.
                    const previousReference = points
                        .filter(isReferencePoint)
                        .filter((point) => normalizePointType(point.pointType) !== "PRF")
                        .filter((point) => Number(point.number) < parsedPr.base)
                        .filter((point) => sidesAreCompatible(point, pair.start))
                        .map((point) => {
                            const sameKnownBranch = point.branchId && pair.start.branchId
                                && String(point.branchId) === String(pair.start.branchId);
                            const numberGap = parsedPr.base - Number(point.number);
                            return {
                                point,
                                score: referencePairScore(point, pair.start, options.preferredCoordinate)
                                    + numberGap * 100
                                    - (sameKnownBranch ? 1000 : 0),
                            };
                        })
                        .sort((left, right) => left.score - right.score)[0]?.point || null;
                    return {
                        ...pair,
                        mode: "exact",
                        points: [pair.start, pair.end],
                        chainagePoints: collectCandidateChainagePoints(points, pair.start, pair.end),
                        previousReference,
                        estimated: false,
                    };
                });
            }

            const starts = rankPrPoints(points, axis, parsedPr.base, options)
                .map(({ point }) => point)
                .filter((point) => normalizePointType(point.pointType) !== "PRF")
                .filter((point) => parsedPr.offset >= referenceBaseOffset(point));
            const ends = rankPrPoints(points, axis, parsedPr.base + 1, options).map(({ point }) => point);
            const candidates = [];
            if (starts.length && !ends.length) {
                for (const start of starts.filter(hasChainage)) {
                    const targetAbscissa = start.abscissa + parsedPr.offset - referenceBaseOffset(start);
                    const compatibleEndpoints = points.filter((point) => {
                        if (point === start || !hasChainage(point) || !sidesAreCompatible(start, point)) return false;
                        const pointType = normalizePointType(point.pointType);
                        return point.abscissa > start.abscissa
                            && (pointType === "FS" || pointType === "PRF"
                                || (pointType === "DS" && Math.abs(point.abscissa - targetAbscissa) < 0.5));
                    });
                    let terminalPoints = compatibleEndpoints.filter((point) => point.abscissa >= targetAbscissa - 0.5);
                    if (!terminalPoints.length) {
                        terminalPoints = compatibleEndpoints.filter((point) => {
                            const pointType = normalizePointType(point.pointType);
                            if (pointType === "PRF") return true;
                            if (pointType !== "FS") return false;
                            return !points.some((laterPoint) => (
                                normalizePointType(laterPoint.pointType) === "DS"
                                && hasChainage(laterPoint)
                                && laterPoint.abscissa > point.abscissa
                                && sidesAreCompatible(start, laterPoint)
                            ));
                        });
                    }
                    for (const terminal of terminalPoints) {
                        const sameKnownBranch = start.branchId && terminal.branchId
                            && start.branchId === terminal.branchId;
                        candidates.push({
                            mode: "terminal-chainage",
                            start,
                            end: terminal,
                            points: [start, terminal],
                            chainagePoints: collectCandidateChainagePoints(points, start, terminal),
                            score: Math.max(0, terminal.abscissa - targetAbscissa)
                                - (sameKnownBranch ? 500 : 0),
                            estimated: false,
                            terminalPoint: terminal,
                        });
                    }
                }
                if (candidates.length) return candidates.sort((left, right) => left.score - right.score);

                const references = points.filter(isReferencePoint).filter((point) => point.number > parsedPr.base + 1);
                for (const start of starts) {
                    for (const reference of references) {
                        if (!sidesAreCompatible(start, reference)) continue;
                        candidates.push({
                            mode: "single-start",
                            start,
                            reference,
                            from: start,
                            to: reference,
                            points: [start, reference],
                            score: referencePairScore(start, reference, options.preferredCoordinate)
                                + (reference.number - parsedPr.base) * 100,
                            estimated: true,
                            confidence: "moyenne",
                            missingPrNumber: parsedPr.base + 1,
                        });
                    }
                }
                if (!candidates.length) {
                    const previousReferences = points.filter(isReferencePoint)
                        .filter((point) => point.number < parsedPr.base && normalizePointType(point.pointType) !== "PRF")
                        .sort((left, right) => right.number - left.number);
                    for (const start of starts) {
                        for (const reference of previousReferences) {
                            if (!sidesAreCompatible(reference, start)) continue;
                            const numberGap = parsedPr.base - reference.number;
                            candidates.push({
                                mode: "terminal-start",
                                start,
                                reference,
                                from: reference,
                                to: start,
                                points: [reference, start],
                                score: referencePairScore(reference, start, options.preferredCoordinate)
                                    + numberGap * 100,
                                estimated: true,
                                confidence: numberGap === 1 ? "moyenne" : "faible",
                                missingPrNumber: parsedPr.base + 1,
                            });
                        }
                    }
                }
            } else if (ends.length && !starts.length) {
                const references = points.filter(isReferencePoint).filter((point) => point.number < parsedPr.base);
                for (const end of ends) {
                    for (const reference of references) {
                        if (!sidesAreCompatible(reference, end)) continue;
                        candidates.push({
                            mode: "single-end",
                            end,
                            reference,
                            from: reference,
                            to: end,
                            points: [reference, end],
                            score: referencePairScore(reference, end, options.preferredCoordinate)
                                + (parsedPr.base - reference.number) * 100,
                            estimated: true,
                            confidence: "faible",
                            missingPrNumber: parsedPr.base,
                        });
                    }
                }
            }
            return candidates.sort((left, right) => left.score - right.score);
        }

        function nodeKey(nodeId, coordinate) {
            if (nodeId !== null && nodeId !== undefined) return `n:${nodeId}`;
            const lon = Number(coordinate?.[0]);
            const lat = Number(coordinate?.[1]);
            return `c:${lon.toFixed(7)},${lat.toFixed(7)}`;
        }

        function describeSegment(segment) {
            const coordinates = normalizeCoordinates(segment?.geometry?.coordinates);
            if (coordinates.length < 2) return null;
            const metrics = polylineMetrics(coordinates);
            if (!(metrics.length > 0)) return null;
            return {
                id: Number(segment.id),
                segment,
                coordinates,
                length: metrics.length,
                from: nodeKey(segment.fromNodeId, coordinates[0]),
                to: nodeKey(segment.toNodeId, coordinates[coordinates.length - 1]),
            };
        }

        function buildComponent(rawSegments, seedSegmentId) {
            const descriptions = new Map();
            const byNode = new Map();
            for (const segment of rawSegments || []) {
                const description = describeSegment(segment);
                if (!description) continue;
                descriptions.set(description.id, description);
                for (const key of [description.from, description.to]) {
                    if (!byNode.has(key)) byNode.set(key, []);
                    byNode.get(key).push(description.id);
                }
            }

            const seed = Number(seedSegmentId);
            if (!descriptions.has(seed)) return [];
            const queue = [seed];
            const visited = new Set();
            let queueIndex = 0;
            while (queueIndex < queue.length) {
                const segmentId = queue[queueIndex];
                queueIndex += 1;
                if (visited.has(segmentId)) continue;
                visited.add(segmentId);
                const description = descriptions.get(segmentId);
                for (const key of [description.from, description.to]) {
                    for (const connectedId of byNode.get(key) || []) {
                        if (!visited.has(connectedId)) queue.push(connectedId);
                    }
                }
            }
            return [...visited].map((id) => descriptions.get(id));
        }

        function expandRouteSegmentIdsThroughJunctions(routeSegments, allSegments, junctions = []) {
            const allById = new Map();
            const descriptionsById = new Map();
            for (const segment of allSegments || []) {
                const segmentId = Number(segment?.id);
                if (!Number.isInteger(segmentId)) continue;
                allById.set(segmentId, segment);
                const description = describeSegment(segment);
                if (description) descriptionsById.set(segmentId, description);
            }
            const included = new Set();
            const routeEndpointKeys = new Set();
            for (const segment of routeSegments || []) {
                const segmentId = Number(segment?.id);
                const description = descriptionsById.get(segmentId) || describeSegment(segment);
                if (!description) continue;
                included.add(description.id);
                routeEndpointKeys.add(description.from);
                routeEndpointKeys.add(description.to);
            }
            if (!routeEndpointKeys.size) return [...included];

            const junctionIds = new Set();
            for (const junction of junctions || []) {
                if (junction?.id === null || junction?.id === undefined) continue;
                const junctionId = Number(junction.id);
                const memberIds = (junction?.segmentIds || []).map(Number).filter(Number.isInteger);
                if (!Number.isInteger(junctionId) || !memberIds.length) continue;
                const touchesRoute = memberIds.some((segmentId) => {
                    const description = descriptionsById.get(segmentId);
                    return description
                        && (routeEndpointKeys.has(description.from) || routeEndpointKeys.has(description.to));
                });
                if (!touchesRoute) continue;
                junctionIds.add(junctionId);
                for (const segmentId of memberIds) {
                    if (allById.has(segmentId)) included.add(segmentId);
                }
            }

            // Compatibilité/fallback : certains chargements WME exposent junctionId sur les
            // segments avant que le modèle Junction correspondant soit disponible.
            for (const segment of allSegments || []) {
                if (segment?.junctionId === null || segment?.junctionId === undefined) continue;
                const junctionId = Number(segment.junctionId);
                if (!Number.isInteger(junctionId)) continue;
                const description = descriptionsById.get(Number(segment.id));
                if (!description) continue;
                if (routeEndpointKeys.has(description.from) || routeEndpointKeys.has(description.to)) {
                    junctionIds.add(junctionId);
                }
            }
            if (junctionIds.size) {
                for (const segment of allSegments || []) {
                    if (segment?.junctionId === null || segment?.junctionId === undefined) continue;
                    const junctionId = Number(segment.junctionId);
                    const segmentId = Number(segment?.id);
                    if (Number.isInteger(segmentId) && junctionIds.has(junctionId)) included.add(segmentId);
                }
            }
            return [...included];
        }

        function findBestAnchor(prPoints, prNumber, component) {
            let best = null;
            for (const prPoint of (prPoints || []).filter((point) => point.number === prNumber)) {
                for (const segment of component || []) {
                    const projection = projectPointToPolyline(prPoint.coordinate, segment.coordinates);
                    if (!projection) continue;
                    if (!best || projection.distance < best.distance) {
                        best = {
                            ...projection,
                            prPoint,
                            prNumber,
                            segmentId: segment.id,
                        };
                    }
                }
            }
            return best;
        }

        function addDirectedEdge(graph, from, edge) {
            if (!graph.has(from)) graph.set(from, []);
            graph.get(from).push(edge);
        }

        function addUndirectedEdge(graph, from, to, coordinates, segmentId, explicitLength) {
            const cleanCoordinates = removeConsecutiveDuplicates(coordinates);
            const weight = Number.isFinite(explicitLength)
                ? Math.max(0, explicitLength)
                : polylineMetrics(cleanCoordinates).length;
            addDirectedEdge(graph, from, { to, weight, coordinates: cleanCoordinates, segmentId });
            addDirectedEdge(graph, to, {
                to: from,
                weight,
                coordinates: cleanCoordinates.slice().reverse(),
                segmentId,
            });
        }

        function connectVirtualAnchor(graph, virtualNode, anchor, segment) {
            const offset = Math.max(0, Math.min(anchor.offset, segment.length));
            const toFrom = slicePolyline(segment.coordinates, offset, 0);
            const toTo = slicePolyline(segment.coordinates, offset, segment.length);
            addUndirectedEdge(graph, virtualNode, segment.from, toFrom, segment.id, offset);
            addUndirectedEdge(graph, virtualNode, segment.to, toTo, segment.id, segment.length - offset);
        }

        class MinHeap {
            constructor() {
                this.items = [];
            }

            push(item) {
                this.items.push(item);
                let index = this.items.length - 1;
                while (index > 0) {
                    const parent = Math.floor((index - 1) / 2);
                    if (this.items[parent].distance <= item.distance) break;
                    this.items[index] = this.items[parent];
                    index = parent;
                }
                this.items[index] = item;
            }

            pop() {
                if (!this.items.length) return null;
                const first = this.items[0];
                const last = this.items.pop();
                if (this.items.length && last) {
                    let index = 0;
                    while (true) {
                        const left = index * 2 + 1;
                        const right = left + 1;
                        if (left >= this.items.length) break;
                        let smallest = left;
                        if (right < this.items.length && this.items[right].distance < this.items[left].distance) {
                            smallest = right;
                        }
                        if (this.items[smallest].distance >= last.distance) break;
                        this.items[index] = this.items[smallest];
                        index = smallest;
                    }
                    this.items[index] = last;
                }
                return first;
            }
        }

        function shortestPath(graph, start, destination) {
            const distances = new Map([[start, 0]]);
            const previous = new Map();
            const heap = new MinHeap();
            heap.push({ node: start, distance: 0 });

            while (heap.items.length) {
                const current = heap.pop();
                if (!current || current.distance !== distances.get(current.node)) continue;
                if (current.node === destination) break;
                for (const edge of graph.get(current.node) || []) {
                    const nextDistance = current.distance + edge.weight;
                    if (nextDistance < (distances.get(edge.to) ?? Infinity)) {
                        distances.set(edge.to, nextDistance);
                        previous.set(edge.to, { from: current.node, edge });
                        heap.push({ node: edge.to, distance: nextDistance });
                    }
                }
            }

            if (!distances.has(destination)) return null;
            const edges = [];
            let node = destination;
            while (node !== start) {
                const step = previous.get(node);
                if (!step) return null;
                edges.push(step.edge);
                node = step.from;
            }
            edges.reverse();
            return { distance: distances.get(destination), edges };
        }

        function shortestPathBetweenAnchors(component, startAnchor, endAnchor) {
            const byId = new Map((component || []).map((segment) => [segment.id, segment]));
            const startSegment = byId.get(startAnchor?.segmentId);
            const endSegment = byId.get(endAnchor?.segmentId);
            if (!startSegment || !endSegment) return null;

            const graph = new Map();
            for (const segment of component) {
                addUndirectedEdge(graph, segment.from, segment.to, segment.coordinates, segment.id, segment.length);
            }
            const startVirtual = "v:path-start";
            const endVirtual = "v:path-end";
            connectVirtualAnchor(graph, startVirtual, startAnchor, startSegment);
            connectVirtualAnchor(graph, endVirtual, endAnchor, endSegment);
            if (startAnchor.segmentId === endAnchor.segmentId) {
                addUndirectedEdge(
                    graph,
                    startVirtual,
                    endVirtual,
                    slicePolyline(startSegment.coordinates, startAnchor.offset, endAnchor.offset),
                    startSegment.id,
                    Math.abs(endAnchor.offset - startAnchor.offset),
                );
            }
            return shortestPath(graph, startVirtual, endVirtual);
        }

        function projectTargetToComponent(component, target) {
            const preferredId = Number(target?.segmentId);
            let best = null;
            for (const segment of component || []) {
                if (Number.isFinite(preferredId) && segment.id !== preferredId) continue;
                const projection = projectPointToPolyline(target?.point, segment.coordinates);
                if (projection && (!best || projection.distance < best.distance)) {
                    best = { ...projection, segmentId: segment.id };
                }
            }
            if (best || !Number.isFinite(preferredId)) return best;
            for (const segment of component || []) {
                const projection = projectPointToPolyline(target?.point, segment.coordinates);
                if (projection && (!best || projection.distance < best.distance)) {
                    best = { ...projection, segmentId: segment.id };
                }
            }
            return best;
        }

        function pathBetweenTargets({ component, start, end }) {
            const startAnchor = projectTargetToComponent(component, start);
            const endAnchor = projectTargetToComponent(component, end);
            if (!startAnchor || !endAnchor) return null;
            const path = shortestPathBetweenAnchors(component, startAnchor, endAnchor);
            if (!path) return null;
            const coordinates = [];
            const segmentIds = [];
            const componentById = new Map((component || []).map((segment) => [Number(segment.id), segment]));
            const segmentUsageById = new Map();
            const segmentUsageOrder = [];
            for (const edge of path.edges) {
                const last = coordinates[coordinates.length - 1];
                coordinates.push(...(last && edge.coordinates.length && haversine(last, edge.coordinates[0]) < 0.01
                    ? edge.coordinates.slice(1)
                    : edge.coordinates));
                if (edge.segmentId !== null && edge.segmentId !== undefined) {
                    const segmentId = Number(edge.segmentId);
                    segmentIds.push(segmentId);
                    if (!segmentUsageById.has(segmentId)) {
                        segmentUsageById.set(segmentId, 0);
                        segmentUsageOrder.push(segmentId);
                    }
                    segmentUsageById.set(
                        segmentId,
                        segmentUsageById.get(segmentId) + Math.max(0, Number(edge.weight) || 0),
                    );
                }
            }
            const segmentUsages = segmentUsageOrder.map((segmentId) => {
                const traversedLength = segmentUsageById.get(segmentId) || 0;
                const segmentLength = Number(componentById.get(segmentId)?.length);
                const ratio = Number.isFinite(segmentLength) && segmentLength > 0
                    ? Math.max(0, Math.min(1, traversedLength / segmentLength))
                    : null;
                return {
                    segmentId,
                    traversedLength,
                    segmentLength: Number.isFinite(segmentLength) ? segmentLength : null,
                    ratio,
                };
            });
            return {
                distance: path.distance,
                coordinates: removeConsecutiveDuplicates(coordinates),
                segmentIds: [...new Set(segmentIds)],
                segmentUsages,
                startAnchor,
                endAnchor,
            };
        }

        // Rattrapage strict lorsqu'une zone IGN peut être projetée sur un seul
        // segment WME, alors que les localisations indépendantes se sont ancrées
        // sur des segments distincts (par ex. une géométrie de tunnel décalée).
        // Ne jamais fabriquer de jonction entre deux segments déconnectés.
        function recoverSingleSegmentZone({
            component, start, end, expectedDistance,
            maxLateralShiftMeters = 120,
        }) {
            const firstSource = start?.sourcePoint || start?.candidate?.start;
            const lastSource = end?.sourcePoint || end?.candidate?.start;
            if (!firstSource || !lastSource || !isFiniteCoordinate(start?.point)
                || !isFiniteCoordinate(end?.point)) return null;

            // Sans deux références côté/branche explicites, le résultat pourrait
            // viser la chaussée parallèle ou une bretelle : échec plutôt qu'approximation.
            const firstSide = normalizePrSide(firstSource.side);
            const lastSide = normalizePrSide(lastSource.side);
            if (!firstSide || firstSide !== lastSide
                || !firstSource.branchId || !lastSource.branchId
                || firstSource.branchId !== lastSource.branchId) return null;
            const span = Number(expectedDistance);
            if (!Number.isFinite(span) || span < 80 || span > 10000) return null;
            const shifted = Math.min(MAX_ANCHOR_DISTANCE_METERS, maxLateralShiftMeters);
            const allowedLengthError = Math.max(70, span * 0.16);
            const currentIds = new Set([Number(start.segmentId), Number(end.segmentId)]);
            const candidates = [];
            for (const segment of component || []) {
                // Une extrémité doit déjà avoir été localisée sur ce segment.
                // Une route simplement parallèle ne constitue pas une preuve suffisante.
                if (!currentIds.has(Number(segment.id))) continue;
                const first = projectPointToPolyline(start.point, segment.coordinates);
                const last = projectPointToPolyline(end.point, segment.coordinates);
                if (!first || !last || first.distance > shifted || last.distance > shifted) continue;
                const traversed = Math.abs(last.offset - first.offset);
                const discrepancy = Math.abs(traversed - span);
                if (traversed < 80 || discrepancy > allowedLengthError) continue;
                // Projections colinéaires, bornées par le segment : aucun pont virtuel.
                const path = pathBetweenTargets({
                    component: [segment],
                    start: { point: first.point, segmentId: segment.id },
                    end: { point: last.point, segmentId: segment.id },
                });
                if (!path || path.segmentIds.length !== 1 || path.segmentIds[0] !== segment.id) continue;
                const score = first.distance + last.distance + discrepancy * 0.5;
                candidates.push({ path, first, last, score, segmentId: segment.id });
            }
            candidates.sort((a, b) => a.score - b.score);
            const winner = candidates[0];
            if (!winner) return null;
            // Deux chaussées équivalentes géométriquement : ne pas deviner.
            if (candidates[1] && candidates[1].score - winner.score < 30) return null;
            return {
                ...winner.path,
                geometryRecovery: {
                    kind: "single-segment",
                    segmentId: winner.segmentId,
                    originalSegmentIds: [start.segmentId, end.segmentId],
                    sourceSide: firstSide,
                    expectedDistance: span,
                    firstLateralShiftM: winner.first.distance,
                    lastLateralShiftM: winner.last.distance,
                    firstPoint: winner.first.point,
                    lastPoint: winner.last.point,
                },
            };
        }

        function automaticSelectionSegmentIds(results, zonePath = null) {
            const source = Array.isArray(results) ? results : [];
            const segmentIds = [];
            if (source.length > 1) {
                if (Array.isArray(zonePath?.segmentIds) && zonePath.segmentIds.length) {
                    const orderedIds = [...new Set(
                        zonePath.segmentIds.map(Number).filter((id) => Number.isInteger(id) && id > 0),
                    )];

                    // Une zone entièrement située sur un seul segment doit toujours
                    // conserver ce segment dans la sélection, quelle que soit la
                    // proportion de segment réellement parcourue.
                    if (orderedIds.length <= 1) {
                        segmentIds.push(...orderedIds);
                    } else {
                        const usages = new Map(
                            (Array.isArray(zonePath?.segmentUsages) ? zonePath.segmentUsages : [])
                                .map((usage) => [Number(usage?.segmentId), usage]),
                        );
                        const firstId = orderedIds[0];
                        const lastId = orderedIds[orderedIds.length - 1];
                        const boundaryThreshold = 0.10;

                        for (const segmentId of orderedIds) {
                            const isBoundary = segmentId === firstId || segmentId === lastId;
                            if (!isBoundary) {
                                segmentIds.push(segmentId);
                                continue;
                            }

                            const ratio = Number(usages.get(segmentId)?.ratio);
                            // Si le ratio n'est pas calculable, conserver le segment
                            // par sécurité. Sinon, exclure uniquement si moins de 10 %
                            // du segment est réellement compris dans la zone.
                            if (!Number.isFinite(ratio) || ratio >= boundaryThreshold) {
                                segmentIds.push(segmentId);
                            }
                        }
                    }
                } else {
                    for (const result of source) {
                        segmentIds.push(...(Array.isArray(result?.pathSegmentIds) ? result.pathSegmentIds : []));
                        if (result?.segmentId !== null && result?.segmentId !== undefined) segmentIds.push(result.segmentId);
                    }
                }
            } else if (source[0]?.segmentId !== null && source[0]?.segmentId !== undefined) {
                segmentIds.push(source[0].segmentId);
            }
            return [...new Set(segmentIds.map(Number).filter((id) => Number.isInteger(id) && id > 0))];
        }

        function appendPathCoordinates(target, coordinates) {
            const source = normalizeCoordinates(coordinates);
            if (!source.length) return;
            const previous = target[target.length - 1];
            target.push(...(previous && haversine(previous, source[0]) < 0.01 ? source.slice(1) : source));
        }

        function traceForwardFromAnchor({ component, startAnchor, incomingCoordinates, distance }) {
            const requestedDistance = Number(distance);
            if (!(requestedDistance > 0)) {
                return {
                    point: startAnchor.point.slice(),
                    segmentId: startAnchor.segmentId,
                    travelledCoordinates: [startAnchor.point.slice()],
                    pathSegmentIds: [startAnchor.segmentId],
                };
            }

            const incomingBearing = polylineEndBearing(incomingCoordinates);
            if (!Number.isFinite(incomingBearing)) {
                throw new Error("Le PR précédent ne permet pas d’établir la direction de prolongement.");
            }

            const byId = new Map((component || []).map((segment) => [segment.id, segment]));
            const anchorSegment = byId.get(startAnchor?.segmentId);
            if (!anchorSegment) throw new Error("Le segment portant le dernier PR n’est pas disponible.");

            const graph = new Map();
            for (const segment of component) {
                addUndirectedEdge(graph, segment.from, segment.to, segment.coordinates, segment.id, segment.length);
            }

            let currentNode;
            if (startAnchor.offset <= 0.5) currentNode = anchorSegment.from;
            else if (startAnchor.offset >= anchorSegment.length - 0.5) currentNode = anchorSegment.to;
            else {
                currentNode = "v:terminal-start";
                connectVirtualAnchor(graph, currentNode, startAnchor, anchorSegment);
            }

            let remaining = requestedDistance;
            let currentBearing = incomingBearing;
            const travelledCoordinates = [startAnchor.point.slice()];
            const pathSegmentIds = [];
            const visitedSegmentIds = new Set();
            const maximumSteps = Math.max(8, component.length + 2);

            for (let step = 0; step < maximumSteps && remaining > 0.001; step += 1) {
                const choices = (graph.get(currentNode) || [])
                    .filter((edge) => edge.weight > 0.01 && !visitedSegmentIds.has(edge.segmentId))
                    .map((edge) => ({
                        edge,
                        turn: bearingDifference(currentBearing, polylineStartBearing(edge.coordinates)),
                    }))
                    .filter((choice) => Number.isFinite(choice.turn) && choice.turn <= 135)
                    .sort((left, right) => left.turn - right.turn || left.edge.weight - right.edge.weight);

                if (!choices.length) {
                    throw new Error(
                        `Le tracé ${remaining < requestedDistance ? "se termine" : "ne se prolonge pas"} `
                        + `dans le sens croissant avant les +${requestedDistance} m demandés.`,
                    );
                }
                if (choices.length > 1 && choices[1].turn < 75 && choices[1].turn - choices[0].turn < 12) {
                    throw new Error("Plusieurs branches prolongent le dernier PR dans une direction comparable : estimation refusée.");
                }

                const edge = choices[0].edge;
                if (remaining <= edge.weight + 0.001) {
                    const travelledEdge = slicePolyline(edge.coordinates, 0, Math.min(remaining, edge.weight));
                    appendPathCoordinates(travelledCoordinates, travelledEdge);
                    const point = pointAtOffset(edge.coordinates, Math.min(remaining, edge.weight))?.point;
                    if (!point) throw new Error("Le prolongement terminal n’a pas pu être interpolé.");
                    pathSegmentIds.push(edge.segmentId);
                    return {
                        point,
                        segmentId: edge.segmentId,
                        travelledCoordinates: removeConsecutiveDuplicates(travelledCoordinates),
                        pathSegmentIds: [...new Set(pathSegmentIds)],
                    };
                }

                appendPathCoordinates(travelledCoordinates, edge.coordinates);
                pathSegmentIds.push(edge.segmentId);
                visitedSegmentIds.add(edge.segmentId);
                remaining -= edge.weight;
                currentBearing = polylineEndBearing(edge.coordinates);
                currentNode = edge.to;
            }
            throw new Error(`Le tracé chargé est insuffisant pour prolonger le dernier PR de +${requestedDistance} m.`);
        }

        function locateTerminalTarget({ component, candidate, basePr, offset, maxAnchorDistance = MAX_ANCHOR_DISTANCE_METERS }) {
            const previousPoint = candidate?.reference || candidate?.from;
            const lastPoint = candidate?.start || candidate?.to;
            if (!previousPoint || !lastPoint || !(previousPoint.number < lastPoint.number)) {
                throw new Error("Les PR disponibles ne permettent pas d’établir le sens après le dernier PR entier.");
            }
            const previousAnchor = findBestAnchor([previousPoint], previousPoint.number, component);
            const lastAnchor = findBestAnchor([lastPoint], lastPoint.number, component);
            if (!previousAnchor || !lastAnchor) throw new Error("Le dernier PR ou son PR précédent n’a pas pu être rattaché au tracé WME.");
            if (previousAnchor.distance > maxAnchorDistance || lastAnchor.distance > maxAnchorDistance) {
                const uncertain = previousAnchor.distance > maxAnchorDistance ? previousAnchor : lastAnchor;
                throw new Error(`Le PR${uncertain.prNumber} de référence est à ${Math.round(uncertain.distance)} m du tracé WME : prolongement refusé.`);
            }

            const referencePath = pathBetweenTargets({
                component,
                start: { point: previousAnchor.point, segmentId: previousAnchor.segmentId },
                end: { point: lastAnchor.point, segmentId: lastAnchor.segmentId },
            });
            if (!referencePath?.coordinates?.length || !(referencePath.distance > 0)) {
                throw new Error(`Aucun chemin continu trouvé entre PR${previousPoint.number} et PR${basePr}.`);
            }
            const continuation = traceForwardFromAnchor({
                component,
                startAnchor: lastAnchor,
                incomingCoordinates: referencePath.coordinates,
                distance: offset,
            });
            return {
                ...continuation,
                pathLength: offset,
                referencePathLength: referencePath.distance,
                referenceFromNumber: previousPoint.number,
                referenceToNumber: basePr,
                startAnchor: lastAnchor,
                endAnchor: null,
                estimated: true,
                terminalExtrapolation: true,
                confidence: candidate.confidence || (previousPoint.number === basePr - 1 ? "moyenne" : "faible"),
                estimationNote: candidate?.continuityFallback
                    ? `PR${basePr + 1} existe dans l’IGN mais sa section n’est pas reliée de façon exploitable dans WME : `
                        + `le sens est établi par PR${previousPoint.number} → PR${basePr}, puis prolongé uniquement de +${offset} m.`
                    : `PR${basePr + 1} absent et aucune borne terminale IGN exploitable : `
                        + `le sens est prolongé depuis PR${previousPoint.number} → PR${basePr} sur le tracé WME.`,
            };
        }

        function locateEstimatedTarget({ component, candidate, basePr, offset, maxAnchorDistance = MAX_ANCHOR_DISTANCE_METERS }) {
            if (!Array.isArray(component) || !component.length) {
                throw new Error("Aucun segment connecté de cet axe n’est chargé pour l’estimation.");
            }
            const fromPoint = candidate?.from;
            const toPoint = candidate?.to;
            if (!fromPoint || !toPoint || !(toPoint.number > fromPoint.number)) {
                throw new Error("Les PR de référence ne permettent pas d’établir le sens croissant.");
            }
            const fromAnchor = findBestAnchor([fromPoint], fromPoint.number, component);
            const toAnchor = findBestAnchor([toPoint], toPoint.number, component);
            if (!fromAnchor || !toAnchor) {
                throw new Error("Un PR de référence n’a pas pu être rattaché au tracé WME.");
            }
            if (fromAnchor.distance > maxAnchorDistance || toAnchor.distance > maxAnchorDistance) {
                const uncertain = fromAnchor.distance > maxAnchorDistance ? fromAnchor : toAnchor;
                throw new Error(`Le PR${uncertain.prNumber} de référence est à ${Math.round(uncertain.distance)} m du tracé WME : estimation refusée.`);
            }

            const referencePath = pathBetweenTargets({
                component,
                start: { point: fromAnchor.point, segmentId: fromAnchor.segmentId },
                end: { point: toAnchor.point, segmentId: toAnchor.segmentId },
            });
            if (!referencePath?.coordinates?.length || !(referencePath.distance > 0)) {
                throw new Error(`Aucun chemin continu trouvé entre PR${fromPoint.number} et PR${toPoint.number}.`);
            }

            const numberSpan = toPoint.number - fromPoint.number;
            const estimatedIntervalLength = referencePath.distance / numberSpan;
            const baseDistance = fromPoint.number === basePr
                ? 0
                : referencePath.distance * ((basePr - fromPoint.number) / numberSpan);
            const targetDistance = baseDistance + offset;
            if (baseDistance < -0.5 || baseDistance > referencePath.distance + 0.5) {
                throw new Error(`Le PR${basePr} manquant ne peut pas être encadré par les PR de référence disponibles.`);
            }
            if (targetDistance > referencePath.distance + 0.5) {
                throw new Error(
                    `L’estimation atteindrait le PR${toPoint.number} après ${Math.round(referencePath.distance - baseDistance)} m, `
                    + `avant le déport demandé de +${offset} m.`,
                );
            }

            const baseLocation = pointAtOffset(referencePath.coordinates, baseDistance);
            const targetLocation = pointAtOffset(referencePath.coordinates, targetDistance);
            if (!baseLocation?.point || !targetLocation?.point) {
                throw new Error("Le point estimé n’a pas pu être interpolé sur le chemin de référence.");
            }
            const targetProjection = projectTargetToComponent(component, { point: targetLocation.point });
            const travelledCoordinates = slicePolyline(referencePath.coordinates, baseDistance, targetDistance);
            const startKnown = candidate.mode === "single-start";
            return {
                point: targetLocation.point,
                segmentId: targetProjection?.segmentId ?? null,
                pathLength: estimatedIntervalLength,
                referencePathLength: referencePath.distance,
                referenceFromNumber: fromPoint.number,
                referenceToNumber: toPoint.number,
                startAnchor: {
                    ...(startKnown ? fromAnchor : {}),
                    point: baseLocation.point,
                    prNumber: basePr,
                    estimated: !startKnown,
                },
                endAnchor: candidate.mode === "single-end" ? toAnchor : null,
                travelledCoordinates,
                pathSegmentIds: referencePath.segmentIds,
                estimated: true,
                confidence: candidate.confidence || (startKnown ? "moyenne" : "faible"),
                estimationNote: startKnown
                    ? `PR${basePr + 1} absent : sens croissant établi avec le PR${toPoint.number}; la limite de l’intervalle reste non vérifiable.`
                    : `PR${basePr} absent : sa position est interpolée entre PR${fromPoint.number} et PR${toPoint.number}.`,
            };
        }

        function locateTarget({ component, prPoints, basePr, offset, maxAnchorDistance = MAX_ANCHOR_DISTANCE_METERS }) {
            if (!Array.isArray(component) || !component.length) {
                throw new Error("Aucun segment connecté de cet axe n’est chargé autour de la sélection.");
            }
            const startAnchor = findBestAnchor(prPoints, basePr, component);
            if (!startAnchor) throw new Error(`PR${basePr} introuvable parmi les PR récupérés pour cet axe.`);
            if (startAnchor.distance > maxAnchorDistance) {
                throw new Error(`Le PR${basePr} récupéré est à ${Math.round(startAnchor.distance)} m de l’axe sélectionné : résultat trop incertain.`);
            }

            if (offset === 0) {
                return {
                    point: startAnchor.point,
                    segmentId: startAnchor.segmentId,
                    pathLength: 0,
                    startAnchor,
                    endAnchor: null,
                    travelledCoordinates: [startAnchor.point],
                    pathSegmentIds: [startAnchor.segmentId],
                };
            }

            const endAnchor = findBestAnchor(prPoints, basePr + 1, component);
            if (!endAnchor) throw new Error(`PR${basePr + 1} introuvable pour cet axe : le sens croissant ne peut pas être déterminé.`);
            if (endAnchor.distance > maxAnchorDistance) {
                throw new Error(`Le PR${basePr + 1} récupéré est à ${Math.round(endAnchor.distance)} m de l’axe sélectionné : résultat trop incertain.`);
            }

            const byId = new Map(component.map((segment) => [segment.id, segment]));
            const graph = new Map();
            for (const segment of component) {
                addUndirectedEdge(graph, segment.from, segment.to, segment.coordinates, segment.id, segment.length);
            }

            const startVirtual = "v:start";
            const endVirtual = "v:end";
            connectVirtualAnchor(graph, startVirtual, startAnchor, byId.get(startAnchor.segmentId));
            connectVirtualAnchor(graph, endVirtual, endAnchor, byId.get(endAnchor.segmentId));
            if (startAnchor.segmentId === endAnchor.segmentId) {
                const segment = byId.get(startAnchor.segmentId);
                addUndirectedEdge(
                    graph,
                    startVirtual,
                    endVirtual,
                    slicePolyline(segment.coordinates, startAnchor.offset, endAnchor.offset),
                    segment.id,
                    Math.abs(endAnchor.offset - startAnchor.offset),
                );
            }

            const path = shortestPath(graph, startVirtual, endVirtual);
            if (!path) throw new Error(`Aucun chemin continu trouvé entre PR${basePr} et PR${basePr + 1}.`);
            if (offset > path.distance + 0.5) {
                throw new Error(`Le chemin chargé entre les deux PR ne mesure que ${Math.round(path.distance)} m, insuffisant pour +${offset} m.`);
            }

            let remaining = offset;
            const travelledCoordinates = [];
            const pathSegmentIds = [];
            for (const edge of path.edges) {
                if (!edge.coordinates.length) continue;
                const lastTravelled = travelledCoordinates[travelledCoordinates.length - 1];
                const coordinatesToAppend = lastTravelled && haversine(lastTravelled, edge.coordinates[0]) < 0.01
                    ? edge.coordinates.slice(1)
                    : edge.coordinates;

                if (remaining <= edge.weight + 0.001) {
                    const partial = slicePolyline(edge.coordinates, 0, Math.min(remaining, edge.weight));
                    const partialToAppend = lastTravelled && partial.length && haversine(lastTravelled, partial[0]) < 0.01
                        ? partial.slice(1)
                        : partial;
                    travelledCoordinates.push(...partialToAppend);
                    const point = pointAtOffset(edge.coordinates, Math.min(remaining, edge.weight))?.point;
                    return {
                        point,
                        segmentId: edge.segmentId,
                        pathLength: path.distance,
                        startAnchor,
                        endAnchor,
                        travelledCoordinates: removeConsecutiveDuplicates(travelledCoordinates),
                        pathSegmentIds: [...new Set([...pathSegmentIds, edge.segmentId])],
                    };
                }

                travelledCoordinates.push(...coordinatesToAppend);
                pathSegmentIds.push(edge.segmentId);
                remaining -= edge.weight;
            }
            throw new Error("Le point cible n’a pas pu être interpolé sur le chemin calculé.");
        }

        function chainageBoundaryLabel(point, basePoint) {
            const relativeOffset = hasChainage(point) && hasChainage(basePoint)
                ? point.abscissa - basePoint.abscissa
                : 0;
            return `${normalizePointType(point.pointType)} · PR${basePoint.number}+${String(relativeOffset).padStart(3, "0")}`;
        }

        function locateExactChainagePoint({ rawSegments, point, basePoint, maxAnchorDistance }) {
            const descriptions = (rawSegments || []).map(describeSegment).filter(Boolean);
            const anchor = findBestAnchor([point], point.number, descriptions);
            const isAttached = anchor && anchor.distance <= maxAnchorDistance;
            const attachedPoint = isAttached ? anchor.point : point.coordinate.slice();
            const component = isAttached ? buildComponent(rawSegments, anchor.segmentId) : [];
            return {
                point: attachedPoint,
                segmentId: isAttached ? anchor.segmentId : null,
                pathLength: 0,
                startAnchor: {
                    ...(isAttached ? anchor : {}),
                    point: attachedPoint,
                    distance: isAttached ? anchor.distance : 0,
                    prPoint: point,
                    prNumber: basePoint.number,
                    segmentId: isAttached ? anchor.segmentId : null,
                },
                endAnchor: null,
                travelledCoordinates: [attachedPoint],
                pathSegmentIds: isAttached ? [anchor.segmentId] : [],
                component,
                anchorLabel: chainageBoundaryLabel(point, basePoint),
                exactChainagePoint: point,
            };
        }

        function locateWithinChainageSection({
            rawSegments,
            section,
            targetAbscissa,
            basePoint,
            maxAnchorDistance,
            allowTerminalSnap = false,
        }) {
            const descriptions = (rawSegments || []).map(describeSegment).filter(Boolean);
            const sectionStartAnchor = findBestAnchor([section.start], section.start.number, descriptions);
            if (!sectionStartAnchor || sectionStartAnchor.distance > maxAnchorDistance) {
                throw new Error(
                    `${normalizePointType(section.start.pointType)} à l’abscisse ${section.start.abscissa} trop éloigné du tracé WME.`,
                );
            }
            const component = buildComponent(rawSegments, sectionStartAnchor.segmentId);
            const sectionEndAnchor = findBestAnchor([section.end], section.end.number, component);
            if (!sectionEndAnchor || sectionEndAnchor.distance > maxAnchorDistance) {
                throw new Error(
                    `${normalizePointType(section.end.pointType)} à l’abscisse ${section.end.abscissa} non relié à la même section WME.`,
                );
            }
            const sectionPath = pathBetweenTargets({
                component,
                start: { point: sectionStartAnchor.point, segmentId: sectionStartAnchor.segmentId },
                end: { point: sectionEndAnchor.point, segmentId: sectionEndAnchor.segmentId },
            });
            if (!sectionPath?.coordinates?.length) {
                throw new Error("Aucun chemin WME continu dans la section IGN contenant le déport demandé.");
            }
            const requestedDistance = targetAbscissa - section.start.abscissa;
            const pathShortfall = requestedDistance - sectionPath.distance;
            const terminalSnapApplied = allowTerminalSnap
                && pathShortfall > 0.5
                && pathShortfall <= TERMINAL_CHAINAGE_SHORTFALL_TOLERANCE_METERS + 0.001;
            // Si la cible correspond exactement a la borne PRF IGN, sa position
            // constitue une observation directe. Accepter un petit ecart de metrage
            // WME seulement lorsque les deux ancrages sont proches de leurs sources
            // et connectes. Pour un PR intermediaire ou une FS, conserver la limite
            // historique de 15 m. Ne jamais extrapoler au-dela de la borne PRF.
            const exactPrfAnchorApplied = allowTerminalSnap
                && !terminalSnapApplied
                && normalizePointType(section.end.pointType) === "PRF"
                && Math.abs(targetAbscissa - section.end.abscissa) < 0.5
                && requestedDistance > 0
                && pathShortfall > TERMINAL_CHAINAGE_SHORTFALL_TOLERANCE_METERS + 0.001
                && pathShortfall <= EXACT_PRF_TERMINAL_MAX_SHORTFALL_METERS + 0.001
                && pathShortfall / requestedDistance <= EXACT_PRF_TERMINAL_MAX_SHORTFALL_RATIO
                && sectionStartAnchor.distance <= EXACT_PRF_TERMINAL_MAX_LATERAL_DISTANCE_METERS
                && sectionEndAnchor.distance <= EXACT_PRF_TERMINAL_MAX_LATERAL_DISTANCE_METERS;
            if (pathShortfall > 0.5 && !terminalSnapApplied && !exactPrfAnchorApplied) {
                throw new Error(
                    `La section WME ne mesure que ${Math.round(sectionPath.distance)} m, insuffisant pour parcourir ${requestedDistance} m depuis sa borne IGN.`
                    + (allowTerminalSnap
                        ? ` La tolérance terminale maximale de ${TERMINAL_CHAINAGE_SHORTFALL_TOLERANCE_METERS} m est dépassée.`
                        : ""),
                );
            }
            const effectiveDistance = terminalSnapApplied || exactPrfAnchorApplied
                ? sectionPath.distance : requestedDistance;
            const location = pointAtOffset(sectionPath.coordinates, effectiveDistance);
            if (!location?.point) throw new Error("Le déport n’a pas pu être interpolé dans la section IGN.");
            const targetProjection = projectTargetToComponent(component, { point: location.point });
            return {
                point: location.point,
                segmentId: targetProjection?.segmentId ?? null,
                pathLength: sectionPath.distance,
                startAnchor: sectionStartAnchor,
                endAnchor: sectionEndAnchor,
                travelledCoordinates: slicePolyline(sectionPath.coordinates, 0, effectiveDistance),
                pathSegmentIds: sectionPath.segmentIds,
                component,
                anchorLabel: section.start === basePoint
                    ? `PR${basePoint.number}`
                    : chainageBoundaryLabel(section.start, basePoint),
                sectionStartPoint: section.start,
                sectionEndPoint: section.end,
                terminalGeometryAdjustment: terminalSnapApplied || exactPrfAnchorApplied,
                terminalPrfMarkerSnapApplied: exactPrfAnchorApplied,
                terminalGeometryShortfall: terminalSnapApplied || exactPrfAnchorApplied ? pathShortfall : 0,
                geometryAdjustmentBoundaryType: terminalSnapApplied || exactPrfAnchorApplied
                    ? normalizePointType(section.end.pointType)
                    : null,
            };
        }

        function locateChainageTarget({ rawSegments, candidate, basePr, offset, maxAnchorDistance = MAX_ANCHOR_DISTANCE_METERS }) {
            if (candidate?.estimated || !(offset > 0) || !candidate?.start || !candidate?.end) return null;
            const basePoint = candidate.start;
            const endPoint = candidate.end;
            const baseOffset = referenceBaseOffset(basePoint);
            if (offset < baseOffset) return null;
            if (basePoint.number !== basePr || !hasChainage(basePoint) || !hasChainage(endPoint)) return null;
            const chainagePoints = candidate.chainagePoints?.length
                ? candidate.chainagePoints
                : collectCandidateChainagePoints(candidate.points, basePoint, endPoint);
            const discontinuities = detectDiscontinuities(chainagePoints);

            const targetAbscissa = basePoint.abscissa + (offset - baseOffset);
            const terminalPointType = normalizePointType(endPoint.pointType);
            const allowTerminalSnap = candidate.mode === "terminal-chainage"
                && (terminalPointType === "FS" || terminalPointType === "PRF")
                && Math.abs(targetAbscissa - endPoint.abscissa) < 0.5;
            if (targetAbscissa > endPoint.abscissa + 0.5) {
                const endpointLabel = candidate.mode === "terminal-chainage"
                    ? `${normalizePointType(endPoint.pointType)} terminale`
                    : `PR${basePr + 1}`;
                throw new Error(
                    `La borne ${endpointLabel} est atteinte à +${endPoint.abscissa - basePoint.abscissa + baseOffset} m selon l’abscisse IGN, avant +${offset} m.`,
                );
            }

            const exactPoints = chainagePoints.filter((point) => Math.abs(point.abscissa - targetAbscissa) < 0.5);
            if (exactPoints.length > 1) {
                const uniqueCoordinates = new Set(exactPoints.map((point) => point.coordinate.map((value) => value.toFixed(7)).join(",")));
                if (uniqueCoordinates.size > 1) {
                    throw new Error(`Plusieurs bornes IGN distinctes portent l’abscisse ${targetAbscissa} : résultat ambigu.`);
                }
            }

            const sections = [];
            let sectionStart = basePoint;
            for (const discontinuity of discontinuities) {
                sections.push({ start: sectionStart, end: discontinuity.from });
                sectionStart = discontinuity.to;
            }
            sections.push({ start: sectionStart, end: endPoint });

            let located;
            if (exactPoints.length) {
                const exactPoint = exactPoints.slice().sort(chainagePointSort)[0];
                const endingSection = normalizePointType(exactPoint.pointType) !== "DS"
                    ? sections.find((section) => section.end === exactPoint)
                    : null;
                located = endingSection
                    ? {
                        ...locateWithinChainageSection({
                            rawSegments,
                            section: endingSection,
                            targetAbscissa,
                            basePoint,
                            maxAnchorDistance,
                            // Une FS est une borne IGN exacte de fin de section. Elle peut se trouver
                            // à quelques mètres de différence avec le métrage de la géométrie WME
                            // (par exemple à l'entrée d'un rond-point). Dans ce cas on applique la
                            // même petite tolérance que pour une borne terminale, sans l'étendre aux
                            // PR intermédiaires.
                            allowTerminalSnap: (allowTerminalSnap && endingSection.end === endPoint)
                                || normalizePointType(exactPoint.pointType) === "FS",
                        }),
                        exactChainagePoint: exactPoint,
                    }
                    : locateExactChainagePoint({ rawSegments, point: exactPoint, basePoint, maxAnchorDistance });
            } else {
                const section = sections.find((item) => (
                    targetAbscissa > item.start.abscissa && targetAbscissa < item.end.abscissa
                ));
                if (!section) {
                    const gap = discontinuities.find((item) => (
                        targetAbscissa > item.from.abscissa && targetAbscissa < item.to.abscissa
                    ));
                    if (gap) {
                        throw new Error(
                            `L’abscisse ${targetAbscissa} se trouve dans une rupture IGN entre ${gap.from.abscissa} et ${gap.to.abscissa}.`,
                        );
                    }
                    throw new Error(`Aucune section IGN continue ne contient l’abscisse ${targetAbscissa}.`);
                }
                located = locateWithinChainageSection({
                    rawSegments,
                    section,
                    targetAbscissa,
                    basePoint,
                    maxAnchorDistance,
                    allowTerminalSnap: allowTerminalSnap && section.end === endPoint,
                });
            }

            return {
                ...located,
                chainageAware: true,
                targetAbscissa,
                discontinuities,
                terminalBoundaryUsed: candidate.mode === "terminal-chainage",
                discontinuityDetected: discontinuities.length > 0,
                discontinuityApplied: discontinuities.some((item) => targetAbscissa >= item.to.abscissa),
                discontinuityNote: discontinuities.map((item) => (
                    `Discontinuité IGN : ${chainageBoundaryLabel(item.from, basePoint)} → ${chainageBoundaryLabel(item.to, basePoint)}, `
                    + `reprise géographique ${Math.round(item.geographicGap)} m plus loin.`
                )).join(" "),
            };
        }

        function resolveTargetCandidates({ rawSegments, candidates, basePr, offset, maxAnchorDistance = MAX_ANCHOR_DISTANCE_METERS }) {
            const descriptions = (rawSegments || []).map(describeSegment).filter(Boolean);
            if (!descriptions.length) throw new Error("Aucun segment exploitable de cet axe n’est chargé dans WME.");
            const diagnostics = [];
            for (const candidate of candidates || []) {
                try {
                    const chainageResult = locateChainageTarget({
                        rawSegments,
                        candidate,
                        basePr,
                        offset,
                        maxAnchorDistance,
                    });
                    if (chainageResult) {
                        return {
                            ...chainageResult,
                            candidate,
                            sourcePoint: candidate.start,
                            estimated: false,
                        };
                    }
                } catch (error) {
                    // Ne pas abandonner immédiatement ce candidat : un PR N+1 IGN
                    // peut être correct mais devenir inaccessible dans le graphe WME
                    // si un segment intermédiaire ne porte plus le nom de l'axe.
                    diagnostics.push(error?.message || String(error));
                }
                const primaryPoint = candidate.start || candidate.end || candidate.from || candidate.points?.[0];
                const seedAnchor = primaryPoint
                    ? findBestAnchor([primaryPoint], primaryPoint.number, descriptions)
                    : null;
                if (!seedAnchor || seedAnchor.distance > maxAnchorDistance) {
                    diagnostics.push(primaryPoint
                        ? `PR${primaryPoint.number} trop éloigné du tracé chargé`
                        : "candidat sans point d’ancrage");
                    continue;
                }
                const component = buildComponent(rawSegments, seedAnchor.segmentId);
                if (!component.length) continue;
                try {
                    const result = candidate.mode === "terminal-start"
                        ? locateTerminalTarget({ component, candidate, basePr, offset, maxAnchorDistance })
                        : candidate.estimated
                            ? locateEstimatedTarget({ component, candidate, basePr, offset, maxAnchorDistance })
                        : locateTarget({
                            component,
                            prPoints: candidate.points,
                            basePr,
                            offset,
                            maxAnchorDistance,
                        });
                    return {
                        ...result,
                        component,
                        candidate,
                        sourcePoint: candidate.start || candidate.end || primaryPoint,
                        estimated: Boolean(candidate.estimated || result.estimated),
                    };
                } catch (error) {
                    diagnostics.push(error?.message || String(error));

                    // Dernier garde-fou pour un PR N+xx : si N+1 est bien présent
                    // dans l'IGN mais que WME ne permet pas de reconstruire toute la
                    // section N -> N+1, utiliser le sens sûr N-1 -> N puis ne
                    // parcourir que les xx mètres réellement demandés.
                    if (candidate.mode === "exact"
                        && offset > 0
                        && candidate.previousReference
                        && candidate.start
                        && candidate.previousReference.number < candidate.start.number) {
                        try {
                            const fallbackCandidate = {
                                ...candidate,
                                mode: "terminal-start",
                                reference: candidate.previousReference,
                                start: candidate.start,
                                continuityFallback: true,
                                confidence: candidate.previousReference.number === basePr - 1 ? "moyenne" : "faible",
                                estimated: true,
                            };
                            const fallbackResult = locateTerminalTarget({
                                component,
                                candidate: fallbackCandidate,
                                basePr,
                                offset,
                                maxAnchorDistance,
                            });
                            return {
                                ...fallbackResult,
                                component,
                                candidate: fallbackCandidate,
                                sourcePoint: candidate.start,
                                estimated: true,
                            };
                        } catch (fallbackError) {
                            diagnostics.push(fallbackError?.message || String(fallbackError));
                        }
                    }
                }
            }
            const detail = [...new Set(diagnostics)].slice(0, 3).join(" ");
            throw new Error(
                `Aucune branche continue et cohérente n’a pu localiser PR${basePr}${offset ? `+${offset}` : ""}.`
                + (detail ? ` ${detail}` : ""),
            );
        }

        const COMMENT_MIN_VERTEX_DISTANCE_METERS = 2;
        const COMMENT_PATH_SIMPLIFICATION_METERS = 0.75;

        function simplifyCommentPath(coordinates) {
            if (coordinates.length < 3) return coordinates;
            const keep = new Set([0, coordinates.length - 1]);
            const pending = [[0, coordinates.length - 1]];
            while (pending.length) {
                const [start, end] = pending.pop();
                let farthest = -1, maximum = COMMENT_PATH_SIMPLIFICATION_METERS;
                for (let index = start + 1; index < end; index += 1) {
                    const distance = projectPointToPolyline(coordinates[index], [coordinates[start], coordinates[end]])?.distance || 0;
                    if (distance > maximum) { maximum = distance; farthest = index; }
                }
                if (farthest >= 0) { keep.add(farthest); pending.push([start, farthest], [farthest, end]); }
            }
            return [...keep].sort((a, b) => a - b).map((index) => coordinates[index]);
        }

        function cleanCommentRing(rawRing) {
            let points = rawRing.map((point) => [Number(point[0]), Number(point[1])]);
            while (points.length > 1 && haversine(points[0], points.at(-1)) < 0.001) points.pop();
            // Remove dense consecutive vertices, including the last/first seam.
            let changed = true;
            while (changed && points.length > 3) {
                changed = false;
                for (let index = 0; index < points.length; index += 1) {
                    const next = (index + 1) % points.length;
                    if (haversine(points[index], points[next]) < COMMENT_MIN_VERTEX_DISTANCE_METERS) {
                        points.splice(next === 0 ? index : next, 1); changed = true; break;
                    }
                }
            }
            if (points.length < 3) throw new Error("Polygone de note trop petit après nettoyage.");
            // Non-neighbouring near-coincident vertices indicate a pinched contour:
            // do not merge branches or silently change topology.
            for (let left = 0; left < points.length; left += 1) {
                for (let right = left + 1; right < points.length; right += 1) {
                    if (haversine(points[left], points[right]) < COMMENT_MIN_VERTEX_DISTANCE_METERS) {
                        throw new Error("Sommets de la note de carte trop proches après nettoyage.");
                    }
                }
            }
            const origin = points[0];
            const xy = points.map((point) => localMetersVector(origin, point, origin[1]));
            const cross = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
            const epsilon = 1e-7;
            const onSegment = (a, b, p) => Math.abs(cross(a, b, p)) <= epsilon
                && p[0] >= Math.min(a[0], b[0]) - epsilon && p[0] <= Math.max(a[0], b[0]) + epsilon
                && p[1] >= Math.min(a[1], b[1]) - epsilon && p[1] <= Math.max(a[1], b[1]) + epsilon;
            const intersects = (a, b, c, d) => {
                const abC = cross(a, b, c), abD = cross(a, b, d), cdA = cross(c, d, a), cdB = cross(c, d, b);
                return ((abC > epsilon && abD < -epsilon || abC < -epsilon && abD > epsilon)
                    && (cdA > epsilon && cdB < -epsilon || cdA < -epsilon && cdB > epsilon))
                    || onSegment(a, b, c) || onSegment(a, b, d) || onSegment(c, d, a) || onSegment(c, d, b);
            };
            for (let index = 0; index < xy.length; index += 1) {
                const next = (index + 1) % xy.length;
                const previous = (index + xy.length - 1) % xy.length;
                if (Math.abs(cross(xy[previous], xy[index], xy[next])) <= epsilon
                    && (onSegment(xy[previous], xy[index], xy[next]) || onSegment(xy[index], xy[next], xy[previous]))) {
                    throw new Error("Contour de note replié sur lui-même.");
                }
                for (let other = index + 1; other < xy.length; other += 1) {
                    const otherNext = (other + 1) % xy.length;
                    if (next === other || otherNext === index) continue;
                    if (intersects(xy[index], xy[next], xy[other], xy[otherNext])) {
                        throw new Error("Le contour de la note de carte se croise.");
                    }
                }
            }
            const twiceArea = xy.reduce((sum, point, index) => {
                const next = xy[(index + 1) % xy.length]; return sum + point[0] * next[1] - next[0] * point[1];
            }, 0);
            if (Math.abs(twiceArea) < 2) throw new Error("Surface de note de carte insuffisante.");
            return [...points, points[0].slice()];
        }

        function normalizeCommentGeometry(geometry) {
            if (!geometry || !["Point", "Polygon"].includes(geometry.type)) {
                throw new Error("Géométrie de note de carte invalide.");
            }
            if (geometry.type === "Point") {
                const point = geometry.coordinates?.map(Number);
                if (point?.length !== 2 || !point.every(Number.isFinite)) {
                    throw new Error("Coordonnées de la note de carte invalides.");
                }
                return { type: "Point", coordinates: point };
            }
            let ring = geometry.coordinates?.[0]?.map((coordinate) => [Number(coordinate?.[0]), Number(coordinate?.[1])]);
            if (!ring || ring.length < 3 || ring.some((coordinate) => !coordinate.every(Number.isFinite))) {
                throw new Error("Polygone de note de carte invalide.");
            }
            const first = ring[0];
            const last = ring[ring.length - 1];
            if (first[0] !== last[0] || first[1] !== last[1]) ring = [...ring, [...first]];
            if (ring.length < 4) throw new Error("Le polygone de note de carte doit contenir au moins trois sommets.");
            return { type: "Polygon", coordinates: [cleanCommentRing(ring)] };
        }

        function trianglePolygonAroundPoint(point, sideLengthMeters = 40, rawCoordinates = null) {
            const center = Array.isArray(point) ? point.map(Number) : null;
            if (center?.length !== 2 || !center.every(Number.isFinite)) {
                throw new Error("Coordonnées du PR invalides pour créer le triangle de note de carte.");
            }
            const sideLength = Math.max(4, Number(sideLengthMeters) || 40);
            let tangentEast = 0;
            let tangentNorth = 1;
            const coordinates = normalizeCoordinates(rawCoordinates);
            if (coordinates.length >= 2) {
                const projection = projectPointToPolyline(center, coordinates);
                const segmentIndex = Math.max(0, Math.min(
                    coordinates.length - 2,
                    Number.isInteger(projection?.segmentIndex) ? projection.segmentIndex : 0,
                ));
                let tangent = localMetersVector(
                    coordinates[segmentIndex],
                    coordinates[segmentIndex + 1],
                    center[1],
                );
                if (!tangent || Math.hypot(tangent[0], tangent[1]) < 0.001) {
                    tangent = localMetersVector(coordinates[0], coordinates.at(-1), center[1]);
                }
                const tangentLength = tangent ? Math.hypot(tangent[0], tangent[1]) : 0;
                if (tangentLength > 0) {
                    tangentEast = tangent[0] / tangentLength;
                    tangentNorth = tangent[1] / tangentLength;
                }
            }

            // Triangle équilatéral centré sur le PR. Un sommet suit la tangente locale de la route.
            const vertexRadius = sideLength / Math.sqrt(3);
            const edgeRadius = sideLength / (2 * Math.sqrt(3));
            const halfSide = sideLength / 2;
            const normalEast = -tangentNorth;
            const normalNorth = tangentEast;
            const apex = coordinateFromLocalMeters(
                center,
                tangentEast * vertexRadius,
                tangentNorth * vertexRadius,
            );
            const baseCenter = coordinateFromLocalMeters(
                center,
                -tangentEast * edgeRadius,
                -tangentNorth * edgeRadius,
            );
            const baseLeft = coordinateFromLocalMeters(
                baseCenter,
                normalEast * halfSide,
                normalNorth * halfSide,
            );
            const baseRight = coordinateFromLocalMeters(
                baseCenter,
                -normalEast * halfSide,
                -normalNorth * halfSide,
            );
            return normalizeCommentGeometry({
                type: "Polygon",
                coordinates: [[apex, baseLeft, baseRight, apex]],
            });
        }

        function bufferPolylinePolygon(rawCoordinates, widthMeters = 30) {
            let coordinates = removeConsecutiveDuplicates(rawCoordinates);
            if (coordinates.length < 2) return null;
            const maxPathVertices = 120;
            if (coordinates.length > maxPathVertices) {
                const sampled = [];
                for (let index = 0; index < maxPathVertices; index += 1) {
                    const sourceIndex = Math.round(index * (coordinates.length - 1) / (maxPathVertices - 1));
                    const coordinate = coordinates[sourceIndex];
                    if (!sampled.length || haversine(sampled[sampled.length - 1], coordinate) > 0.001) sampled.push(coordinate);
                }
                coordinates = sampled;
            }
            if (coordinates.length < 2) return null;
            coordinates = simplifyCommentPath(coordinates);
            const halfWidth = Math.max(2, Number(widthMeters) || 30) / 2;
            const left = [];
            const right = [];
            for (let index = 0; index < coordinates.length; index += 1) {
                const current = coordinates[index];
                const previous = coordinates[Math.max(0, index - 1)];
                const next = coordinates[Math.min(coordinates.length - 1, index + 1)];
                let tangent = localMetersVector(previous, next, current[1]);
                if (!tangent || Math.hypot(tangent[0], tangent[1]) < 0.001) {
                    tangent = index === 0
                        ? localMetersVector(current, next, current[1])
                        : localMetersVector(previous, current, current[1]);
                }
                const length = tangent ? Math.hypot(tangent[0], tangent[1]) : 0;
                if (!(length > 0)) continue;
                const normalEast = -tangent[1] / length;
                const normalNorth = tangent[0] / length;
                left.push(coordinateFromLocalMeters(current, normalEast * halfWidth, normalNorth * halfWidth));
                right.push(coordinateFromLocalMeters(current, -normalEast * halfWidth, -normalNorth * halfWidth));
            }
            if (left.length < 2 || right.length < 2) return null;
            const ring = [...left, ...right.reverse()];
            ring.push(ring[0].slice());
            try { return normalizeCommentGeometry({ type: "Polygon", coordinates: [ring] }); }
            catch { return null; } // Native note creation will use the encompassing fallback.
        }

        function expandedBoundsPolygon(rawCoordinates, paddingMeters = 25) {
            const coordinates = normalizeCoordinates(rawCoordinates);
            if (!coordinates.length) return null;
            let minLon = Infinity;
            let maxLon = -Infinity;
            let minLat = Infinity;
            let maxLat = -Infinity;
            for (const coordinate of coordinates) {
                minLon = Math.min(minLon, coordinate[0]);
                maxLon = Math.max(maxLon, coordinate[0]);
                minLat = Math.min(minLat, coordinate[1]);
                maxLat = Math.max(maxLat, coordinate[1]);
            }
            const center = [(minLon + maxLon) / 2, (minLat + maxLat) / 2];
            const metersPerDegreeLat = Math.PI * EARTH_RADIUS_METERS / 180;
            const metersPerDegreeLon = metersPerDegreeLat * Math.cos(toRadians(center[1]));
            const padding = Math.max(2, Number(paddingMeters) || 25);
            const lonPad = padding / Math.max(1, Math.abs(metersPerDegreeLon));
            const latPad = padding / metersPerDegreeLat;
            const ring = [
                [minLon - lonPad, minLat - latPad],
                [maxLon + lonPad, minLat - latPad],
                [maxLon + lonPad, maxLat + latPad],
                [minLon - lonPad, maxLat + latPad],
                [minLon - lonPad, minLat - latPad],
            ];
            return normalizeCommentGeometry({ type: "Polygon", coordinates: [ring] });
        }

        return {
            nationalMotorwayDestinations: NATIONAL_MOTORWAY_DESTINATIONS,
            nationalMotorwayDestinationsVersion: NATIONAL_MOTORWAY_DESTINATIONS_VERSION,
            nationalMotorwayDestinationCount: NATIONAL_MOTORWAY_DESTINATION_COUNT,
            axisPattern,
            buildTargetCandidates,
            buildComponent,
            expandRouteSegmentIdsThroughJunctions,
            computePolylineLabelOffset,
            cartoucheScreenRect,
            cartoucheRectsOverlap,
            layoutCartoucheCollisions,
            describeSegment,
            extractAxisCodes,
            filterPrPoints,
            findBestAnchor,
            formatPrSideForDisplay,
            formatPrPointForDisplay,
            referenceBaseOffset,
            enrichTerminalPrDisplay,
            normalizeMotorwayDestinationScopeKey,
            normalizeMotorwayDestinationTable,
            parseMotorwayDestinationText,
            formatMotorwayDestinationText,
            motorwayDestinationForSide,
            buildPrCartoucheDescriptor,
            trianglePolygonAroundPoint,
            bufferPolylinePolygon,
            expandedBoundsPolygon,
            normalizeCommentGeometry,
            haversine,
            isReferencePoint,
            isRetryablePrIndexError,
            locateEstimatedTarget,
            locateChainageTarget,
            locateTarget,
            lookupPrNumbers,
            normalizeAppearanceSettings,
            bboxContains,
            expandBbox,
            normalizeAxis,
            normalizeIntercommunalAxis,
            routeFamilyFromAxis,
            normalizeBbox,
            normalizeDepartmentCode,
            pathBetweenTargets,
            recoverSingleSegmentZone,
            automaticSelectionSegmentIds,
            parsePrPayload,
            parsePrRecord,
            parsePr,
            detectDiscontinuities,
            pointAtOffset,
            polylineMetrics,
            projectPointToPolyline,
            requiredPrNumbers,
            resolveTargetCandidates,
            rankPrPairs,
            selectPrPair,
            selectPrPoint,
            shortestPath,
            slicePolyline,
            streetNameMatchesAxis,
        };
    })();

    if (typeof module === "object" && module.exports) module.exports = Core;
    if (!root || !root.document) return;

    let sdk;
    function observeAsync(task, label) {
        Promise.resolve(task).catch((error) => {
            console.error(`${SCRIPT_NAME}: ${label}`, error);
        });
    }

    // Les méthodes de lecture SDK sont mises en cache à la révision des données
    // WME. Le même instantané est partagé entre la recherche et les cartouches.
    let mapModelSnapshotPromise = null;
    let mapJunctionsSnapshotPromise = null;
    let prIndexCurrentZoom = NaN;
    let prIndexDrawRevision = 0;
    let prIndexDrawQueue = Promise.resolve();
    let resultRenderQueue = Promise.resolve();
    let resultRenderRevision = 0;
    let resultLayerInitialization = null;
    let selectionSummaryRevision = 0;
    // Garde-fou contre les changements rapides de visibilité du calque PR :
    // seul le dernier état demandé doit rester appliqué au SDK.
    let prIndexVisibilityQueue = Promise.resolve();
    let prIndexVisibilityRevision = 0;
    let sdkModeDiagnostic = { scriptVersion: VERSION, mode: "non vérifié", sdkVersion: "inconnue", wmeVersion: "inconnue" };

    async function inspectSdkCompatibility() {
        // Vérifier la réponse réelle du SDK : l'option mode: "async" peut être
        // ignorée par un WME plus ancien. Dans ce cas on refuse l'initialisation.
        const observed = sdk?.Map?.getZoomLevel?.();
        if (!observed || typeof observed.then !== "function") {
            sdkModeDiagnostic = {
                scriptVersion: VERSION,
                mode: "SDK asynchrone indisponible",
                sdkVersion: "inconnue",
                wmeVersion: "inconnue",
            };
            throw new Error("SDK WME asynchrone requis : Map.getZoomLevel() doit retourner une Promise.");
        }
        await observed;
        const version = async (method) => {
            if (typeof method !== "function") return "inconnue";
            try { return String(await method.call(sdk)); }
            catch (error) { return "inconnue"; }
        };
        sdkModeDiagnostic = {
            scriptVersion: VERSION,
            mode: "async confirmé",
            sdkVersion: await version(sdk.getSDKVersion),
            wmeVersion: await version(sdk.getWMEVersion),
        };
        console.info(`${SCRIPT_NAME}: SDK asynchrone confirmé`, sdkModeDiagnostic);
        return sdkModeDiagnostic;
    }

    async function getMapModelSnapshot() {
        if (!mapModelSnapshotPromise) {
            const revision = routeDataRevision;
            const request = Promise.all([
                sdk.DataModel.Segments.getAll(),
                sdk.DataModel.Streets.getAll(),
            ]).then(([segments, streets]) => ({
                segments: Array.isArray(segments) ? segments : [],
                streets: Array.isArray(streets) ? streets : [],
                revision,
                descriptions: null,
            }));
            const tracked = request.catch((error) => {
                if (mapModelSnapshotPromise === tracked) mapModelSnapshotPromise = null;
                throw error;
            });
            mapModelSnapshotPromise = tracked;
        }
        const snapshot = await mapModelSnapshotPromise;
        if (snapshot.revision !== routeDataRevision) return getMapModelSnapshot();
        return snapshot;
    }

    async function getMapJunctionsSnapshot() {
        if (!mapJunctionsSnapshotPromise) {
            const revision = routeDataRevision;
            const request = Promise.resolve().then(() => sdk.DataModel.Junctions.getAll())
                .then((junctions) => ({ revision, junctions: Array.isArray(junctions) ? junctions : [] }))
                .catch((error) => {
                    console.warn(`${SCRIPT_NAME}: jonctions SDK indisponibles ; repli par junctionId`, error);
                    return { revision, junctions: [] };
                });
            mapJunctionsSnapshotPromise = request;
        }
        const snapshot = await mapJunctionsSnapshotPromise;
        if (snapshot.revision !== routeDataRevision) return getMapJunctionsSnapshot();
        return snapshot.junctions;
    }

    async function getMapSegmentDescriptions() {
        const snapshot = await getMapModelSnapshot();
        if (!snapshot.descriptions) {
            snapshot.descriptions = snapshot.segments.map(Core.describeSegment).filter(Boolean);
        }
        return snapshot.descriptions;
    }

    let ui;
    let latestResult = null;
    let selectionEventBound = false;
    let layerCheckboxBound = false;
    let prIndexMapEventsBound = false;
    let prIndexLayerInitialized = false;
    let prIndexLayerEnabled = false;
    let prIndexRefreshTimer = null;
    let prIndexRefreshPendingForce = false;
    let prIndexViewReadRevision = 0;
    let prIndexActiveViewKey = "";
    let prIndexActiveRefresh = null;
    let prIndexLayoutTimer = null;
    let prLabelIndexTimer = null;
    let prLabelSegmentSpatialIndex = null;
    let prLabelSegmentSpatialIndexReady = null;
    let prLabelPlacementRevision = 0;
    let prIndexRefreshGeneration = 0;
    const prIndexRequestsInFlight = new Map();
    let prIndexCache = null;
    let prIndexAxisFilter = null;
    let prIndexRenderedLayoutKey = "";
    let prIndexRenderedFeatureKey = "";
    let appearanceSettings = Core.normalizeAppearanceSettings();
    let motorwayDestinationOverrides = {};
    let displayMode = "sidebar";
    let searchRouteType = "D";
    let currentCountry = "FR";
    let currentLanguage = "fr";
    let intercommunalManagersLoaded = false;
    let intercommunalManagers = [];
    let intercommunalAxesByManager = new Map();
    let intercommunalAxesRequestsByManager = new Map();
    let intercommunalScopesByAxis = new Map();
    let intercommunalAutoSelectGeneration = 0;
    let intercommunalOptionsRequest = null;
    let routeDataRevision = 0;
    let routeSnapshotCache = new Map();
    let prCartoucheDescriptorCache = new Map();
    let floatingHost = null;
    let floatingResizeObserver = null;
    let floatingCollapsed = false;
    let floatingZIndex = 10050;
    let locateInProgress = false;
    const COUNTRY_CONFIG = Object.freeze({
        FR: Object.freeze({
            flag: "🇫🇷",
            label: "France",
            defaultLanguage: "fr",
            source: "IGN BD TOPO",
        }),
        CO: Object.freeze({
            flag: "🇨🇴",
            label: "Colombia",
            defaultLanguage: "es",
            source: "INVÍAS · Red Vial · BETA",
        }),
    });

    const UI_TRANSLATIONS = Object.freeze({
        fr: Object.freeze({
            title: "Localisateur de PR",
            customize: "Personnaliser",
            back: "Retour",
            detach: "Détacher",
            attach: "Rattacher",
            country: "Pays",
            language: "Langue",
            selectionEmpty: "Segment sélectionné : facultatif",
            department: "Département",
            manager: "Gestionnaire / territoire",
            axisFR: "Axe",
            axisCO: "Código de vía",
            side: "Chaussée / sens — facultatif",
            sideRequired: "Chaussée / sens — obligatoire",
            firstPr: "Premier PR — obligatoire",
            secondPr: "Deuxième PR — facultatif",
            textSearch: "Recherche depuis un texte",
            textSearchPlaceholder: "Ex. D1084 — travaux du PR 35+250 au PR 37+1350",
            textSearchAction: "Analyser et rechercher",
            sourceInfoTitle: "Sources et confidentialité",
            franceSourceInfo: "France : IGN BD TOPO® v3 — classe Point de repère. Licence Ouverte Etalab 2.0, © IGN. Lots importés dans Supabase les 6 et 7 août 2026 ; date exacte d’édition IGN non conservée. Six coordonnées A40 (PR 120 à 122, côtés D/G) ont été corrigées par l’auteur. Cette adaptation n’est pas un service officiel IGN.",
            colombiaSourceInfo: "Colombie BETA : données INVÍAS / Red Vial, hébergées par l’auteur. Extraction d’origine, données dérivées et conditions de réutilisation : clarification écrite demandée à INVÍAS, réponse attendue. Aucune autorisation spécifique n’est annoncée à ce stade. La copie contient aussi des attributions IGAC et Google Maps à clarifier.",
            sourceServerInfo: "Service : projet Liste PR France, hébergé sur Supabase et géré par l’auteur. Les requêtes HTTPS transmettent les critères de recherche (axe, PR, département et éventuellement gestionnaire) ou l’emprise visible de WME pour le calque PR. Aucun pseudonyme Waze ni identifiant d’objet WME n’est ajouté aux requêtes. Le script consulte les données en lecture seule avec une clé publique.",
            connectionPrivacyInfo: "Données de connexion : Supabase reçoit techniquement l’adresse IP et les requêtes nécessaires au service. Les critères de recherche sont transmis dans le corps des requêtes HTTPS, sans cookies. Des journaux techniques peuvent être conservés par l’hébergeur ; leur durée de conservation dépend de sa configuration. Aucune durée ni anonymisation particulière n’est garantie ici.",
            localPrivacyInfo: "Stockage local : Tampermonkey conserve les préférences du panneau, des calques, du pays, de la langue et le cache de vérification de version. Le Localisateur ne conserve pas d’historique de recherches. Ses requêtes externes n’envoient pas de cookies. Une recherche de mise à jour GreasyFork est possible uniquement depuis une installation associée à une URL GreasyFork reconnue, au plus une fois toutes les 24 heures. La création d’une note de carte WME exige une action de votre part.",
            sourceIgnLink: "Source officielle IGN — BD TOPO®",
            sourceLicenseLink: "Licence Ouverte 2.0",
            autoSelect: "Sélectionner automatiquement le segment du PR ou tous les segments de la zone",
            filterAxis: "Afficher uniquement cet axe",
            filterAll: "Afficher tous les PR",
            locate: "Rechercher et localiser",
            addNote: "Ajouter une note",
            copyPermalink: "Copier le permalink",
            openPermalink: "Ouvrir le permalink",
            clearResult: "Vider le résultat",
            franceHelp: "Le sens permet de forcer une chaussée ; sinon la branche cohérente la plus proche est choisie. Le deuxième PR permet d’afficher une zone sur le même axe. Les PR doivent être saisis au format 52+000 ou 60+007.",
            motorwayHelp: "Autoroutes Axx : choisissez le sens de circulation (Sens 1 par défaut ou Sens 2). Le choix est obligatoire et conservé pendant la recherche. Les PR doivent être saisis au format 52+000 ou 60+007.",
            colombiaHelp: "Colombie BETA : saisissez le Código de vía visible dans WME (ex. 4005 ou 6510) et le PR au format 65+500. Le calcul est recalé entre les références officielles encadrantes sur la géométrie WME.",
            colombiaStatus: "Mode Colombie BETA : saisissez le Código de vía et le PR à localiser.",
            franceStatus: "Choisissez le type de route, l’axe et le premier PR.",
            unavailable: "Données Colombie momentanément indisponibles dans la base du Localisateur PR. Réessayez ultérieurement.",
        }),
        es: Object.freeze({
            title: "Localizador de PR",
            customize: "Personalizar",
            back: "Volver",
            detach: "Separar",
            attach: "Acoplar",
            country: "País",
            language: "Idioma",
            selectionEmpty: "Segmento seleccionado: opcional",
            department: "Departamento",
            manager: "Gestor / territorio",
            axisFR: "Eje",
            axisCO: "Código de vía",
            side: "Calzada / sentido — opcional",
            sideRequired: "Calzada / sentido — obligatorio",
            firstPr: "Primer PR — obligatorio",
            secondPr: "Segundo PR — opcional",
            textSearch: "Búsqueda desde un texto",
            textSearchPlaceholder: "Ej. D1084 — obras del PR 35+250 al PR 37+800",
            textSearchAction: "Analizar y buscar",
            sourceInfoTitle: "Fuentes y privacidad",
            franceSourceInfo: "Francia: IGN BD TOPO® v3, capa de hitos kilométricos. Licencia Abierta Etalab 2.0, © IGN. Lotes importados en Supabase el 6 y 7 de agosto de 2026; fecha exacta de edición IGN no conservada. El autor corrigió seis coordenadas A40 (PR 120 a 122, lados D/G). Esta adaptación no es un servicio oficial del IGN.",
            colombiaSourceInfo: "Colombia BETA: datos INVÍAS / Red Vial alojados por el autor. Extracción original, datos derivados y condiciones de reutilización: se ha solicitado una aclaración escrita a INVÍAS y se espera su respuesta. No se anuncia una autorización específica. La copia también contiene atribuciones a IGAC y Google Maps pendientes de aclaración.",
            sourceServerInfo: "Servicio: proyecto Liste PR France, alojado en Supabase y gestionado por el autor. Las solicitudes HTTPS transmiten los criterios de búsqueda (vía, PR, departamento y, si procede, gestor) o la extensión visible de WME para la capa PR. No se añaden nombres de usuario Waze ni identificadores de objetos WME. El script consulta los datos en modo de solo lectura con una clave pública.",
            connectionPrivacyInfo: "Datos de conexión: Supabase recibe técnicamente la dirección IP y las solicitudes necesarias para el servicio. Los criterios de búsqueda se envían en el cuerpo de las solicitudes HTTPS, sin cookies. El proveedor puede conservar registros técnicos según su configuración; aquí no se garantiza un plazo de conservación ni una anonimización específicos.",
            localPrivacyInfo: "Almacenamiento local: Tampermonkey conserva las preferencias del panel, las capas, el país, el idioma y el estado de comprobación de versiones. El Localizador no guarda un historial de búsquedas. Las peticiones externas no envían cookies. Solo se comprueba GreasyFork si la instalación tiene una URL GreasyFork reconocida, como máximo una vez cada 24 horas. Las notas de mapa WME se crean únicamente por acción del usuario.",
            sourceIgnLink: "Fuente oficial IGN — BD TOPO®",
            sourceLicenseLink: "Licence Ouverte 2.0",
            autoSelect: "Seleccionar automáticamente el segmento del PR o todos los segmentos de la zona",
            filterAxis: "Mostrar solo esta vía",
            filterAll: "Mostrar todos los PR",
            locate: "Buscar y localizar",
            addNote: "Añadir nota",
            copyPermalink: "Copiar permalink",
            openPermalink: "Abrir permalink",
            clearResult: "Borrar resultado",
            franceHelp: "El sentido permite forzar una calzada; de lo contrario se elige la rama coherente más cercana. El segundo PR permite mostrar una zona en el mismo eje.",
            motorwayHelp: "Autopistas Axx: elija el sentido de circulación (Sentido 1 por defecto o Sentido 2). La selección es obligatoria y se mantiene durante la búsqueda.",
            colombiaHelp: "Colombia BETA: introduce el Código de vía visible en WME (p. ej. 4005 o 6510) y el PR en formato 65+500. El cálculo se recalibra entre las referencias oficiales que lo enmarcan sobre la geometría de WME.",
            colombiaStatus: "Modo Colombia BETA: introduce el Código de vía y el PR que deseas localizar.",
            franceStatus: "Elige el tipo de vía, el eje y el primer PR.",
            unavailable: "Los datos de Colombia no están disponibles temporalmente en la base del Localizador de PR. Vuelve a intentarlo.",
        }),
        en: Object.freeze({
            title: "PR Locator",
            customize: "Customize",
            back: "Back",
            detach: "Detach",
            attach: "Attach",
            country: "Country",
            language: "Language",
            selectionEmpty: "Selected segment: optional",
            department: "Department",
            manager: "Manager / territory",
            axisFR: "Road",
            axisCO: "Road code",
            side: "Carriageway / direction — optional",
            sideRequired: "Carriageway / direction — required",
            firstPr: "First PR — required",
            secondPr: "Second PR — optional",
            textSearch: "Search from text",
            textSearchPlaceholder: "E.g. D1084 — works from PR 35+250 to PR 37+800",
            textSearchAction: "Parse and search",
            sourceInfoTitle: "Sources and privacy",
            franceSourceInfo: "France: IGN BD TOPO® v3, road reference point class. Etalab Open Licence 2.0, © IGN. Batches imported into Supabase on 6 and 7 August 2026; exact IGN edition date was not retained. The author corrected six A40 coordinates (PR 120–122, sides D/G). This adaptation is not an official IGN service.",
            colombiaSourceInfo: "Colombia BETA: INVÍAS / Red Vial data hosted by the author. Written clarification of the original extraction, derived data and reuse terms has been requested from INVÍAS; a response is pending. No specific authorization is claimed. The copy also contains IGAC and Google Maps attributions requiring clarification.",
            sourceServerInfo: "Service: Liste PR France project, hosted on Supabase and managed by the author. HTTPS requests send search criteria (road, PR, department and optional manager) or the visible WME map extent for the PR layer. No Waze usernames or WME object IDs are added. The script reads data using a public key.",
            connectionPrivacyInfo: "Connection data: Supabase technically receives the IP address and requests needed to provide the service. Search criteria are sent in HTTPS request bodies without cookies. The host may keep technical logs according to its configuration; no specific retention period or anonymization is guaranteed here.",
            localPrivacyInfo: "Local storage: Tampermonkey stores panel, layer, country and language preferences and the version-check cache. The Locator does not maintain a search history. External requests do not send cookies. GreasyFork updates are checked only when the installation has a recognized GreasyFork URL, at most once every 24 hours. WME map notes are created only on user action.",
            sourceIgnLink: "Official IGN source — BD TOPO®",
            sourceLicenseLink: "Open Licence 2.0",
            autoSelect: "Automatically select the PR segment or all segments in the zone",
            filterAxis: "Show only this road",
            filterAll: "Show all PRs",
            locate: "Search and locate",
            addNote: "Add map note",
            copyPermalink: "Copy permalink",
            openPermalink: "Open permalink",
            clearResult: "Clear result",
            franceHelp: "Direction can force a carriageway; otherwise the nearest coherent branch is chosen. A second PR displays a zone on the same road.",
            motorwayHelp: "Axx motorways: select a direction (Direction 1 by default or Direction 2). A direction is required and remains selected during the search.",
            colombiaHelp: "Colombia BETA: enter the road code shown in WME (for example 4005 or 6510) and a PR such as 65+500. The result is recalibrated between the surrounding official references on WME geometry.",
            colombiaStatus: "Colombia BETA mode: enter the road code and PR to locate.",
            franceStatus: "Choose the road type, road and first PR.",
            unavailable: "Colombia data is temporarily unavailable in the PR Locator database. Please try again later.",
        }),
    });

    const CUSTOMIZATION_TRANSLATIONS = Object.freeze({
        fr: Object.freeze({
            heading: "Les réglages remplacent temporairement le panneau de recherche. Utilisez « Retour » pour revenir au localisateur.",
            interface: "Interface", panelDisplay: "Affichage du panneau", displayMode: "Mode d’affichage",
            sidebar: "Panneau latéral WME", floating: "Fenêtre flottante",
            floatingHelp: "La fenêtre flottante est déplaçable et redimensionnable. Sa position et sa taille sont mémorisées.",
            searchResult: "Résultat de recherche", onMap: "Sur la carte", targetMarker: "Repère ciblé",
            originPr: "PR entier d’origine", calculatedPath: "Trajet calculé", zoneBetween: "Zone entre deux PR",
            markerSize: "Taille du repère", lineWidth: "Épaisseur du tracé", opacity: "Opacité",
            showResultLabel: "Afficher le libellé du résultat", labelStyle: "Style du libellé",
            compactCartouche: "Cartouche routier compact", simpleText: "Texte simple", resultOffset: "Écart avec le point recherché",
            showSense: "Afficher SENS 1 / SENS 2", showMotorwayDestination: "Afficher la destination des autoroutes",
            motorwayBand: "Bandeau autoroute", departmentBand: "Bandeau départementale", cartoucheSize: "Taille du cartouche",
            cartoucheOpacity: "Opacité du cartouche", textColor: "Couleur du texte", outlineColor: "Couleur du contour",
            labelTextSize: "Taille du libellé / texte du cartouche", simpleOutlineWidth: "Épaisseur du contour du texte simple",
            infoBlock: "Bloc d’informations", background: "Fond", border: "Bordure", titleColor: "Titre", detailsColor: "Détails",
            infoHelp: "Ces couleurs s’appliquent au bloc de résultat affiché sous la recherche.",
            generalPrLayer: "Calque général des PR", pointsCartouches: "Points et cartouches", motorways: "Autoroutes (A)",
            nationalRoads: "Routes nationales (N)", intercommunalRoads: "Routes intercommunales", otherAxes: "Autres axes, dont D",
            pointSize: "Taille des points", prLabelStyle: "Style des libellés PR", cartoucheRoad: "Cartouche routier compact",
            labels: "Libellés", display: "Affichage", accordingZoom: "Selon le niveau de zoom", always: "Toujours", never: "Jamais",
            showFromZoom: "Afficher à partir du zoom", labelSize: "Taille des libellés", labelOffset: "Écart des libellés avec la route",
            textOutlineWidth: "Épaisseur du contour du texte", motorwayDestinations: "Destinations autoroutières",
            referenceOverrides: "Référentiel et surcharges locales",
            referenceHelp: "Référentiel national intégré : {count} couples axe/scope, version {version}. Les anneaux et branches sans destination unique affichent seulement le numéro.",
            localOverrides: "Surcharges locales des destinations",
            overrideHelp: "Facultatif : Axe[@département] | destination Sens 1 | destination Sens 2. Une surcharge remplace le référentiel national.",
            saveDisplay: "Enregistrer l’affichage", defaults: "Valeurs d’origine", dataConnection: "Connexion aux données",
            integratedConnection: "Connexion intégrée au script : aucune URL ni clé à saisir.", projectUrl: "URL du projet",
            publicKey: "Clé publique / anon", secretWarning: "Toute clé secrète/service_role est refusée : elle doit rester réservée à l’importeur hors de WME.",
            saveAndTest: "Enregistrer et tester", savedStatus: "Personnalisation enregistrée et appliquée.", resetStatus: "Personnalisation réinitialisée aux valeurs d’origine.",
            openCustomization: "Ouvrir le panneau de personnalisation", closeCustomization: "Revenir au localisateur"
        }),
        es: Object.freeze({
            heading: "Los ajustes sustituyen temporalmente el panel de búsqueda. Usa « Volver » para regresar al localizador.",
            interface: "Interfaz", panelDisplay: "Visualización del panel", displayMode: "Modo de visualización",
            sidebar: "Panel lateral de WME", floating: "Ventana flotante",
            floatingHelp: "La ventana flotante se puede mover y redimensionar. Su posición y tamaño quedan guardados.",
            searchResult: "Resultado de búsqueda", onMap: "En el mapa", targetMarker: "Marcador objetivo",
            originPr: "PR entero de origen", calculatedPath: "Trayecto calculado", zoneBetween: "Zona entre dos PR",
            markerSize: "Tamaño del marcador", lineWidth: "Grosor del trazado", opacity: "Opacidad",
            showResultLabel: "Mostrar la etiqueta del resultado", labelStyle: "Estilo de la etiqueta",
            compactCartouche: "Cartucho vial compacto", simpleText: "Texto simple", resultOffset: "Separación respecto al punto buscado",
            showSense: "Mostrar SENTIDO 1 / SENTIDO 2", showMotorwayDestination: "Mostrar el destino de las autopistas",
            motorwayBand: "Banda de autopista", departmentBand: "Banda departamental", cartoucheSize: "Tamaño del cartucho",
            cartoucheOpacity: "Opacidad del cartucho", textColor: "Color del texto", outlineColor: "Color del contorno",
            labelTextSize: "Tamaño de la etiqueta / texto del cartucho", simpleOutlineWidth: "Grosor del contorno del texto simple",
            infoBlock: "Bloque de información", background: "Fondo", border: "Borde", titleColor: "Título", detailsColor: "Detalles",
            infoHelp: "Estos colores se aplican al bloque de resultado mostrado debajo de la búsqueda.",
            generalPrLayer: "Capa general de PR", pointsCartouches: "Puntos y cartuchos", motorways: "Autopistas (A)",
            nationalRoads: "Rutas nacionales (N)", intercommunalRoads: "Vías intercomunales", otherAxes: "Otros ejes, incluidos D",
            pointSize: "Tamaño de los puntos", prLabelStyle: "Estilo de las etiquetas PR", cartoucheRoad: "Cartucho vial compacto",
            labels: "Etiquetas", display: "Visualización", accordingZoom: "Según el nivel de zoom", always: "Siempre", never: "Nunca",
            showFromZoom: "Mostrar a partir del zoom", labelSize: "Tamaño de las etiquetas", labelOffset: "Separación de las etiquetas respecto a la vía",
            textOutlineWidth: "Grosor del contorno del texto", motorwayDestinations: "Destinos de autopistas",
            referenceOverrides: "Referencia y ajustes locales",
            referenceHelp: "Referencia nacional integrada: {count} pares vía/ámbito, versión {version}. Los anillos y ramales sin un destino único muestran solo el número.",
            localOverrides: "Ajustes locales de destinos",
            overrideHelp: "Opcional: Vía[@departamento] | destino Sentido 1 | destino Sentido 2. Un ajuste local sustituye la referencia nacional.",
            saveDisplay: "Guardar visualización", defaults: "Valores predeterminados", dataConnection: "Conexión de datos",
            integratedConnection: "Conexión integrada en el script: no es necesario introducir URL ni clave.", projectUrl: "URL del proyecto",
            publicKey: "Clave pública / anon", secretWarning: "Se rechazan las claves secretas/service_role: deben permanecer reservadas al importador fuera de WME.",
            saveAndTest: "Guardar y probar", savedStatus: "Personalización guardada y aplicada.", resetStatus: "Personalización restablecida a los valores predeterminados.",
            openCustomization: "Abrir el panel de personalización", closeCustomization: "Volver al localizador"
        }),
        en: Object.freeze({
            heading: "Settings temporarily replace the search panel. Use “Back” to return to the locator.",
            interface: "Interface", panelDisplay: "Panel display", displayMode: "Display mode",
            sidebar: "WME sidebar", floating: "Floating window",
            floatingHelp: "The floating window can be moved and resized. Its position and size are saved.",
            searchResult: "Search result", onMap: "On the map", targetMarker: "Target marker",
            originPr: "Origin whole PR", calculatedPath: "Calculated path", zoneBetween: "Zone between two PRs",
            markerSize: "Marker size", lineWidth: "Path width", opacity: "Opacity",
            showResultLabel: "Show result label", labelStyle: "Label style",
            compactCartouche: "Compact road shield", simpleText: "Simple text", resultOffset: "Distance from searched point",
            showSense: "Show DIRECTION 1 / DIRECTION 2", showMotorwayDestination: "Show motorway destination",
            motorwayBand: "Motorway band", departmentBand: "Departmental-road band", cartoucheSize: "Shield size",
            cartoucheOpacity: "Shield opacity", textColor: "Text color", outlineColor: "Outline color",
            labelTextSize: "Label / shield text size", simpleOutlineWidth: "Simple-text outline width",
            infoBlock: "Information block", background: "Background", border: "Border", titleColor: "Title", detailsColor: "Details",
            infoHelp: "These colors apply to the result block shown below the search form.",
            generalPrLayer: "General PR layer", pointsCartouches: "Points and shields", motorways: "Motorways (A)",
            nationalRoads: "National roads (N)", intercommunalRoads: "Intercommunal roads", otherAxes: "Other roads, including D",
            pointSize: "Point size", prLabelStyle: "PR label style", cartoucheRoad: "Compact road shield",
            labels: "Labels", display: "Display", accordingZoom: "According to zoom level", always: "Always", never: "Never",
            showFromZoom: "Show from zoom", labelSize: "Label size", labelOffset: "Label distance from road",
            textOutlineWidth: "Text outline width", motorwayDestinations: "Motorway destinations",
            referenceOverrides: "Reference data and local overrides",
            referenceHelp: "Built-in national reference: {count} road/scope pairs, version {version}. Rings and branches without one unique destination display only the road number.",
            localOverrides: "Local destination overrides",
            overrideHelp: "Optional: Road[@department] | Direction 1 destination | Direction 2 destination. A local override replaces the national reference.",
            saveDisplay: "Save display", defaults: "Default values", dataConnection: "Data connection",
            integratedConnection: "Connection built into the script: no URL or key needs to be entered.", projectUrl: "Project URL",
            publicKey: "Public / anon key", secretWarning: "Secret/service_role keys are rejected: they must remain reserved for the importer outside WME.",
            saveAndTest: "Save and test", savedStatus: "Customization saved and applied.", resetStatus: "Customization reset to default values.",
            openCustomization: "Open customization panel", closeCustomization: "Return to locator"
        }),
    });

    function ctr(key) {
        return CUSTOMIZATION_TRANSLATIONS[currentLanguage]?.[key]
            || CUSTOMIZATION_TRANSLATIONS.fr[key]
            || key;
    }

    function setElementText(selector, value) {
        const element = ui?.tabPane?.querySelector(selector);
        if (element) element.textContent = value;
    }

    function setControlLabel(selector, value) {
        const element = ui?.tabPane?.querySelector(selector);
        if (element) setLabelText(element, value);
    }

    function applyCustomizationLanguageUi() {
        if (!ui?.tabPane) return;
        const q = (selector) => ui.tabPane.querySelector(selector);
        const details = [...ui.customizationPanel.querySelectorAll(':scope > details')];
        const interfaceDetails = q('.wme-pr-settings-theme-interface');
        const resultDetails = q('.wme-pr-settings-theme-result');
        const indexDetails = q('.wme-pr-settings-theme-index');
        const motorwayDetails = q('.wme-pr-settings-theme-motorway');

        setElementText('.wme-pr-customization-heading', ctr('heading'));
        if (interfaceDetails) {
            interfaceDetails.querySelector('summary').textContent = ctr('interface');
            interfaceDetails.querySelector('strong').textContent = ctr('panelDisplay');
        }
        setControlLabel('#wme-pr-display-mode', ctr('displayMode'));
        const displayMode = q('#wme-pr-display-mode');
        if (displayMode) {
            displayMode.querySelector('option[value="sidebar"]').textContent = ctr('sidebar');
            displayMode.querySelector('option[value="floating"]').textContent = ctr('floating');
        }
        if (interfaceDetails) interfaceDetails.querySelector('.wme-pr-help').textContent = ctr('floatingHelp');

        if (resultDetails) {
            resultDetails.querySelector('summary').textContent = ctr('searchResult');
            const groups = resultDetails.querySelectorAll('.wme-pr-settings-group');
            if (groups[0]) groups[0].querySelector('strong').textContent = ctr('onMap');
            if (groups[1]) groups[1].querySelector('strong').textContent = ctr('infoBlock');
        }
        const resultLabels = [
            ['#wme-pr-result-target-color','targetMarker'], ['#wme-pr-result-anchor-color','originPr'],
            ['#wme-pr-result-path-color','calculatedPath'], ['#wme-pr-result-zone-color','zoneBetween'],
            ['#wme-pr-result-marker-size','markerSize'], ['#wme-pr-result-line-width','lineWidth'], ['#wme-pr-result-opacity','opacity'],
            ['#wme-pr-result-label-style','labelStyle'], ['#wme-pr-result-label-offset','resultOffset'],
            ['#wme-pr-result-motorway-cartouche-color','motorwayBand'], ['#wme-pr-result-department-cartouche-color','departmentBand'],
            ['#wme-pr-result-cartouche-scale','cartoucheSize'], ['#wme-pr-result-cartouche-opacity','cartoucheOpacity'],
            ['#wme-pr-result-label-color','textColor'], ['#wme-pr-result-label-outline-color','outlineColor'],
            ['#wme-pr-result-label-size','labelTextSize'], ['#wme-pr-result-label-outline-width','simpleOutlineWidth'],
            ['#wme-pr-result-panel-background-color','background'], ['#wme-pr-result-panel-border-color','border'],
            ['#wme-pr-result-panel-title-color','titleColor'], ['#wme-pr-result-panel-text-color','detailsColor'],
        ];
        for (const [selector,key] of resultLabels) {
            const control=q(selector); if (control?.closest('label')) setLabelText(control.closest('label'),ctr(key));
        }
        const showResult=q('#wme-pr-result-show-labels')?.closest('label'); if(showResult) setLabelText(showResult,ctr('showResultLabel'));
        const showSenseResult=q('#wme-pr-result-show-sense')?.closest('label'); if(showSenseResult) setLabelText(showSenseResult,ctr('showSense'));
        const showDestResult=q('#wme-pr-result-show-motorway-destination')?.closest('label'); if(showDestResult) setLabelText(showDestResult,ctr('showMotorwayDestination'));
        const resultStyle=q('#wme-pr-result-label-style'); if(resultStyle){resultStyle.querySelector('option[value="cartouche"]').textContent=ctr('compactCartouche');resultStyle.querySelector('option[value="simple"]').textContent=ctr('simpleText');}
        if(resultDetails){const helps=resultDetails.querySelectorAll('.wme-pr-settings-group > .wme-pr-help'); if(helps.length) helps[helps.length-1].textContent=ctr('infoHelp');}

        if (indexDetails) {
            indexDetails.querySelector('summary').textContent = ctr('generalPrLayer');
            const groups=indexDetails.querySelectorAll('.wme-pr-settings-group');
            if(groups[0]) groups[0].querySelector('strong').textContent=ctr('pointsCartouches');
            if(groups[1]) groups[1].querySelector('strong').textContent=ctr('labels');
        }
        const indexLabels=[
            ['#wme-pr-index-autoroute-color','motorways'], ['#wme-pr-index-national-color','nationalRoads'],
            ['#wme-pr-index-metropolitan-color','intercommunalRoads'], ['#wme-pr-index-other-color','otherAxes'],
            ['#wme-pr-index-marker-size','pointSize'], ['#wme-pr-index-opacity','opacity'], ['#wme-pr-index-label-style','prLabelStyle'],
            ['#wme-pr-index-motorway-cartouche-color','motorwayBand'], ['#wme-pr-index-department-cartouche-color','departmentBand'],
            ['#wme-pr-index-cartouche-scale','cartoucheSize'], ['#wme-pr-index-cartouche-opacity','cartoucheOpacity'],
            ['#wme-pr-index-label-mode','display'], ['#wme-pr-index-label-min-zoom','showFromZoom'],
            ['#wme-pr-index-label-size','labelSize'], ['#wme-pr-index-label-offset','labelOffset'],
            ['#wme-pr-index-label-color','textColor'], ['#wme-pr-index-label-outline-color','outlineColor'],
            ['#wme-pr-index-label-outline-width','textOutlineWidth'],
        ];
        for(const [selector,key] of indexLabels){const control=q(selector);if(control?.closest('label'))setLabelText(control.closest('label'),ctr(key));}
        const showSenseIndex=q('#wme-pr-index-show-sense')?.closest('label'); if(showSenseIndex)setLabelText(showSenseIndex,ctr('showSense'));
        const showDestIndex=q('#wme-pr-index-show-motorway-destination')?.closest('label'); if(showDestIndex)setLabelText(showDestIndex,ctr('showMotorwayDestination'));
        const indexStyle=q('#wme-pr-index-label-style'); if(indexStyle){indexStyle.querySelector('option[value="cartouche"]').textContent=ctr('compactCartouche');indexStyle.querySelector('option[value="simple"]').textContent=ctr('simpleText');}
        const labelMode=q('#wme-pr-index-label-mode'); if(labelMode){labelMode.querySelector('option[value="auto"]').textContent=ctr('accordingZoom');labelMode.querySelector('option[value="always"]').textContent=ctr('always');labelMode.querySelector('option[value="never"]').textContent=ctr('never');}

        if(motorwayDetails){
            motorwayDetails.querySelector('summary').textContent=ctr('motorwayDestinations');
            motorwayDetails.querySelector('strong').textContent=ctr('referenceOverrides');
            const helps=motorwayDetails.querySelectorAll('.wme-pr-help');
            if(helps[0]) helps[0].textContent=ctr('referenceHelp').replace('{count}',NATIONAL_MOTORWAY_DESTINATION_COUNT).replace('{version}',NATIONAL_MOTORWAY_DESTINATIONS_VERSION);
            if(helps[1]) helps[1].textContent=ctr('overrideHelp');
        }
        const localOverrides=q('#wme-pr-motorway-destinations')?.closest('label'); if(localOverrides)setLabelText(localOverrides,ctr('localOverrides'));
        if(ui.saveAppearance) ui.saveAppearance.textContent=ctr('saveDisplay');
        if(ui.resetAppearance) ui.resetAppearance.textContent=ctr('defaults');


        if(ui.customizationToggle){
            const open=ui.customizationToggle.getAttribute('aria-expanded')==='true';
            ui.customizationToggle.title=open?ctr('closeCustomization'):ctr('openCustomization');
        }
    }

    function tr(key) {
        return UI_TRANSLATIONS[currentLanguage]?.[key]
            || UI_TRANSLATIONS.fr[key]
            || key;
    }

    function setLabelText(label, text) {
        if (!label) return;
        for (const node of [...label.childNodes]) {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                node.textContent = `${text}\n                    `;
                return;
            }
        }
    }

    function updateDisplayToggleUi() {
        if (!ui?.displayToggle) return;
        const label = tr(displayMode === "floating" ? "attach" : "detach");
        ui.displayToggle.textContent = label;
        ui.displayToggle.title = label;
        ui.displayToggle.setAttribute("aria-label", label);
    }

    function applyCountryAndLanguageUi() {
        if (!ui) return;
        const country = COUNTRY_CONFIG[currentCountry] || COUNTRY_CONFIG.FR;
        if (ui.panelTitle && ui.customizationToggle?.getAttribute("aria-expanded") !== "true") {
            ui.panelTitle.textContent = tr("title");
        }
        if (ui.countryLabel) ui.countryLabel.textContent = tr("country");
        if (ui.languageLabel) ui.languageLabel.textContent = tr("language");
        if (ui.subtitle) ui.subtitle.textContent = country.source;
        if (ui.dataInfoTitle) ui.dataInfoTitle.textContent = tr("sourceInfoTitle");
        if (ui.dataOrigin) ui.dataOrigin.textContent = currentCountry === "FR"
            ? tr("franceSourceInfo")
            : tr("colombiaSourceInfo");
        if (ui.dataServer) ui.dataServer.textContent = tr("sourceServerInfo");
        if (ui.dataNetwork) ui.dataNetwork.textContent = tr("connectionPrivacyInfo");
        if (ui.dataLocal) ui.dataLocal.textContent = tr("localPrivacyInfo");
        if (ui.dataIgnLink) {
            ui.dataIgnLink.textContent = tr("sourceIgnLink");
            ui.dataIgnLink.parentElement.hidden = currentCountry !== "FR";
        }
        if (ui.dataLicenseLink) {
            ui.dataLicenseLink.textContent = tr("sourceLicenseLink");
            ui.dataLicenseLink.parentElement.hidden = currentCountry !== "FR";
        }
        updateDisplayToggleUi();
        if (ui.customizationToggle && ui.customizationToggle.getAttribute("aria-expanded") !== "true") {
            ui.customizationToggle.textContent = tr("customize");
        }
        setLabelText(ui.departmentField, tr("department"));
        setLabelText(ui.managerField, tr("manager"));
        setLabelText(ui.axisField, currentCountry === "CO" ? tr("axisCO") : tr("axisFR"));
        setLabelText(ui.sideField, tr(currentCountry === "FR" && searchRouteType === "A" ? "sideRequired" : "side"));
        setLabelText(ui.prField, tr("firstPr"));
        setLabelText(ui.pr2Field, tr("secondPr"));
        if (ui.textSearchLabel) ui.textSearchLabel.textContent = tr("textSearch");
        if (ui.textSearchInput) ui.textSearchInput.placeholder = tr("textSearchPlaceholder");
        if (ui.textSearchAction) ui.textSearchAction.textContent = tr("textSearchAction");
        if (ui.autoSelectLabel) ui.autoSelectLabel.lastChild.textContent = ` ${tr("autoSelect")}`;
        if (ui.axisFilterApply) ui.axisFilterApply.textContent = tr("filterAxis");
        if (ui.axisFilterClear) ui.axisFilterClear.textContent = tr("filterAll");
        if (ui.locate) ui.locate.textContent = tr("locate");
        if (ui.mapCommentOpen) ui.mapCommentOpen.textContent = tr("addNote");
        if (ui.copy) ui.copy.textContent = tr("copyPermalink");
        if (ui.permalink) ui.permalink.textContent = tr("openPermalink");
        if (ui.clearResult) ui.clearResult.textContent = tr("clearResult");
        applyCustomizationLanguageUi();

        const isFrance = currentCountry === "FR";
        if (ui.routeTabsContainer) ui.routeTabsContainer.hidden = !isFrance;
        if (ui.departmentField) ui.departmentField.hidden = !isFrance || !routeTypeUsesDepartment(searchRouteType);
        if (ui.managerField) ui.managerField.hidden = !isFrance || !routeTypeUsesManager(searchRouteType);
        if (ui.sideField) ui.sideField.hidden = !isFrance;
        if (ui.axisFilterActions) ui.axisFilterActions.hidden = !isFrance;
        if (ui.axisFilterBanner && !isFrance) ui.axisFilterBanner.hidden = true;
        if (ui.pr2Field) ui.pr2Field.hidden = !isFrance;
        if (ui.textSearchBlock) ui.textSearchBlock.hidden = !isFrance || searchRouteType !== "D";
        if (ui.autoSelectLabel) ui.autoSelectLabel.hidden = false;
        if (ui.axis) {
            ui.axis.placeholder = isFrance ? ({ D: "D62", N: "N79", A: "A40", I: "M7" }[searchRouteType] || "D62") : "4005";
            ui.axis.setAttribute("list", isFrance && searchRouteType === "I" ? "wme-pr-intercommunal-axis-list" : "");
        }
        if (ui.searchHelp) ui.searchHelp.textContent = isFrance && searchRouteType === "A" ? tr("motorwayHelp") : (isFrance ? tr("franceHelp") : tr("colombiaHelp"));
        if (ui.locate) ui.locate.classList.toggle("wme-pr-button-beta", !isFrance);
        if (ui.country) ui.country.value = currentCountry;
        if (ui.language) ui.language.value = currentLanguage;
        if (ui.status && !locateInProgress) setStatus(isFrance ? tr("franceStatus") : tr("colombiaStatus"), "info");
        if (ui.prIndexStatus && !isFrance) setPrIndexStatus(
            currentLanguage === "es" ? "Colombia BETA — capa de puntos de referencia."
                : currentLanguage === "en" ? "Colombia BETA — road reference point layer."
                    : "Colombie BETA — calque des points de repère.",
            "info",
        );
    }

    async function setCountry(countryCode, { updateLanguage = false } = {}) {
        const next = COUNTRY_CONFIG[countryCode] ? countryCode : "FR";
        const changed = next !== currentCountry;
        currentCountry = next;
        if (changed) {
            // Aucune réponse France ne doit repeindre une vue Colombie, ni inversement.
            prIndexRefreshGeneration += 1;
            cancelPrIndexRequests();
            prIndexCache = null;
            prIndexRenderedFeatureKey = "";
            prIndexRenderedLayoutKey = "";
        }
        writeSetting(SETTINGS_COUNTRY_KEY, currentCountry);
        if (updateLanguage) {
            currentLanguage = COUNTRY_CONFIG[next].defaultLanguage;
            writeSetting(SETTINGS_LANGUAGE_KEY, currentLanguage);
        }
        await clearResult();
        applyCountryAndLanguageUi();
        updatePrIndexAxisFilterUi();
        if (changed || !prIndexLayerEnabled) await clearPrIndexFeatures();
        if (prIndexLayerEnabled) schedulePrIndexRefresh(0, true);
    }

    function setLanguage(languageCode) {
        currentLanguage = ["fr", "es", "en"].includes(languageCode) ? languageCode : "fr";
        writeSetting(SETTINGS_LANGUAGE_KEY, currentLanguage);
        applyCountryAndLanguageUi();
    }

    function setStatus(message, type = "info") {
        if (!ui?.status) return;
        ui.status.className = `wme-pr-status wme-pr-status-${type}`;
        ui.status.textContent = message;
    }

    function setPrIndexStatus(message, type = "info") {
        if (!ui?.prIndexStatus) return;
        ui.prIndexStatus.className = `wme-pr-layer-status wme-pr-layer-status-${type}`;
        ui.prIndexStatus.textContent = message;
    }

    async function getSegmentStreetNames(segmentId) {
        try {
            const address = await sdk.DataModel.Segments.getAddress({ segmentId: Number(segmentId) });
            const names = [];
            if (address?.street?.name) names.push(address.street.name);
            for (const alternate of address?.altStreets || []) {
                if (alternate?.street?.name) names.push(alternate.street.name);
            }
            return [...new Set(names)];
        } catch (error) {
            return [];
        }
    }

    async function getSegmentAddress(segmentId) {
        try {
            return (await sdk.DataModel.Segments.getAddress({ segmentId: Number(segmentId) })) || null;
        } catch (error) {
            return null;
        }
    }

    function frenchDepartmentFromSegmentAddress(address) {
        const country = normalizeDepartmentNameKey(address?.country?.name);
        if (country && !["FRANCE", "FR"].includes(country)) return null;
        const rawStateName = String(address?.state?.name || "").trim();
        if (!rawStateName) return null;

        const stateKey = normalizeDepartmentNameKey(rawStateName);
        let code = DEPARTMENT_CODES_BY_NAME.get(stateKey) || "";
        if (!code) {
            const codeMatch = rawStateName.toUpperCase().match(/^(\d{2,3}|2A|2B)\b/);
            const candidate = codeMatch?.[1] || "";
            if (DEPARTMENT_CODES.has(candidate)) code = candidate;
        }
        if (!code) return null;
        return { code, name: DEPARTMENT_NAMES.get(code) || rawStateName };
    }

    function applySelectedSegmentDepartment(department) {
        if (!department?.code || !ui?.department || searchRouteType !== "D") return;
        const optionExists = [...ui.department.options].some((option) => option.value === department.code);
        if (optionExists) ui.department.value = department.code;
    }

    async function getSelectedSegmentIds() {
        const selection = await sdk.Editing.getSelection();
        if (!selection || selection.objectType !== "segment" || !selection.ids?.length) return [];
        return selection.ids.map(Number).filter((id) => Number.isInteger(id) && id > 0);
    }

    async function getSelectedSegmentId() {
        return (await getSelectedSegmentIds())[0] || null;
    }

    function routeTypeFromAxis(axisValue) {
        return Core.routeFamilyFromAxis(axisValue);
    }

    function routeTypeUsesDepartment(routeType = searchRouteType) {
        return routeType === "D";
    }

    function routeTypeUsesManager(routeType = searchRouteType) {
        return routeType === "I";
    }

    function normalizeSearchAxis(value, routeType = searchRouteType) {
        const axis = routeType === "I"
            ? Core.normalizeIntercommunalAxis(value)
            : Core.normalizeAxis(value);
        if (routeType !== "I" && Core.routeFamilyFromAxis(axis) !== routeType) {
            throw new Error(`L’onglet ${routeType}xx attend une référence ${routeType} suivie d’un numéro, par exemple ${routeType}${routeType === "A" ? "75" : routeType === "N" ? "79" : "62"}.`);
        }
        return axis;
    }

    function motorwaySearchDestination(axis, side, departmentCode = null) {
        if (!axis?.startsWith("A")) return "";
        // Lorsqu’un même numéro d’autoroute possède un scope départemental spécifique
        // (ex. A1 en Martinique), ne pas afficher une destination métropolitaine avant
        // que le secteur n’ait été déduit par la recherche.
        if (!departmentCode) {
            const scopedPrefix = `${axis}@`;
            const hasScopedVariant = [
                ...Object.keys(Core.nationalMotorwayDestinations || {}),
                ...Object.keys(motorwayDestinationOverrides || {}),
            ].some((key) => String(key).startsWith(scopedPrefix));
            if (hasScopedVariant) return "";
        }
        return Core.motorwayDestinationForSide(
            axis,
            side,
            departmentCode,
            motorwayDestinationOverrides,
            Core.nationalMotorwayDestinations,
        );
    }

    function refreshSearchSideOptions(departmentCode = null) {
        if (!ui?.side) return;
        const previousValue = ui.side.value;
        let axis = "";
        try {
            axis = normalizeSearchAxis(ui.axis.value, searchRouteType);
        } catch (error) {
            axis = "";
        }
        const isMotorway = searchRouteType === "A";
        const defaultLabel = searchRouteType === "N"
            ? "Indifférent"
            : "Sélection automatique";
        const sense1Destination = axis.startsWith("A") ? motorwaySearchDestination(axis, "D", departmentCode) : "";
        const sense2Destination = axis.startsWith("A") ? motorwaySearchDestination(axis, "G", departmentCode) : "";
        const definitions = [
            ...(isMotorway ? [] : [["", defaultLabel]]),
            ["D", `Sens 1${sense1Destination ? ` > ${sense1Destination}` : ""}`],
            ["G", `Sens 2${sense2Destination ? ` > ${sense2Destination}` : ""}`],
        ];
        ui.side.replaceChildren(...definitions.map(([value, label]) => {
            const option = root.document.createElement("option");
            option.value = value;
            option.textContent = label;
            return option;
        }));
        ui.side.value = definitions.some(([value]) => value === previousValue) ? previousValue : (isMotorway ? "D" : "");
    }

    function populateIntercommunalManagerOptions() {
        if (!ui?.manager) return;
        const previous = ui.manager.value || readSetting(SETTINGS_INTERCOMMUNAL_MANAGER_KEY) || "";
        const options = [
            ["", intercommunalManagersLoaded ? "— Choisir un gestionnaire / territoire —" : "Chargement des gestionnaires…"],
            ...intercommunalManagers.map((manager) => [manager, manager]),
        ];
        ui.manager.replaceChildren(...options.map(([value, label]) => {
            const option = root.document.createElement("option");
            option.value = value;
            option.textContent = label;
            return option;
        }));
        if (previous && intercommunalManagers.includes(previous)) ui.manager.value = previous;
    }

    async function loadIntercommunalManagers() {
        if (intercommunalManagersLoaded) return intercommunalManagers;
        if (intercommunalOptionsRequest) return intercommunalOptionsRequest;
        intercommunalOptionsRequest = (async () => {
            
            const payload = (await requestPrData("managers", {}, "FR")).data;
            intercommunalManagers = [...new Set((Array.isArray(payload) ? payload : [])
                .map((row) => String(row?.road_manager || row?.manager || "").trim())
                .filter(Boolean))]
                .sort((left, right) => left.localeCompare(right, "fr", { sensitivity: "base" }));
            intercommunalManagersLoaded = true;
            populateIntercommunalManagerOptions();
            return intercommunalManagers;
        })().finally(() => {
            intercommunalOptionsRequest = null;
        });
        return intercommunalOptionsRequest;
    }

    function populateIntercommunalAxisOptions(manager, axes = []) {
        if (!ui?.axisList) return;
        ui.axisList.replaceChildren(...axes.map((axis) => {
            const option = root.document.createElement("option");
            option.value = axis;
            option.label = manager;
            return option;
        }));
    }

    async function loadIntercommunalAxes(manager) {
        const normalizedManager = String(manager || "").trim();
        if (!normalizedManager) {
            populateIntercommunalAxisOptions("", []);
            return [];
        }
        const isCurrentManager = () => !ui?.manager || String(ui.manager.value || "").trim() === normalizedManager;
        if (intercommunalAxesByManager.has(normalizedManager)) {
            const cached = intercommunalAxesByManager.get(normalizedManager);
            if (isCurrentManager()) populateIntercommunalAxisOptions(normalizedManager, cached);
            return cached;
        }
        if (intercommunalAxesRequestsByManager.has(normalizedManager)) {
            const pending = await intercommunalAxesRequestsByManager.get(normalizedManager);
            if (isCurrentManager()) populateIntercommunalAxisOptions(normalizedManager, pending);
            return pending;
        }
        const requestPromise = (async () => {
            
            const payload = (await requestPrData("axes", { manager: normalizedManager }, "FR")).data;
            const axes = [...new Set((Array.isArray(payload) ? payload : [])
                .map((row) => String(row?.axis || "").trim().toUpperCase())
                .filter(Boolean))]
                .sort((left, right) => left.localeCompare(right, "fr", { numeric: true, sensitivity: "base" }));
            intercommunalAxesByManager.set(normalizedManager, axes);
            return axes;
        })();
        intercommunalAxesRequestsByManager.set(normalizedManager, requestPromise);
        try {
            const axes = await requestPromise;
            if (isCurrentManager()) populateIntercommunalAxisOptions(normalizedManager, axes);
            return axes;
        } finally {
            intercommunalAxesRequestsByManager.delete(normalizedManager);
        }
    }

    async function autoSelectIntercommunalManagerForAxis(axis, preferredCoordinate = null) {
        const normalizedAxis = Core.normalizeIntercommunalAxis(axis);
        const generation = ++intercommunalAutoSelectGeneration;
        try {
            let payload = intercommunalScopesByAxis.get(normalizedAxis);
            if (!payload) {
                
                payload = (await requestPrData("scopes", { axis: normalizedAxis }, "FR")).data;
                intercommunalScopesByAxis.set(normalizedAxis, Array.isArray(payload) ? payload : []);
            }
            const scopes = (Array.isArray(payload) ? payload : []).map((row) => ({
                manager: String(row?.road_manager || "").trim(),
                coordinate: [Number(row?.longitude), Number(row?.latitude)],
                pointCount: Number(row?.point_count || 0),
            })).filter((scope) => scope.manager);
            if (!scopes.length) return null;
            let selected = scopes[0];
            if (scopes.length > 1 && Array.isArray(preferredCoordinate)) {
                selected = scopes.slice().sort((left, right) => {
                    const leftDistance = Number.isFinite(left.coordinate[0]) && Number.isFinite(left.coordinate[1])
                        ? Core.haversine(preferredCoordinate, left.coordinate)
                        : Number.POSITIVE_INFINITY;
                    const rightDistance = Number.isFinite(right.coordinate[0]) && Number.isFinite(right.coordinate[1])
                        ? Core.haversine(preferredCoordinate, right.coordinate)
                        : Number.POSITIVE_INFINITY;
                    return leftDistance - rightDistance || right.pointCount - left.pointCount;
                })[0];
            }
            await loadIntercommunalManagers();
            if (generation !== intercommunalAutoSelectGeneration) return null;
            let currentAxis = "";
            try {
                currentAxis = ui?.axis ? Core.normalizeIntercommunalAxis(ui.axis.value) : normalizedAxis;
            } catch (error) {
                return null;
            }
            if (currentAxis !== normalizedAxis) return null;
            if (ui?.manager && intercommunalManagers.includes(selected.manager)) {
                ui.manager.value = selected.manager;
                writeSetting(SETTINGS_INTERCOMMUNAL_MANAGER_KEY, selected.manager);
                await loadIntercommunalAxes(selected.manager);
                return selected.manager;
            }
            return null;
        } catch (error) {
            console.warn(`${SCRIPT_NAME}: présélection du gestionnaire intercommunal impossible`, error);
            return null;
        }
    }

    async function ensureIntercommunalOptions() {
        if (!ui || searchRouteType !== "I") return;
        try {
            await loadIntercommunalManagers();
            const saved = ui.manager.value || readSetting(SETTINGS_INTERCOMMUNAL_MANAGER_KEY) || "";
            if (saved && intercommunalManagers.includes(saved)) {
                ui.manager.value = saved;
                await loadIntercommunalAxes(saved);
            }
            if (!intercommunalManagers.length) {
                setStatus("Aucun gestionnaire intercommunal n’est actuellement disponible dans le référentiel du Localisateur PR.", "warning");
            }
        } catch (error) {
            if (searchRouteType === "I") {
                setStatus(`Référentiel Intercommunales indisponible : ${error?.message || error}`, "warning");
            }
        }
    }

    function setSearchRouteType(routeType, options = {}) {
        const normalizedType = ["A", "D", "N", "I"].includes(String(routeType || "").toUpperCase())
            ? String(routeType).toUpperCase()
            : "D";
        searchRouteType = normalizedType;
        writeSetting(SETTINGS_SEARCH_ROUTE_TYPE_KEY, searchRouteType);
        for (const tab of ui?.routeTabs || []) {
            const selected = tab.dataset.routeType === searchRouteType;
            tab.setAttribute("aria-selected", selected ? "true" : "false");
            tab.tabIndex = selected ? 0 : -1;
        }
        if (ui?.departmentField) ui.departmentField.hidden = currentCountry !== "FR" || !routeTypeUsesDepartment(searchRouteType);
        if (ui?.managerField) ui.managerField.hidden = currentCountry !== "FR" || !routeTypeUsesManager(searchRouteType);
        if (ui?.textSearchBlock) ui.textSearchBlock.hidden = currentCountry !== "FR" || searchRouteType !== "D";
        if (ui?.sideField) setLabelText(ui.sideField, tr(currentCountry === "FR" && searchRouteType === "A" ? "sideRequired" : "side"));
        if (ui?.axis) {
            const examples = { D: "D62", N: "N79", A: "A75", I: "M7 / RM6007 / 5B" };
            ui.axis.placeholder = examples[searchRouteType] || "D62";
            const currentType = routeTypeFromAxis(ui.axis.value);
            if (!options.preserveAxis && ui.axis.value.trim()) {
                const shouldClear = searchRouteType === "I"
                    ? ["A", "D", "N"].includes(currentType)
                    : currentType !== searchRouteType;
                if (shouldClear) {
                    ui.axis.value = "";
                    delete ui.axis.dataset.autoValue;
                }
            }
            ui.axis.setAttribute("list", searchRouteType === "I" ? "wme-pr-intercommunal-axis-list" : "");
        }
        if (ui?.searchHelp) {
            if (searchRouteType === "D") {
                ui.searchHelp.textContent = "Le département précise l’index IGN. Le sens permet de forcer une chaussée ; sinon la branche cohérente la plus proche est choisie. Les PR doivent être saisis au format 52+000 ou 60+007.";
            } else if (searchRouteType === "I") {
                ui.searchHelp.textContent = "Choisissez d’abord le gestionnaire / territoire puis la référence exacte de l’axe IGN (M7, RM6007, 5B…). La liste ne contient que les territoires pour lesquels des PR hors Axx/Nxx/Dxx sont effectivement disponibles. Les PR doivent être saisis au format 52+000 ou 60+007.";
            } else if (searchRouteType === "A") {
                ui.searchHelp.textContent = tr("motorwayHelp");
            } else {
                ui.searchHelp.textContent = `La recherche ${searchRouteType}xx est nationale : aucun département n’est à sélectionner. Le sens permet de forcer directement la chaussée. Les PR doivent être saisis au format 52+000 ou 60+007.`;
            }
        }
        refreshSearchSideOptions();
        if (searchRouteType === "I") void ensureIntercommunalOptions();
    }

    function parseDepartmentalSearchText(value) {
        const source = String(value || "").trim();
        if (!source) throw new Error("Collez d’abord le texte contenant la Dxx et le ou les PR.");

        const normalized = source
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toUpperCase();

        const axes = [];
        const axisSeen = new Set();
        const axisRegex = /(?:^|[^A-Z0-9])(?:R\s*D|RD|D)\s*[._-]*\s*(\d{1,6}[A-Z]?[A-Z0-9]{0,3})(?=$|[^A-Z0-9])/g;
        let match;
        while ((match = axisRegex.exec(normalized))) {
            let axis;
            try {
                const rawReference = String(match[1] || "");
                const referenceMatch = rawReference.match(/^(\d+)([A-Z][A-Z0-9]{0,3})?$/);
                if (!referenceMatch) continue;

                // Les arrêtés et bulletins utilisent parfois des références
                // zéro-complétées (RD0011, D0011...). WME/IGN attend D11.
                const numericPart = String(Number(referenceMatch[1]));
                const suffix = referenceMatch[2] || "";
                axis = Core.normalizeAxis(`D${numericPart}${suffix}`);
            } catch (error) {
                continue;
            }
            if (!/^D\d/i.test(axis) || axisSeen.has(axis)) continue;
            axisSeen.add(axis);
            axes.push(axis);
        }
        if (!axes.length) {
            throw new Error("Aucune route départementale Dxx n’a été détectée dans le texte.");
        }
        if (axes.length > 1) {
            throw new Error(`Plusieurs routes départementales ont été détectées : ${axes.join(", ")}.`);
        }

        const normalizeDetectedPr = (baseValue, offsetValue) => {
            const base = Number(baseValue);
            const offsetText = String(offsetValue || "").trim();
            if (!Number.isInteger(base) || base < 0 || !/^\d{3,4}$/.test(offsetText)) return null;
            try {
                return Core.parsePr(`${base}+${offsetText}`).formatted;
            } catch (error) {
                return null;
            }
        };

        // Priorité aux formulations qui décrivent explicitement une zone.
        // Cela évite qu'un autre nombre du type xx+xxx présent ailleurs dans
        // le texte soit pris à tort pour le deuxième PR.
        const rangeCandidates = [];
        const rangeSeen = new Set();
        const rangeRegex = /(?:\b(?:DU|DE|ENTRE)\b\s*(?:LE\s+)?)?(?:PR\s*)?(\d{1,5})\s*\+\s*(\d{3,4})\s*(?:\bAU\b|\bA\b|\bET\b|\bJUSQU(?:['’])?(?:AU|A)\b|[-–—>]+)\s*(?:LE\s+)?(?:PR\s*)?(\d{1,5})\s*\+\s*(\d{3,4})\b/g;
        while ((match = rangeRegex.exec(normalized))) {
            const firstPr = normalizeDetectedPr(match[1], match[2]);
            const secondPr = normalizeDetectedPr(match[3], match[4]);
            if (!firstPr || !secondPr) continue;
            const key = `${firstPr}>${secondPr}`;
            if (rangeSeen.has(key)) continue;
            rangeSeen.add(key);
            rangeCandidates.push({ firstPr, secondPr });
        }

        if (rangeCandidates.length > 1) {
            const descriptions = rangeCandidates
                .map((range) => `${range.firstPr} → ${range.secondPr}`)
                .join(", ");
            throw new Error(`Plusieurs zones de PR ont été détectées : ${descriptions}.`);
        }
        if (rangeCandidates.length === 1) {
            return {
                axis: axes[0],
                firstPr: rangeCandidates[0].firstPr,
                secondPr: rangeCandidates[0].secondPr,
            };
        }

        // Secours : s'il n'y a pas de formulation de plage identifiable,
        // collecter les PR. Les occurrences explicitement précédées de "PR"
        // sont privilégiées par rapport aux nombres isolés au même format.
        const explicitPrs = [];
        const explicitSeen = new Set();
        const explicitPrRegex = /\bPR\s*(\d{1,5})\s*\+\s*(\d{3,4})\b/g;
        while ((match = explicitPrRegex.exec(normalized))) {
            const parsed = normalizeDetectedPr(match[1], match[2]);
            if (!parsed || explicitSeen.has(parsed)) continue;
            explicitSeen.add(parsed);
            explicitPrs.push(parsed);
        }

        const allPrs = [];
        const allSeen = new Set();
        const prRegex = /(?:\bPR\s*)?(\d{1,5})\s*\+\s*(\d{3,4})\b/g;
        while ((match = prRegex.exec(normalized))) {
            const parsed = normalizeDetectedPr(match[1], match[2]);
            if (!parsed || allSeen.has(parsed)) continue;
            allSeen.add(parsed);
            allPrs.push(parsed);
        }

        let prs = allPrs;
        if (explicitPrs.length >= 2) {
            prs = explicitPrs;
        } else if (explicitPrs.length === 1 && allPrs.length === 1) {
            prs = explicitPrs;
        }

        if (!prs.length) {
            throw new Error("Aucun PR au format XX+xxx ou XX+xxxx n’a été détecté dans le texte.");
        }
        if (prs.length > 2) {
            throw new Error(`Plus de deux PR distincts ont été détectés : ${prs.join(", ")}.`);
        }

        return {
            axis: axes[0],
            firstPr: prs[0],
            secondPr: prs[1] || "",
        };
    }

    async function locateFromDepartmentalText() {
        if (locateInProgress) return;
        try {
            if (currentCountry !== "FR") throw new Error("Cette recherche est disponible uniquement pour la France.");
            const departmentCode = Core.normalizeDepartmentCode(ui?.department?.value);
            const parsed = parseDepartmentalSearchText(ui?.textSearchInput?.value);

            setSearchRouteType("D", { preserveAxis: true });
            ui.department.value = departmentCode;
            ui.axis.value = parsed.axis;
            delete ui.axis.dataset.autoValue;
            ui.pr.value = parsed.firstPr;
            ui.pr2.value = parsed.secondPr;
            ui.side.value = "";
            refreshSearchSideOptions(departmentCode);

            const summary = parsed.secondPr
                ? `${departmentCode} · ${parsed.axis} · ${parsed.firstPr} → ${parsed.secondPr}`
                : `${departmentCode} · ${parsed.axis} · ${parsed.firstPr}`;
            setStatus(`Texte reconnu : ${summary}. Recherche en cours…`, "info");
            await locate();
        } catch (error) {
            setStatus(error?.message || String(error), "error");
        }
    }

    function validateAxisForSearchType(axis) {
        if (searchRouteType === "I") {
            if (!String(ui?.manager?.value || "").trim()) {
                throw new Error("Choisissez d’abord un gestionnaire / territoire pour la recherche Intercommunales.");
            }
            Core.normalizeIntercommunalAxis(axis);
            return;
        }
        const actualType = axis.charAt(0);
        if (actualType !== searchRouteType) {
            throw new Error(`L’onglet ${searchRouteType}xx attend un axe ${searchRouteType}xx.`);
        }
    }

    async function refreshSelectionSummary() {
        if (!ui) return;
        const generation = ++selectionSummaryRevision;
        const segmentIds = await getSelectedSegmentIds();
        if (generation !== selectionSummaryRevision || !ui) return;
        const segmentId = segmentIds[0];
        if (!segmentId) {
            ui.selection.textContent = "Segment sélectionné : facultatif";
            return;
        }
        if (segmentIds.length > 1) {
            ui.selection.textContent = `${segmentIds.length} segments sélectionnés`;
            return;
        }

        const address = await getSegmentAddress(segmentId);
        if (generation !== selectionSummaryRevision || !ui) return;
        const names = [];
        if (address?.street?.name) names.push(address.street.name);
        for (const alternate of address?.altStreets || []) {
            if (alternate?.street?.name) names.push(alternate.street.name);
        }
        const uniqueNames = [...new Set(names)];
        const department = frenchDepartmentFromSegmentAddress(address);
        const departmentLabel = department ? ` — ${department.code} ${department.name}` : "";
        ui.selection.textContent = `Segment ${segmentId}${uniqueNames.length ? ` — ${uniqueNames.join(" / ")}` : ""}${departmentLabel}`;

        const codes = Core.extractAxisCodes(uniqueNames);
        const currentAxis = ui.axis.value.trim().toUpperCase();
        const previousAutoAxis = ui.axis.dataset.autoValue || "";
        if (codes.length && (!currentAxis || currentAxis === previousAutoAxis)) {
            const selectedAxis = codes[0];
            const selectedType = routeTypeFromAxis(selectedAxis);
            if (selectedType) setSearchRouteType(selectedType, { preserveAxis: true });
            ui.axis.value = selectedAxis;
            ui.axis.dataset.autoValue = selectedAxis;
            if (selectedType === "D" && department) applySelectedSegmentDepartment(department);
            refreshSearchSideOptions(department?.code || null);
            if (selectedType === "I") {
                observeAsync(getSearchPreferredCoordinate().then((coordinate) => autoSelectIntercommunalManagerForAxis(selectedAxis, coordinate)), "sélection gestionnaire");
            }
        } else if (searchRouteType === "D" && department) {
            applySelectedSegmentDepartment(department);
        }
    }

    function createSegmentDescriptionCache() {
        const descriptions = new Map();
        return (segment) => {
            const segmentId = Number(segment?.id);
            const cacheKey = Number.isFinite(segmentId) ? segmentId : segment;
            if (descriptions.has(cacheKey)) return descriptions.get(cacheKey);
            const description = Core.describeSegment(segment);
            descriptions.set(cacheKey, description);
            return description;
        };
    }

    async function addJunctionSegments(routeSegments, allSegments) {
        const junctions = await getMapJunctionsSnapshot();
        const segmentIds = Core.expandRouteSegmentIdsThroughJunctions(routeSegments, allSegments, junctions);
        const byId = new Map(allSegments.map((segment) => [Number(segment.id), segment]));
        return segmentIds.map((segmentId) => byId.get(Number(segmentId))).filter(Boolean);
    }

    function storeRouteSnapshot(axis, snapshot) {
        routeSnapshotCache.set(axis, snapshot);
        while (routeSnapshotCache.size > ROUTE_SNAPSHOT_CACHE_MAX_ENTRIES) {
            const oldestKey = routeSnapshotCache.keys().next().value;
            if (oldestKey === undefined) break;
            routeSnapshotCache.delete(oldestKey);
        }
    }

    function colombiaWmeRouteAliases(roadCode) {
        const normalized = Core.normalizeAxis(roadCode);
        const aliases = new Set([normalized]);
        // Les codes nationaux INVÍAS à 4 chiffres sont affichés dans WME sous la
        // forme RN<ruta>-<tramo> : 6510 -> RN65-10, 4005 -> RN40-05, etc.
        const numeric = normalized.match(/^(\d{2})(\d{2})$/);
        if (numeric) {
            aliases.add(`RN${numeric[1]}-${numeric[2]}`);
            aliases.add(`RN${numeric[1]}${numeric[2]}`);
        }
        return [...aliases];
    }

    function colombiaNationalRouteFamilyPattern(roadCode) {
        const normalized = Core.normalizeAxis(roadCode);
        const numeric = normalized.match(/^(\d{2})(\d{2})$/);
        if (!numeric) return null;
        const routeNumber = numeric[1];
        return new RegExp(`(^|[^A-Z0-9])(?:RN|N)[\\s._-]*${routeNumber}[\\s._-]*\\d{1,3}($|[^A-Z0-9])`, "i");
    }

    async function colombiaLoadedRouteFamilySegments(roadCode) {
        const familyPattern = colombiaNationalRouteFamilyPattern(roadCode);
        if (!familyPattern) return [];
        const matchingStreetIds = new Set();
        for (const street of (await getMapModelSnapshot()).streets) {
            if (!street?.name) continue;
            const name = String(street.name).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (familyPattern.test(name)) matchingStreetIds.add(Number(street.id));
        }
        if (!matchingStreetIds.size) return [];
        return (await getMapModelSnapshot()).segments.filter((segment) =>
            matchingStreetIds.has(Number(segment.primaryStreetId))
            || (segment.alternateStreetIds || []).some((id) => matchingStreetIds.has(Number(id)))
        );
    }

    async function colombiaLoadedSegmentsNearGuide(coordinate, maximumDistance = 110) {
        if (!Array.isArray(coordinate) || coordinate.length < 2) return [];
        const result = [];
        // Les calculs le long de Red Vial testent de nombreux points de guide :
        // ne pas reconstruire les descripteurs de toute la carte pour chacun.
        for (const description of await getMapSegmentDescriptions()) {
            const projection = Core.projectPointToPolyline(coordinate, description.coordinates);
            if (!projection || projection.distance > maximumDistance) continue;
            result.push(description.segment);
        }
        return result;
    }

    async function colombiaLoadedSegmentsByAliases(routeAliases = []) {
        const aliases = (routeAliases || []).map((value) => String(value || "").trim()).filter(Boolean);
        if (!aliases.length) return [];
        const matchers = aliases.map((alias) => Core.axisPattern(alias));
        const matchingStreetIds = new Set();
        for (const street of (await getMapModelSnapshot()).streets) {
            if (!street?.name) continue;
            const name = String(street.name).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (matchers.some((matcher) => matcher.test(name))) matchingStreetIds.add(Number(street.id));
        }
        if (!matchingStreetIds.size) return [];
        return (await getMapModelSnapshot()).segments.filter((segment) =>
            matchingStreetIds.has(Number(segment.primaryStreetId))
            || (segment.alternateStreetIds || []).some((id) => matchingStreetIds.has(Number(id)))
        );
    }

    async function colombiaNationalRouteFamilySegments(roadCode, boundaryPoints, maximumDistance = 1200) {
        const familyPattern = colombiaNationalRouteFamilyPattern(roadCode);
        if (!familyPattern) return [];
        const matchingStreetIds = new Set();
        for (const street of (await getMapModelSnapshot()).streets) {
            if (!street?.name) continue;
            const name = String(street.name).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (familyPattern.test(name)) matchingStreetIds.add(Number(street.id));
        }
        if (!matchingStreetIds.size) return [];
        const targets = (boundaryPoints || []).map((point) => point?.coordinate).filter(Boolean);
        const result = [];
        for (const segment of (await getMapModelSnapshot()).segments) {
            if (!(matchingStreetIds.has(Number(segment.primaryStreetId))
                || (segment.alternateStreetIds || []).some((id) => matchingStreetIds.has(Number(id))))) continue;
            const description = Core.describeSegment(segment);
            if (!description) continue;
            const closeEnough = targets.some((coordinate) => {
                const projection = Core.projectPointToPolyline(coordinate, description.coordinates);
                return projection && projection.distance <= maximumDistance;
            });
            if (closeEnough) result.push(segment);
        }
        return result;
    }

    async function collectRouteSnapshot(axis, includeDescriptions = false, routeAliases = null) {
        const normalizedAxis = Core.normalizeAxis(axis);
        const aliases = (routeAliases?.length ? routeAliases : [normalizedAxis])
            .map((value) => String(value || "").trim())
            .filter(Boolean);
        const cacheKey = aliases.length > 1 ? `${normalizedAxis}::${aliases.join("|")}` : normalizedAxis;
        const now = Date.now();
        const cached = routeSnapshotCache.get(cacheKey);
        if (cached
            && cached.revision === routeDataRevision
            && now - cached.createdAt <= ROUTE_SNAPSHOT_CACHE_TTL_MS) {
            if (includeDescriptions && !cached.descriptions) {
                const describeSegment = createSegmentDescriptionCache();
                cached.descriptions = cached.segments.map(describeSegment).filter(Boolean);
            }
            return {
                segments: cached.segments,
                descriptions: includeDescriptions ? (cached.descriptions || []) : [],
            };
        }

        const matchingStreetIds = new Set();
        const aliasMatchers = aliases.map((alias) => Core.axisPattern(alias));
        const model = await getMapModelSnapshot();
        for (const street of model.streets) {
            if (!street?.name) continue;
            const normalizedName = String(street.name).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (aliasMatchers.some((matcher) => matcher.test(normalizedName))) matchingStreetIds.add(Number(street.id));
        }
        if (!matchingStreetIds.size) {
            storeRouteSnapshot(cacheKey, { revision: routeDataRevision, createdAt: now, segments: [], descriptions: [] });
            return { segments: [], descriptions: [] };
        }

        const allSegments = model.segments;
        const routeSegments = [];
        for (const segment of allSegments) {
            if (matchingStreetIds.has(Number(segment.primaryStreetId))
                || (segment.alternateStreetIds || []).some((id) => matchingStreetIds.has(Number(id)))) {
                routeSegments.push(segment);
            }
        }
        const segments = await addJunctionSegments(routeSegments, allSegments);
        const descriptions = includeDescriptions
            ? segments.map(createSegmentDescriptionCache()).filter(Boolean)
            : null;
        storeRouteSnapshot(cacheKey, {
            revision: routeDataRevision,
            createdAt: now,
            segments,
            descriptions,
        });
        return { segments, descriptions: includeDescriptions ? (descriptions || []) : [] };
    }

    function findRouteSeed(sourcePoint, descriptions) {
        return Core.findBestAnchor([sourcePoint], sourcePoint.number, descriptions || []);
    }

    async function getNearbyStreetNames(coordinate, maximumDistance = 350) {
        const nearby = [];
        for (const description of await getMapSegmentDescriptions()) {
            const projection = Core.projectPointToPolyline(coordinate, description.coordinates);
            if (projection && projection.distance <= maximumDistance) {
                nearby.push({ segmentId: description.id, distance: projection.distance });
            }
        }
        nearby.sort((left, right) => left.distance - right.distance);
        const names = [];
        const nameLists = await Promise.all(nearby.slice(0, 12)
            .map((candidate) => getSegmentStreetNames(candidate.segmentId)));
        for (const candidates of nameLists) {
            for (const name of candidates) {
                if (!names.includes(name)) names.push(name);
            }
        }
        return names.slice(0, 8);
    }

    async function waitForRouteData(axis, sourcePoint, routeAliases = null) {
        const deadline = Date.now() + WME_ROUTE_LOAD_TIMEOUT_MS;
        let lastSnapshot = { segments: [], descriptions: [] };
        let lastSeedAnchor = null;

        while (Date.now() < deadline) {
            lastSnapshot = await collectRouteSnapshot(axis, true, routeAliases);
            lastSeedAnchor = findRouteSeed(sourcePoint, lastSnapshot.descriptions);
            if (lastSeedAnchor && lastSeedAnchor.distance <= MAX_ANCHOR_DISTANCE_METERS) {
                return lastSnapshot;
            }
            await new Promise((resolve) => root.setTimeout(resolve, WME_ROUTE_LOAD_POLL_MS));
        }

        if (lastSeedAnchor) {
            throw new Error(
                `Le segment ${axis} le plus proche est à ${Math.round(lastSeedAnchor.distance)} m du PR${sourcePoint.number}. `
                + "Vérifiez les coordonnées du PR ou la branche retenue.",
            );
        }

        const nearbyNames = await getNearbyStreetNames(sourcePoint.coordinate);
        if (nearbyNames.length) {
            throw new Error(
                `WME a chargé le secteur du PR${sourcePoint.number}, mais aucun segment ne correspond à ${axis}`
                + `${routeAliases?.length > 1 ? ` (formes WME testées : ${routeAliases.join(" / ")})` : ""}. `
                + `Noms de rues proches : ${nearbyNames.join(" / ")}.`,
            );
        }
        throw new Error(
            `Les données routières de WME ne se sont pas chargées autour du PR${sourcePoint.number} après `
            + `${Math.round(WME_ROUTE_LOAD_TIMEOUT_MS / 1000)} secondes. Relancez la recherche.`,
        );
    }

    function getRequestFunction() {
        if (typeof GM_xmlhttpRequest === "function") return GM_xmlhttpRequest;
        if (typeof GM !== "undefined" && typeof GM.xmlHttpRequest === "function") return GM.xmlHttpRequest;
        return null;
    }

    function requestWithoutCookies(request, details) {
        // anonymous impose fetch sur Chrome. Pour les RPC Supabase, revenir au
        // transport XMLHttpRequest et demander explicitement la suppression des
        // en-têtes Cookie et Referer (null = remove dans Tampermonkey).
        // Conserver un watchdog couvrant aussi l'attente du gestionnaire.
        let finished = false;
        let handle = null;
        let watchdog = null;
        const { signal, classicXhr = false, ...requestDetails } = details;
        const transport = classicXhr ? {
            fetch: false,
            headers: {
                ...Object.fromEntries(Object.entries(requestDetails.headers || {})
                    .filter(([name]) => !/^(cookie|referer)$/i.test(name))),
                Cookie: null,
                Referer: null,
            },
        } : { anonymous: true };
        const finish = (key, ...args) => {
            if (finished) return;
            finished = true;
            if (watchdog !== null) root.clearTimeout(watchdog);
            signal?.removeEventListener("abort", abort);
            details[key]?.(...args);
        };
        const abort = () => {
            if (finished) return;
            finish("onabort");
            try { handle?.abort?.(); } catch (error) { /* Abort peut être indisponible. */ }
        };
        if (signal?.aborted) { finish("onabort"); return { abort }; }
        signal?.addEventListener("abort", abort, { once: true });
        watchdog = root.setTimeout(() => {
            if (finished) return;
            finish("ontimeout");
            try { handle?.abort?.(); } catch (error) { /* Abort peut être indisponible. */ }
        }, details.timeout || PR_REQUEST_TIMEOUT_MS);
        try {
            handle = request({
                ...requestDetails,
                ...transport,
                onload: (response) => finish("onload", response),
                ontimeout: (...args) => finish("ontimeout", ...args),
                onerror: (...args) => finish("onerror", ...args),
                onabort: (...args) => finish("onabort", ...args),
            });
            if (handle && typeof handle.then === "function") {
                handle.then(
                    (response) => finish("onload", response),
                    (...args) => finish("onerror", ...args),
                );
            }
        } catch (error) {
            if (watchdog !== null) root.clearTimeout(watchdog);
            signal?.removeEventListener("abort", abort);
            throw error;
        }
        return { abort };
    }

    function requestText(url, sourceLabel = "service distant", options = {}) {
        return new Promise((resolve, reject) => {
            const request = getRequestFunction();
            if (!request) {
                reject(new Error(`Le gestionnaire de userscripts n’a pas accordé l’accès au ${sourceLabel}.`));
                return;
            }
            requestWithoutCookies(request, {
                method: options.method || "GET",
                url,
                headers: { Accept: "text/plain,*/*", ...(options.headers || {}) },
                timeout: options.timeout || PR_REQUEST_TIMEOUT_MS,
                onload: (response) => {
                    if (response.status < 200 || response.status >= 300) {
                        const requestError = new Error(`Le ${sourceLabel} a répondu avec le statut ${response.status}.`);
                        requestError.httpStatus = response.status;
                        reject(requestError);
                        return;
                    }
                    resolve(String(response.responseText || ""));
                },
                ontimeout: () => reject(new Error(`Le ${sourceLabel} n’a pas répondu dans le délai prévu.`)),
                onerror: () => reject(new Error(`Impossible de joindre le ${sourceLabel}.`)),
            });
        });
    }

    function parseServiceJson(response, sourceLabel) {
        if (response.status < 200 || response.status >= 300) {
            let detail = "";
            try {
                const payload = JSON.parse(response.responseText || "{}");
                const nested = payload?.error;
                detail = [payload?.message, payload?.hint, nested?.message,
                    typeof nested === "string" ? nested : "", nested?.code]
                    .find(value => typeof value === "string" && value.trim()) || "";
            } catch (error) { /* Le statut suffit si la réponse n'est pas JSON. */ }
            const requestError = new Error(`Le ${sourceLabel} a répondu avec le statut ${response.status}${detail ? ` : ${detail}` : ""}.`);
            requestError.httpStatus = response.status;
            requestError.remoteDetail = detail;
            throw requestError;
        }
        try {
            return response.responseText ? JSON.parse(response.responseText) : null;
        } catch (error) {
            const requestError = new Error(`La réponse du ${sourceLabel} est illisible.`);
            requestError.isInvalidResponse = true;
            throw requestError;
        }
    }

    function requestJson(url, sourceLabel = "service distant", options = {}) {
        return new Promise((resolve, reject) => {
            const request = getRequestFunction();
            if (!request) {
                reject(new Error(`Le gestionnaire de userscripts n’a pas accordé l’accès au ${sourceLabel}. Réinstallez ou mettez à jour le script pour accepter les autorisations.`));
                return;
            }
            requestWithoutCookies(request, {
                method: options.method || "GET",
                url,
                headers: { Accept: "application/json", ...(options.headers || {}) },
                data: options.body,
                timeout: options.timeout || PR_REQUEST_TIMEOUT_MS,
                signal: options.signal,
                classicXhr: options.classicXhr,
                onloadstart: options.onloadstart,
                onreadystatechange: options.onreadystatechange,
                onload: (response) => {
                    try {
                        resolve(parseServiceJson(response, sourceLabel));
                    } catch (error) {
                        reject(error);
                    }
                },
                ontimeout: () => {
                    const requestError = new Error(`Le ${sourceLabel} n’a pas répondu dans le délai prévu.`);
                    requestError.isTimeout = true;
                    reject(requestError);
                },
                onerror: () => {
                    const requestError = new Error(`Impossible de joindre le ${sourceLabel}. Vérifiez la connexion puis réessayez.`);
                    requestError.isNetworkError = true;
                    reject(requestError);
                },
                onabort: () => reject(prRequestAbortError()),
            });
        });
    }

    function prRequestAbortError() {
        const error = new Error("Requête PR annulée : la vue n'est plus demandée.");
        error.name = "AbortError";
        error.isAbortError = true;
        return error;
    }

    function prRequestFailureReason(error) {
        if (error?.isTimeout) return "délai dépassé";
        if (error?.httpStatus) return `HTTP ${error.httpStatus}`;
        if (error?.isNetworkError) return "erreur réseau";
        return "réponse invalide";
    }

    async function requestSupabaseJson(url, options) {
        const sourceLabel = "API Supabase PR";
        // Appelé seulement par la liste fixe de RPC ci-dessous. Aucune URL de
        // page, redirection ou configuration externe ne peut recevoir la clé.
        const address = new URL(url);
        if (address.origin !== SUPABASE_URL || address.username || address.password || address.search || address.hash
            || !/^\/rest\/v1\/rpc\/[a-z0-9_]+$/.test(address.pathname)) {
            throw new Error("Adresse Supabase invalide.");
        }
        if (options.signal?.aborted) throw prRequestAbortError();
        const started = Date.now();
        let startMs = null;
        let headersMs = null;
        const timing = () => ({
            rpc: address.pathname.split("/").pop(),
            transport: "Tampermonkey XMLHttpRequest",
            totalElapsedMs: Date.now() - started,
            startMs, headersMs,
        });
        try {
            // WME n'autorise pas Supabase dans son connect-src : un fetch de page
            // échoue immédiatement. Une seule requête via l'API autorisée du
            // gestionnaire suffit ; aucun changement de CSP ni relais supplémentaire.
            const result = await requestJson(url, sourceLabel, {
                ...options,
                classicXhr: true,
                onloadstart: () => { if (startMs === null) startMs = Date.now() - started; },
                onreadystatechange: (response) => {
                    if (headersMs === null && response.readyState >= 2 && response.status > 0) {
                        headersMs = Date.now() - started;
                    }
                },
            });
            console.debug(`${SCRIPT_NAME}: réponse API PR ${JSON.stringify(timing())}`);
            return result;
        } catch (error) {
            if (options.signal?.aborted || error.isAbortError) throw prRequestAbortError();
            Object.assign(error, timing(), {
                phase: headersMs === null ? "attente de réponse" : "réception du corps",
            });
            throw error;
        }
    }

    function readSetting(key) {
        try {
            return typeof GM_getValue === "function"
                ? String(GM_getValue(key, "") ?? "")
                : "";
        } catch (error) {
            console.warn(`${SCRIPT_NAME}: lecture des réglages Tampermonkey impossible`, error);
            return "";
        }
    }

    function writeSetting(key, value) {
        if (typeof GM_setValue !== "function") {
            throw new Error("Le gestionnaire de userscripts doit autoriser GM_setValue pour mémoriser les réglages.");
        }
        try {
            GM_setValue(key, value);
        } catch (error) {
            throw new Error("Les paramètres du script n’ont pas pu être enregistrés par le gestionnaire de userscripts.");
        }
    }

    function comparePublicVersions(leftValue, rightValue) {
        const normalize = (value) => String(value || "")
            .trim()
            .replace(/\.(?:dev|temp)\d+.*$/i, "")
            .split(".")
            .map((part) => {
                const match = String(part).match(/^\d+/);
                return match ? Number(match[0]) : 0;
            });
        const left = normalize(leftValue);
        const right = normalize(rightValue);
        const length = Math.max(left.length, right.length);
        for (let index = 0; index < length; index += 1) {
            const difference = (left[index] || 0) - (right[index] || 0);
            if (difference) return difference > 0 ? 1 : -1;
        }
        return 0;
    }

    function isAllowedGreasyForkUrl(value) {
        try {
            const address = new URL(String(value || ""));
            return address.protocol === "https:"
                && !address.port && !address.username && !address.password
                && ["greasyfork.org", "update.greasyfork.org"].includes(address.hostname)
                && /^\/(?:[a-z]{2}(?:-[a-z]{2})?\/)?scripts\/590425(?:\/|-|$)/i.test(address.pathname);
        } catch (error) {
            return false;
        }
    }

    function getGreasyForkInstallationInfo() {
        let info = null;
        try {
            if (typeof GM_info !== "undefined") info = GM_info;
        } catch (error) {
            info = null;
        }
        const scriptInfo = info?.script || {};
        const candidateUrls = [
            info?.scriptUpdateURL,
            info?.scriptDownloadURL,
            scriptInfo.updateURL,
            scriptInfo.downloadURL,
            scriptInfo.homepageURL,
            scriptInfo.homepage,
        ].map((value) => String(value || "").trim()).filter(isAllowedGreasyForkUrl);

        let scriptId = "";
        let sourceUrl = "";
        for (const url of candidateUrls) {
            const match = url.match(/(?:greasyfork\.org\/(?:[a-z-]+\/)?scripts\/|update\.greasyfork\.org\/scripts\/)(\d+)/i);
            if (!match) continue;
            scriptId = match[1];
            sourceUrl = url;
            break;
        }

        if (!scriptId) {
            return {
                scriptId: "590425",
                pageUrl: GREASYFORK_PAGE_URL,
                metaUrl: "",
                exact: true,
            };
        }

        const pageUrl = GREASYFORK_PAGE_URL;
        let metaUrl = "";
        const updateCandidate = candidateUrls.find((url) => (
            /update\.greasyfork\.org\/scripts\/\d+/i.test(url)
            && /\.user\.js(?:[?#].*)?$/i.test(url)
        ));
        if (updateCandidate) {
            metaUrl = updateCandidate.replace(/\.user\.js(?=([?#]|$))/i, ".meta.js");
        } else if (/update\.greasyfork\.org/i.test(sourceUrl) && /\.meta\.js(?:[?#].*)?$/i.test(sourceUrl)) {
            metaUrl = sourceUrl;
        }
        return { scriptId, pageUrl, metaUrl, exact: true };
    }

    function parseGreasyForkVersion(metaText) {
        const match = String(metaText || "").match(/^\/\/\s*@version\s+([^\r\n]+)$/mi);
        return match ? match[1].trim() : "";
    }

    function readGreasyForkUpdateCache() {
        const raw = readSetting(SETTINGS_GREASYFORK_UPDATE_KEY);
        if (!raw) return null;
        try {
            const parsed = JSON.parse(raw);
            return parsed && typeof parsed === "object" ? parsed : null;
        } catch (error) {
            return null;
        }
    }

    function writeGreasyForkUpdateCache(value) {
        try {
            writeSetting(SETTINGS_GREASYFORK_UPDATE_KEY, JSON.stringify(value || {}));
            return true;
        } catch (error) {
            console.warn(`${SCRIPT_NAME}: cache de mise à jour Greasy Fork non enregistré`, error);
            return false;
        }
    }

    function updateGreasyForkButtonState({ latestVersion = "", checked = false, error = false } = {}) {
        if (!ui?.greasyForkButton) return;
        const currentPublicVersion = String(VERSION).replace(/\.(?:dev|temp)\d+.*$/i, "");
        const updateAvailable = Boolean(
            latestVersion && comparePublicVersions(latestVersion, currentPublicVersion) > 0
        );
        ui.greasyForkButton.dataset.updateAvailable = updateAvailable ? "true" : "false";

        if (updateAvailable) {
            ui.greasyForkButton.title = `Nouvelle version disponible : ${latestVersion} (installée : ${VERSION}) — ouvrir Greasy Fork`;
            ui.greasyForkButton.setAttribute(
                "aria-label",
                `Nouvelle version ${latestVersion} disponible sur Greasy Fork`,
            );
        } else if (error) {
            ui.greasyForkButton.title = "Greasy Fork — vérification de mise à jour indisponible";
            ui.greasyForkButton.setAttribute("aria-label", "Ouvrir la page Greasy Fork du script");
        } else if (checked && latestVersion) {
            ui.greasyForkButton.title = `Greasy Fork — version ${VERSION} à jour`;
            ui.greasyForkButton.setAttribute("aria-label", "Ouvrir la page Greasy Fork du script");
        } else {
            ui.greasyForkButton.title = "Greasy Fork — ouvrir la page du script";
            ui.greasyForkButton.setAttribute("aria-label", "Ouvrir la page Greasy Fork du script");
        }
    }

    // Limite la verification aux tentatives espacées d'au moins 24 h, y compris
    // lorsqu'une requete echoue. Le cache Tampermonkey est commun aux sessions.
    let greasyForkUpdateInProgress = false;

    async function checkGreasyForkUpdate() {
        const installation = getGreasyForkInstallationInfo();
        if (ui?.greasyForkButton) {
            ui.greasyForkButton.dataset.pageUrl = installation.pageUrl;
            ui.greasyForkButton.dataset.exactPage = installation.exact ? "true" : "false";
        }

        const cache = readGreasyForkUpdateCache();
        const now = Date.now();
        if (cache?.latestVersion) {
            updateGreasyForkButtonState({
                latestVersion: cache.latestVersion,
                checked: true,
            });
        }
        if (!installation.metaUrl) {
            // Installation locale : bouton de lien fonctionnel, aucun controle reseau.
            return;
        }
        const lastAttemptAt = Math.max(
            Number(cache?.attemptedAt) || 0,
            Number(cache?.checkedAt) || 0, // cache des versions precedentes
        );
        if (greasyForkUpdateInProgress || (
            lastAttemptAt > 0 && now - lastAttemptAt < GREASYFORK_UPDATE_CHECK_INTERVAL_MS
        )) {
            return;
        }

        greasyForkUpdateInProgress = true;
        try {
            // Enregistrer AVANT le GET, pour interdire de nouvelles tentatives
            // pendant 24 h meme en cas de timeout, d'erreur ou de rechargement.
            if (!writeGreasyForkUpdateCache({
                ...(cache || {}),
                attemptedAt: now,
                pageUrl: installation.pageUrl,
                metaUrl: installation.metaUrl,
            })) {
                return; // stockage indisponible : ne pas risquer les requetes repetees
            }
            const metaText = await requestText(
                installation.metaUrl,
                "métadonnées Greasy Fork",
                { timeout: 10000 },
            );
            const latestVersion = parseGreasyForkVersion(metaText);
            if (!latestVersion) throw new Error("Version Greasy Fork introuvable dans les métadonnées.");
            writeGreasyForkUpdateCache({
                attemptedAt: now,
                checkedAt: Date.now(),
                latestVersion,
                pageUrl: installation.pageUrl,
                metaUrl: installation.metaUrl,
            });
            updateGreasyForkButtonState({ latestVersion, checked: true });
        } catch (error) {
            console.warn(`${SCRIPT_NAME}: vérification Greasy Fork impossible`, error);
            updateGreasyForkButtonState({
                latestVersion: cache?.latestVersion || "",
                checked: Boolean(cache?.latestVersion),
                error: true,
            });
        } finally {
            greasyForkUpdateInProgress = false;
        }
    }

    function loadAppearanceSettings() {
        const raw = readSetting(SETTINGS_APPEARANCE_KEY);
        if (!raw) return Core.normalizeAppearanceSettings();
        try {
            return Core.normalizeAppearanceSettings(JSON.parse(raw));
        } catch (error) {
            return Core.normalizeAppearanceSettings();
        }
    }

    function writeAppearanceSettings(settings) {
        appearanceSettings = Core.normalizeAppearanceSettings(settings);
        prCartoucheDescriptorCache.clear();
        writeSetting(SETTINGS_APPEARANCE_KEY, JSON.stringify(appearanceSettings));
    }

    function loadMotorwayDestinationOverrides() {
        const raw = readSetting(SETTINGS_MOTORWAY_DESTINATION_OVERRIDES_KEY);
        if (!raw) return {};
        try {
            return Core.normalizeMotorwayDestinationTable(JSON.parse(raw));
        } catch (error) {
            return {};
        }
    }

    function writeMotorwayDestinationOverrides(value) {
        motorwayDestinationOverrides = Core.normalizeMotorwayDestinationTable(value);
        prCartoucheDescriptorCache.clear();
        writeSetting(SETTINGS_MOTORWAY_DESTINATION_OVERRIDES_KEY, JSON.stringify(motorwayDestinationOverrides));
    }

    // Same data envelope as DEV3; only the transport changes to Supabase RPC.
    // The fixed mode map prevents arbitrary RPC names or caller-provided URLs.
    async function requestPrData(mode, params = {}, country = "FR", options = {}) {
        const supported = country === "FR"
            ? new Set(["lookup", "bbox", "managers", "axes", "scopes"])
            : country === "CO" ? new Set(["bbox", "target", "guides"]) : new Set();
        if (!supported.has(mode)) throw new Error("Mode ou pays Supabase invalide.");
        const textOrNull = value => String(value ?? "").trim() || null;
        const integer = (value, label, min = 0, max = 2147483647) => {
            const number = Number(value);
            if (value === null || value === undefined || value === "" || !Number.isSafeInteger(number)
                || number < min || number > max) throw new Error("Paramètre Supabase invalide : " + label + ".");
            return number;
        };
        let rpc;
        let body = {};
        let limit = 1000;
        let offset = 0;
        if (mode === "lookup") {
            rpc = "find_wme_pr_points_v08";
            const tokens = String(params.numbers ?? "").split(",");
            if (!tokens.length || tokens.length > 500 || tokens.some(value => !value.trim())) {
                throw new Error("Liste de PR invalide.");
            }
            body = {
                p_department_code: textOrNull(params.department),
                p_axis: Core.normalizeAxis(params.axis),
                p_pr_numbers: [...new Set(tokens.map(value => integer(value.trim(), "PR")))],
                p_network_type: textOrNull(params.network_type),
                p_manager: textOrNull(params.manager),
            };
        } else if (mode === "bbox") {
            const rawBbox = String(params.bbox ?? "").split(",");
            if (rawBbox.length !== 4 || rawBbox.some(value => !value.trim() || !Number.isFinite(Number(value)))) {
                throw new Error("Emprise Supabase invalide.");
            }
            const [minLon, minLat, maxLon, maxLat] = Core.normalizeBbox(rawBbox.map(Number));
            if (minLon < -180 || maxLon > 180 || minLat < -90 || maxLat > 90) {
                throw new Error("Emprise Supabase hors limites.");
            }
            limit = integer(params.limit ?? 1000, "limite", 1, 1000);
            offset = integer(params.offset ?? 0, "décalage", 0, 100000);
            body = { p_min_longitude: minLon, p_min_latitude: minLat,
                p_max_longitude: maxLon, p_max_latitude: maxLat, p_limit: limit };
            if (country === "FR") {
                rpc = "find_wme_pr_points_in_bbox_v121";
                Object.assign(body, {
                    p_axis: textOrNull(params.axis),
                    p_network_type: textOrNull(params.network_type),
                    p_department_code: textOrNull(params.department),
                    p_manager: textOrNull(params.manager),
                    p_offset: offset,
                });
            } else {
                rpc = "find_wme_pr_colombia_points_in_bbox";
                if (offset !== 0) throw new Error("Pagination Colombie non disponible.");
            }
        } else if (mode === "managers") {
            rpc = "list_wme_pr_intercommunal_managers";
        } else if (mode === "axes") {
            rpc = "list_wme_pr_intercommunal_axes";
            body = { p_manager: textOrNull(params.manager) };
        } else if (mode === "scopes") {
            rpc = "find_wme_pr_intercommunal_scopes";
            body = { p_axis: Core.normalizeAxis(params.axis) };
        } else if (mode === "target") {
            rpc = "find_wme_pr_colombia_target";
            body = { p_road_code: Core.normalizeAxis(params.axis),
                p_target_chainage: integer(params.chainage, "abscisse") };
        } else {
            rpc = "find_wme_pr_colombia_guides";
            body = { p_road_code: Core.normalizeAxis(params.axis),
                p_start_chainage: integer(params.start, "début"),
                p_end_chainage: integer(params.end, "fin") };
        }
        const data = await requestSupabaseJson(SUPABASE_URL + "/rest/v1/rpc/" + rpc, {
            method: "POST",
            headers: { apikey: SUPABASE_PUBLIC_KEY, "Content-Type": "application/json" },
            body: JSON.stringify(body),
            timeout: PR_REQUEST_TIMEOUT_MS,
            signal: options.signal,
        });
        if (!Array.isArray(data) || data.some(row => !row || typeof row !== "object" || Array.isArray(row))) {
            throw new Error("Réponse Supabase incomplète ou invalide.");
        }
        // PostgREST limits row sets to 1000; the historical lookup itself caps at 500.
        // Refuse potentially incomplete non-map results instead of interpolating through missing data.
        if (mode !== "bbox" && data.length >= (mode === "lookup" ? 500 : 1000)) {
            throw new Error("Réponse Supabase potentiellement tronquée : resserrez la recherche.");
        }
        if (mode === "bbox" && (data.length > limit || data.some(row => typeof row.is_truncated !== "boolean"))) {
            throw new Error("Métadonnées du calque Supabase manquantes ou invalides.");
        }
        const truncated = mode === "bbox" && data.some(row => row.is_truncated === true);
        return { data, meta: {
            is_truncated: truncated,
            next_offset: truncated ? offset + data.length : null,
            // This versioned FR RPC applies all filters before LIMIT; missing RPC is an error.
            filters_applied: mode === "bbox" && country === "FR",
        }};
    }


    async function searchPrPoints({ departmentCode = null, axis, lookupNumbers, requestedNumbers = [], manager = null, networkType = null }) {
        
        const normalizedDepartment = departmentCode ? Core.normalizeDepartmentCode(departmentCode) : null;
        const normalizedManager = String(manager || "").trim() || null;
        const normalizedNetworkType = String(networkType || "").trim().toUpperCase() || null;
        const payload = (await requestPrData("lookup", {
            axis, department: normalizedDepartment, numbers: [...new Set(lookupNumbers.map(Number))].join(","),
            network_type: normalizedNetworkType, manager: normalizedManager,
        }, "FR")).data;
        const points = Core.parsePrPayload(payload);
        if (!points.length) {
            const scope = normalizedManager
                ? `${normalizedManager} / ${axis}`
                : (normalizedDepartment ? `${normalizedDepartment} / ${axis}` : axis);
            throw new Error(
                `Aucun PR disponible pour ${scope} parmi les numéros recherchés. `
                + "Vérifiez la référence et réessayez, ou signalez une donnée manquante à l’auteur.",
            );
        }
        const present = new Set(Core.filterPrPoints(points, axis).filter(Core.isReferencePoint).map((point) => point.number));
        const missingRequested = requestedNumbers.filter((number) => !present.has(number));
        const departmentCodes = [...new Set(points.map((point) => point.departmentCode).filter(Boolean))]
            .sort((left, right) => left.localeCompare(right, "fr", { numeric: true }));
        return {
            points,
            missingRequested,
            department: normalizedDepartment
                ? { code: normalizedDepartment, name: DEPARTMENT_NAMES.get(normalizedDepartment) || normalizedDepartment }
                : null,
            departments: departmentCodes.map((code) => ({ code, name: DEPARTMENT_NAMES.get(code) || code })),
            manager: normalizedManager,
            networkType: normalizedNetworkType,
        };
    }

    async function searchColombiaGuides(roadCode, startChainage, endChainage) {
        
        const axis = Core.normalizeAxis(roadCode);
        const payload = (await requestPrData("guides", {
            axis, start: Math.round(Number(startChainage) || 0), end: Math.round(Number(endChainage) || 0),
        }, "CO")).data;
        return (Array.isArray(payload) ? payload : [])
            .map((row) => ({
                chainage: Number(row?.chainage),
                coordinate: [Number(row?.longitude), Number(row?.latitude)],
            }))
            .filter((row) => Number.isFinite(row.chainage)
                && row.coordinate.every(Number.isFinite))
            .sort((a, b) => a.chainage - b.chainage);
    }

    async function searchColombiaTarget(roadCode, parsedPr) {
        
        const axis = Core.normalizeAxis(roadCode);
        const targetChainage = parsedPr.base * 1000 + parsedPr.offset;
        const payload = (await requestPrData("target", { axis, chainage: targetChainage }, "CO")).data;
        const points = Core.parsePrPayload(payload);
        if (!points.length) throw new Error(tr("unavailable"));
        const sameAxis = Core.filterPrPoints(points, axis);
        const lower = sameAxis.filter((point) => Number.isFinite(point.abscissa) && point.abscissa <= targetChainage)
            .sort((a, b) => b.abscissa - a.abscissa || (a.pointType === "PR" ? -1 : 1))[0] || null;
        const upper = sameAxis.filter((point) => Number.isFinite(point.abscissa) && point.abscissa >= targetChainage)
            .sort((a, b) => a.abscissa - b.abscissa || (a.pointType === "PR" ? -1 : 1))[0] || null;
        if (!lower || !upper) {
            throw new Error(
                currentLanguage === "es" ? `El PR solicitado no está encuadrado por dos referencias conocidas de ${axis}.`
                    : currentLanguage === "en" ? `The requested PR is not bracketed by two known references on ${axis}.`
                        : `Le PR demandé n’est pas encadré par deux références connues sur ${axis}.`,
            );
        }
        return { axis, targetChainage, points: sameAxis, lower, upper };
    }

    function resolveColombiaTargetFromGuides(source, guidePoints, routeSegments) {
        const { lower, upper, targetChainage } = source;
        const samples = [
            { chainage: Number(lower.abscissa), coordinate: lower.coordinate, exact: true },
            ...(guidePoints || []).map((row) => ({
                chainage: Number(row?.chainage),
                coordinate: row?.coordinate,
                exact: false,
            })),
            { chainage: Number(upper.abscissa), coordinate: upper.coordinate, exact: true },
        ].filter((row) =>
            Number.isFinite(row.chainage)
            && Array.isArray(row.coordinate)
            && row.coordinate.length >= 2
            && row.coordinate.every(Number.isFinite)
            && row.chainage >= Number(lower.abscissa)
            && row.chainage <= Number(upper.abscissa)
        ).sort((a, b) => a.chainage - b.chainage || Number(b.exact) - Number(a.exact));

        // Dédupliquer par chaînage en donnant la priorité aux références exactes.
        const byChainage = new Map();
        for (const sample of samples) {
            if (!byChainage.has(sample.chainage) || sample.exact) byChainage.set(sample.chainage, sample);
        }
        const ordered = [...byChainage.values()].sort((a, b) => a.chainage - b.chainage);
        if (ordered.length < 2) return null;

        let before = null;
        let after = null;
        for (const sample of ordered) {
            if (sample.chainage <= targetChainage) before = sample;
            if (sample.chainage >= targetChainage) {
                after = sample;
                break;
            }
        }
        if (!before || !after) return null;

        let estimatedCoordinate;
        if (before.chainage === after.chainage) {
            estimatedCoordinate = before.coordinate.slice();
        } else {
            const ratio = (targetChainage - before.chainage) / (after.chainage - before.chainage);
            estimatedCoordinate = [
                before.coordinate[0] + (after.coordinate[0] - before.coordinate[0]) * ratio,
                before.coordinate[1] + (after.coordinate[1] - before.coordinate[1]) * ratio,
            ];
        }

        const descriptions = (routeSegments || []).map(Core.describeSegment).filter(Boolean);
        if (!descriptions.length) return null;
        const projected = Core.findBestAnchor(
            [{ ...lower, coordinate: estimatedCoordinate }],
            lower.number,
            descriptions,
        );
        if (!projected || projected.distance > 300) return null;

        const guideSpacing = Math.max(0, Number(after.chainage) - Number(before.chainage));
        const confidence = projected.distance <= 35 && guideSpacing <= 1800
            ? "haute"
            : projected.distance <= 100
                ? "moyenne"
                : "faible";

        return {
            point: projected.point,
            segmentId: projected.segmentId,
            pathLength: null,
            referencePathLength: null,
            referenceFromChainage: lower.abscissa,
            referenceToChainage: upper.abscissa,
            chainageClosureError: null,
            chainageSpan: upper.abscissa - lower.abscissa,
            startAnchor: null,
            endAnchor: null,
            travelledCoordinates: [projected.point],
            pathSegmentIds: [projected.segmentId],
            sourcePoint: lower,
            component: descriptions,
            calibrated: false,
            estimated: true,
            confidence,
            guideFallback: true,
            guideProjectionDistance: projected.distance,
            guideFromChainage: before.chainage,
            guideToChainage: after.chainage,
        };
    }

    async function resolveColombiaTarget(source, routeSegments) {
        const { lower, upper, targetChainage, axis } = source;
        let workingSegments = [...(routeSegments || [])];
        let descriptions = workingSegments.map(Core.describeSegment).filter(Boolean);
        if (!descriptions.length) throw new Error("Aucun segment exploitable de ce Código de vía n’est chargé dans WME.");
        const seed = Core.findBestAnchor([lower], lower.number, descriptions)
            || Core.findBestAnchor([upper], upper.number, descriptions);
        if (!seed || seed.distance > MAX_ANCHOR_DISTANCE_METERS) {
            throw new Error(`La référence ${lower.rawPointNumber || lower.number} est trop éloignée du tracé WME chargé.`);
        }
        let component = Core.buildComponent(workingSegments, seed.segmentId);
        if (!component.length) throw new Error("Aucune branche WME continue n’a été trouvée pour ce Código de vía.");

        let lowerAnchor = Core.findBestAnchor([lower], lower.number, component);
        let upperAnchor = Core.findBestAnchor([upper], upper.number, component);
        const lowerOk = lowerAnchor && lowerAnchor.distance <= MAX_ANCHOR_DISTANCE_METERS;
        const upperOk = upperAnchor && upperAnchor.distance <= MAX_ANCHOR_DISTANCE_METERS;

        // Une borne DS/FS peut coïncider avec un changement de Código de vía dans WME.
        // Ex. 6510 FS107+600 = début de RN65-11. Si le tracé exact RN65-10 ne permet
        // pas de fermer l'encadrement, étendre localement à la même Ruta nationale.
        const hasBoundaryAnchor = [lower, upper].some((point) => ["DS", "FS"].includes(point.pointType));
        if (hasBoundaryAnchor && (!lowerOk || !upperOk)) {
            // Un côté peut être une borne DS/FS parfaitement rattachée tandis que
            // l'autre PR se trouve après une coupure de nomenclature WME. Dans ce
            // cas, élargir quand même à la même Ruta nationale.
            const boundaryPoints = [lower, upper];
            const extras = await colombiaNationalRouteFamilySegments(axis, boundaryPoints);
            if (extras.length) {
                const byId = new Map(workingSegments.map((segment) => [Number(segment.id), segment]));
                for (const segment of extras) byId.set(Number(segment.id), segment);
                workingSegments = [...byId.values()];
                component = Core.buildComponent(workingSegments, seed.segmentId);
                lowerAnchor = Core.findBestAnchor([lower], lower.number, component);
                upperAnchor = Core.findBestAnchor([upper], upper.number, component);
            }
        }

        if (!lowerAnchor || !upperAnchor
            || lowerAnchor.distance > MAX_ANCHOR_DISTANCE_METERS
            || upperAnchor.distance > MAX_ANCHOR_DISTANCE_METERS) {
            const lowerDistance = lowerAnchor ? `${Math.round(lowerAnchor.distance)} m` : "non rattachée";
            const upperDistance = upperAnchor ? `${Math.round(upperAnchor.distance)} m` : "non rattachée";
            throw new Error(
                `Une référence d’encadrement n’a pas pu être rattachée correctement au tracé WME. `
                + `Amont ${lower.rawPointNumber || lower.number}: ${lowerDistance} ; `
                + `aval ${upper.rawPointNumber || upper.number}: ${upperDistance}. `
                + `Segments mémorisés: ${workingSegments.length} ; composant connecté: ${component.length}.`,
            );
        }

        if (lower.abscissa === upper.abscissa) {
            const anchor = lower.pointType === "PR" ? lowerAnchor : upperAnchor;
            return {
                point: anchor.point,
                segmentId: anchor.segmentId,
                pathLength: 0,
                referencePathLength: 0,
                referenceFromChainage: lower.abscissa,
                referenceToChainage: upper.abscissa,
                chainageClosureError: 0,
                startAnchor: anchor,
                endAnchor: anchor,
                travelledCoordinates: [anchor.point],
                pathSegmentIds: [anchor.segmentId],
                sourcePoint: lower,
                component,
                calibrated: false,
                confidence: "haute",
            };
        }

        const referencePath = Core.pathBetweenTargets({
            component,
            start: { point: lowerAnchor.point, segmentId: lowerAnchor.segmentId },
            end: { point: upperAnchor.point, segmentId: upperAnchor.segmentId },
        });
        if (!referencePath?.coordinates?.length || !(referencePath.distance > 0)) {
            throw new Error("Aucun chemin WME continu n’a été trouvé entre les deux références d’encadrement.");
        }
        const chainageSpan = upper.abscissa - lower.abscissa;
        const fraction = (targetChainage - lower.abscissa) / chainageSpan;
        if (!(fraction >= -0.0001 && fraction <= 1.0001)) throw new Error("Le chaînage cible sort de l’intervalle de référence.");
        const targetDistance = referencePath.distance * Math.max(0, Math.min(1, fraction));
        const location = Core.pointAtOffset(referencePath.coordinates, targetDistance);
        if (!location?.point) throw new Error("La position recalée n’a pas pu être calculée sur le tracé WME.");
        const projected = Core.findBestAnchor([{ ...lower, coordinate: location.point }], lower.number, component);
        const closureError = referencePath.distance - chainageSpan;
        const relativeError = Math.abs(closureError) / Math.max(1, chainageSpan);
        const confidence = relativeError <= 0.03 ? "haute" : relativeError <= 0.08 ? "moyenne" : "faible";
        return {
            point: location.point,
            segmentId: projected?.segmentId ?? null,
            pathLength: referencePath.distance,
            referencePathLength: referencePath.distance,
            referenceFromChainage: lower.abscissa,
            referenceToChainage: upper.abscissa,
            chainageClosureError: closureError,
            chainageSpan,
            startAnchor: lowerAnchor,
            endAnchor: upperAnchor,
            travelledCoordinates: Core.slicePolyline(referencePath.coordinates, 0, targetDistance),
            pathSegmentIds: referencePath.segmentIds,
            sourcePoint: lower,
            component,
            calibrated: true,
            estimated: lower.pointType !== "PR" || upper.pointType !== "PR" || chainageSpan > 1100,
            confidence,
        };
    }

    async function searchPrLayerPoints(bbox, requestContext = prIndexRequestContext(), options = {}) {
        const [minLongitude, minLatitude, maxLongitude, maxLatitude] = Core.normalizeBbox(bbox);
        const filter = requestContext.filter;
        // Les filtres doivent être appliqués sur le serveur AVANT LIMIT/OFFSET.
        // La RPC Supabase versionnée préserve ce contrat, y compris pour une page vide.
        const response = await requestPrData("bbox", {
            bbox: [minLongitude, minLatitude, maxLongitude, maxLatitude].join(","),
            limit: PR_INDEX_MAX_FEATURES, offset: 0,
            ...(filter ? {
                axis: filter.axis,
                network_type: filter.routeType,
                department: filter.departmentCode || null,
                manager: filter.manager || null,
            } : {}),
        }, requestContext.country, options);
        if (filter && response.meta.filters_applied !== true) {
            // Un ancien backend accepte axis mais ignore ce filtre : ne jamais
            // annoncer un calque complet lorsque la page a été tronquée avant le filtre.
            throw new Error("Le serveur Supabase ne confirme pas le filtrage des PR.");
        }
        const payload = response.data;
        if (!Array.isArray(payload)) throw new Error("La réponse du calque des PR est invalide.");
        return {
            points: Core.parsePrPayload(payload),
            truncated: response.meta.is_truncated === true || response.meta.next_offset !== null,
        };
    }

    function prIndexPointColor(point) {
        const networkType = String(point?.networkType || "").toUpperCase();
        const prefix = String(point?.axis || "").charAt(0);
        if (networkType === "A" || prefix === "A") return appearanceSettings.prAutorouteColor;
        if (networkType === "N" || prefix === "N") return appearanceSettings.prNationalColor;
        if (networkType === "I" || prefix === "M" || String(point?.axis || "").startsWith("RM")) return appearanceSettings.prMetropolitanColor;
        return appearanceSettings.prOtherColor;
    }

    function prIndexPointLabel(point) {
        const displaySide = appearanceSettings.prShowSense
            ? Core.formatPrSideForDisplay(point?.axis, point?.side)
            : "";
        const side = displaySide ? ` · ${displaySide}` : "";
        const displayedPr = Core.formatPrPointForDisplay(point);
        return `${point.axis} · ${displayedPr === "Fin" ? "Fin d’axe" : `PR${displayedPr}`}${side}`;
    }

    function prCartoucheDescriptor(axis, prText, side, departmentCode = "", networkType = "") {
        const destination = Core.motorwayDestinationForSide(
            axis,
            side,
            departmentCode,
            motorwayDestinationOverrides,
            NATIONAL_MOTORWAY_DESTINATIONS,
        );
        const cacheKey = [
            Core.normalizeAxis(axis),
            String(prText || ""),
            String(side || "").toUpperCase(),
            String(departmentCode || "").toUpperCase(),
            String(networkType || "").toUpperCase(),
            appearanceSettings.prLabelSize,
            appearanceSettings.prShowSense ? 1 : 0,
            appearanceSettings.prShowMotorwayDestination ? 1 : 0,
            appearanceSettings.prMotorwayCartoucheColor,
            appearanceSettings.prDepartmentCartoucheColor,
            prIndexPointColor({ axis, networkType }),
            destination,
        ].join("|");
        const cached = prCartoucheDescriptorCache.get(cacheKey);
        if (cached) return cached;
        const descriptor = Core.buildPrCartoucheDescriptor({
            axis,
            prText,
            side,
            fontSize: appearanceSettings.prLabelSize,
            showSense: appearanceSettings.prShowSense,
            showMotorwayDestination: appearanceSettings.prShowMotorwayDestination,
            destination,
            motorwayColor: appearanceSettings.prMotorwayCartoucheColor,
            departmentColor: appearanceSettings.prDepartmentCartoucheColor,
            otherColor: prIndexPointColor({ axis, networkType }),
        });
        prCartoucheDescriptorCache.set(cacheKey, descriptor);
        if (prCartoucheDescriptorCache.size > PR_CARTOUCHE_CACHE_MAX_ENTRIES) {
            const oldestKey = prCartoucheDescriptorCache.keys().next().value;
            if (oldestKey !== undefined) prCartoucheDescriptorCache.delete(oldestKey);
        }
        return descriptor;
    }

    function cartoucheFeatureProperties(descriptor, labelOffset) {
        const scale = appearanceSettings.prCartoucheScale;
        const width = Math.max(1, Math.round(descriptor.width * scale));
        const height = Math.max(1, Math.round(descriptor.height * scale));
        return {
            cartoucheGraphic: descriptor.dataUri,
            cartoucheWidth: width,
            cartoucheHeight: height,
            cartoucheXOffset: Math.round((Number(labelOffset?.x) || 0) - width / 2),
            cartoucheYOffset: Math.round(-(Number(labelOffset?.y) || 0) - height / 2),
        };
    }

    function stableFeatureHash(value) {
        let hash = 2166136261;
        for (const character of String(value)) {
            hash ^= character.charCodeAt(0);
            hash = Math.imul(hash, 16777619);
        }
        return (hash >>> 0).toString(36);
    }

    function prIndexLabelsVisibleAtZoom(zoomLevel = prIndexCurrentZoom) {
        if (appearanceSettings.prLabelMode === "always") return true;
        if (appearanceSettings.prLabelMode !== "auto") return false;

        // Lorsqu'un filtre d'axe est actif, le zoom 14 sert de vue d'ensemble :
        // les libellés/cartouches de l'axe filtré doivent donc être visibles dès 14,
        // même si le seuil général des libellés est réglé sur 15 ou davantage.
        const minimumZoom = effectivePrIndexAxisFilter()
            ? PR_INDEX_FILTERED_MIN_ZOOM_LEVEL
            : appearanceSettings.prLabelMinZoom;
        return Number(zoomLevel) >= minimumZoom;
    }

    function currentPrIndexLayoutKey(zoomLevel = prIndexCurrentZoom) {
        const cartoucheVisible = appearanceSettings.prLabelStyle === "cartouche"
            && prIndexLabelsVisibleAtZoom(zoomLevel);
        return stableFeatureHash(JSON.stringify({
            cartoucheVisible,
            placementRevision: prIndexLabelsVisibleAtZoom(zoomLevel) ? prLabelPlacementRevision : 0,
            // Les offsets anticollision sont en pixels écran : un zoom différent
            // nécessite un nouveau placement même si la liste des PR est identique.
            cartoucheZoom: cartoucheVisible ? Number(zoomLevel) : null,
            labelStyle: appearanceSettings.prLabelStyle,
            labelMode: appearanceSettings.prLabelMode,
            labelMinZoom: appearanceSettings.prLabelMinZoom,
            labelSize: appearanceSettings.prLabelSize,
            labelOffset: appearanceSettings.prLabelOffset,
            showSense: appearanceSettings.prShowSense,
            showDestination: appearanceSettings.prShowMotorwayDestination,
            motorwayColor: appearanceSettings.prMotorwayCartoucheColor,
            departmentColor: appearanceSettings.prDepartmentCartoucheColor,
            cartoucheScale: appearanceSettings.prCartoucheScale,
            cartoucheOpacity: appearanceSettings.prCartoucheOpacity,
            destinationOverrides: motorwayDestinationOverrides,
            destinationReferenceVersion: NATIONAL_MOTORWAY_DESTINATIONS_VERSION,
        }));
    }

    async function createPrLabelSegmentSpatialIndex() {
        const model = await getMapModelSnapshot();
        const streetAxisCodes = new Map();
        for (const street of model.streets) {
            const codes = Core.extractAxisCodes([street?.name]);
            if (codes.length) streetAxisCodes.set(Number(street.id), new Set(codes));
        }

        const cells = new Map();
        const overflow = [];
        for (const segment of model.segments) {
            const description = Core.describeSegment(segment);
            if (!description?.coordinates?.length) continue;
            const axisCodes = new Set();
            for (const streetId of [segment.primaryStreetId, ...(segment.alternateStreetIds || [])]) {
                for (const code of streetAxisCodes.get(Number(streetId)) || []) axisCodes.add(code);
            }
            let minimumLongitude = Infinity;
            let maximumLongitude = -Infinity;
            let minimumLatitude = Infinity;
            let maximumLatitude = -Infinity;
            for (const coordinate of description.coordinates) {
                minimumLongitude = Math.min(minimumLongitude, coordinate[0]);
                maximumLongitude = Math.max(maximumLongitude, coordinate[0]);
                minimumLatitude = Math.min(minimumLatitude, coordinate[1]);
                maximumLatitude = Math.max(maximumLatitude, coordinate[1]);
            }
            const minCellX = Math.floor(minimumLongitude / PR_LABEL_GRID_SIZE_DEGREES);
            const maxCellX = Math.floor(maximumLongitude / PR_LABEL_GRID_SIZE_DEGREES);
            const minCellY = Math.floor(minimumLatitude / PR_LABEL_GRID_SIZE_DEGREES);
            const maxCellY = Math.floor(maximumLatitude / PR_LABEL_GRID_SIZE_DEGREES);
            const indexedSegment = { ...description, axisCodes };
            const cellCount = (maxCellX - minCellX + 1) * (maxCellY - minCellY + 1);
            if (cellCount > 64) {
                overflow.push(indexedSegment);
                continue;
            }
            for (let cellX = minCellX; cellX <= maxCellX; cellX += 1) {
                for (let cellY = minCellY; cellY <= maxCellY; cellY += 1) {
                    const key = `${cellX}:${cellY}`;
                    if (!cells.has(key)) cells.set(key, []);
                    cells.get(key).push(indexedSegment);
                }
            }
        }
        return { cells, overflow };
    }

    function schedulePrLabelIndexRefresh() {
        if (prLabelIndexTimer !== null) root.clearTimeout(prLabelIndexTimer);
        prLabelIndexTimer = null;
        if (!prIndexLayerEnabled || !prIndexCache?.points?.length
            || prIndexCurrentZoom < prIndexEffectiveMinZoomLevel()
            || !prIndexLabelsVisibleAtZoom(prIndexCurrentZoom)) return;
        // La conversion de tous les segments/rues est facultative pour afficher
        // les PR. La lancer après le premier dessin et après la rafale de données.
        prLabelIndexTimer = root.setTimeout(() => {
            prLabelIndexTimer = null;
            if (prIndexLayerEnabled && prIndexCache?.points?.length
                && prIndexCurrentZoom >= prIndexEffectiveMinZoomLevel()
                && prIndexLabelsVisibleAtZoom(prIndexCurrentZoom) && !prLabelSegmentSpatialIndex) {
                observeAsync(getPrLabelSegmentSpatialIndex(), "placement des étiquettes PR");
            }
        }, 300);
    }

    async function getPrLabelSegmentSpatialIndex() {
        if (!prLabelSegmentSpatialIndex) {
            const pending = createPrLabelSegmentSpatialIndex().then((index) => {
                // La géométrie ne sert qu'au placement des étiquettes. Une réponse
                // ancienne ne doit pas remplacer un index demandé plus récemment.
                if (prLabelSegmentSpatialIndex === pending) {
                    prLabelSegmentSpatialIndexReady = index;
                    prLabelPlacementRevision += 1;
                    schedulePrIndexLayoutRefresh(0);
                }
                return index;
            }).catch((error) => {
                if (prLabelSegmentSpatialIndex === pending) prLabelSegmentSpatialIndex = null;
                throw error;
            });
            prLabelSegmentSpatialIndex = pending;
        }
        return await prLabelSegmentSpatialIndex;
    }

    function findPrLabelSegment(point, spatialIndex = null) {
        if (!point?.coordinate || !spatialIndex) return null;
        const longitude = Number(point.coordinate[0]);
        const latitude = Number(point.coordinate[1]);
        if (!Number.isFinite(longitude) || !Number.isFinite(latitude)) return null;
        const centerCellX = Math.floor(longitude / PR_LABEL_GRID_SIZE_DEGREES);
        const centerCellY = Math.floor(latitude / PR_LABEL_GRID_SIZE_DEGREES);
        const uniqueCandidates = new Map();
        for (let deltaX = -1; deltaX <= 1; deltaX += 1) {
            for (let deltaY = -1; deltaY <= 1; deltaY += 1) {
                for (const candidate of spatialIndex.cells.get(`${centerCellX + deltaX}:${centerCellY + deltaY}`) || []) {
                    uniqueCandidates.set(candidate.id, candidate);
                }
            }
        }
        for (const candidate of spatialIndex.overflow) uniqueCandidates.set(candidate.id, candidate);
        const candidates = [...uniqueCandidates.values()];
        const axis = Core.normalizeAxis(point.axis);
        const matchingAxis = candidates.filter((candidate) => candidate.axisCodes.has(axis));

        const nearest = (list) => {
            let best = null;
            for (const candidate of list) {
                const projection = Core.projectPointToPolyline(point.coordinate, candidate.coordinates);
                if (!projection || (best && projection.distance >= best.projection.distance)) continue;
                best = { segment: candidate, projection };
            }
            return best;
        };
        const exact = nearest(matchingAxis);
        if (exact && exact.projection.distance <= PR_LABEL_SEGMENT_MAX_DISTANCE_METERS) return exact;
        const fallback = nearest(candidates);
        return fallback && fallback.projection.distance <= Math.min(25, PR_LABEL_SEGMENT_MAX_DISTANCE_METERS)
            ? fallback
            : null;
    }

    function prLabelOffsetForPoint(point, spatialIndex) {
        const fallbackDistance = appearanceSettings.prLabelOffset;
        const attachment = findPrLabelSegment(point, spatialIndex);
        if (!attachment) return { x: 0, y: fallbackDistance };
        return Core.computePolylineLabelOffset(
            point.coordinate,
            attachment.segment.coordinates,
            fallbackDistance,
        );
    }

    function normalizedPrSense(point) {
        const display = Core.formatPrSideForDisplay(point?.axis, point?.side);
        if (display === "Sens 1") return "1";
        if (display === "Sens 2") return "2";
        return "";
    }

    function pairedCarriagewayOffset(point, oppositePoint, requestedDistance, zoomLevel) {
        const distance = Math.max(1, Number(requestedDistance) || 1);
        const currentPixel = prCoordinateToWorldPixel(point?.coordinate, zoomLevel);
        const oppositePixel = prCoordinateToWorldPixel(oppositePoint?.coordinate, zoomLevel);
        if (!currentPixel || !oppositePixel) return null;

        // En pixels écran : l'extérieur de la chaussée courante est la direction
        // allant de la chaussée opposée vers la chaussée courante. Le système
        // d'offset WME utilise Y positif vers le haut, contrairement aux pixels écran.
        const screenX = currentPixel[0] - oppositePixel[0];
        const screenY = currentPixel[1] - oppositePixel[1];
        const magnitude = Math.hypot(screenX, screenY);
        if (!(magnitude > 1)) return null;
        return {
            x: screenX / magnitude * distance,
            y: -screenY / magnitude * distance,
            reason: "paired-carriageway",
        };
    }

    function buildOppositeCarriagewayLookup(points) {
        const lookup = new Map();
        for (const point of points || []) {
            const sense = normalizedPrSense(point);
            const axis = String(point?.axis || "").toUpperCase();
            const number = Number(point?.number);
            if (!sense || !axis || !Number.isFinite(number)) continue;
            const key = `${axis}:${number}:${sense}`;
            if (!lookup.has(key)) lookup.set(key, []);
            lookup.get(key).push(point);
        }
        return lookup;
    }

    function findOppositeCarriagewayPoint(point, points, lookup = null) {
        const sense = normalizedPrSense(point);
        if (!sense || !Array.isArray(point?.coordinate)) return null;
        const axis = String(point.axis || "").toUpperCase();
        const number = Number(point.number);
        const abscissa = Number(point.abscissa);
        const oppositeSense = sense === "1" ? "2" : "1";
        const candidates = lookup && Number.isFinite(number)
            ? (lookup.get(`${axis}:${number}:${oppositeSense}`) || [])
            : (points || []);
        let best = null;
        let bestScore = Infinity;
        for (const candidate of candidates) {
            if (candidate === point) continue;
            if (String(candidate?.axis || "").toUpperCase() !== axis) continue;
            const candidateSense = normalizedPrSense(candidate);
            if (!candidateSense || candidateSense === sense) continue;
            if (Number.isFinite(number) && Number(candidate?.number) !== number) continue;

            const separation = Core.haversine(point.coordinate, candidate.coordinate);
            // La proximité géographique est la contrainte principale. Les deux
            // chaussées d'un même PR peuvent avoir des abscisses source différentes :
            // ne pas rejeter la paire uniquement pour cette raison.
            if (!(separation > 1) || separation > 120) continue;

            const candidateAbscissa = Number(candidate?.abscissa);
            const abscissaDelta = Number.isFinite(abscissa) && Number.isFinite(candidateAbscissa)
                ? Math.abs(candidateAbscissa - abscissa)
                : 0;

            // La distance reste très largement prioritaire. L'écart d'abscisse ne
            // sert qu'à départager deux candidats géographiquement proches.
            const score = separation + Math.min(50, abscissaDelta) * 0.05;
            if (score >= bestScore) continue;
            best = candidate;
            bestScore = score;
        }
        return best;
    }

    function prCoordinateToWorldPixel(coordinate, zoomLevel) {
        if (!Array.isArray(coordinate) || coordinate.length < 2) return null;
        const longitude = Number(coordinate[0]);
        const latitude = Math.max(-85.05112878, Math.min(85.05112878, Number(coordinate[1])));
        const zoom = Number(zoomLevel);
        if (![longitude, latitude, zoom].every(Number.isFinite)) return null;
        const scale = 256 * (2 ** zoom);
        const sine = Math.sin(latitude * Math.PI / 180);
        return [
            (longitude + 180) / 360 * scale,
            (0.5 - Math.log((1 + sine) / (1 - sine)) / (4 * Math.PI)) * scale,
        ];
    }

    function prWorldPixelToCoordinate(pixel, zoomLevel) {
        if (!Array.isArray(pixel) || pixel.length < 2) return null;
        const x = Number(pixel[0]);
        const y = Number(pixel[1]);
        const zoom = Number(zoomLevel);
        if (![x, y, zoom].every(Number.isFinite)) return null;
        const scale = 256 * (2 ** zoom);
        const longitude = x / scale * 360 - 180;
        const mercatorY = Math.PI - 2 * Math.PI * y / scale;
        const latitude = Math.atan(Math.sinh(mercatorY)) * 180 / Math.PI;
        return [longitude, latitude];
    }

    function coordinateFromPrLabelOffset(coordinate, offset, zoomLevel) {
        const anchorPixel = prCoordinateToWorldPixel(coordinate, zoomLevel);
        if (!anchorPixel) return null;
        return prWorldPixelToCoordinate([
            anchorPixel[0] + (Number(offset?.x) || 0),
            anchorPixel[1] - (Number(offset?.y) || 0),
        ], zoomLevel);
    }

    function cartoucheLeaderOffset(offset, width, height) {
        const offsetX = Number(offset?.x) || 0;
        const offsetY = Number(offset?.y) || 0;
        const distance = Math.hypot(offsetX, offsetY);
        if (!(distance > 0.1)) return { x: 0, y: 0 };
        const unitX = offsetX / distance;
        const unitY = offsetY / distance;
        const halfWidth = Math.max(1, Number(width) || 1) / 2;
        const halfHeight = Math.max(1, Number(height) || 1) / 2;
        const edgeDistance = 1 / Math.max(
            Math.abs(unitX) / halfWidth,
            Math.abs(unitY) / halfHeight,
        );
        const lineDistance = Math.max(0, distance - edgeDistance + 2);
        return {
            x: unitX * lineDistance,
            y: unitY * lineDistance,
        };
    }

    function resultCartoucheDescriptor(result) {
        const axis = result?.axis || result?.candidate?.axis || "";
        const side = result?.sourcePoint?.side || result?.candidate?.start?.side || "";
        const departmentCode = result?.sourcePoint?.departmentCode || result?.candidate?.start?.departmentCode || "";
        const destination = Core.motorwayDestinationForSide(
            axis,
            side,
            departmentCode,
            motorwayDestinationOverrides,
            NATIONAL_MOTORWAY_DESTINATIONS,
        );
        return Core.buildPrCartoucheDescriptor({
            axis,
            prText: result?.parsedPr?.formatted || "?",
            side,
            fontSize: appearanceSettings.resultLabelSize,
            showSense: appearanceSettings.resultShowSense,
            showMotorwayDestination: appearanceSettings.resultShowMotorwayDestination,
            destination,
            motorwayColor: appearanceSettings.resultMotorwayCartoucheColor,
            departmentColor: appearanceSettings.resultDepartmentCartoucheColor,
            otherColor: appearanceSettings.resultTargetColor,
        });
    }

    function resultCartoucheFeatureProperties(descriptor, labelOffset) {
        const scale = appearanceSettings.resultCartoucheScale;
        const width = Math.max(1, Math.round(descriptor.width * scale));
        const height = Math.max(1, Math.round(descriptor.height * scale));
        return {
            cartoucheGraphic: descriptor.dataUri,
            cartoucheWidth: width,
            cartoucheHeight: height,
            cartoucheXOffset: Math.round((Number(labelOffset?.x) || 0) - width / 2),
            cartoucheYOffset: Math.round(-(Number(labelOffset?.y) || 0) - height / 2),
        };
    }

    function resultLabelOffset(result) {
        const distance = appearanceSettings.resultLabelOffset;
        const segment = result?.component?.find((candidate) => Number(candidate.id) === Number(result.segmentId));
        if (!segment?.coordinates) return { x: 0, y: distance };
        return Core.computePolylineLabelOffset(result.point, segment.coordinates, distance);
    }

    function schedulePrIndexLayoutRefresh(delay = 300) {
        if (!prIndexLayerEnabled || !prIndexCache?.points?.length) return;
        const zoomLevel = prIndexCurrentZoom;
        // Tant que les libellés/cartouches ne sont pas visibles, les événements
        // de chargement de données WME n'ont aucune incidence sur le rendu PR.
        if (!Number.isFinite(zoomLevel)
            || zoomLevel < prIndexEffectiveMinZoomLevel()
            || !prIndexLabelsVisibleAtZoom(zoomLevel)) return;

        // Pendant un déplacement, schedulePrIndexRefresh() va déjà redessiner le
        // sous-ensemble de PR correspondant à la nouvelle vue. Ne pas programmer
        // en parallèle une reconstruction de layout issue de wme-map-data-loaded.
        if (prIndexRefreshTimer !== null || prIndexActiveRefresh !== null) return;

        if (prIndexLayoutTimer !== null) root.clearTimeout(prIndexLayoutTimer);
        prIndexLayoutTimer = root.setTimeout(() => {
            prIndexLayoutTimer = null;
            if (!prIndexLayerEnabled || !prIndexCache?.points?.length) return;
            if (prIndexRefreshTimer !== null || prIndexActiveRefresh !== null) return;
            observeAsync(drawPrIndexPoints(prIndexCache.points), "actualisation du placement des PR");
        }, Math.max(0, delay));
    }

    async function buildPrIndexFeatures(points, zoomLevel) {
        const labelsVisible = prIndexLabelsVisibleAtZoom(zoomLevel);
        const cartouchesVisible = labelsVisible && appearanceSettings.prLabelStyle === "cartouche";
        // Les coordonnées PR sont déjà connues : afficher immédiatement les points
        // et cartouches, puis affiner leurs décalages quand la géométrie WME arrive.
        const spatialIndex = labelsVisible ? prLabelSegmentSpatialIndexReady : null;
        const oppositeCarriagewayLookup = cartouchesVisible
            ? buildOppositeCarriagewayLookup(points)
            : null;
        const prepared = (points || []).map((point, index) => {
            const identity = point.id || `${point.departmentCode}:${point.axis}:${point.pointType}:${point.number}:${point.abscissa}:${point.coordinate.join(",")}`;
            const featureKey = `${stableFeatureHash(identity)}-${index}`;
            let baseOffset = labelsVisible
                ? prLabelOffsetForPoint(point, spatialIndex)
                : { x: 0, y: appearanceSettings.prLabelOffset };
            if (cartouchesVisible && Number.isFinite(zoomLevel)) {
                const oppositePoint = findOppositeCarriagewayPoint(point, points, oppositeCarriagewayLookup);
                const pairedOffset = oppositePoint
                    ? pairedCarriagewayOffset(point, oppositePoint, appearanceSettings.prLabelOffset, zoomLevel)
                    : null;
                if (pairedOffset) baseOffset = pairedOffset;
            }
            const commonProperties = {
                departmentCode: point.departmentCode,
                axis: point.axis,
                networkType: point.networkType,
                prNumber: point.number,
                prDisplay: Core.formatPrPointForDisplay(point),
                pointType: point.pointType,
                abscissa: point.abscissa,
                terminalPrNumber: point.terminalPrNumber,
                terminalPrOffset: point.terminalPrOffset,
                side: point.side,
                branchId: point.branchId,
                sourceId: point.id,
            };
            let descriptor = null;
            let cartoucheProperties = null;
            let anchorPixel = null;
            if (cartouchesVisible) {
                descriptor = prCartoucheDescriptor(
                    point.axis,
                    Core.formatPrPointForDisplay(point),
                    point.side,
                    point.departmentCode,
                    point.networkType,
                );
                cartoucheProperties = cartoucheFeatureProperties(descriptor, baseOffset);
                anchorPixel = prCoordinateToWorldPixel(point.coordinate, zoomLevel);
            }
            return {
                point,
                featureKey,
                baseOffset,
                commonProperties,
                descriptor,
                cartoucheProperties,
                anchorPixel,
            };
        });

        const layoutByFeatureKey = new Map();
        if (cartouchesVisible && Number.isFinite(zoomLevel)) {
            const layoutItems = prepared
                .filter((entry) => entry.anchorPixel && entry.cartoucheProperties)
                .map((entry) => ({
                    key: entry.featureKey,
                    anchorPixel: entry.anchorPixel,
                    width: entry.cartoucheProperties.cartoucheWidth,
                    height: entry.cartoucheProperties.cartoucheHeight,
                    baseOffset: entry.baseOffset,
                    axis: entry.point.axis,
                    abscissa: Number(entry.point.abscissa) || 0,
                    side: String(entry.point.side || ""),
                }))
                .sort((left, right) => (
                    String(left.axis).localeCompare(String(right.axis), "fr", { numeric: true })
                    || left.abscissa - right.abscissa
                    || left.side.localeCompare(right.side)
                    || left.key.localeCompare(right.key)
                ));
            for (const layout of Core.layoutCartoucheCollisions(layoutItems, {
                padding: PR_CARTOUCHE_COLLISION_PADDING_PX,
                step: PR_CARTOUCHE_COLLISION_STEP_PX,
                maxLevels: PR_CARTOUCHE_COLLISION_MAX_LEVELS,
                fallbackDistance: appearanceSettings.prLabelOffset,
                leaderThreshold: PR_CARTOUCHE_LEADER_THRESHOLD_PX,
            })) {
                layoutByFeatureKey.set(layout.key, layout);
            }
        }

        return prepared.flatMap((entry) => {
            const { point, featureKey, baseOffset, commonProperties, descriptor } = entry;
            const layout = layoutByFeatureKey.get(featureKey);
            const labelOffset = layout?.offset || baseOffset;
            const markerFeature = {
                id: `wme-pr-index-${featureKey}`,
                type: "Feature",
                geometry: { type: "Point", coordinates: point.coordinate },
                properties: {
                    ...commonProperties,
                    kind: "pr-index",
                    label: prIndexPointLabel(point),
                    labelOffsetX: labelOffset.x,
                    labelOffsetY: labelOffset.y,
                },
            };
            if (!cartouchesVisible || !descriptor) return [markerFeature];

            const cartoucheProperties = cartoucheFeatureProperties(descriptor, labelOffset);
            const features = [];
            if (layout?.leaderRequired) {
                const leaderOffset = cartoucheLeaderOffset(
                    labelOffset,
                    cartoucheProperties.cartoucheWidth,
                    cartoucheProperties.cartoucheHeight,
                );
                const leaderEnd = coordinateFromPrLabelOffset(point.coordinate, leaderOffset, zoomLevel);
                if (leaderEnd) {
                    features.push({
                        id: `wme-pr-index-leader-${featureKey}`,
                        type: "Feature",
                        geometry: { type: "LineString", coordinates: [point.coordinate, leaderEnd] },
                        properties: {
                            ...commonProperties,
                            kind: "pr-index-leader",
                        },
                    });
                }
            }
            features.push(markerFeature);
            features.push({
                id: `wme-pr-index-cartouche-${featureKey}`,
                type: "Feature",
                geometry: { type: "Point", coordinates: point.coordinate },
                properties: {
                    ...commonProperties,
                    kind: "pr-index-cartouche",
                    collisionAdjusted: Boolean(layout?.collisionAdjusted),
                    ...cartoucheProperties,
                },
            });
            return features;
        });
    }

    function clearPrIndexFeatures() {
        const generation = ++prIndexDrawRevision;
        const job = prIndexDrawQueue.catch((error) => {
            console.warn(`${SCRIPT_NAME}: rendu PR précédent interrompu`, error);
        }).then(async () => {
            if (generation !== prIndexDrawRevision) return false;
            prIndexRenderedLayoutKey = "";
            prIndexRenderedFeatureKey = "";
            try {
                await sdk.Map.removeAllFeaturesFromLayer({ layerName: PR_INDEX_LAYER });
            } catch (error) {
                // Le calque peut ne pas encore être initialisé.
            }
            return true;
        });
        prIndexDrawQueue = job;
        return job;
    }

    function pointIsInsideBbox(point, bbox) {
        const coordinate = point?.coordinate;
        if (!Array.isArray(coordinate) || coordinate.length < 2 || !Array.isArray(bbox) || bbox.length < 4) return false;
        const longitude = Number(coordinate[0]);
        const latitude = Number(coordinate[1]);
        if (!Number.isFinite(longitude) || !Number.isFinite(latitude)) return false;
        return longitude >= bbox[0] && longitude <= bbox[2] && latitude >= bbox[1] && latitude <= bbox[3];
    }

    function normalizePrIndexAxisFilter(value) {
        if (!value || typeof value !== "object" || Array.isArray(value)) return null;
        const routeType = String(value.routeType || "").toUpperCase();
        if (!["A", "D", "N", "I"].includes(routeType)) return null;
        let axis;
        try {
            axis = normalizeSearchAxis(value.axis, routeType);
        } catch (error) {
            return null;
        }
        let departmentCode = "";
        let manager = "";
        if (routeType === "D") {
            try {
                departmentCode = Core.normalizeDepartmentCode(value.departmentCode);
            } catch (error) {
                return null;
            }
        }
        if (routeType === "I") {
            manager = String(value.manager || "").trim();
            if (!manager) return null;
        }
        return { routeType, axis, departmentCode, manager };
    }

    function effectivePrIndexAxisFilter() {
        return currentCountry === "FR" ? prIndexAxisFilter : null;
    }

    function prIndexRequestContext() {
        const filter = effectivePrIndexAxisFilter();
        return {
            country: currentCountry === "CO" ? "CO" : "FR",
            filter: filter ? {
                routeType: filter.routeType,
                axis: filter.axis,
                departmentCode: filter.departmentCode || "",
                manager: filter.manager || "",
            } : null,
        };
    }

    function prIndexScopeKey(context = prIndexRequestContext()) {
        return JSON.stringify(context);
    }

    function resetPrIndexScope() {
        // Rend obsolètes les réponses en vol, le cache et les rendus antérieurs.
        prIndexRefreshGeneration += 1;
        cancelPrIndexRequests();
        prIndexCache = null;
        prIndexRenderedFeatureKey = "";
        prIndexRenderedLayoutKey = "";
        observeAsync(clearPrIndexFeatures(), "effacement du calque précédent");
    }

    function prIndexEffectiveMinZoomLevel() {
        return effectivePrIndexAxisFilter()
            ? PR_INDEX_FILTERED_MIN_ZOOM_LEVEL
            : PR_INDEX_MIN_ZOOM_LEVEL;
    }

    function prIndexAxisFilterLabel(filter = effectivePrIndexAxisFilter()) {
        if (!filter) return "";
        if (filter.routeType === "D") return `${filter.departmentCode} · ${filter.axis}`;
        if (filter.routeType === "I") return `${filter.manager} · ${filter.axis}`;
        return filter.axis;
    }

    function updatePrIndexAxisFilterUi() {
        if (!ui?.axisFilterBanner) return;
        const active = Boolean(effectivePrIndexAxisFilter());
        ui.axisFilterBanner.hidden = !active;
        if (ui.axisFilterLabel) {
            ui.axisFilterLabel.textContent = active ? `Filtre actif : ${prIndexAxisFilterLabel()}` : "";
        }
        if (ui.axisFilterApply) {
            ui.axisFilterApply.textContent = active ? "Appliquer / remplacer le filtre d’axe" : "Afficher uniquement cet axe";
        }
    }

    function prIndexPointMatchesAxisFilter(point, filter = effectivePrIndexAxisFilter()) {
        if (!filter) return true;
        let axis = "";
        try {
            axis = Core.normalizeAxis(point?.axis);
        } catch (error) {
            return false;
        }
        if (axis !== filter.axis) return false;
        if (filter.routeType === "D") {
            return String(point?.departmentCode || "").toUpperCase() === filter.departmentCode;
        }
        if (filter.routeType === "I") {
            return String(point?.roadManager || "").trim() === filter.manager;
        }
        return true;
    }

    function applyPrIndexAxisFilter(points) {
        const filter = effectivePrIndexAxisFilter();
        return filter
            ? (points || []).filter((point) => prIndexPointMatchesAxisFilter(point, filter))
            : (points || []);
    }

    function currentPrIndexAxisFilterFromSearch() {
        const routeType = searchRouteType;
        const axis = normalizeSearchAxis(ui.axis.value, routeType);
        validateAxisForSearchType(axis);
        const filter = { routeType, axis, departmentCode: "", manager: "" };
        if (routeType === "D") filter.departmentCode = Core.normalizeDepartmentCode(ui.department.value);
        if (routeType === "I") {
            filter.manager = String(ui.manager.value || "").trim();
            if (!filter.manager) throw new Error("Choisissez d’abord un gestionnaire / territoire.");
        }
        return normalizePrIndexAxisFilter(filter);
    }

    function applyPrIndexAxisFilterFromSearch() {
        try {
            const filter = currentPrIndexAxisFilterFromSearch();
            if (!filter) throw new Error("Le filtre d’axe est invalide.");
            prIndexAxisFilter = filter;
            writeSetting(SETTINGS_PR_INDEX_AXIS_FILTER_KEY, JSON.stringify(filter));
            resetPrIndexScope();
            updatePrIndexAxisFilterUi();
            if (prIndexLayerEnabled) schedulePrIndexRefresh(0, true);
            setPrIndexStatus(`Filtre ${prIndexAxisFilterLabel()} actif — chargement des PR de cet axe…`, "info");
        } catch (error) {
            setStatus(error?.message || String(error), "error");
        }
    }

    function clearPrIndexAxisFilter() {
        prIndexAxisFilter = null;
        writeSetting(SETTINGS_PR_INDEX_AXIS_FILTER_KEY, "");
        resetPrIndexScope();
        updatePrIndexAxisFilterUi();
        if (prIndexLayerEnabled) schedulePrIndexRefresh(0, true);
        setPrIndexStatus("Filtre d’axe désactivé — rechargement de tous les PR.", "info");
    }

    function prIndexPointsForCurrentView(points, visibleBbox, zoomLevel) {
        try {
            visibleBbox = Core.normalizeBbox(visibleBbox);
            // Au zoom 15 (et plus généralement sans libellés), une marge réduite
            // suffit : les points sont peu coûteux à recharger et WME déplace ainsi
            // nettement moins de features hors écran pendant le pan.
            const paddingRatio = prIndexLabelsVisibleAtZoom(zoomLevel)
                ? PR_INDEX_RENDER_PADDING_RATIO
                : PR_INDEX_RENDER_PADDING_NO_LABELS_RATIO;
            const renderBbox = Core.expandBbox(visibleBbox, paddingRatio);
            return applyPrIndexAxisFilter(points).filter((point) => pointIsInsideBbox(point, renderBbox));
        } catch (error) {
            return applyPrIndexAxisFilter(points);
        }
    }

    function prIndexRenderedPointsKey(points) {
        const identities = (points || []).map((point) => String(
            point?.id
            || `${point?.departmentCode || ""}:${point?.axis || ""}:${point?.pointType || ""}:${point?.number || ""}:${point?.abscissa || ""}:${point?.coordinate?.join(",") || ""}`
        ));
        return stableFeatureHash(identities.join("|"));
    }

    function drawPrIndexPoints(points, view = null) {
        // Les appels SDK étant désormais asynchrones, les dessins sont mis en
        // file pour éviter d'intercaler remove/add de deux vues différentes.
        // Une génération obsolète n'accède pas au calque WME.
        const generation = ++prIndexDrawRevision;
        const isCurrent = () => generation === prIndexDrawRevision && prIndexLayerEnabled
            && (!view || view.generation === prIndexRefreshGeneration);
        const job = prIndexDrawQueue.catch((error) => {
            console.warn(`${SCRIPT_NAME}: précédent rendu PR interrompu`, error);
        }).then(async () => {
            if (!isCurrent()) return false;
            const [visibleBbox, zoom] = view
                ? [view.visibleBbox, view.zoomLevel]
                : await Promise.all([sdk.Map.getMapExtent(), sdk.Map.getZoomLevel()]);
            if (!isCurrent()) return false;
            const zoomLevel = Number(zoom);
            prIndexCurrentZoom = zoomLevel;
            if (!Number.isFinite(zoomLevel) || zoomLevel < prIndexEffectiveMinZoomLevel()) {
                await sdk.Map.removeAllFeaturesFromLayer({ layerName: PR_INDEX_LAYER });
                prIndexRenderedFeatureKey = "";
                prIndexRenderedLayoutKey = "";
                return false;
            }
            const renderedPoints = prIndexPointsForCurrentView(points, visibleBbox, zoomLevel);
            if (renderedPoints.length && prIndexLabelsVisibleAtZoom(zoomLevel) && !prLabelSegmentSpatialIndex) {
                schedulePrLabelIndexRefresh();
            }
            const layoutKey = currentPrIndexLayoutKey(zoomLevel);
            const featureKey = prIndexRenderedPointsKey(renderedPoints);
            if (featureKey === prIndexRenderedFeatureKey && layoutKey === prIndexRenderedLayoutKey) {
                return false;
            }

            const features = await buildPrIndexFeatures(renderedPoints, zoomLevel);
            if (!isCurrent()) return false;
            // Le prochain await peut être interrompu par une nouvelle vue. Dès
            // que l'on retire les features, les anciennes clés ne décrivent plus
            // le calque ; les conserver pouvait empêcher le dessin de remplacement.
            prIndexRenderedLayoutKey = "";
            prIndexRenderedFeatureKey = "";
            await sdk.Map.removeAllFeaturesFromLayer({ layerName: PR_INDEX_LAYER });
            if (!isCurrent()) return false;
            if (features.length) await sdk.Map.addFeaturesToLayer({ layerName: PR_INDEX_LAYER, features });
            if (!isCurrent()) return false;
            await sdk.Map.setLayerVisibility({ layerName: PR_INDEX_LAYER, visibility: true });
            prIndexRenderedLayoutKey = layoutKey;
            prIndexRenderedFeatureKey = featureKey;
            return true;
        });
        prIndexDrawQueue = job;
        return job;
    }

    function prIndexNetworkPaddingRatio(zoomLevel) {
        const zoom = Number(zoomLevel);
        return Number.isFinite(zoom) && zoom <= PR_INDEX_MIN_ZOOM_LEVEL
            ? PR_INDEX_BBOX_PADDING_ZOOM15_RATIO
            : PR_INDEX_BBOX_PADDING_RATIO;
    }

    function prIndexRequestKey(bbox, zoomLevel, requestContext = prIndexRequestContext()) {
        return `${prIndexScopeKey(requestContext)}:${zoomLevel}:${bbox.map((value) => Number(value).toFixed(5)).join(":")}`;
    }

    function cancelPrIndexRequests() {
        const requests = [...prIndexRequestsInFlight.values()];
        prIndexRequestsInFlight.clear();
        for (const request of requests) request.controller.abort();
    }

    async function loadPrIndexBboxWithRetry(queryBbox, generation, requestContext) {
        const requestKey = prIndexRequestKey(queryBbox, prIndexCurrentZoom, requestContext);
        for (let attempt = 0; ; attempt += 1) {
            if (!prIndexLayerEnabled || generation !== prIndexRefreshGeneration) return null;
            try {
                // Deux événements WME peuvent demander la même zone avant la réponse.
                // Chaque rafraîchissement attend cette réponse ; seul le plus récent
                // pourra ensuite l'afficher. Une clé seule faisait perdre la réponse.
                let request = prIndexRequestsInFlight.get(requestKey);
                if (!request) {
                    request = { controller: new AbortController(), promise: null };
                    request.promise = Promise.resolve()
                        .then(() => searchPrLayerPoints(queryBbox, requestContext, { signal: request.controller.signal }))
                        .finally(() => {
                            if (prIndexRequestsInFlight.get(requestKey) === request) {
                                prIndexRequestsInFlight.delete(requestKey);
                            }
                        });
                    prIndexRequestsInFlight.set(requestKey, request);
                }
                return await request.promise;
            } catch (error) {
                if (!prIndexLayerEnabled || generation !== prIndexRefreshGeneration) return null;
                if (!Core.isRetryablePrIndexError(error) || attempt >= PR_INDEX_RETRY_DELAYS_MS.length) throw error;
                const nextAttempt = attempt + 2;
                const totalAttempts = PR_INDEX_RETRY_DELAYS_MS.length + 1;
                const reason = prRequestFailureReason(error);
                console.warn(`${SCRIPT_NAME}: échec de chargement PR avant nouvelle tentative ${JSON.stringify({
                    attempt: attempt + 1, reason, transport: error.transport || "Tampermonkey",
                    phase: error.phase || null,
                    startMs: error.startMs ?? null, headersMs: error.headersMs ?? null,
                    totalElapsedMs: error.totalElapsedMs ?? null,
                })}`);
                setPrIndexStatus(
                    `Chargement du calque — nouvelle tentative ${nextAttempt}/${totalAttempts} (${reason})… Les PR déjà chargés restent affichés.`,
                    "info",
                );
                await new Promise((resolve) => root.setTimeout(resolve, PR_INDEX_RETRY_DELAYS_MS[attempt]));
                if (!prIndexLayerEnabled || generation !== prIndexRefreshGeneration) return null;
            }
        }
    }

    function prIndexLoadedStatusMessage(points) {
        if (!effectivePrIndexAxisFilter()) return `${(points || []).length.toLocaleString("fr-FR")} PR chargés autour de la vue.`;
        const matching = applyPrIndexAxisFilter(points).length;
        return `Filtre ${prIndexAxisFilterLabel()} — ${matching.toLocaleString("fr-FR")} PR chargés autour de la vue.`;
    }

    async function refreshPrIndexLayer(generation, force = false) {
        if (!prIndexLayerEnabled || generation !== prIndexRefreshGeneration) return;
        const readRevision = ++prIndexViewReadRevision;
        const [zoom, extent] = await Promise.all([sdk.Map.getZoomLevel(), sdk.Map.getMapExtent()]);
        if (!prIndexLayerEnabled || generation !== prIndexRefreshGeneration
            || readRevision !== prIndexViewReadRevision) return;
        const zoomLevel = Number(zoom);
        prIndexCurrentZoom = zoomLevel;
        const effectiveMinZoomLevel = prIndexEffectiveMinZoomLevel();
        if (!Number.isFinite(zoomLevel) || zoomLevel < effectiveMinZoomLevel) {
            generation = ++prIndexRefreshGeneration;
            cancelPrIndexRequests();
            prIndexActiveViewKey = "";
            await clearPrIndexFeatures();
            if (!prIndexLayerEnabled || generation !== prIndexRefreshGeneration) return;
            setPrIndexStatus(
                effectivePrIndexAxisFilter()
                    ? `Filtre ${prIndexAxisFilterLabel()} actif — zoomez au niveau ${effectiveMinZoomLevel} minimum pour afficher les PR de l’axe.`
                    : `Calque actif — zoomez au niveau ${effectiveMinZoomLevel} minimum pour afficher les PR.`,
                "info",
            );
            return;
        }

        const visibleBbox = Core.normalizeBbox(extent);
        const requestContext = prIndexRequestContext();
        const viewKey = prIndexRequestKey(visibleBbox, zoomLevel, requestContext);
        // Les paquets WME d'une même vue ne rendent pas sa réponse PR obsolète.
        // Seul un changement réel de vue/scope (ou une action forcée) l'invalide.
        if (prIndexActiveViewKey && prIndexActiveViewKey !== viewKey) {
            generation = ++prIndexRefreshGeneration;
            cancelPrIndexRequests();
        }
        prIndexActiveViewKey = viewKey;
        if (prIndexActiveRefresh?.generation === generation && prIndexActiveRefresh.viewKey === viewKey) {
            return await prIndexActiveRefresh.promise;
        }
        const view = { visibleBbox, zoomLevel, generation };
        const job = { generation, viewKey, promise: refreshPrIndexView(view, requestContext, force) };
        prIndexActiveRefresh = job;
        try {
            return await job.promise;
        } finally {
            if (prIndexActiveRefresh === job) {
                prIndexActiveRefresh = null;
                // Un index d'étiquettes résolu pendant le dessin a pu voir sa
                // demande de layout regroupée avec ce travail encore en cours.
                if (prIndexRenderedLayoutKey && prIndexRenderedLayoutKey !== currentPrIndexLayoutKey()) {
                    schedulePrIndexLayoutRefresh(0);
                }
            }
        }
    }

    async function refreshPrIndexView(view, requestContext, force) {
        const { visibleBbox, zoomLevel, generation } = view;
        const scopeKey = prIndexScopeKey(requestContext);
        if (!force && prIndexCache && prIndexCache.scopeKey === scopeKey
            && !prIndexCache.truncated && Core.bboxContains(prIndexCache.bbox, visibleBbox)) {
            // Le cache réseau couvre volontairement une zone large, mais on ne garde
            // dessinés que les PR proches de la vue courante. Cela évite de faire
            // déplacer à WME des centaines de features hors écran pendant un pan.
            if (prIndexCache.points.length) await drawPrIndexPoints(prIndexCache.points, view);
            if (generation !== prIndexRefreshGeneration) return;
            setPrIndexStatus(prIndexLoadedStatusMessage(prIndexCache.points), "success");
            return;
        }

        const networkPaddingRatio = prIndexNetworkPaddingRatio(zoomLevel);
        let queryBbox = Core.expandBbox(visibleBbox, networkPaddingRatio);
        setPrIndexStatus(
            networkPaddingRatio > PR_INDEX_BBOX_PADDING_RATIO
                ? "Préchargement élargi de la zone autour de la vue… Les PR déjà chargés restent affichés."
                : "Chargement de la nouvelle zone… Les PR déjà chargés restent affichés.",
            "info",
        );

        try {
            let result = await loadPrIndexBboxWithRetry(queryBbox, generation, requestContext);
            if (!result || !prIndexLayerEnabled || generation !== prIndexRefreshGeneration) return;

            // Au zoom 15, on précharge volontairement beaucoup plus loin afin que
            // les grands déplacements restent dans le cache. Si la zone élargie
            // dépasse toutefois la limite RPC, revenir à la marge standard évite
            // de conserver un cache incomplet.
            if (result.truncated && networkPaddingRatio > PR_INDEX_BBOX_PADDING_RATIO) {
                setPrIndexStatus(
                    "Zone de préchargement trop dense — chargement de la zone standard pour conserver tous les PR.",
                    "info",
                );
                queryBbox = Core.expandBbox(visibleBbox, PR_INDEX_BBOX_PADDING_RATIO);
                result = await loadPrIndexBboxWithRetry(queryBbox, generation, requestContext);
                if (!result || !prIndexLayerEnabled || generation !== prIndexRefreshGeneration) return;
            }

            prIndexCache = { bbox: queryBbox, points: result.points, truncated: result.truncated, scopeKey };
            await drawPrIndexPoints(result.points, view);
            if (generation !== prIndexRefreshGeneration) return;
            if (result.truncated) {
                setPrIndexStatus(
                    `${applyPrIndexAxisFilter(result.points).length.toLocaleString("fr-FR")} PR récupérés — vue trop dense, zoomez pour obtenir la liste complète.`,
                    "warning",
                );
            } else if (result.points.length) {
                setPrIndexStatus(prIndexLoadedStatusMessage(result.points), "success");
            } else {
                setPrIndexStatus(effectivePrIndexAxisFilter() ? `Aucun PR de ${prIndexAxisFilterLabel()} dans la vue actuelle.` : "Aucun PR indexé dans la vue actuelle.", "info");
            }
        } catch (error) {
            if (generation !== prIndexRefreshGeneration) return;
            const retained = prIndexCache?.points?.length
                ? ` Les ${prIndexCache.points.length.toLocaleString("fr-FR")} PR précédents restent affichés.`
                : "";
            setPrIndexStatus(`${error?.message || String(error)}${retained}`, "error");
            console.error(`${SCRIPT_NAME}: calque des PR`, error);
        }
    }

    function schedulePrIndexRefresh(delay = PR_INDEX_DEBOUNCE_MS, force = false) {
        if (!prIndexLayerEnabled) return;
        prIndexRefreshPendingForce = prIndexRefreshPendingForce || force;
        if (force) prIndexRefreshGeneration += 1;
        // Conserver la première échéance : une rafale de data-loaded ne doit
        // jamais repousser la requête jusqu'à la fin de tout le chargement WME.
        if (prIndexRefreshTimer !== null) {
            if (delay > 0) return;
            root.clearTimeout(prIndexRefreshTimer);
        }
        prIndexRefreshTimer = root.setTimeout(() => {
            prIndexRefreshTimer = null;
            const forceRefresh = prIndexRefreshPendingForce;
            prIndexRefreshPendingForce = false;
            observeAsync(refreshPrIndexLayer(prIndexRefreshGeneration, forceRefresh), "rafraîchissement PR");
        }, Math.max(0, delay));
    }

    async function setPrIndexLayerEnabled(enabled) {
        const wantedEnabled = Boolean(enabled);
        const revision = ++prIndexVisibilityRevision;
        // Mettre l'état logique à jour immédiatement, avant tout await :
        // un rendu déjà lancé verra donc aussitôt la désactivation.
        prIndexLayerEnabled = wantedEnabled;
        writeSetting(SETTINGS_PR_INDEX_ENABLED_KEY, wantedEnabled ? "1" : "0");
        if (!wantedEnabled) {
            if (prIndexRefreshTimer !== null) root.clearTimeout(prIndexRefreshTimer);
            prIndexRefreshPendingForce = false;
            if (prIndexLayoutTimer !== null) root.clearTimeout(prIndexLayoutTimer);
            if (prLabelIndexTimer !== null) root.clearTimeout(prLabelIndexTimer);
            prIndexRefreshTimer = null;
            prIndexLayoutTimer = null;
            prLabelIndexTimer = null;
            prIndexRefreshGeneration += 1;
            cancelPrIndexRequests();
        } else {
            setPrIndexStatus("Calque des PR activé.", "info");
            schedulePrIndexRefresh(0, true);
        }

        // Les appels SDK peuvent finir dans un ordre différent de leur départ.
        // Les sérialiser et ignorer les demandes dépassées évite qu'un ancien
        // 'désactiver' masque un calque que l'éditeur vient de réactiver.
        const job = prIndexVisibilityQueue.catch((error) => {
            console.warn(`${SCRIPT_NAME}: opération de visibilité PR interrompue`, error);
        }).then(async () => {
            if (revision !== prIndexVisibilityRevision) return false;
            try {
                await sdk.Map.setLayerVisibility({ layerName: PR_INDEX_LAYER, visibility: wantedEnabled });
            } catch (error) {
                // Le calque peut encore être en cours d'initialisation.
            }
            if (revision !== prIndexVisibilityRevision) return false;
            if (!wantedEnabled) {
                await clearPrIndexFeatures();
                if (revision === prIndexVisibilityRevision) {
                    setPrIndexStatus("Calque général des PR : désactivé.", "info");
                }
            }
            return true;
        });
        prIndexVisibilityQueue = job;
        return job;
    }

    function updateAppearanceOutputs() {
        if (!ui?.resultMarkerSize) return;
        ui.resultMarkerSizeOutput.textContent = `${ui.resultMarkerSize.value} px`;
        ui.resultLineWidthOutput.textContent = `${ui.resultLineWidth.value} px`;
        ui.resultOpacityOutput.textContent = `${ui.resultOpacity.value} %`;
        ui.resultCartoucheScaleOutput.textContent = `${ui.resultCartoucheScale.value} %`;
        ui.resultCartoucheOpacityOutput.textContent = `${ui.resultCartoucheOpacity.value} %`;
        ui.resultLabelOffsetOutput.textContent = `${ui.resultLabelOffset.value} px`;
        ui.resultLabelSizeOutput.textContent = `${ui.resultLabelSize.value} px`;
        ui.resultLabelOutlineWidthOutput.textContent = `${ui.resultLabelOutlineWidth.value} px`;
        ui.prMarkerSizeOutput.textContent = `${ui.prMarkerSize.value} px`;
        ui.prOpacityOutput.textContent = `${ui.prOpacity.value} %`;
        ui.prCartoucheScaleOutput.textContent = `${ui.prCartoucheScale.value} %`;
        ui.prCartoucheOpacityOutput.textContent = `${ui.prCartoucheOpacity.value} %`;
        ui.prLabelSizeOutput.textContent = `${ui.prLabelSize.value} px`;
        ui.prLabelOffsetOutput.textContent = `${ui.prLabelOffset.value} px`;
        ui.prLabelOutlineWidthOutput.textContent = `${ui.prLabelOutlineWidth.value} px`;
        const resultCartoucheSelected = ui.resultLabelStyle.value === "cartouche";
        ui.resultShowSense.disabled = !resultCartoucheSelected || !ui.resultShowLabels.checked;
        ui.resultShowMotorwayDestination.disabled = !resultCartoucheSelected || !ui.resultShowLabels.checked;
        ui.resultMotorwayCartoucheColor.disabled = !resultCartoucheSelected || !ui.resultShowLabels.checked;
        ui.resultDepartmentCartoucheColor.disabled = !resultCartoucheSelected || !ui.resultShowLabels.checked;
        ui.resultCartoucheScale.disabled = !resultCartoucheSelected || !ui.resultShowLabels.checked;
        ui.resultCartoucheOpacity.disabled = !resultCartoucheSelected || !ui.resultShowLabels.checked;
        ui.resultLabelOffset.disabled = !ui.resultShowLabels.checked;
        ui.resultLabelColor.disabled = resultCartoucheSelected || !ui.resultShowLabels.checked;
        ui.resultLabelOutlineColor.disabled = resultCartoucheSelected || !ui.resultShowLabels.checked;
        ui.resultLabelOutlineWidth.disabled = resultCartoucheSelected || !ui.resultShowLabels.checked;
        ui.resultLabelSize.disabled = !ui.resultShowLabels.checked;
        ui.prLabelMinZoom.disabled = ui.prLabelMode.value !== "auto";
        const cartoucheSelected = ui.prLabelStyle.value === "cartouche";
        ui.prShowSense.disabled = !cartoucheSelected;
        ui.prShowMotorwayDestination.disabled = !cartoucheSelected;
        ui.prMotorwayCartoucheColor.disabled = !cartoucheSelected;
        ui.prDepartmentCartoucheColor.disabled = !cartoucheSelected;
        ui.prCartoucheScale.disabled = !cartoucheSelected;
        ui.prCartoucheOpacity.disabled = !cartoucheSelected;
        ui.motorwayDestinations.disabled = !cartoucheSelected || !ui.prShowMotorwayDestination.checked;
    }

    function fillAppearanceControls(settings) {
        if (!ui?.resultTargetColor) return;
        const normalized = Core.normalizeAppearanceSettings(settings);
        ui.resultTargetColor.value = normalized.resultTargetColor;
        ui.resultPathColor.value = normalized.resultPathColor;
        ui.resultZoneColor.value = normalized.resultZoneColor;
        ui.resultAnchorColor.value = normalized.resultAnchorColor;
        ui.resultMarkerSize.value = String(normalized.resultMarkerSize);
        ui.resultLineWidth.value = String(normalized.resultLineWidth);
        ui.resultOpacity.value = String(Math.round(normalized.resultOpacity * 100));
        ui.resultShowLabels.checked = normalized.resultShowLabels;
        ui.resultLabelStyle.value = normalized.resultLabelStyle;
        ui.resultShowSense.checked = normalized.resultShowSense;
        ui.resultShowMotorwayDestination.checked = normalized.resultShowMotorwayDestination;
        ui.resultMotorwayCartoucheColor.value = normalized.resultMotorwayCartoucheColor;
        ui.resultDepartmentCartoucheColor.value = normalized.resultDepartmentCartoucheColor;
        ui.resultCartoucheScale.value = String(Math.round(normalized.resultCartoucheScale * 100));
        ui.resultCartoucheOpacity.value = String(Math.round(normalized.resultCartoucheOpacity * 100));
        ui.resultLabelOffset.value = String(normalized.resultLabelOffset);
        ui.resultLabelColor.value = normalized.resultLabelColor;
        ui.resultLabelSize.value = String(normalized.resultLabelSize);
        ui.resultLabelOutlineColor.value = normalized.resultLabelOutlineColor;
        ui.resultLabelOutlineWidth.value = String(normalized.resultLabelOutlineWidth);
        ui.resultPanelBackgroundColor.value = normalized.resultPanelBackgroundColor;
        ui.resultPanelBorderColor.value = normalized.resultPanelBorderColor;
        ui.resultPanelTitleColor.value = normalized.resultPanelTitleColor;
        ui.resultPanelTextColor.value = normalized.resultPanelTextColor;
        ui.prAutorouteColor.value = normalized.prAutorouteColor;
        ui.prNationalColor.value = normalized.prNationalColor;
        ui.prMetropolitanColor.value = normalized.prMetropolitanColor;
        ui.prOtherColor.value = normalized.prOtherColor;
        ui.prMarkerSize.value = String(normalized.prMarkerSize);
        ui.prOpacity.value = String(Math.round(normalized.prOpacity * 100));
        ui.prLabelStyle.value = normalized.prLabelStyle;
        ui.prShowSense.checked = normalized.prShowSense;
        ui.prShowMotorwayDestination.checked = normalized.prShowMotorwayDestination;
        ui.prMotorwayCartoucheColor.value = normalized.prMotorwayCartoucheColor;
        ui.prDepartmentCartoucheColor.value = normalized.prDepartmentCartoucheColor;
        ui.prCartoucheScale.value = String(Math.round(normalized.prCartoucheScale * 100));
        ui.prCartoucheOpacity.value = String(Math.round(normalized.prCartoucheOpacity * 100));
        ui.motorwayDestinations.value = Core.formatMotorwayDestinationText(motorwayDestinationOverrides);
        ui.prLabelMode.value = normalized.prLabelMode;
        ui.prLabelMinZoom.value = String(normalized.prLabelMinZoom);
        ui.prLabelSize.value = String(normalized.prLabelSize);
        ui.prLabelOffset.value = String(normalized.prLabelOffset);
        ui.prLabelColor.value = normalized.prLabelColor;
        ui.prLabelOutlineColor.value = normalized.prLabelOutlineColor;
        ui.prLabelOutlineWidth.value = String(normalized.prLabelOutlineWidth);
        updateAppearanceOutputs();
    }

    function appearanceSettingsFromControls() {
        return Core.normalizeAppearanceSettings({
            resultTargetColor: ui.resultTargetColor.value,
            resultPathColor: ui.resultPathColor.value,
            resultZoneColor: ui.resultZoneColor.value,
            resultAnchorColor: ui.resultAnchorColor.value,
            resultMarkerSize: Number(ui.resultMarkerSize.value),
            resultLineWidth: Number(ui.resultLineWidth.value),
            resultOpacity: Number(ui.resultOpacity.value) / 100,
            resultShowLabels: ui.resultShowLabels.checked,
            resultLabelStyle: ui.resultLabelStyle.value,
            resultShowSense: ui.resultShowSense.checked,
            resultShowMotorwayDestination: ui.resultShowMotorwayDestination.checked,
            resultMotorwayCartoucheColor: ui.resultMotorwayCartoucheColor.value,
            resultDepartmentCartoucheColor: ui.resultDepartmentCartoucheColor.value,
            resultCartoucheScale: Number(ui.resultCartoucheScale.value) / 100,
            resultCartoucheOpacity: Number(ui.resultCartoucheOpacity.value) / 100,
            resultLabelOffset: Number(ui.resultLabelOffset.value),
            resultLabelColor: ui.resultLabelColor.value,
            resultLabelSize: Number(ui.resultLabelSize.value),
            resultLabelOutlineColor: ui.resultLabelOutlineColor.value,
            resultLabelOutlineWidth: Number(ui.resultLabelOutlineWidth.value),
            resultPanelBackgroundColor: ui.resultPanelBackgroundColor.value,
            resultPanelBorderColor: ui.resultPanelBorderColor.value,
            resultPanelTitleColor: ui.resultPanelTitleColor.value,
            resultPanelTextColor: ui.resultPanelTextColor.value,
            prAutorouteColor: ui.prAutorouteColor.value,
            prNationalColor: ui.prNationalColor.value,
            prMetropolitanColor: ui.prMetropolitanColor.value,
            prOtherColor: ui.prOtherColor.value,
            prMarkerSize: Number(ui.prMarkerSize.value),
            prOpacity: Number(ui.prOpacity.value) / 100,
            prLabelStyle: ui.prLabelStyle.value,
            prShowSense: ui.prShowSense.checked,
            prShowMotorwayDestination: ui.prShowMotorwayDestination.checked,
            prMotorwayCartoucheColor: ui.prMotorwayCartoucheColor.value,
            prDepartmentCartoucheColor: ui.prDepartmentCartoucheColor.value,
            prCartoucheScale: Number(ui.prCartoucheScale.value) / 100,
            prCartoucheOpacity: Number(ui.prCartoucheOpacity.value) / 100,
            prLabelMode: ui.prLabelMode.value,
            prLabelMinZoom: Number(ui.prLabelMinZoom.value),
            prLabelSize: Number(ui.prLabelSize.value),
            prLabelOffset: Number(ui.prLabelOffset.value),
            prLabelColor: ui.prLabelColor.value,
            prLabelOutlineColor: ui.prLabelOutlineColor.value,
            prLabelOutlineWidth: Number(ui.prLabelOutlineWidth.value),
        });
    }

    function previewCartoucheAppearance() {
        appearanceSettings = Core.normalizeAppearanceSettings({
            ...appearanceSettings,
            prCartoucheScale: Number(ui.prCartoucheScale.value) / 100,
            prCartoucheOpacity: Number(ui.prCartoucheOpacity.value) / 100,
        });
        updateAppearanceOutputs();
        schedulePrIndexLayoutRefresh(0);
    }

    async function saveAppearance() {
        try {
            const parsedDestinations = Core.parseMotorwayDestinationText(ui.motorwayDestinations.value);
            writeAppearanceSettings(appearanceSettingsFromControls());
            writeMotorwayDestinationOverrides(parsedDestinations);
            fillAppearanceControls(appearanceSettings);
            await applyAppearanceSettings();
            refreshSearchSideOptions();
            schedulePrIndexLayoutRefresh(0);
            if (latestResult?.results?.length) {
                await drawResult(latestResult.results, latestResult.label, latestResult.zonePath, latestResult.zoneDiscontinuities || []);
            }
            setStatus(ctr("savedStatus"), "success");
        } catch (error) {
            setStatus(error?.message || String(error), "error");
        }
    }

    async function resetAppearance() {
        try {
            writeAppearanceSettings(APPEARANCE_DEFAULTS);
            writeMotorwayDestinationOverrides({});
            fillAppearanceControls(appearanceSettings);
            await applyAppearanceSettings();
            refreshSearchSideOptions();
            schedulePrIndexLayoutRefresh(0);
            if (latestResult?.results?.length) {
                await drawResult(latestResult.results, latestResult.label, latestResult.zonePath, latestResult.zoneDiscontinuities || []);
            }
            setStatus(ctr("resetStatus"), "success");
        } catch (error) {
            setStatus(error?.message || String(error), "error");
        }
    }

    function bindLayerCheckboxEvents() {
        if (layerCheckboxBound) return;
        sdk.Events.on({
            eventName: "wme-layer-checkbox-toggled",
            eventHandler: (event) => {
                const detail = event?.detail || event || {};
                if (detail.name === RESULT_CHECKBOX) {
                    try {
                        observeAsync(sdk.Map.setLayerVisibility({ layerName: RESULT_LAYER, visibility: Boolean(detail.checked) }), "visibilité du résultat");
                    } catch (error) {
                        // Non bloquant.
                    }
                } else if (detail.name === PR_INDEX_CHECKBOX) {
                    observeAsync(setPrIndexLayerEnabled(Boolean(detail.checked)), "visibilité des PR");
                }
            },
        });
        layerCheckboxBound = true;
    }

    async function applyAppearanceSettings() {
        if (ui?.root) {
            ui.root.style.setProperty("--wme-pr-result-panel-bg", appearanceSettings.resultPanelBackgroundColor);
            ui.root.style.setProperty("--wme-pr-result-panel-border", appearanceSettings.resultPanelBorderColor);
            ui.root.style.setProperty("--wme-pr-result-panel-title", appearanceSettings.resultPanelTitleColor);
            ui.root.style.setProperty("--wme-pr-result-panel-text", appearanceSettings.resultPanelTextColor);
        }
        for (const [layerName, opacity] of [
            [RESULT_LAYER, appearanceSettings.resultOpacity],
            [PR_INDEX_LAYER, appearanceSettings.prOpacity],
        ]) {
            try {
                await sdk.Map.setLayerOpacity({ layerName, opacity });
                await sdk.Map.redrawLayer({ layerName });
            } catch (error) {
                // Le calque peut ne pas encore être initialisé.
            }
        }
    }

    function ensureResultLayer() {
        if (!resultLayerInitialization) {
            resultLayerInitialization = registerResultLayer().catch((error) => {
                resultLayerInitialization = null;
                throw error;
            });
        }
        return resultLayerInitialization;
    }

    async function registerResultLayer() {
        try {
            await sdk.Map.addLayer({
                layerName: RESULT_LAYER,
                styleContext: {
                    getLabel: ({ feature }) => (
                        appearanceSettings.resultShowLabels && appearanceSettings.resultLabelStyle === "simple"
                            ? feature?.properties?.label || ""
                            : ""
                    ),
                    getTargetColor: () => appearanceSettings.resultTargetColor,
                    getPathColor: () => appearanceSettings.resultPathColor,
                    getZoneColor: () => appearanceSettings.resultZoneColor,
                    getAnchorColor: () => appearanceSettings.resultAnchorColor,
                    getTargetSize: () => appearanceSettings.resultMarkerSize,
                    getAnchorSize: () => Math.max(3, Math.round(appearanceSettings.resultMarkerSize * 0.42)),
                    getLineWidth: () => appearanceSettings.resultLineWidth,
                    getZoneWidth: () => appearanceSettings.resultLineWidth + 2,
                    getTargetLabelXOffset: ({ feature }) => Number(feature?.properties?.labelOffsetX) || 0,
                    getTargetLabelYOffset: ({ feature }) => Number(feature?.properties?.labelOffsetY) || 0,
                    getResultLabelColor: () => appearanceSettings.resultLabelColor,
                    getResultLabelSize: () => `${appearanceSettings.resultLabelSize}px`,
                    getResultLabelOutlineColor: () => appearanceSettings.resultLabelOutlineColor,
                    getResultLabelOutlineWidth: () => appearanceSettings.resultLabelOutlineWidth,
                    getResultCartoucheGraphic: ({ feature }) => feature?.properties?.cartoucheGraphic || "",
                    getResultCartoucheWidth: ({ feature }) => Number(feature?.properties?.cartoucheWidth) || 1,
                    getResultCartoucheHeight: ({ feature }) => Number(feature?.properties?.cartoucheHeight) || 1,
                    getResultCartoucheXOffset: ({ feature }) => Number(feature?.properties?.cartoucheXOffset) || 0,
                    getResultCartoucheYOffset: ({ feature }) => Number(feature?.properties?.cartoucheYOffset) || 0,
                    getResultCartoucheOpacity: () => appearanceSettings.resultCartoucheOpacity,
                },
                styleRules: [
                    {
                        predicate: (properties) => properties.kind === "zone",
                        style: {
                            pointerEvents: "none",
                            stroke: true,
                            strokeColor: "${getZoneColor}",
                            strokeOpacity: 1,
                            strokeWidth: "${getZoneWidth}",
                            fill: false,
                        },
                    },
                    {
                        predicate: (properties) => properties.kind === "path",
                        style: {
                            pointerEvents: "none",
                            stroke: true,
                            strokeColor: "${getPathColor}",
                            strokeOpacity: 1,
                            strokeWidth: "${getLineWidth}",
                            strokeDashstyle: "dash",
                            fill: false,
                        },
                    },
                    {
                        predicate: (properties) => properties.kind === "anchor",
                        style: {
                            pointerEvents: "none",
                            graphicName: "circle",
                            pointRadius: "${getAnchorSize}",
                            fillColor: "${getAnchorColor}",
                            fillOpacity: 1,
                            strokeColor: "#ffffff",
                            strokeWidth: 2,
                        },
                    },
                    {
                        predicate: (properties) => properties.kind === "target-cartouche",
                        style: {
                            pointerEvents: "none",
                            externalGraphic: "${getResultCartoucheGraphic}",
                            graphicWidth: "${getResultCartoucheWidth}",
                            graphicHeight: "${getResultCartoucheHeight}",
                            graphicXOffset: "${getResultCartoucheXOffset}",
                            graphicYOffset: "${getResultCartoucheYOffset}",
                            graphicOpacity: "${getResultCartoucheOpacity}",
                        },
                    },
                    {
                        predicate: (properties) => properties.kind === "target",
                        style: {
                            pointerEvents: "none",
                            graphicName: "star",
                            pointRadius: "${getTargetSize}",
                            fillColor: "${getTargetColor}",
                            fillOpacity: 1,
                            strokeColor: "#ffffff",
                            strokeWidth: 3,
                            label: "${getLabel}",
                            labelXOffset: "${getTargetLabelXOffset}",
                            labelYOffset: "${getTargetLabelYOffset}",
                            fontColor: "${getResultLabelColor}",
                            fontSize: "${getResultLabelSize}",
                            fontWeight: "bold",
                            labelOutlineColor: "${getResultLabelOutlineColor}",
                            labelOutlineWidth: "${getResultLabelOutlineWidth}",
                        },
                    },
                ],
            });
        } catch (error) {
            // Le calque existe déjà après une réinjection du userscript.
        }
        try {
            await sdk.Map.setLayerOpacity({ layerName: RESULT_LAYER, opacity: appearanceSettings.resultOpacity });
        } catch (error) {
            // Non bloquant.
        }
        try {
            await sdk.LayerSwitcher.addLayerCheckbox({ name: RESULT_CHECKBOX, isChecked: true });
        } catch (error) {
            // La case existe déjà.
        }
        bindLayerCheckboxEvents();
    }

    async function ensurePrIndexLayer() {
        if (!prIndexLayerInitialized) {
            prIndexLayerEnabled = readSetting(SETTINGS_PR_INDEX_ENABLED_KEY) === "1";
            prIndexLayerInitialized = true;
        }
        try {
            await sdk.Map.addLayer({
                layerName: PR_INDEX_LAYER,
                styleContext: {
                    getLabel: ({ feature, zoomLevel }) => (
                        appearanceSettings.prLabelStyle === "simple"
                        && prIndexLabelsVisibleAtZoom(zoomLevel)
                            ? feature?.properties?.label || ""
                            : ""
                    ),
                    getCartoucheDisplay: ({ zoomLevel }) => (
                        appearanceSettings.prLabelStyle === "cartouche"
                        && prIndexLabelsVisibleAtZoom(zoomLevel)
                            ? "block"
                            : "none"
                    ),
                    getCartoucheGraphic: ({ feature }) => feature?.properties?.cartoucheGraphic || "",
                    getCartoucheWidth: ({ feature }) => Number(feature?.properties?.cartoucheWidth) || 1,
                    getCartoucheHeight: ({ feature }) => Number(feature?.properties?.cartoucheHeight) || 1,
                    getCartoucheXOffset: ({ feature }) => Number(feature?.properties?.cartoucheXOffset) || 0,
                    getCartoucheYOffset: ({ feature }) => Number(feature?.properties?.cartoucheYOffset) || 0,
                    getCartoucheOpacity: () => appearanceSettings.prCartoucheOpacity,
                    getColor: ({ feature }) => prIndexPointColor(feature?.properties),
                    getPointSize: () => appearanceSettings.prMarkerSize,
                    getStrokeWidth: () => Math.max(1, Math.round(appearanceSettings.prMarkerSize * 0.4)),
                    getLabelXOffset: ({ feature }) => Number(feature?.properties?.labelOffsetX) || 0,
                    getLabelYOffset: ({ feature }) => Number.isFinite(Number(feature?.properties?.labelOffsetY))
                        ? Number(feature.properties.labelOffsetY)
                        : appearanceSettings.prLabelOffset,
                    getFontSize: () => `${appearanceSettings.prLabelSize}px`,
                    getFontColor: () => appearanceSettings.prLabelColor,
                    getLabelOutlineColor: () => appearanceSettings.prLabelOutlineColor,
                    getLabelOutlineWidth: () => appearanceSettings.prLabelOutlineWidth,
                },
                styleRules: [
                    {
                        predicate: (properties) => properties.kind === "pr-index-leader",
                        style: {
                            pointerEvents: "none",
                            stroke: true,
                            strokeColor: "${getColor}",
                            strokeOpacity: 0.72,
                            strokeWidth: 1.5,
                            fill: false,
                        },
                    },
                    {
                        predicate: (properties) => properties.kind === "pr-index",
                        style: {
                            pointerEvents: "none",
                            graphicName: "circle",
                            pointRadius: "${getPointSize}",
                            fillColor: "${getColor}",
                            fillOpacity: 1,
                            strokeColor: "#ffffff",
                            strokeWidth: "${getStrokeWidth}",
                            label: "${getLabel}",
                            labelXOffset: "${getLabelXOffset}",
                            labelYOffset: "${getLabelYOffset}",
                            fontColor: "${getFontColor}",
                            fontSize: "${getFontSize}",
                            fontWeight: "bold",
                            labelOutlineColor: "${getLabelOutlineColor}",
                            labelOutlineWidth: "${getLabelOutlineWidth}",
                        },
                    },
                    {
                        predicate: (properties) => properties.kind === "pr-index-cartouche",
                        style: {
                            pointerEvents: "none",
                            display: "${getCartoucheDisplay}",
                            externalGraphic: "${getCartoucheGraphic}",
                            graphicWidth: "${getCartoucheWidth}",
                            graphicHeight: "${getCartoucheHeight}",
                            graphicXOffset: "${getCartoucheXOffset}",
                            graphicYOffset: "${getCartoucheYOffset}",
                            graphicOpacity: "${getCartoucheOpacity}",
                            graphicZIndex: 2432,
                        },
                    },
                ],
            });
        } catch (error) {
            // Le calque existe déjà après une réinjection du userscript.
        }
        try {
            await sdk.Map.setLayerOpacity({ layerName: PR_INDEX_LAYER, opacity: appearanceSettings.prOpacity });
            await sdk.Map.setLayerVisibility({ layerName: PR_INDEX_LAYER, visibility: prIndexLayerEnabled });
        } catch (error) {
            // Non bloquant.
        }
        try {
            await sdk.LayerSwitcher.addLayerCheckbox({ name: PR_INDEX_CHECKBOX, isChecked: prIndexLayerEnabled });
        } catch (error) {
            try {
                await sdk.LayerSwitcher.setLayerCheckboxChecked({ name: PR_INDEX_CHECKBOX, isChecked: prIndexLayerEnabled });
            } catch (ignored) {
                // Non bloquant après une réinjection.
            }
        }
        bindLayerCheckboxEvents();
    }

    function bindPrIndexMapEvents() {
        if (prIndexMapEventsBound) return;
        const refresh = () => schedulePrIndexRefresh();
        const dataLoaded = () => {
            routeDataRevision += 1;
            routeSnapshotCache.clear();
            mapModelSnapshotPromise = null;
            mapJunctionsSnapshotPromise = null;
            prLabelSegmentSpatialIndex = null;
            schedulePrLabelIndexRefresh();
            // Le premier rendu garde le placement disponible. La résolution du
            // nouvel index déclenchera l'affinement, sans masquer les points PR.
            // Vérifier aussi la nouvelle emprise : un simple recalcul de layout
            // ne chargeait jamais les PR absents du cache de la vue précédente.
            // Le cache et les requêtes partagées évitent les téléchargements doublons.
            schedulePrIndexRefresh(PR_INDEX_DEBOUNCE_MS);
        };
        sdk.Events.on({ eventName: "wme-map-move-end", eventHandler: refresh });
        sdk.Events.on({ eventName: "wme-map-zoom-changed", eventHandler: refresh });
        sdk.Events.on({ eventName: "wme-map-data-loaded", eventHandler: dataLoaded });
        prIndexMapEventsBound = true;
    }

    async function drawResult(results, label, zonePath = null, additionalDiscontinuities = []) {
        const generation = ++resultRenderRevision;
        await ensureResultLayer();
        const features = [];
        if (zonePath?.coordinates?.length >= 2) {
            features.push({
                id: "wme-pr-zone",
                type: "Feature",
                geometry: { type: "LineString", coordinates: zonePath.coordinates },
                properties: { kind: "zone" },
            });
        } else if (results[0]?.travelledCoordinates?.length >= 2) {
            features.push({
                id: "wme-pr-path",
                type: "Feature",
                geometry: { type: "LineString", coordinates: results[0].travelledCoordinates },
                properties: { kind: "path" },
            });
        }
        results.forEach((result, index) => {
            const anchorOverlapsTarget = result.startAnchor?.point
                && result.point
                && Core.haversine(result.startAnchor.point, result.point) < 0.5;
            if (result.startAnchor?.point && result.parsedPr?.offset > 0 && !anchorOverlapsTarget) features.push({
                id: `wme-pr-anchor-${index}`,
                type: "Feature",
                geometry: { type: "Point", coordinates: result.startAnchor.point },
                properties: {
                    kind: "anchor",
                    label: result.anchorLabel || `${result.startAnchor.estimated ? "≈" : ""}PR${result.parsedPr.base}`,
                },
            });
            const basePoint = result.candidate?.start;
            for (const [gapIndex, discontinuity] of (result.discontinuities || []).entries()) {
                for (const boundary of [discontinuity.from, discontinuity.to]) {
                    if (Core.haversine(boundary.coordinate, result.point) < 0.5) continue;
                    if (result.startAnchor?.point && Core.haversine(boundary.coordinate, result.startAnchor.point) < 0.5) continue;
                    const relativeOffset = Number.isFinite(basePoint?.abscissa)
                        ? boundary.abscissa - basePoint.abscissa
                        : 0;
                    features.push({
                        id: `wme-pr-gap-${index}-${gapIndex}-${boundary.pointType}`,
                        type: "Feature",
                        geometry: { type: "Point", coordinates: boundary.coordinate },
                        properties: {
                            kind: "anchor",
                            label: `${boundary.pointType} · PR${result.parsedPr.base}+${String(relativeOffset).padStart(3, "0")}`,
                        },
                    });
                }
            }
            const targetLabelOffset = resultLabelOffset(result);
            features.push({
                id: `wme-pr-target-${index}`,
                type: "Feature",
                geometry: { type: "Point", coordinates: result.point },
                properties: {
                    kind: "target",
                    label: currentResultLabel(result, label),
                    labelOffsetX: targetLabelOffset.x,
                    labelOffsetY: targetLabelOffset.y,
                },
            });
            if (appearanceSettings.resultShowLabels && appearanceSettings.resultLabelStyle === "cartouche") {
                const descriptor = resultCartoucheDescriptor(result);
                features.push({
                    id: `wme-pr-target-cartouche-${index}`,
                    type: "Feature",
                    geometry: { type: "Point", coordinates: result.point },
                    properties: {
                        kind: "target-cartouche",
                        ...resultCartoucheFeatureProperties(descriptor, targetLabelOffset),
                    },
                });
            }
        });
        const firstBasePoint = results[0]?.candidate?.start;
        for (const [gapIndex, discontinuity] of additionalDiscontinuities.entries()) {
            for (const boundary of [discontinuity.from, discontinuity.to]) {
                const alreadyDrawn = features.some((feature) => (
                    feature.geometry?.type === "Point"
                    && Core.haversine(feature.geometry.coordinates, boundary.coordinate) < 0.5
                ));
                if (alreadyDrawn) continue;
                const relativeOffset = Number.isFinite(firstBasePoint?.abscissa)
                    ? boundary.abscissa - firstBasePoint.abscissa
                    : 0;
                features.push({
                    id: `wme-pr-zone-gap-${gapIndex}-${boundary.pointType}`,
                    type: "Feature",
                    geometry: { type: "Point", coordinates: boundary.coordinate },
                    properties: {
                        kind: "anchor",
                        label: `${boundary.pointType} · PR${firstBasePoint?.number ?? "?"}+${String(relativeOffset).padStart(3, "0")}`,
                    },
                });
            }
        }
        // Les changements de style peuvent arriver en rafale. Les écritures
        // SDK sont ordonnées et les générations dépassées ignorées.
        const task = resultRenderQueue.catch((error) => {
            console.warn(`${SCRIPT_NAME}: rendu résultat précédent interrompu`, error);
        }).then(async () => {
            if (generation !== resultRenderRevision) return;
            await sdk.Map.removeAllFeaturesFromLayer({ layerName: RESULT_LAYER });
            if (generation !== resultRenderRevision) return;
            await sdk.Map.addFeaturesToLayer({ layerName: RESULT_LAYER, features });
            if (generation !== resultRenderRevision) return;
            await sdk.Map.setLayerVisibility({ layerName: RESULT_LAYER, visibility: true });
            try {
                await sdk.LayerSwitcher.setLayerCheckboxChecked({ name: RESULT_CHECKBOX, isChecked: true });
            } catch (error) {
                // Non bloquant : l'éditeur peut avoir masqué ce calque.
            }
        });
        resultRenderQueue = task;
        return task;
    }

    function waitForMapUpdate() {
        return new Promise((resolve) => {
            root.requestAnimationFrame(() => root.requestAnimationFrame(resolve));
        });
    }

    function getMapView(coordinates) {
        let minLon = Infinity;
        let maxLon = -Infinity;
        let minLat = Infinity;
        let maxLat = -Infinity;
        let validCoordinateCount = 0;
        for (const coordinate of coordinates || []) {
            if (!Array.isArray(coordinate) || coordinate.length < 2) continue;
            const lon = Number(coordinate[0]);
            const lat = Number(coordinate[1]);
            if (!Number.isFinite(lon) || !Number.isFinite(lat)) continue;
            minLon = Math.min(minLon, lon);
            maxLon = Math.max(maxLon, lon);
            minLat = Math.min(minLat, lat);
            maxLat = Math.max(maxLat, lat);
            validCoordinateCount += 1;
        }
        if (!validCoordinateCount) throw new Error("Aucune coordonnée exploitable pour centrer WME.");
        const distance = Core.haversine([minLon, minLat], [maxLon, maxLat]);
        let zoomLevel = 18;
        if (distance > 300) zoomLevel = 17;
        if (distance > 800) zoomLevel = 16;
        if (distance > 1800) zoomLevel = 15;
        if (distance > 3500) zoomLevel = 14;
        if (distance > 7000) zoomLevel = 13;
        if (distance > 14000) zoomLevel = 12;
        // WME ne rend pas les segments sélectionnables de façon fiable sous le zoom 14.
        // Les recherches restent donc au minimum au niveau 14, même pour une zone longue.
        zoomLevel = Math.max(SEARCH_MIN_ZOOM_LEVEL, zoomLevel);
        return {
            center: { lon: (minLon + maxLon) / 2, lat: (minLat + maxLat) / 2 },
            zoomLevel,
            distance,
        };
    }

    async function moveMapAndWait(coordinates) {
        const view = getMapView(coordinates);
        const currentCenter = await sdk.Map.getMapCenter();
        const currentZoom = await sdk.Map.getZoomLevel();
        const needsMove = !currentCenter
            || Core.haversine([currentCenter.lon, currentCenter.lat], [view.center.lon, view.center.lat]) > 10
            || currentZoom !== view.zoomLevel;
        if (needsMove) {
            const loaded = sdk.Events.once({ eventName: "wme-map-data-loaded" });
            await sdk.Map.setMapCenter({ lonLat: view.center, zoomLevel: view.zoomLevel });
            await Promise.race([
                loaded,
                new Promise((resolve) => root.setTimeout(resolve, 8000)),
            ]);
        }
        await waitForMapUpdate();
        return { ...view, moved: needsMove };
    }

    async function moveMapToCoordinateAtZoomAndWait(coordinate, zoomLevel = SEARCH_MIN_ZOOM_LEVEL) {
        if (!Array.isArray(coordinate) || coordinate.length < 2) return;
        const lon = Number(coordinate[0]);
        const lat = Number(coordinate[1]);
        if (!Number.isFinite(lon) || !Number.isFinite(lat)) return;
        const loaded = sdk.Events.once({ eventName: "wme-map-data-loaded" });
        await sdk.Map.setMapCenter({ lonLat: { lon, lat }, zoomLevel });
        await Promise.race([
            loaded,
            new Promise((resolve) => root.setTimeout(resolve, 8000)),
        ]);
        await waitForMapUpdate();
    }

    async function loadColombiaRouteSpan(source, routeAliases, guidePoints = []) {
        const lowerCoordinate = source?.lower?.coordinate;
        const upperCoordinate = source?.upper?.coordinate;
        if (!Array.isArray(lowerCoordinate) || !Array.isArray(upperCoordinate)) {
            return { segments: [], sampleCount: 0 };
        }

        let coordinates = (guidePoints || []).map((row) => row?.coordinate).filter((coordinate) =>
            Array.isArray(coordinate) && coordinate.length >= 2 && coordinate.every(Number.isFinite)
        );

        if (coordinates.length < 2) {
            const straightDistance = Core.haversine(lowerCoordinate, upperCoordinate);
            const interval = 1500;
            const steps = Math.max(1, Math.min(12, Math.ceil(straightDistance / interval)));
            coordinates = [];
            for (let index = 0; index <= steps; index += 1) {
                const ratio = steps > 0 ? index / steps : 0;
                coordinates.push([
                    lowerCoordinate[0] + (upperCoordinate[0] - lowerCoordinate[0]) * ratio,
                    lowerCoordinate[1] + (upperCoordinate[1] - lowerCoordinate[1]) * ratio,
                ]);
            }
        }

        coordinates.unshift(lowerCoordinate);
        coordinates.push(upperCoordinate);

        const deduped = [];
        const seen = new Set();
        for (const coordinate of coordinates) {
            const key = `${Number(coordinate[0]).toFixed(6)},${Number(coordinate[1]).toFixed(6)}`;
            if (seen.has(key)) continue;
            seen.add(key);
            deduped.push(coordinate);
        }

        const merged = new Map();
        for (const coordinate of deduped) {
            await moveMapToCoordinateAtZoomAndWait(coordinate, SEARCH_MIN_ZOOM_LEVEL);

            for (const segment of await colombiaLoadedSegmentsByAliases(routeAliases)) {
                merged.set(Number(segment.id), segment);
            }
            for (const segment of await colombiaLoadedRouteFamilySegments(source.axis)) {
                merged.set(Number(segment.id), segment);
            }
            // Les noms/cartouches WME ne sont pas uniformes sur tous les tramos colombiens.
            // Le guide Red Vial constitue alors la référence : conserver aussi les segments
            // géographiquement proches du tracé officiel, indépendamment de leur nom WME.
            for (const segment of await colombiaLoadedSegmentsNearGuide(coordinate)) {
                merged.set(Number(segment.id), segment);
            }
        }
        return { segments: [...merged.values()], sampleCount: deduped.length };
    }

    async function getSearchPreferredCoordinate() {
        const selectedSegmentId = await getSelectedSegmentId();
        if (selectedSegmentId) {
            const selected = (await getMapModelSnapshot()).segments
                .find((segment) => Number(segment.id) === Number(selectedSegmentId));
            const description = Core.describeSegment(selected);
            if (description) return Core.pointAtOffset(description.coordinates, description.length / 2)?.point || null;
        }
        const center = await sdk.Map.getMapCenter();
        return center && Number.isFinite(center.lon) && Number.isFinite(center.lat)
            ? [center.lon, center.lat]
            : null;
    }

    function selectTargetSource(parsedPr, prPoints, axis, options = {}) {
        const candidates = Core.buildTargetCandidates(prPoints, axis, parsedPr, options);
        if (!candidates.length) {
            const sideLabel = options.preferredSide
                ? ` pour ${Core.formatPrSideForDisplay(axis, options.preferredSide) || "le sens demandé"}`
                : "";
            if (parsedPr.offset === 0) {
                throw new Error(`PR${parsedPr.base} introuvable sur ${axis}${sideLabel}.`);
            }
            const present = new Set(Core.filterPrPoints(prPoints, axis).filter(Core.isReferencePoint).map((point) => point.number));
            const missing = [parsedPr.base, parsedPr.base + 1].filter((number) => !present.has(number));
            if (missing.length === 1) {
                throw new Error(
                    `PR${missing[0]} absent : aucun autre PR cohérent du même côté ne permet une estimation contrôlée.`,
                );
            }
            throw new Error(`Les PR${parsedPr.base} et PR${parsedPr.base + 1} n’ont pas pu être associés sur une même chaussée de ${axis}${sideLabel}.`);
        }
        const preferred = candidates[0];
        return {
            parsedPr,
            candidates,
            preferred,
            start: preferred.start || preferred.end || preferred.from,
            end: preferred.end || preferred.reference || preferred.to || null,
            estimated: Boolean(preferred.estimated),
        };
    }

    function directIntegerResult(target) {
        const start = target.candidates?.[0]?.start || target.start;
        return {
            point: start.coordinate.slice(),
            segmentId: null,
            pathLength: 0,
            startAnchor: {
                point: start.coordinate.slice(),
                distance: 0,
                prPoint: start,
                prNumber: target.parsedPr.base,
                segmentId: null,
            },
            endAnchor: null,
            travelledCoordinates: [start.coordinate.slice()],
            pathSegmentIds: [],
            sourcePoint: start,
            component: [],
            estimated: false,
        };
    }

    function resolveTarget(target, routeSegments) {
        if (!routeSegments?.length) {
            if (target.parsedPr.offset > 0) {
                throw new Error(`La géométrie WME de l’axe est nécessaire pour calculer +${target.parsedPr.offset} m.`);
            }
            return directIntegerResult(target);
        }
        return Core.resolveTargetCandidates({
            rawSegments: routeSegments,
            candidates: target.candidates,
            basePr: target.parsedPr.base,
            offset: target.parsedPr.offset,
        });
    }

    function formatPrForDisplay(parsedPr) {
        return parsedPr.formatted;
    }

    function prSideForDisplay(axis, point) {
        return appearanceSettings.prShowSense
            ? Core.formatPrSideForDisplay(axis, point?.side)
            : "";
    }

    function searchResultLabel(axis, parsedPr, sourcePoint) {
        const side = appearanceSettings.resultShowSense
            ? Core.formatPrSideForDisplay(axis, sourcePoint?.side)
            : "";
        return `${axis} — PR ${formatPrForDisplay(parsedPr)}${side ? ` — ${side}` : ""}`;
    }

    function currentResultLabel(result, fallbackLabel = "") {
        const base = result?.axis && result?.parsedPr
            ? searchResultLabel(result.axis, result.parsedPr, result.sourcePoint)
            : (result?.label || fallbackLabel);
        return result?.estimated ? `${base} — estimation` : base;
    }

    async function applyAutomaticResultSelection(results, zonePath) {
        if (!ui?.autoSelect?.checked) return [];
        const segmentIds = Core.automaticSelectionSegmentIds(results, zonePath);
        if (!segmentIds.length) return [];
        await sdk.Editing.setSelection({ selection: { objectType: "segment", ids: segmentIds } });
        return segmentIds;
    }

    async function clearResult() {
        latestResult = null;
        const generation = ++resultRenderRevision;
        const task = resultRenderQueue.catch((error) => {
            console.warn(`${SCRIPT_NAME}: ancien rendu résultat interrompu`, error);
        }).then(async () => {
            if (generation !== resultRenderRevision) return;
            try {
                await sdk.Map.removeAllFeaturesFromLayer({ layerName: RESULT_LAYER });
            } catch (error) {
                // Le calque résultat peut ne pas encore être initialisé.
            }
        });
        resultRenderQueue = task;
        if (ui?.result) ui.result.hidden = true;
        if (ui?.resultActions) ui.resultActions.hidden = true;
        if (ui?.mapCommentEditor) ui.mapCommentEditor.hidden = true;
        if (ui?.resultTitle) ui.resultTitle.textContent = "";
        if (ui?.resultDetails) ui.resultDetails.textContent = "";
        if (ui?.permalink) ui.permalink.href = "#";
        setStatus("Résultat vidé.", "info");
        await task;
    }

    async function locateColombia() {
        if (locateInProgress) return;
        locateInProgress = true;
        ui.locate.disabled = true;
        ui.result.hidden = true;
        if (ui.resultActions) ui.resultActions.hidden = true;
        if (ui.mapCommentEditor) ui.mapCommentEditor.hidden = true;
        latestResult = null;
        try {
            const axis = Core.normalizeAxis(ui.axis.value);
            const parsedPr = Core.parsePr(ui.pr.value);
            setStatus(
                currentLanguage === "es" ? `Buscando ${axis} / PR ${parsedPr.formatted}…`
                    : currentLanguage === "en" ? `Searching ${axis} / PR ${parsedPr.formatted}…`
                        : `Recherche ${axis} / PR ${parsedPr.formatted}…`,
                "info",
            );
            const source = await searchColombiaTarget(axis, parsedPr);
            const loadingCoordinates = [...new Map(source.points.map((point) => [
                `${point.coordinate[0].toFixed(7)},${point.coordinate[1].toFixed(7)}`, point.coordinate,
            ])).values()];
            setStatus(
                currentLanguage === "es" ? `Referencias encontradas. Cargando la geometría WME de ${axis}…`
                    : currentLanguage === "en" ? `References found. Loading WME geometry for ${axis}…`
                        : `Références trouvées. Chargement de la géométrie WME de ${axis}…`,
                "info",
            );
            await moveMapAndWait(loadingCoordinates);
            const routeAliases = colombiaWmeRouteAliases(axis);
            const anchorStraightDistance = Core.haversine(source.lower.coordinate, source.upper.coordinate);
            let routeSegments;
            let guidePoints = [];
            if (anchorStraightDistance > 3500) {
                setStatus(
                    currentLanguage === "es" ? `Referencias distantes: cargando el corredor WME por etapas…`
                        : currentLanguage === "en" ? `Distant references: loading the WME corridor in stages…`
                            : `Références éloignées : chargement progressif du corridor WME…`,
                    "info",
                );
                try {
                    guidePoints = await searchColombiaGuides(
                        axis,
                        source.lower.abscissa,
                        source.upper.abscissa,
                    );
                } catch (guideError) {
                    console.warn(`${SCRIPT_NAME}: guides Colombia indisponibles`, guideError);
                }
                const spanSnapshot = await loadColombiaRouteSpan(source, routeAliases, guidePoints);
                routeSegments = spanSnapshot.segments;
                if (!routeSegments.length) {
                    throw new Error("Aucun segment du corridor colombien n’a pu être mémorisé pendant le chargement progressif.");
                }
            } else {
                const routeSnapshot = await waitForRouteData(axis, source.lower, routeAliases);
                routeSegments = routeSnapshot.segments;
            }
            let resolved;
            try {
                resolved = await resolveColombiaTarget(source, routeSegments);
            } catch (primaryError) {
                const fallback = guidePoints.length
                    ? resolveColombiaTargetFromGuides(source, guidePoints, routeSegments)
                    : null;
                if (!fallback) throw primaryError;
                console.warn(`${SCRIPT_NAME} Colombia: bouclage complet impossible, fallback guides Red Vial`, primaryError);
                resolved = fallback;
            }
            const label = `${axis} — PR ${parsedPr.formatted}${resolved.estimated ? " — BETA" : ""}`;
            const result = {
                ...resolved,
                parsedPr,
                axis,
                displaySide: "",
                label,
            };
            await drawResult([result], label, null, []);
            await moveMapAndWait([result.point]);
            const automaticallySelectedSegmentIds = await applyAutomaticResultSelection([result], null);
            const permalink = await sdk.Map.getPermalink({ includeLayers: false });
            latestResult = {
                results: [result], zonePath: null, label, axis,
                departmentCode: null, roadManager: source.lower.roadManager || source.upper.roadManager || null,
                networkType: "CO", permalink, zoneCrossesDiscontinuity: false,
                zoneDiscontinuities: [], automaticallySelectedSegmentIds,
            };
            ui.resultTitle.textContent = label;
            const fmtChain = (value) => {
                const n = Math.floor(value / 1000); const off = Math.round(value - n * 1000);
                return `${n}+${String(off).padStart(3, "0")}`;
            };
            const resultText = (fr, es, en) =>
                currentLanguage === "es" ? es : currentLanguage === "en" ? en : fr;
            const reliabilityText = (value) => {
                const normalized = String(value || "").toLowerCase();
                if (normalized === "haute") return resultText("haute", "alta", "high");
                if (normalized === "moyenne") return resultText("moyenne", "media", "medium");
                if (normalized === "faible") return resultText("faible", "baja", "low");
                return value;
            };
            const details = [
                `${resultText("Code de voie", "Código de vía", "Road code")} : ${axis}`,
                `PR : ${parsedPr.formatted}`,
                `${resultText("Coordonnées", "Coordenadas", "Coordinates")} : ${result.point[1].toFixed(6)}, ${result.point[0].toFixed(6)}`,
                `${resultText("Références", "Referencias", "References")} : ${fmtChain(source.lower.abscissa)} → ${fmtChain(source.upper.abscissa)}`,
            ];
            if (resolved.calibrated) {
                details.push(
                    `${resultText("Longueur WME entre références", "Longitud WME entre referencias", "WME length between references")} : ${Math.round(resolved.referencePathLength)} m`,
                    `${resultText("Chaînage officiel entre références", "Longitud oficial de encadenamiento", "Official chainage span")} : ${Math.round(resolved.chainageSpan)} m`,
                    `${resultText("Défaut de fermeture", "Error de cierre", "Closure error")} : ${resolved.chainageClosureError >= 0 ? "+" : ""}${Math.round(resolved.chainageClosureError)} m`,
                );
            } else if (resolved.guideFallback) {
                details.push(
                    `${resultText("Méthode", "Método", "Method")} : Red Vial → projection WME`,
                    `${resultText("Guides d’encadrement", "Guías de encuadre", "Bounding guides")} : ${fmtChain(resolved.guideFromChainage)} → ${fmtChain(resolved.guideToChainage)}`,
                    `${resultText("Écart au tracé WME", "Distancia al trazado WME", "Distance to WME geometry")} : ${Math.round(resolved.guideProjectionDistance)} m`,
                );
            }
            details.push(`${resultText("Source", "Fuente", "Source")} : INVÍAS / Red Vial — Colombia BETA`);

            ui.resultDetails.replaceChildren();
            for (const detail of details) {
                ui.resultDetails.append(document.createTextNode(`${detail}\n`));
            }

            const reliabilityLine = document.createElement("span");
            reliabilityLine.append(document.createTextNode(
                `${resultText("Fiabilité", "Fiabilidad", "Reliability")} : `,
            ));
            const reliabilityBadge = document.createElement("span");
            reliabilityBadge.textContent = reliabilityText(resolved.confidence);
            const normalizedReliability = String(resolved.confidence || "").toLowerCase();
            const reliabilityStyle = normalizedReliability === "haute"
                ? { background: "#e7f6e7", color: "#207a20", border: "#8fd08f" }
                : normalizedReliability === "moyenne"
                    ? { background: "#fff3d9", color: "#a35d00", border: "#e7b75e" }
                    : { background: "#fde7e7", color: "#a72626", border: "#e39a9a" };
            Object.assign(reliabilityBadge.style, {
                display: "inline-block",
                padding: "1px 6px",
                borderRadius: "5px",
                border: `1px solid ${reliabilityStyle.border}`,
                background: reliabilityStyle.background,
                color: reliabilityStyle.color,
                fontWeight: "700",
                lineHeight: "1.35",
            });
            reliabilityLine.append(reliabilityBadge);
            ui.resultDetails.append(reliabilityLine);
            ui.resultDetails.append(document.createTextNode("\n"));
            ui.permalink.href = permalink;
            if (ui.resultActions) ui.resultActions.hidden = false;
            ui.result.hidden = false;
            setStatus(
                currentLanguage === "es" ? "PR localizado en WME — Colombia BETA."
                    : currentLanguage === "en" ? "PR located in WME — Colombia BETA."
                        : "PR localisé dans WME — Colombie BETA.",
                resolved.confidence === "faible" ? "info" : "success",
            );
        } catch (error) {
            console.error(`${SCRIPT_NAME} Colombia:`, error);
            setStatus(error?.message || String(error), "error");
        } finally {
            locateInProgress = false;
            ui.locate.disabled = false;
        }
    }

    async function locate(options = null) {
        const external = options?.external === true;
        if (external && currentCountry !== "FR") {
            throw Object.assign(new Error("Sélectionnez la France dans Localiser PR avant l’appel externe."), { code: "UNSUPPORTED_COUNTRY" });
        }
        if (currentCountry === "CO") return locateColombia();
        if (locateInProgress) {
            if (external) throw Object.assign(new Error("Une recherche PR est déjà en cours."), { code: "BUSY" });
            return;
        }
        locateInProgress = true;
        ui.locate.disabled = true;
        ui.result.hidden = true;
        if (ui.resultActions) ui.resultActions.hidden = true;
        if (ui.mapCommentEditor) ui.mapCommentEditor.hidden = true;
        latestResult = null;
        setStatus("Préparation de la recherche…", "info");
        try {
            const requestedAxis = external ? options.axis : ui.axis.value;
            const networkType = external ? Core.routeFamilyFromAxis(requestedAxis) : searchRouteType;
            if (external && !["A", "D", "N", "I"].includes(networkType)) {
                throw new Error("Axe routier non pris en charge par Localiser PR.");
            }
            const axis = normalizeSearchAxis(requestedAxis, networkType);
            if (!external) validateAxisForSearchType(axis);
            const departmentCode = routeTypeUsesDepartment(networkType)
                ? Core.normalizeDepartmentCode(external ? options.departmentCode : ui.department.value)
                : null;
            const roadManager = routeTypeUsesManager(networkType)
                ? String((external ? options.manager : ui.manager.value) || "").trim()
                : null;
            if (external && routeTypeUsesManager(networkType) && !roadManager) {
                throw new Error("Un gestionnaire / territoire est requis pour cet axe intercommunal.");
            }
            const firstParsedPr = Core.parsePr(external ? options.prFrom : ui.pr.value);
            const secondPrText = external ? options.prTo : ui.pr2.value;
            const secondParsedPr = secondPrText.trim() ? Core.parsePr(secondPrText) : null;
            const requestedNumbers = Core.requiredPrNumbers(firstParsedPr, secondParsedPr);
            const lookupNumbers = Core.lookupPrNumbers(firstParsedPr, secondParsedPr);
            const preferredCoordinate = await getSearchPreferredCoordinate();
            const preferredSide = external ? options.side : ui.side.value;

            const searchScopeLabel = roadManager
                ? `${roadManager} / ${axis}`
                : (departmentCode ? `${departmentCode} / ${axis}` : `${axis} (national)`);
            setStatus(`Recherche ${searchScopeLabel}…`, "info");
            const prSource = await searchPrPoints({
                departmentCode,
                axis,
                lookupNumbers,
                requestedNumbers,
                manager: roadManager,
                networkType,
            });
            if (!external && !departmentCode && prSource.departments?.length === 1) {
                refreshSearchSideOptions(prSource.departments[0].code);
            }

            const firstSource = selectTargetSource(firstParsedPr, prSource.points, axis, {
                preferredCoordinate,
                preferredSide,
            });
            const secondSource = secondParsedPr
                ? selectTargetSource(secondParsedPr, prSource.points, axis, {
                    preferredCoordinate: firstSource.start.coordinate,
                    preferredSide: preferredSide || firstSource.start.side || "",
                })
                : null;
            const loadingCoordinates = [
                ...(firstSource.preferred.points || []).map((point) => point.coordinate),
                ...(firstSource.preferred.chainagePoints || []).map((point) => point.coordinate),
                ...(secondSource?.preferred?.points || []).map((point) => point.coordinate),
                ...(secondSource?.preferred?.chainagePoints || []).map((point) => point.coordinate),
            ].filter((coordinate) => Array.isArray(coordinate));
            setStatus(`PR trouvés. Chargement de la géométrie WME de ${axis}…`, "info");
            const mapView = await moveMapAndWait(loadingCoordinates);

            // Même pour un PR entier, si WME vient de se déplacer vers une zone qui n'était pas
            // chargée, attendre que le segment correspondant soit réellement présent dans le modèle.
            // Cela évite d'utiliser un ancien instantané de l'axe et de demander un second clic.
            const geometryRequired = firstParsedPr.offset > 0
                || Boolean(secondParsedPr)
                || firstSource.estimated
                || Boolean(mapView?.moved);
            let routeSnapshot = { segments: [], descriptions: [] };
            try {
                routeSnapshot = geometryRequired
                    ? await waitForRouteData(axis, firstSource.start)
                    : await collectRouteSnapshot(axis, false);
            } catch (error) {
                if (geometryRequired) throw error;
                console.warn(`${SCRIPT_NAME}: localisation directe sans projection sur un segment`, error);
            }
            const routeSegments = routeSnapshot.segments;

            const resolvedFirst = resolveTarget(firstSource, routeSegments);
            const firstResult = {
                ...resolvedFirst,
                parsedPr: firstParsedPr,
                axis,
                displaySide: prSideForDisplay(axis, resolvedFirst.sourcePoint),
                label: searchResultLabel(axis, firstParsedPr, resolvedFirst.sourcePoint),
            };
            const results = [firstResult];
            if (secondSource) {
                const resolvedSecond = resolveTarget(secondSource, routeSegments);
                results.push({
                    ...resolvedSecond,
                    parsedPr: secondParsedPr,
                    axis,
                    displaySide: prSideForDisplay(axis, resolvedSecond.sourcePoint),
                    label: searchResultLabel(axis, secondParsedPr, resolvedSecond.sourcePoint),
                });
            }
            if (results.some((result) => !result.point)) throw new Error("Résultat géométrique incomplet.");

            const loadedComponents = results.length > 1
                ? (routeSnapshot.descriptions.length
                    ? routeSnapshot.descriptions
                    : routeSegments.map(Core.describeSegment).filter(Boolean))
                : [];
            const knownDiscontinuities = [
                ...results.flatMap((result) => result.discontinuities || []),
                ...Core.detectDiscontinuities(Core.filterPrPoints(prSource.points, axis)),
            ];
            const targetAbscissas = results.length > 1
                ? results.map((item) => {
                    if (Number.isFinite(item.targetAbscissa)) return item.targetAbscissa;
                    const baseAbscissa = item.candidate?.start?.abscissa;
                    return Number.isFinite(baseAbscissa)
                        ? baseAbscissa + Number(item.parsedPr?.offset || 0)
                        : null;
                }).filter(Number.isFinite)
                : [];
            const zoneMinimumAbscissa = targetAbscissas.length === 2 ? Math.min(...targetAbscissas) : null;
            const zoneMaximumAbscissa = targetAbscissas.length === 2 ? Math.max(...targetAbscissas) : null;
            const zoneDiscontinuities = zoneMinimumAbscissa === null
                ? []
                : knownDiscontinuities.filter((discontinuity) => (
                    zoneMinimumAbscissa <= discontinuity.from.abscissa
                    && zoneMaximumAbscissa >= discontinuity.to.abscissa
                ));
            const zoneCrossesDiscontinuity = zoneDiscontinuities.length > 0;
            let zonePath = results.length > 1
                ? Core.pathBetweenTargets({ component: loadedComponents, start: results[0], end: results[1] })
                : null;
            if (results.length > 1 && !zonePath && !zoneCrossesDiscontinuity
                && targetAbscissas.length === 2) {
                // Une localisation individuelle réussie peut viser des segments
                // différents si IGN et WME ne modélisent pas un tunnel à l'identique.
                // Seule une section unique, non ambiguë et cohérente avec le chaînage
                // peut être utilisée : aucun raccord artificiel n'est créé.
                zonePath = Core.recoverSingleSegmentZone({
                    component: loadedComponents,
                    start: results[0],
                    end: results[1],
                    expectedDistance: Math.abs(targetAbscissas[1] - targetAbscissas[0]),
                });
                if (zonePath?.geometryRecovery) {
                    const recovery = zonePath.geometryRecovery;
                    for (let index = 0; index < results.length; index += 1) {
                        results[index].originalGeometryPoint = results[index].point.slice();
                        results[index].point = (index === 0 ? recovery.firstPoint : recovery.lastPoint).slice();
                        results[index].segmentId = recovery.segmentId;
                    }
                }
            }
            if (results.length > 1 && !zonePath && !zoneCrossesDiscontinuity) {
                throw new Error(`Aucun chemin continu chargé sur ${axis} entre les deux PR.`);
            }

            let label = results[0].estimated ? `${results[0].label} — estimation` : results[0].label;
            if (results.length > 1) {
                const sameSide = results[0].displaySide
                    && results[0].displaySide === results[1].displaySide;
                label = sameSide
                    ? `${axis} — PR ${formatPrForDisplay(firstParsedPr)} à ${formatPrForDisplay(secondParsedPr)} — ${results[0].displaySide}`
                    : `${results[0].label} à ${results[1].label.replace(`${axis} — `, "")}`;
                if (results.some((result) => result.estimated)) label += " — estimation";
            }
            await drawResult(results, label, zonePath, zoneDiscontinuities);
            const finalCoordinates = zonePath?.coordinates?.length
                ? zonePath.coordinates
                : results.map((result) => result.point);
            await moveMapAndWait(finalCoordinates);
            const automaticallySelectedSegmentIds = await applyAutomaticResultSelection(results, zonePath);
            const permalink = await sdk.Map.getPermalink({ includeLayers: false });
            latestResult = {
                results,
                zonePath,
                label,
                axis,
                departmentCode,
                roadManager,
                networkType,
                permalink,
                zoneCrossesDiscontinuity,
                zoneDiscontinuities,
                automaticallySelectedSegmentIds,
            };

            ui.resultTitle.textContent = label;
            const usedDepartmentCodes = [...new Set(results
                .map((result) => result.sourcePoint?.departmentCode || result.candidate?.start?.departmentCode)
                .filter(Boolean))];
            const usedDepartments = usedDepartmentCodes.length
                ? usedDepartmentCodes.map((code) => ({ code, name: DEPARTMENT_NAMES.get(code) || code }))
                : (prSource.departments || []);
            const departmentDetail = departmentCode
                ? `Département : ${departmentCode} — ${prSource.department?.name || departmentCode}`
                : `Département(s) IGN utilisé(s) : ${usedDepartments.length
                    ? usedDepartments.map((department) => `${department.code} — ${department.name}`).join(" ; ")
                    : "non déterminé"}`;
            const scopeDetail = roadManager
                ? `Gestionnaire / territoire : ${roadManager}`
                : departmentDetail;
            const resultDetails = [
                scopeDetail,
                ...results.map((result, index) => (
                    `PR${index + 1} : ${result.point[1].toFixed(6)}, ${result.point[0].toFixed(6)}`
                    + (result.displaySide ? ` — ${result.displaySide}` : "")
                    + (result.segmentId ? ` — segment ${result.segmentId}` : " — coordonnée source")
                    + (result.estimated ? ` — estimation ${result.confidence}` : "")
                )),
                `Source : index PR (${prSource.points.length} point(s) candidat(s))`,
            ];
            for (const result of results) {
                if (result.parsedPr.offset > 0) {
                    if (result.estimated) {
                        resultDetails.push(
                            `Estimation contrôlée — fiabilité ${result.confidence} : ${result.estimationNote}`,
                            `Référence PR${result.referenceFromNumber} → PR${result.referenceToNumber} sur WME : ${Math.round(result.referencePathLength)} m`,
                        );
                    } else if (result.chainageAware) {
                        resultDetails.push(`Abscisse IGN cible : ${result.targetAbscissa} m.`);
                        if (result.terminalBoundaryUsed) {
                            const terminal = result.candidate?.end;
                            resultDetails.push(
                                `Fin d’axe encadrée par la borne ${String(terminal?.pointType || "FS").toUpperCase()} `
                                + `à l’abscisse ${terminal?.abscissa} m.`,
                            );
                        }
                        if (result.terminalGeometryAdjustment) {
                            const boundaryType = String(result.geometryAdjustmentBoundaryType || "").toUpperCase();
                            const isDiscontinuityBoundary = boundaryType === "FS";
                            resultDetails.push(
                                `${isDiscontinuityBoundary ? "Ajustement de borne FS" : "Ajustement terminal"} de `
                                + `${result.terminalGeometryShortfall.toFixed(1).replace(".0", "")} m `
                                + (isDiscontinuityBoundary
                                    ? "entre le chaînage IGN et la géométrie WME : position calée sur la fin de section WME reliée à la borne FS."
                                    : result.terminalPrfMarkerSnapApplied
                                        ? "entre le chaînage IGN et le chemin WME : position calée sur la borne PRF IGN exacte, reprojetée sur le même parcours continu. Vérifiez visuellement avant toute édition."
                                        : "entre le chaînage IGN et la géométrie WME : position fixée à l’extrémité du dernier segment."),
                            );
                        }
                        if (result.discontinuityNote) resultDetails.push(result.discontinuityNote);
                    } else {
                        resultDetails.push(
                            `PR${result.parsedPr.base} → PR${result.parsedPr.base + 1} sur WME : ${Math.round(result.pathLength)} m`,
                        );
                    }
                }
            }
            if (zonePath) resultDetails.push(`Longueur de la zone sur WME : ${Math.round(zonePath.distance)} m`);
            if (zonePath?.geometryRecovery) {
                const recovery = zonePath.geometryRecovery;
                resultDetails.push(
                    `Géométrie IGN/WME décalée : zone reprojetée sur le segment WME ${recovery.segmentId} `
                    + `(écarts ${Math.round(recovery.firstLateralShiftM)} m / ${Math.round(recovery.lastLateralShiftM)} m). `
                    + `Vérifiez visuellement la chaussée et les limites de la zone avant toute fermeture.`,
                );
            }
            if (zoneCrossesDiscontinuity) {
                resultDetails.push("Zone discontinue : les résultats et les bornes FS/DS sont affichés sans créer de liaison artificielle sur la route support.");
            }
            ui.resultDetails.textContent = resultDetails.join("\n");
            ui.permalink.href = permalink;
            if (ui.resultActions) ui.resultActions.hidden = false;
            ui.result.hidden = false;
            const hasEstimate = results.some((result) => result.estimated);
            const hasDiscontinuity = zoneCrossesDiscontinuity || results.some((result) => result.discontinuityDetected);
            const hasTerminalGeometryAdjustment = results.some((result) => result.terminalGeometryAdjustment);
            const hasZoneGeometryRecovery = Boolean(zonePath?.geometryRecovery);
            setStatus(
                hasEstimate
                    ? "Localisation obtenue par estimation contrôlée : vérifiez le niveau de fiabilité dans le détail."
                    : hasDiscontinuity
                        ? "Localisation obtenue avec une discontinuité IGN détectée : consultez le détail FS/DS."
                        : hasZoneGeometryRecovery
                            ? "Zone reprojetée sur un seul segment : vérifiez visuellement le sens et les limites avant toute fermeture."
                        : hasTerminalGeometryAdjustment
                            ? "PR localisé à la fin de l’axe avec un ajustement géométrique terminal : consultez le détail."
                            : (results.length > 1 ? "Zone localisée sur WME." : "PR localisé sur WME."),
                hasEstimate || hasDiscontinuity || hasTerminalGeometryAdjustment || hasZoneGeometryRecovery ? "info" : "success",
            );
            return latestResult;
        } catch (error) {
            console.error(`${SCRIPT_NAME}:`, error);
            setStatus(error?.message || String(error), "error");
            if (external) throw error;
        } finally {
            locateInProgress = false;
            ui.locate.disabled = false;
        }
    }

    function mapCommentSubjectForResult(result = latestResult) {
        if (!result?.results?.length) return "Repère routier";
        const values = result.results.map((item) => formatPrForDisplay(item.parsedPr));
        const subject = values.length > 1
            ? `${result.axis} PR ${values[0]} à ${values[1]}`
            : `${result.axis} PR ${values[0]}`;
        return subject.substring(0, 30);
    }

    function shortZoneNotePoint(result) {
        if (result?.results?.length < 2 || result?.zoneCrossesDiscontinuity) return null;
        const coordinates = result?.zonePath?.coordinates;
        if (!Array.isArray(coordinates) || coordinates.length < 2) return null;
        const metrics = Core.polylineMetrics(coordinates);
        const measuredLength = result.zonePath.distance;
        const length = Number.isFinite(measuredLength) && measuredLength >= 0 ? measuredLength : metrics.length;
        if (!Number.isFinite(length) || length < 0 || length >= 20) return null;
        const midpoint = Core.pointAtOffset(metrics.coordinates, metrics.length / 2)?.point;
        return midpoint ? { point: midpoint, coordinates: metrics.coordinates, length } : null;
    }

    function mapCommentGeometryForResult(result = latestResult) {
        if (!result?.results?.length) throw new Error("Aucun résultat à convertir en note de carte.");
        if (result.results.length === 1) {
            const item = result.results[0];
            const segment = item?.component?.find((candidate) => Number(candidate.id) === Number(item.segmentId));
            return Core.trianglePolygonAroundPoint(item.point, 40, segment?.coordinates || null);
        }
        const shortZone = shortZoneNotePoint(result);
        if (shortZone) return Core.trianglePolygonAroundPoint(shortZone.point, 40, shortZone.coordinates);
        if (!result.zoneCrossesDiscontinuity && result.zonePath?.coordinates?.length >= 2) {
            const geometry = Core.bufferPolylinePolygon(result.zonePath.coordinates, 30);
            if (geometry) return geometry;
        }
        const coordinates = [
            ...result.results.map((item) => item.point),
            ...(result.zonePath?.coordinates || []),
            ...(result.zoneDiscontinuities || []).flatMap((gap) => [gap?.from?.coordinate, gap?.to?.coordinate]),
        ].filter((coordinate) => Array.isArray(coordinate));
        const geometry = Core.expandedBoundsPolygon(coordinates, 25);
        if (!geometry) throw new Error("La zone n’a pas pu être convertie en polygone de note de carte.");
        return geometry;
    }

    function mapCommentGeometryDescription(result = latestResult) {
        if (!result?.results?.length) return "";
        if (result.results.length === 1) return "Géométrie : triangle équilatéral d’environ 40 m de côté, centré sur le PR et orienté selon la route.";
        if (shortZoneNotePoint(result)) return "Géométrie : triangle équilatéral d’environ 40 m de côté, centré au milieu du tracé (zone de moins de 20 m).";
        if (!result.zoneCrossesDiscontinuity && result.zonePath?.coordinates?.length >= 2
            && !Core.bufferPolylinePolygon(result.zonePath.coordinates, 30)) {
            return "Géométrie : polygone englobant la zone (contour du couloir trop complexe après nettoyage des sommets).";
        }
        return result.zoneCrossesDiscontinuity
            ? "Géométrie : polygone englobant la zone (discontinuité FS/DS détectée)."
            : "Géométrie : couloir d’environ 30 m autour du tracé WME de la zone.";
    }

    function openMapCommentEditor() {
        if (!latestResult?.results?.length || !ui?.mapCommentEditor) return;
        ui.mapCommentSubject.value = mapCommentSubjectForResult(latestResult);
        ui.mapCommentBody.value = "";
        ui.mapCommentExpiration.value = "30";
        ui.mapCommentCustomDate.value = "";
        ui.mapCommentCustomDateField.hidden = true;
        ui.mapCommentGeometryInfo.textContent = mapCommentGeometryDescription(latestResult);
        ui.mapCommentEditor.hidden = false;
        ui.mapCommentSubject.focus();
    }

    function closeMapCommentEditor() {
        if (ui?.mapCommentEditor) ui.mapCommentEditor.hidden = true;
    }

    function mapCommentEndDateFromControls() {
        const choice = String(ui.mapCommentExpiration.value || "30");
        if (choice === "none") return null;
        if (choice === "custom") {
            const raw = String(ui.mapCommentCustomDate.value || "").trim();
            if (!raw) throw new Error("Choisissez une date d’expiration personnalisée.");
            const date = new Date(`${raw}T23:59:00`);
            const timestamp = date.getTime();
            if (!Number.isFinite(timestamp) || timestamp <= Date.now()) {
                throw new Error("La date d’expiration doit être dans le futur.");
            }
            return timestamp;
        }
        const days = Number(choice);
        if (![7, 30, 90].includes(days)) throw new Error("Durée d’expiration invalide.");
        return Date.now() + days * 24 * 60 * 60 * 1000;
    }

    async function createMapCommentFromResult() {
        if (!latestResult?.results?.length) return;
        const mapComments = sdk?.DataModel?.MapComments;
        if (!mapComments?.addComment) {
            setStatus("Le module Map Comments du SDK WME n’est pas disponible.", "error");
            return;
        }
        ui.mapCommentCreate.disabled = true;
        try {
            const subject = String(ui.mapCommentSubject.value || "").trim().substring(0, 30);
            if (!subject) throw new Error("Le sujet de la note de carte est obligatoire.");
            const body = String(ui.mapCommentBody.value || "").substring(0, 2000);
            const requestedEndDate = mapCommentEndDateFromControls();
            const wantsNoExpiration = requestedEndDate === null;
            const effectiveEndDate = wantsNoExpiration
                ? Date.now() + 365 * 24 * 60 * 60 * 1000
                : requestedEndDate;
            const geometry = mapCommentGeometryForResult(latestResult);
            const created = await mapComments.addComment({ subject, body, geometry, endDate: effectiveEndDate });
            if (!created?.id) throw new Error("WME n’a pas renvoyé l’identifiant de la note créée.");
            let noExpirationApplied = !wantsNoExpiration;
            if (wantsNoExpiration && mapComments.updateComment) {
                try {
                    await mapComments.updateComment({ mapCommentId: String(created.id), endDate: null });
                    noExpirationApplied = true;
                } catch (error) {
                    console.warn(`${SCRIPT_NAME}: suppression de l’expiration impossible`, error);
                }
            }
            try {
                await sdk.Editing.setSelection({
                    selection: { objectType: "mapComment", ids: [String(created.id)] },
                });
            } catch (error) {
                console.warn(`${SCRIPT_NAME}: note créée mais sélection automatique impossible`, error);
            }
            closeMapCommentEditor();
            setStatus(
                wantsNoExpiration && !noExpirationApplied
                    ? `Note de carte créée (${created.id}), mais la suppression de l’expiration a échoué : vérifiez-la avant d’enregistrer.`
                    : `Note de carte créée (${created.id}). Pensez à enregistrer les modifications dans WME.`,
                wantsNoExpiration && !noExpirationApplied ? "warning" : "success",
            );
        } catch (error) {
            console.error(`${SCRIPT_NAME}: création de note de carte`, error);
            setStatus(error?.message || String(error), "error");
        } finally {
            ui.mapCommentCreate.disabled = false;
        }
    }

    async function copyPermalink() {
        if (!latestResult?.permalink) return;
        try {
            await root.navigator.clipboard.writeText(latestResult.permalink);
            setStatus("Permalink copié dans le presse-papiers.", "success");
        } catch (error) {
            setStatus("Copie automatique impossible : utilisez le lien « Ouvrir le permalink ».", "error");
        }
    }

    function addStyles() {
        if (root.document.getElementById(`${SCRIPT_ID}-style`)) return;
        const style = root.document.createElement("style");
        style.id = `${SCRIPT_ID}-style`;
        style.textContent = `
            .wme-pr-panel { padding: 12px; color: var(--wz-text-color, #202124); font: 13px/1.4 Arial, sans-serif; }
            .wme-pr-header { margin-bottom: 12px; }
            .wme-pr-title-row { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; column-gap: 6px; }
            .wme-pr-subtitle-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
            .wme-pr-header h2 { margin: 0; min-width: 0; font-size: 17px; white-space: nowrap; }
            .wme-pr-subtitle-row { margin-top: 3px; }
            .wme-pr-context-row { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 8px; }
            .wme-pr-context-field { display: grid; grid-template-columns: auto minmax(0,1fr); align-items: center; gap: 5px; color: #5f6368; font-size: 10px; }
            .wme-pr-context-field select { min-width: 0; width: 100%; border: 1px solid #b9c1c8; border-radius: 5px; background: #fff; color: #202124; padding: 5px 6px; font: inherit; font-size: 11px; }
            .wme-pr-button-beta { background: #fff7e0 !important; border-color: #d8a328 !important; color: #755000 !important; }
            .wme-pr-subtitle { color: #6b7280; font-size: 11px; }
            .wme-pr-header-actions { display: flex; flex: 0 0 auto; align-items: center; gap: 4px; white-space: nowrap; }
            .wme-pr-header-button { border: 1px solid #b9c1c8; border-radius: 5px; background: #fff; padding: 3px 6px; color: #202124; font: inherit; font-size: 10px; cursor: pointer; }
            .wme-pr-greasyfork-button { display: inline-flex; flex: 0 0 16px; align-items: center; justify-content: center; width: 16px; height: 18px; padding: 0; margin: 0; border: 0; background: transparent; cursor: pointer; vertical-align: middle; }
            .wme-pr-greasyfork-button:hover { transform: scale(1.08); }
            .wme-pr-update-triangle { width: 0; height: 0; border-left: 7px solid transparent; border-right: 7px solid transparent; border-bottom: 13px solid #9aa0a6; position: relative; }
            .wme-pr-update-triangle::after { content: "!"; position: absolute; left: -2px; top: 3px; color: #fff; font: 800 8px/1 Arial, sans-serif; }
            .wme-pr-greasyfork-button[data-update-available="true"] .wme-pr-update-triangle { border-bottom-color: #d93025; }
            .wme-pr-panel .wme-pr-version { color: #6b7280; font-size: 11px; white-space: nowrap; margin: 0; }
            .wme-pr-data-info { margin: 0 0 7px; border: 1px solid #d9e2e7; border-radius: 5px; font-size: 11px; }
            .wme-pr-data-info summary { padding: 4px 7px; cursor: pointer; color: #51616f; font-weight: 600; }
            .wme-pr-data-info[open] summary { border-bottom: 1px solid #d9e2e7; }
            .wme-pr-data-info .wme-pr-data-info-body { padding: 4px 7px 7px; font-size: 10.5px; line-height: 1.4; }
            .wme-pr-data-info .wme-pr-data-info-body p { margin: 4px 0; }
            .wme-pr-data-info a { text-decoration: underline; color: #176ca4; }
            .wme-pr-selection { background: #f3f4f6; border-radius: 5px; margin-bottom: 7px; padding: 6px 7px; font-size: 11px; line-height: 1.25; word-break: break-word; }
            .wme-pr-route-tabs[hidden] { display: none !important; }
            .wme-pr-axis-filter-actions[hidden] { display: none !important; }
            .wme-pr-check[hidden] { display: none !important; }
            .wme-pr-route-tabs { display: grid; grid-template-columns: .7fr .7fr .7fr 1.9fr; gap: 3px; margin: 0 0 6px; }
            .wme-pr-route-tab { border: 1px solid #aab0b6; border-radius: 4px; padding: 5px 3px; background: #fff; color: #3c4043; cursor: pointer; font-size: 11px; font-weight: 700; line-height: 1.1; }
            .wme-pr-route-tab[aria-selected="true"] { border-color: #008c95; background: #dff7f7; color: #006d73; }
            .wme-pr-route-tab:focus-visible { outline: 2px solid #00a8a8; outline-offset: 1px; }
            .wme-pr-field { display: block; margin: 0; min-width: 0; font-size: 11px; font-weight: 600; line-height: 1.2; }
            .wme-pr-field[hidden] { display: none !important; }
            .wme-pr-field input, .wme-pr-field select { box-sizing: border-box; display: block; margin-top: 2px; width: 100%; min-width: 0; height: 30px; padding: 4px 6px; border: 1px solid #aab0b6; border-radius: 4px; background: #fff; color: #111; font-size: 12px; }
            .wme-pr-search-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 6px 7px; margin: 0 0 6px; }
            .wme-pr-search-grid #wme-pr-manager-field,
            .wme-pr-search-grid #wme-pr-side-field { grid-column: 1 / -1; }
            .wme-pr-help { margin: 5px 0 7px; color: #5f6368; font-size: 10.5px; line-height: 1.25; }
            .wme-pr-text-search { margin: 0 0 6px; padding: 0; border: 1px solid #d8dde3; border-radius: 5px; background: #f7f9fa; overflow: hidden; }
            .wme-pr-text-search[hidden] { display: none !important; }
            .wme-pr-text-search summary { cursor: pointer; padding: 6px 8px; list-style-position: inside; font-size: 11px; font-weight: 700; line-height: 1.2; user-select: none; }
            .wme-pr-text-search[open] summary { border-bottom: 1px solid #d8dde3; background: #f2f5f7; }
            .wme-pr-text-search textarea { box-sizing: border-box; display: block; width: calc(100% - 12px); min-height: 44px; margin: 6px 6px 0; padding: 5px 6px; resize: vertical; border: 1px solid #aab0b6; border-radius: 4px; background: #fff; color: #111; font: 11px/1.25 inherit; }
            .wme-pr-text-search .wme-pr-button { width: calc(100% - 12px); min-height: 30px; margin: 5px 6px 6px; padding: 5px 8px; font-size: 11px; }
            .wme-pr-layer-status { border-radius: 5px; margin: 8px 0 12px; padding: 7px 8px; font-size: 12px; }
            .wme-pr-layer-status-info { background: #eef6ff; color: #24517a; }
            .wme-pr-layer-status-success { background: #e7f7ec; color: #176b35; }
            .wme-pr-layer-status-warning { background: #fff4d6; color: #7a4b00; }
            .wme-pr-layer-status-error { background: #fdecec; color: #9b1c1c; }
            .wme-pr-settings { margin: 10px 0 12px; border: 1px solid #d7dce0; border-radius: 6px; padding: 8px; }
            .wme-pr-view[hidden] { display: none !important; }
            .wme-pr-customization-panel { margin: 0 0 12px; padding: 0; background: transparent; }
            .wme-pr-customization-heading { margin: 0 0 10px; padding: 8px 9px; border-radius: 6px; background: #eef3f6; color: #5f6368; font-size: 11px; }
            .wme-pr-settings { margin: 0 0 10px; border: 1px solid #c7d0d7; border-radius: 8px; padding: 0; overflow: hidden; background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,.04); }
            .wme-pr-settings summary { cursor: pointer; padding: 10px 11px; background: #f3f6f8; border-bottom: 1px solid transparent; font-weight: 800; font-size: 13px; }
            .wme-pr-settings[open] summary { border-bottom-color: #d8dfe4; }
            .wme-pr-settings > :not(summary) { margin-left: 10px; margin-right: 10px; }
            .wme-pr-settings .wme-pr-field { font-weight: 500; }
            .wme-pr-settings-group { margin-top: 10px; margin-bottom: 10px; border: 1px solid #e0e5e9; border-radius: 7px; padding: 9px; background: #fbfcfd; }
            .wme-pr-settings-group:first-of-type { margin-top: 10px; }
            .wme-pr-settings-group > strong { display: block; margin: -9px -9px 8px; padding: 7px 9px; border-bottom: 1px solid #e0e5e9; border-radius: 7px 7px 0 0; background: #f1f4f6; font-size: 12px; }
            .wme-pr-settings-theme-interface { border-color: #d6e5f2; background: #f8fbfe; }
            .wme-pr-settings-theme-interface summary { background: #edf6fc; }
            .wme-pr-settings-theme-interface[open] summary { border-bottom-color: #d6e5f2; }
            .wme-pr-settings-theme-interface .wme-pr-settings-group { border-color: #dceaf4; background: #fbfdff; }
            .wme-pr-settings-theme-interface .wme-pr-settings-group > strong { border-bottom-color: #dceaf4; background: #f1f8fd; }
            .wme-pr-settings-theme-result { border-color: #cfe8df; background: #f8fdfb; }
            .wme-pr-settings-theme-result summary { background: #eaf8f3; }
            .wme-pr-settings-theme-result[open] summary { border-bottom-color: #cfe8df; }
            .wme-pr-settings-theme-result .wme-pr-settings-group { border-color: #d7ece5; background: #fbfefd; }
            .wme-pr-settings-theme-result .wme-pr-settings-group > strong { border-bottom-color: #d7ece5; background: #eff9f5; }
            .wme-pr-settings-theme-index { border-color: #eadfbd; background: #fffdf8; }
            .wme-pr-settings-theme-index summary { background: #fff6dc; }
            .wme-pr-settings-theme-index[open] summary { border-bottom-color: #eadfbd; }
            .wme-pr-settings-theme-index .wme-pr-settings-group { border-color: #eee3c4; background: #fffefa; }
            .wme-pr-settings-theme-index .wme-pr-settings-group > strong { border-bottom-color: #eee3c4; background: #fff8e7; }
            .wme-pr-settings-theme-motorway { border-color: #ded7ed; background: #fcfaff; }
            .wme-pr-settings-theme-motorway summary { background: #f4effb; }
            .wme-pr-settings-theme-motorway[open] summary { border-bottom-color: #ded7ed; }
            .wme-pr-settings-theme-motorway .wme-pr-settings-group { border-color: #e5dff0; background: #fefcff; }
            .wme-pr-settings-theme-motorway .wme-pr-settings-group > strong { border-bottom-color: #e5dff0; background: #f8f3fc; }
            .wme-pr-settings-theme-data { border-color: #d8e0e5; background: #fbfcfd; }
            .wme-pr-settings-theme-data summary { background: #eef2f5; }
            .wme-pr-settings-theme-data[open] summary { border-bottom-color: #d8e0e5; }
            .wme-pr-settings-actions { padding-bottom: 10px; }
            .wme-pr-color-grid { display: grid; grid-template-columns: 1fr 46px; gap: 6px 8px; align-items: center; }
            .wme-pr-color-grid label { display: contents; font-weight: 500; }
            .wme-pr-color-grid input[type="color"] { box-sizing: border-box; width: 46px; height: 30px; margin: 0; padding: 2px; border: 1px solid #aab0b6; border-radius: 4px; background: #fff; }
            .wme-pr-range-row { display: grid; grid-template-columns: 1fr 54px; gap: 8px; align-items: center; }
            .wme-pr-range-row input[type="range"] { width: 100%; margin-top: 5px; padding: 0; border: 0; }
            .wme-pr-range-row output { color: #5f6368; font-size: 11px; text-align: right; }
            .wme-pr-check { display: flex; gap: 7px; align-items: center; margin: 9px 0; font-weight: 500; }
            #wme-pr-search-panel > .wme-pr-check { gap: 5px; margin: 5px 0; font-size: 10.5px; line-height: 1.2; }
            #wme-pr-search-panel > .wme-pr-axis-filter-actions { margin: 5px 0 4px; }
            #wme-pr-search-panel > .wme-pr-axis-filter-actions .wme-pr-button,
            #wme-pr-search-panel > #wme-pr-locate { min-height: 32px; padding: 6px 9px; font-size: 11px; }
            .wme-pr-check input { width: auto; margin: 0; }
            .wme-pr-settings-actions { display: flex; gap: 7px; flex-wrap: wrap; margin-top: 10px; }
            .wme-pr-connection-ready { margin: 8px 0 2px; border-radius: 5px; padding: 8px; background: #e7f7ec; color: #176b35; font-weight: 600; }
            .wme-pr-button { box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; min-height: 38px; border: 0; border-radius: 5px; cursor: pointer; padding: 8px 12px; font-weight: 700; line-height: 1.2; text-align: center; text-decoration: none; }
            .wme-pr-button-primary { width: 100%; color: #fff; background: #00a8a8; }
            .wme-pr-button-secondary { color: #006d6d; background: #dff7f7; }
            .wme-pr-link-button { color: #006d6d; background: #dff7f7; }
            .wme-pr-button:disabled { cursor: wait; opacity: .55; }
            .wme-pr-status { border-radius: 5px; margin-top: 12px; padding: 8px; white-space: pre-line; }
            .wme-pr-status-info { background: #eef6ff; color: #24517a; }
            .wme-pr-status-success { background: #e7f7ec; color: #176b35; }
            .wme-pr-status-error { background: #fdecec; color: #9b1c1c; }
            .wme-pr-result { margin-top: 12px; border: 1px solid var(--wme-pr-result-panel-border, #d7dce0); border-radius: 7px; padding: 10px; background: var(--wme-pr-result-panel-bg, #fff); color: var(--wme-pr-result-panel-text, #3c4043); }
            .wme-pr-result strong { display: block; margin-bottom: 6px; color: var(--wme-pr-result-panel-title, #202124); }
            .wme-pr-result pre { white-space: pre-wrap; font: 12px/1.45 Arial, sans-serif; margin: 0 0 10px; color: var(--wme-pr-result-panel-text, #3c4043); }
            .wme-pr-result-actions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 5px; margin: 6px 0 0; }
            .wme-pr-axis-filter-actions { display: grid; grid-template-columns: 1fr; gap: 5px; margin: 7px 0 5px; }
            .wme-pr-axis-filter-banner { display: flex; align-items: center; justify-content: space-between; gap: 7px; margin: 5px 0 8px; padding: 7px 8px; border: 1px solid #8ab4f8; border-radius: 6px; background: rgba(138, 180, 248, .12); font-size: 11px; }
            .wme-pr-axis-filter-banner[hidden] { display: none !important; }
            .wme-pr-axis-filter-banner strong { min-width: 0; overflow-wrap: anywhere; }
            .wme-pr-axis-filter-banner .wme-pr-button { width: auto; flex: 0 0 auto; padding: 4px 7px; }
            .wme-pr-result-actions[hidden] { display: none !important; }
            .wme-pr-result-actions .wme-pr-button { width: 100%; height: 38px; min-height: 38px; min-width: 0; padding: 0 4px; white-space: nowrap; font-size: 9px; line-height: 1; }
            .wme-pr-actions { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
            .wme-pr-actions a { color: #007d84; font-weight: 600; }
            .wme-pr-map-comment-editor { margin-top: 10px; border: 1px solid #cfd5da; border-radius: 6px; padding: 9px; background: #f7f9fa; }
            .wme-pr-map-comment-editor[hidden] { display: none !important; }
            .wme-pr-map-comment-editor .wme-pr-field { font-weight: 500; }
            .wme-pr-map-comment-editor textarea { box-sizing: border-box; display: block; margin-top: 4px; width: 100%; min-height: 76px; resize: vertical; padding: 8px; border: 1px solid #aab0b6; border-radius: 4px; background: #fff; color: #111; font: inherit; }
            .wme-pr-map-comment-info { margin: 7px 0; color: #5f6368; font-size: 11px; }
            .wme-pr-floating-host { position: fixed; z-index: 10050; width: 410px; height: 760px; min-width: 330px; min-height: 280px; max-width: calc(100vw - 16px); max-height: calc(100vh - 16px); overflow: auto; resize: both; border: 1px solid #8e9aa4; border-radius: 9px; background: var(--wz-color-base-100, #fff); box-shadow: 0 12px 35px rgba(0,0,0,.28); }
            .wme-pr-floating-host .wme-pr-header { position: sticky; top: 0; z-index: 3; margin: -12px -12px 12px; padding: 12px 12px 10px; background: var(--wz-color-base-100, #fff); border-bottom: 1px solid #d9e2e7; box-shadow: 0 2px 5px rgba(0,0,0,.06); }
            .wme-pr-floating-host .wme-pr-title-row { cursor: move; user-select: none; }
            .wme-pr-floating-host .wme-pr-panel { min-height: 100%; box-sizing: border-box; }
            .wme-pr-floating-host.is-collapsed { min-height: 0 !important; resize: none !important; overflow: hidden !important; }
            .wme-pr-floating-host.is-collapsed .wme-pr-panel { min-height: 0; }
            .wme-pr-floating-host.is-collapsed .wme-pr-header { margin-bottom: 0; }
            .wme-pr-floating-host.is-collapsed .wme-pr-panel > :not(.wme-pr-header) { display: none !important; }
            .wme-pr-sidebar-placeholder { padding: 16px 10px; text-align: center; }
        `;
        root.document.head.appendChild(style);
    }

    function readFloatingGeometry() {
        let saved = {};
        try {
            saved = JSON.parse(readSetting(SETTINGS_FLOATING_GEOMETRY_KEY) || "{}");
        } catch (error) {
            saved = {};
        }
        const maximumWidth = Math.max(330, root.innerWidth - 16);
        const maximumHeight = Math.max(280, root.innerHeight - 16);
        const width = Math.min(Math.max(Number(saved.width) || 410, 330), maximumWidth);
        const height = Math.min(Math.max(Number(saved.height) || 760, 280), maximumHeight);
        const left = Math.min(Math.max(Number(saved.left) || 20, 8), Math.max(8, root.innerWidth - width - 8));
        const top = Math.min(Math.max(Number(saved.top) || 70, 8), Math.max(8, root.innerHeight - height - 8));
        return { left, top, width, height };
    }

    function saveFloatingGeometry() {
        if (!floatingHost || floatingCollapsed) return;
        const rect = floatingHost.getBoundingClientRect();
        writeSetting(SETTINGS_FLOATING_GEOMETRY_KEY, JSON.stringify({
            left: Math.round(rect.left),
            top: Math.round(rect.top),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
        }));
    }

    function bringFloatingToFront() {
        if (!floatingHost) return;
        floatingZIndex += 1;
        floatingHost.style.zIndex = String(floatingZIndex);
    }

    function keepFloatingHostInsideViewport() {
        if (!floatingHost) return;
        const rect = floatingHost.getBoundingClientRect();
        const width = Math.min(rect.width, Math.max(330, root.innerWidth - 16));
        const height = Math.min(rect.height, Math.max(42, root.innerHeight - 16));
        const left = Math.min(Math.max(8, rect.left), Math.max(8, root.innerWidth - width - 8));
        const top = Math.min(Math.max(8, rect.top), Math.max(8, root.innerHeight - height - 8));
        floatingHost.style.left = `${left}px`;
        floatingHost.style.top = `${top}px`;
    }

    function enableFloatingDrag(host, handle) {
        if (!handle) return;
        handle.addEventListener("pointerdown", (event) => {
            if (displayMode !== "floating") return;
            if (event.target.closest("button, input, select, textarea, a, summary")) return;
            bringFloatingToFront();
            const startRect = host.getBoundingClientRect();
            const startX = event.clientX;
            const startY = event.clientY;
            handle.setPointerCapture?.(event.pointerId);
            const move = (moveEvent) => {
                const left = Math.min(
                    Math.max(8, startRect.left + moveEvent.clientX - startX),
                    Math.max(8, root.innerWidth - host.offsetWidth - 8),
                );
                const top = Math.min(
                    Math.max(8, startRect.top + moveEvent.clientY - startY),
                    Math.max(8, root.innerHeight - 48),
                );
                host.style.left = `${left}px`;
                host.style.top = `${top}px`;
            };
            const stop = () => {
                root.removeEventListener("pointermove", move);
                root.removeEventListener("pointerup", stop);
                saveFloatingGeometry();
            };
            root.addEventListener("pointermove", move);
            root.addEventListener("pointerup", stop, { once: true });
        });
    }

    function setFloatingCollapsed(collapsed) {
        if (displayMode !== "floating" || !floatingHost) {
            floatingCollapsed = false;
            return;
        }
        const requested = Boolean(collapsed);
        if (requested === floatingCollapsed) return;
        if (requested) {
            saveFloatingGeometry();
            floatingCollapsed = true;
            floatingHost.classList.add("is-collapsed");
            const headerHeight = Math.ceil(ui.root.querySelector(".wme-pr-header")?.getBoundingClientRect().height || 34);
            floatingHost.style.height = `${Math.max(42, headerHeight + 16)}px`;
            ui.floatingCollapse.textContent = "Restaurer";
            ui.floatingCollapse.title = "Restaurer la fenêtre PR";
        } else {
            floatingCollapsed = false;
            floatingHost.classList.remove("is-collapsed");
            const saved = readFloatingGeometry();
            floatingHost.style.left = `${saved.left}px`;
            floatingHost.style.top = `${saved.top}px`;
            floatingHost.style.width = `${saved.width}px`;
            floatingHost.style.height = `${saved.height}px`;
            ui.floatingCollapse.textContent = "Réduire";
            ui.floatingCollapse.title = "Réduire la fenêtre PR";
        }
        keepFloatingHostInsideViewport();
    }

    function applyDisplayMode(mode) {
        displayMode = mode === "floating" ? "floating" : "sidebar";
        writeSetting(SETTINGS_DISPLAY_MODE_KEY, displayMode);
        ui.displayMode.value = displayMode;
        updateDisplayToggleUi();
        ui.floatingCollapse.hidden = displayMode !== "floating";
        let placeholder = ui.tabPane.querySelector("#wme-pr-sidebar-placeholder");

        if (displayMode === "sidebar") {
            if (floatingCollapsed) setFloatingCollapsed(false);
            if (floatingResizeObserver) {
                floatingResizeObserver.disconnect();
                floatingResizeObserver = null;
            }
            if (floatingHost) {
                ui.tabPane.insertBefore(ui.root, placeholder || null);
                floatingHost.remove();
                floatingHost = null;
            }
            if (placeholder) placeholder.hidden = true;
            return;
        }

        if (!placeholder) {
            placeholder = root.document.createElement("div");
            placeholder.id = "wme-pr-sidebar-placeholder";
            placeholder.className = "wme-pr-sidebar-placeholder";
            placeholder.innerHTML = '<button class="wme-pr-button wme-pr-button-primary" type="button">Afficher la fenêtre PR</button>';
            placeholder.querySelector("button").addEventListener("click", () => {
                if (!floatingHost) return;
                floatingHost.style.display = "block";
                bringFloatingToFront();
                keepFloatingHostInsideViewport();
            });
            ui.tabPane.appendChild(placeholder);
        }
        placeholder.hidden = false;

        if (!floatingHost) {
            floatingHost = root.document.createElement("div");
            floatingHost.id = "wme-pr-floating-host";
            floatingHost.className = "wme-pr-floating-host";
            const saved = readFloatingGeometry();
            floatingHost.style.left = `${saved.left}px`;
            floatingHost.style.top = `${saved.top}px`;
            floatingHost.style.width = `${saved.width}px`;
            floatingHost.style.height = `${saved.height}px`;
            root.document.body.appendChild(floatingHost);
            floatingHost.appendChild(ui.root);
            floatingHost.addEventListener("pointerdown", bringFloatingToFront);
            enableFloatingDrag(floatingHost, ui.root.querySelector(".wme-pr-title-row"));
            if (typeof root.ResizeObserver === "function") {
                floatingResizeObserver = new root.ResizeObserver(() => {
                    if (!floatingCollapsed) saveFloatingGeometry();
                });
                floatingResizeObserver.observe(floatingHost);
            }
        }
        floatingCollapsed = false;
        floatingHost.classList.remove("is-collapsed");
        ui.floatingCollapse.textContent = "Réduire";
        ui.floatingCollapse.title = "Réduire la fenêtre PR";
        bringFloatingToFront();
        keepFloatingHostInsideViewport();
    }

    function buildDepartmentOptions() {
        return DEPARTMENTS_BY_REGION.map(([region, departments]) => (
            `<optgroup label="${region}">`
            + departments.map(([code, name]) => `<option value="${code}"${code === "01" ? " selected" : ""}>${code} — ${name}</option>`).join("")
            + "</optgroup>"
        )).join("");
    }

    async function buildSidebar() {
        const { tabLabel, tabPane } = await sdk.Sidebar.registerScriptTab();
        tabLabel.textContent = "";
        const tabIcon = document.createElement("img");
        tabIcon.src = SCRIPT_ICON_DATA_URI;
        tabIcon.alt = "PR";
        tabIcon.width = 24;
        tabIcon.height = 24;
        tabIcon.style.display = "block";
        tabIcon.style.margin = "0 auto";
        tabIcon.style.objectFit = "contain";
        tabLabel.appendChild(tabIcon);
        tabLabel.title = SCRIPT_NAME;
        tabLabel.addEventListener("click", () => {
            void checkGreasyForkUpdate();
        });
        tabLabel.setAttribute("aria-label", SCRIPT_NAME);
        tabPane.innerHTML = `
            <section id="wme-pr-root" class="wme-pr-panel">
                <div class="wme-pr-header">
                    <div class="wme-pr-title-row">
                        <h2 id="wme-pr-panel-title">Localisateur de PR</h2>
                        <div class="wme-pr-header-actions">
                            <button id="wme-pr-floating-collapse" class="wme-pr-header-button" type="button" hidden>Réduire</button>
                            <button id="wme-pr-display-toggle" class="wme-pr-header-button" type="button">Détacher</button>
                            <span class="wme-pr-version">v${VERSION}</span>
                            <button id="wme-pr-greasyfork-button" class="wme-pr-greasyfork-button" type="button" title="Greasy Fork — ouvrir la page du script" aria-label="Ouvrir la page Greasy Fork du script">
                                <span class="wme-pr-update-triangle" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                    <div class="wme-pr-context-row">
                        <label class="wme-pr-context-field"><span id="wme-pr-country-label">Pays</span>
                            <select id="wme-pr-country">
                                <option value="FR">🇫🇷 France</option>
                                <option value="CO">🇨🇴 Colombia — BETA</option>
                            </select>
                        </label>
                        <label class="wme-pr-context-field"><span id="wme-pr-language-label">Langue</span>
                            <select id="wme-pr-language">
                                <option value="fr">Français</option>
                                <option value="es">Español</option>
                                <option value="en">English</option>
                            </select>
                        </label>
                    </div>
                    <div class="wme-pr-subtitle-row">
                        <div id="wme-pr-subtitle" class="wme-pr-subtitle">Index national IGN</div>
                        <button id="wme-pr-customization-toggle" class="wme-pr-header-button" type="button" aria-expanded="false" aria-controls="wme-pr-customization-panel" title="Ouvrir le panneau de personnalisation">Personnaliser</button>
                    </div>
                </div>
                <div id="wme-pr-search-panel" class="wme-pr-view">
                <details id="wme-pr-data-info" class="wme-pr-data-info">
                    <summary id="wme-pr-data-info-title">Sources et confidentialité</summary>
                    <div class="wme-pr-data-info-body">
                        <p id="wme-pr-data-origin"></p>
                        <p><a id="wme-pr-data-ign-link" href="${IGN_BDTOPO_CATALOG_URL}" target="_blank" rel="noopener noreferrer">Source officielle IGN — BD TOPO®</a> · <a id="wme-pr-data-license-link" href="${OPEN_LICENSE_URL}" target="_blank" rel="noopener noreferrer">Licence Ouverte 2.0</a></p>
                        <p id="wme-pr-data-server"></p>
                        <p id="wme-pr-data-network"></p>
                        <p id="wme-pr-data-local"></p>
                    </div>
                </details>
                <div id="wme-pr-selection" class="wme-pr-selection">Segment sélectionné : facultatif</div>
                <div id="wme-pr-route-tabs" class="wme-pr-route-tabs" role="tablist" aria-label="Type de route">
                    <button type="button" class="wme-pr-route-tab" data-route-type="D" role="tab">Dxx</button>
                    <button type="button" class="wme-pr-route-tab" data-route-type="N" role="tab">Nxx</button>
                    <button type="button" class="wme-pr-route-tab" data-route-type="A" role="tab">Axx</button>
                    <button type="button" class="wme-pr-route-tab" data-route-type="I" role="tab">Intercommunales</button>
                </div>
                <details id="wme-pr-text-search" class="wme-pr-text-search">
                    <summary id="wme-pr-text-search-label">Recherche depuis un texte</summary>
                    <textarea id="wme-pr-text-search-input" spellcheck="false" placeholder="Ex. D1084 — travaux du PR 35+250 au PR 37+1350"></textarea>
                    <button id="wme-pr-text-search-action" class="wme-pr-button wme-pr-button-secondary" type="button">Analyser et rechercher</button>
                </details>
                <div class="wme-pr-search-grid">
                    <label id="wme-pr-department-field" class="wme-pr-field">Département
                        <select id="wme-pr-department">${buildDepartmentOptions()}</select>
                    </label>
                    <label id="wme-pr-axis-field" class="wme-pr-field">Axe
                        <input id="wme-pr-axis" type="text" list="" autocomplete="off" spellcheck="false" placeholder="D62">
                        <datalist id="wme-pr-intercommunal-axis-list"></datalist>
                    </label>
                    <label id="wme-pr-manager-field" class="wme-pr-field" hidden>Gestionnaire / territoire
                        <select id="wme-pr-manager"><option value="">— Choisir un gestionnaire / territoire —</option></select>
                    </label>
                    <label id="wme-pr-side-field" class="wme-pr-field">Chaussée / sens — facultatif
                        <select id="wme-pr-side"></select>
                    </label>
                    <label id="wme-pr-pr-field" class="wme-pr-field">Premier PR
                        <input id="wme-pr-value" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" pattern="[0-9]+\+[0-9]{3,4}" title="Format obligatoire : 65+352 ou 65+1350" placeholder="65+352">
                    </label>
                    <label id="wme-pr-pr2-field" class="wme-pr-field">Deuxième PR
                        <input id="wme-pr-value-2" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" pattern="[0-9]+\+[0-9]{3,4}" title="Format obligatoire : 67+120 ou 67+1350" placeholder="67+120">
                    </label>
                </div>
                <label id="wme-pr-auto-select-label" class="wme-pr-check"><input id="wme-pr-auto-select" type="checkbox"> Sélectionner automatiquement le segment du PR ou tous les segments de la zone</label>
                <p id="wme-pr-search-help" class="wme-pr-help">Le sens permet de forcer une chaussée ; sinon la branche cohérente la plus proche est choisie. Le deuxième PR permet d’afficher une zone sur le même axe. Les PR doivent être saisis au format 52+000 ou 60+007.</p>
                <div id="wme-pr-axis-filter-actions" class="wme-pr-axis-filter-actions">
                    <button id="wme-pr-axis-filter-apply" class="wme-pr-button wme-pr-button-secondary" type="button" title="N’afficher sur le calque général que les PR de cet axe">Afficher uniquement cet axe</button>
                </div>
                <div id="wme-pr-axis-filter-banner" class="wme-pr-axis-filter-banner" hidden>
                    <strong id="wme-pr-axis-filter-label"></strong>
                    <button id="wme-pr-axis-filter-clear" class="wme-pr-button wme-pr-button-secondary" type="button">Afficher tous les PR</button>
                </div>
                <button id="wme-pr-locate" class="wme-pr-button wme-pr-button-primary" type="button">Rechercher et localiser</button>
                <div id="wme-pr-result-actions" class="wme-pr-result-actions" hidden>
                    <button id="wme-pr-map-comment-open" class="wme-pr-button wme-pr-button-secondary" type="button" title="Ajouter une note de carte">Ajouter une note</button>
                    <button id="wme-pr-copy" class="wme-pr-button wme-pr-button-secondary" type="button" title="Copier le permalink">Copier le permalink</button>
                    <a id="wme-pr-permalink" class="wme-pr-button wme-pr-link-button" href="#" target="_blank" rel="noopener noreferrer" title="Ouvrir le permalink">Ouvrir le permalink</a>
                    <button id="wme-pr-clear-result" class="wme-pr-button wme-pr-button-secondary" type="button" title="Vider le résultat">Vider le résultat</button>
                </div>
                <div id="wme-pr-index-status" class="wme-pr-layer-status wme-pr-layer-status-info">Calque général des PR : désactivé. Activez « ${PR_INDEX_CHECKBOX} » dans les calques WME.</div>
                <div id="wme-pr-status" class="wme-pr-status wme-pr-status-info">Choisissez le type de route, l’axe et le premier PR.</div>
                <div id="wme-pr-result" class="wme-pr-result" hidden>
                    <strong id="wme-pr-result-title"></strong>
                    <pre id="wme-pr-result-details"></pre>
                    <div id="wme-pr-map-comment-editor" class="wme-pr-map-comment-editor" hidden>
                        <strong>Nouvelle note de carte</strong>
                        <label class="wme-pr-field">Sujet
                            <input id="wme-pr-map-comment-subject" type="text" maxlength="30">
                        </label>
                        <label class="wme-pr-field">Description
                            <textarea id="wme-pr-map-comment-body" maxlength="2000" placeholder="Description facultative"></textarea>
                        </label>
                        <label class="wme-pr-field">Expiration
                            <select id="wme-pr-map-comment-expiration">
                                <option value="7">7 jours</option>
                                <option value="30" selected>30 jours</option>
                                <option value="90">90 jours</option>
                                <option value="none">Sans expiration</option>
                                <option value="custom">Date personnalisée</option>
                            </select>
                        </label>
                        <label id="wme-pr-map-comment-custom-date-field" class="wme-pr-field" hidden>Date d’expiration
                            <input id="wme-pr-map-comment-custom-date" type="date">
                        </label>
                        <p id="wme-pr-map-comment-geometry-info" class="wme-pr-map-comment-info"></p>
                        <div class="wme-pr-actions">
                            <button id="wme-pr-map-comment-create" class="wme-pr-button wme-pr-button-primary" type="button">Créer la note</button>
                            <button id="wme-pr-map-comment-cancel" class="wme-pr-button wme-pr-button-secondary" type="button">Annuler</button>
                        </div>
                    </div>
                </div>
                </div>
                <div id="wme-pr-customization-panel" class="wme-pr-view wme-pr-customization-panel" hidden>
                <p class="wme-pr-customization-heading">Les réglages remplacent temporairement le panneau de recherche. Utilisez « Retour » pour revenir au localisateur.</p>
                <details class="wme-pr-settings wme-pr-settings-theme-interface" open>
                    <summary>Interface</summary>
                    <div class="wme-pr-settings-group">
                        <strong>Affichage du panneau</strong>
                        <label class="wme-pr-field">Mode d’affichage
                            <select id="wme-pr-display-mode">
                                <option value="sidebar">Panneau latéral WME</option>
                                <option value="floating">Fenêtre flottante</option>
                            </select>
                        </label>
                        <p class="wme-pr-help">La fenêtre flottante est déplaçable et redimensionnable. Sa position et sa taille sont mémorisées.</p>
                    </div>
                </details>
                <details class="wme-pr-settings wme-pr-settings-theme-result" open>
                    <summary>Résultat de recherche</summary>
                    <div class="wme-pr-settings-group">
                        <strong>Sur la carte</strong>
                        <div class="wme-pr-color-grid">
                            <label>Repère ciblé <input id="wme-pr-result-target-color" type="color"></label>
                            <label>PR entier d’origine <input id="wme-pr-result-anchor-color" type="color"></label>
                            <label>Trajet calculé <input id="wme-pr-result-path-color" type="color"></label>
                            <label>Zone entre deux PR <input id="wme-pr-result-zone-color" type="color"></label>
                        </div>
                        <label class="wme-pr-field">Taille du repère
                            <span class="wme-pr-range-row"><input id="wme-pr-result-marker-size" type="range" min="6" max="20" step="1"><output id="wme-pr-result-marker-size-output"></output></span>
                        </label>
                        <label class="wme-pr-field">Épaisseur du tracé
                            <span class="wme-pr-range-row"><input id="wme-pr-result-line-width" type="range" min="2" max="12" step="1"><output id="wme-pr-result-line-width-output"></output></span>
                        </label>
                        <label class="wme-pr-field">Opacité
                            <span class="wme-pr-range-row"><input id="wme-pr-result-opacity" type="range" min="20" max="100" step="5"><output id="wme-pr-result-opacity-output"></output></span>
                        </label>
                        <label class="wme-pr-check"><input id="wme-pr-result-show-labels" type="checkbox"> Afficher le libellé du résultat</label>
                        <label class="wme-pr-field">Style du libellé
                            <select id="wme-pr-result-label-style">
                                <option value="cartouche">Cartouche routier compact</option>
                                <option value="simple">Texte simple</option>
                            </select>
                        </label>
                        <label class="wme-pr-field">Écart avec le point recherché
                            <span class="wme-pr-range-row"><input id="wme-pr-result-label-offset" type="range" min="10" max="80" step="1"><output id="wme-pr-result-label-offset-output"></output></span>
                        </label>
                        <div class="wme-pr-result-cartouche-options">
                            <label class="wme-pr-check"><input id="wme-pr-result-show-sense" type="checkbox"> Afficher SENS 1 / SENS 2</label>
                            <label class="wme-pr-check"><input id="wme-pr-result-show-motorway-destination" type="checkbox"> Afficher la destination des autoroutes</label>
                            <div class="wme-pr-color-grid">
                                <label>Bandeau autoroute <input id="wme-pr-result-motorway-cartouche-color" type="color"></label>
                                <label>Bandeau départementale <input id="wme-pr-result-department-cartouche-color" type="color"></label>
                            </div>
                            <label class="wme-pr-field">Taille du cartouche
                                <span class="wme-pr-range-row"><input id="wme-pr-result-cartouche-scale" type="range" min="60" max="160" step="5"><output id="wme-pr-result-cartouche-scale-output"></output></span>
                            </label>
                            <label class="wme-pr-field">Opacité du cartouche
                                <span class="wme-pr-range-row"><input id="wme-pr-result-cartouche-opacity" type="range" min="20" max="100" step="5"><output id="wme-pr-result-cartouche-opacity-output"></output></span>
                            </label>
                        </div>
                        <div class="wme-pr-result-simple-options">
                            <div class="wme-pr-color-grid">
                                <label>Couleur du texte <input id="wme-pr-result-label-color" type="color"></label>
                                <label>Couleur du contour <input id="wme-pr-result-label-outline-color" type="color"></label>
                            </div>
                            <label class="wme-pr-field">Taille du libellé / texte du cartouche
                                <span class="wme-pr-range-row"><input id="wme-pr-result-label-size" type="range" min="10" max="22" step="1"><output id="wme-pr-result-label-size-output"></output></span>
                            </label>
                            <label class="wme-pr-field">Épaisseur du contour du texte simple
                                <span class="wme-pr-range-row"><input id="wme-pr-result-label-outline-width" type="range" min="0" max="8" step="1"><output id="wme-pr-result-label-outline-width-output"></output></span>
                            </label>
                        </div>
                    </div>
                    <div class="wme-pr-settings-group">
                        <strong>Bloc d’informations</strong>
                        <div class="wme-pr-color-grid">
                            <label>Fond <input id="wme-pr-result-panel-background-color" type="color"></label>
                            <label>Bordure <input id="wme-pr-result-panel-border-color" type="color"></label>
                            <label>Titre <input id="wme-pr-result-panel-title-color" type="color"></label>
                            <label>Détails <input id="wme-pr-result-panel-text-color" type="color"></label>
                        </div>
                        <p class="wme-pr-help">Ces couleurs s’appliquent au bloc de résultat affiché sous la recherche.</p>
                    </div>
                </details>
                <details class="wme-pr-settings wme-pr-settings-theme-index">
                    <summary>Calque général des PR</summary>
                    <div class="wme-pr-settings-group">
                        <strong>Points et cartouches</strong>
                        <div class="wme-pr-color-grid">
                            <label>Autoroutes (A) <input id="wme-pr-index-autoroute-color" type="color"></label>
                            <label>Routes nationales (N) <input id="wme-pr-index-national-color" type="color"></label>
                            <label>Routes intercommunales <input id="wme-pr-index-metropolitan-color" type="color"></label>
                            <label>Autres axes, dont D <input id="wme-pr-index-other-color" type="color"></label>
                        </div>
                        <label class="wme-pr-field">Taille des points
                            <span class="wme-pr-range-row"><input id="wme-pr-index-marker-size" type="range" min="2" max="10" step="1"><output id="wme-pr-index-marker-size-output"></output></span>
                        </label>
                        <label class="wme-pr-field">Opacité
                            <span class="wme-pr-range-row"><input id="wme-pr-index-opacity" type="range" min="20" max="100" step="5"><output id="wme-pr-index-opacity-output"></output></span>
                        </label>
                        <label class="wme-pr-field">Style des libellés PR
                            <select id="wme-pr-index-label-style">
                                <option value="cartouche">Cartouche routier compact</option>
                                <option value="simple">Texte simple</option>
                            </select>
                        </label>
                        <label class="wme-pr-check"><input id="wme-pr-index-show-sense" type="checkbox"> Afficher SENS 1 / SENS 2</label>
                        <label class="wme-pr-check"><input id="wme-pr-index-show-motorway-destination" type="checkbox"> Afficher la destination des autoroutes</label>
                        <div class="wme-pr-color-grid">
                            <label>Bandeau autoroute <input id="wme-pr-index-motorway-cartouche-color" type="color"></label>
                            <label>Bandeau départementale <input id="wme-pr-index-department-cartouche-color" type="color"></label>
                        </div>
                        <label class="wme-pr-field">Taille des cartouches
                            <span class="wme-pr-range-row"><input id="wme-pr-index-cartouche-scale" type="range" min="60" max="160" step="5"><output id="wme-pr-index-cartouche-scale-output"></output></span>
                        </label>
                        <label class="wme-pr-field">Opacité des cartouches
                            <span class="wme-pr-range-row"><input id="wme-pr-index-cartouche-opacity" type="range" min="20" max="100" step="5"><output id="wme-pr-index-cartouche-opacity-output"></output></span>
                        </label>
                    </div>
                    <div class="wme-pr-settings-group">
                        <strong>Libellés</strong>
                        <label class="wme-pr-field">Affichage
                            <select id="wme-pr-index-label-mode">
                                <option value="auto">Selon le niveau de zoom</option>
                                <option value="always">Toujours</option>
                                <option value="never">Jamais</option>
                            </select>
                        </label>
                        <label class="wme-pr-field">Afficher à partir du zoom
                            <select id="wme-pr-index-label-min-zoom">
                                <option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option>
                            </select>
                        </label>
                        <label class="wme-pr-field">Taille des libellés
                            <span class="wme-pr-range-row"><input id="wme-pr-index-label-size" type="range" min="9" max="18" step="1"><output id="wme-pr-index-label-size-output"></output></span>
                        </label>
                        <label class="wme-pr-field">Écart des libellés avec la route
                            <span class="wme-pr-range-row"><input id="wme-pr-index-label-offset" type="range" min="10" max="36" step="1"><output id="wme-pr-index-label-offset-output"></output></span>
                        </label>
                        <div class="wme-pr-color-grid">
                            <label>Couleur du texte <input id="wme-pr-index-label-color" type="color"></label>
                            <label>Couleur du contour <input id="wme-pr-index-label-outline-color" type="color"></label>
                        </div>
                        <label class="wme-pr-field">Épaisseur du contour du texte
                            <span class="wme-pr-range-row"><input id="wme-pr-index-label-outline-width" type="range" min="0" max="8" step="1"><output id="wme-pr-index-label-outline-width-output"></output></span>
                        </label>
                    </div>
                </details>
                <details class="wme-pr-settings wme-pr-settings-theme-motorway">
                    <summary>Destinations autoroutières</summary>
                    <div class="wme-pr-settings-group">
                        <strong>Référentiel et surcharges locales</strong>
                        <p class="wme-pr-help">Référentiel national intégré : ${NATIONAL_MOTORWAY_DESTINATION_COUNT} couples axe/scope, version ${NATIONAL_MOTORWAY_DESTINATIONS_VERSION}. Les anneaux et branches sans destination unique affichent seulement le numéro.</p>
                        <label class="wme-pr-field">Surcharges locales des destinations
                            <textarea id="wme-pr-motorway-destinations" rows="5" spellcheck="false" placeholder="A40 | Mâcon | Chamonix&#10;A1@972 | Le Lamentin | Fort-de-France"></textarea>
                        </label>
                        <p class="wme-pr-help">Facultatif : Axe[@département] | destination Sens 1 | destination Sens 2. Une surcharge remplace le référentiel national.</p>
                    </div>
                </details>
                <div class="wme-pr-settings-actions">
                    <button id="wme-pr-save-appearance" class="wme-pr-button wme-pr-button-secondary" type="button">Enregistrer l’affichage</button>
                    <button id="wme-pr-reset-appearance" class="wme-pr-button" type="button">Valeurs d’origine</button>
                </div>

                </div>
            </section>
        `;

        ui = {
            tabLabel,
            tabPane,
            root: tabPane.querySelector("#wme-pr-root"),
            panelTitle: tabPane.querySelector("#wme-pr-panel-title"),
            subtitle: tabPane.querySelector("#wme-pr-subtitle"),
            countryLabel: tabPane.querySelector("#wme-pr-country-label"),
            country: tabPane.querySelector("#wme-pr-country"),
            languageLabel: tabPane.querySelector("#wme-pr-language-label"),
            language: tabPane.querySelector("#wme-pr-language"),
            displayToggle: tabPane.querySelector("#wme-pr-display-toggle"),
            greasyForkButton: tabPane.querySelector("#wme-pr-greasyfork-button"),
            floatingCollapse: tabPane.querySelector("#wme-pr-floating-collapse"),
            customizationToggle: tabPane.querySelector("#wme-pr-customization-toggle"),
            searchPanel: tabPane.querySelector("#wme-pr-search-panel"),
            customizationPanel: tabPane.querySelector("#wme-pr-customization-panel"),
            displayMode: tabPane.querySelector("#wme-pr-display-mode"),
            selection: tabPane.querySelector("#wme-pr-selection"),
            routeTabsContainer: tabPane.querySelector("#wme-pr-route-tabs"),
            routeTabs: [...tabPane.querySelectorAll(".wme-pr-route-tab")],
            axisField: tabPane.querySelector("#wme-pr-axis-field"),
            sideField: tabPane.querySelector("#wme-pr-side-field"),
            prField: tabPane.querySelector("#wme-pr-pr-field"),
            pr2Field: tabPane.querySelector("#wme-pr-pr2-field"),
            autoSelectLabel: tabPane.querySelector("#wme-pr-auto-select-label"),
            axisFilterActions: tabPane.querySelector("#wme-pr-axis-filter-actions"),
            departmentField: tabPane.querySelector("#wme-pr-department-field"),
            department: tabPane.querySelector("#wme-pr-department"),
            textSearchBlock: tabPane.querySelector("#wme-pr-text-search"),
            textSearchLabel: tabPane.querySelector("#wme-pr-text-search-label"),
            textSearchInput: tabPane.querySelector("#wme-pr-text-search-input"),
            textSearchAction: tabPane.querySelector("#wme-pr-text-search-action"),
            managerField: tabPane.querySelector("#wme-pr-manager-field"),
            manager: tabPane.querySelector("#wme-pr-manager"),
            axis: tabPane.querySelector("#wme-pr-axis"),
            axisList: tabPane.querySelector("#wme-pr-intercommunal-axis-list"),
            side: tabPane.querySelector("#wme-pr-side"),
            searchHelp: tabPane.querySelector("#wme-pr-search-help"),
            pr: tabPane.querySelector("#wme-pr-value"),
            pr2: tabPane.querySelector("#wme-pr-value-2"),
            autoSelect: tabPane.querySelector("#wme-pr-auto-select"),
            axisFilterApply: tabPane.querySelector("#wme-pr-axis-filter-apply"),
            axisFilterBanner: tabPane.querySelector("#wme-pr-axis-filter-banner"),
            axisFilterLabel: tabPane.querySelector("#wme-pr-axis-filter-label"),
            axisFilterClear: tabPane.querySelector("#wme-pr-axis-filter-clear"),
            prIndexStatus: tabPane.querySelector("#wme-pr-index-status"),
            resultTargetColor: tabPane.querySelector("#wme-pr-result-target-color"),
            resultAnchorColor: tabPane.querySelector("#wme-pr-result-anchor-color"),
            resultPathColor: tabPane.querySelector("#wme-pr-result-path-color"),
            resultZoneColor: tabPane.querySelector("#wme-pr-result-zone-color"),
            resultMarkerSize: tabPane.querySelector("#wme-pr-result-marker-size"),
            resultMarkerSizeOutput: tabPane.querySelector("#wme-pr-result-marker-size-output"),
            resultLineWidth: tabPane.querySelector("#wme-pr-result-line-width"),
            resultLineWidthOutput: tabPane.querySelector("#wme-pr-result-line-width-output"),
            resultOpacity: tabPane.querySelector("#wme-pr-result-opacity"),
            resultOpacityOutput: tabPane.querySelector("#wme-pr-result-opacity-output"),
            resultShowLabels: tabPane.querySelector("#wme-pr-result-show-labels"),
            resultLabelStyle: tabPane.querySelector("#wme-pr-result-label-style"),
            resultShowSense: tabPane.querySelector("#wme-pr-result-show-sense"),
            resultShowMotorwayDestination: tabPane.querySelector("#wme-pr-result-show-motorway-destination"),
            resultMotorwayCartoucheColor: tabPane.querySelector("#wme-pr-result-motorway-cartouche-color"),
            resultDepartmentCartoucheColor: tabPane.querySelector("#wme-pr-result-department-cartouche-color"),
            resultCartoucheScale: tabPane.querySelector("#wme-pr-result-cartouche-scale"),
            resultCartoucheScaleOutput: tabPane.querySelector("#wme-pr-result-cartouche-scale-output"),
            resultCartoucheOpacity: tabPane.querySelector("#wme-pr-result-cartouche-opacity"),
            resultCartoucheOpacityOutput: tabPane.querySelector("#wme-pr-result-cartouche-opacity-output"),
            resultLabelOffset: tabPane.querySelector("#wme-pr-result-label-offset"),
            resultLabelOffsetOutput: tabPane.querySelector("#wme-pr-result-label-offset-output"),
            resultLabelColor: tabPane.querySelector("#wme-pr-result-label-color"),
            resultLabelSize: tabPane.querySelector("#wme-pr-result-label-size"),
            resultLabelSizeOutput: tabPane.querySelector("#wme-pr-result-label-size-output"),
            resultLabelOutlineColor: tabPane.querySelector("#wme-pr-result-label-outline-color"),
            resultLabelOutlineWidth: tabPane.querySelector("#wme-pr-result-label-outline-width"),
            resultLabelOutlineWidthOutput: tabPane.querySelector("#wme-pr-result-label-outline-width-output"),
            resultPanelBackgroundColor: tabPane.querySelector("#wme-pr-result-panel-background-color"),
            resultPanelBorderColor: tabPane.querySelector("#wme-pr-result-panel-border-color"),
            resultPanelTitleColor: tabPane.querySelector("#wme-pr-result-panel-title-color"),
            resultPanelTextColor: tabPane.querySelector("#wme-pr-result-panel-text-color"),
            prAutorouteColor: tabPane.querySelector("#wme-pr-index-autoroute-color"),
            prNationalColor: tabPane.querySelector("#wme-pr-index-national-color"),
            prMetropolitanColor: tabPane.querySelector("#wme-pr-index-metropolitan-color"),
            prOtherColor: tabPane.querySelector("#wme-pr-index-other-color"),
            prMarkerSize: tabPane.querySelector("#wme-pr-index-marker-size"),
            prMarkerSizeOutput: tabPane.querySelector("#wme-pr-index-marker-size-output"),
            prOpacity: tabPane.querySelector("#wme-pr-index-opacity"),
            prOpacityOutput: tabPane.querySelector("#wme-pr-index-opacity-output"),
            prLabelStyle: tabPane.querySelector("#wme-pr-index-label-style"),
            prShowSense: tabPane.querySelector("#wme-pr-index-show-sense"),
            prShowMotorwayDestination: tabPane.querySelector("#wme-pr-index-show-motorway-destination"),
            prMotorwayCartoucheColor: tabPane.querySelector("#wme-pr-index-motorway-cartouche-color"),
            prDepartmentCartoucheColor: tabPane.querySelector("#wme-pr-index-department-cartouche-color"),
            prCartoucheScale: tabPane.querySelector("#wme-pr-index-cartouche-scale"),
            prCartoucheScaleOutput: tabPane.querySelector("#wme-pr-index-cartouche-scale-output"),
            prCartoucheOpacity: tabPane.querySelector("#wme-pr-index-cartouche-opacity"),
            prCartoucheOpacityOutput: tabPane.querySelector("#wme-pr-index-cartouche-opacity-output"),
            motorwayDestinations: tabPane.querySelector("#wme-pr-motorway-destinations"),
            prLabelMode: tabPane.querySelector("#wme-pr-index-label-mode"),
            prLabelMinZoom: tabPane.querySelector("#wme-pr-index-label-min-zoom"),
            prLabelSize: tabPane.querySelector("#wme-pr-index-label-size"),
            prLabelSizeOutput: tabPane.querySelector("#wme-pr-index-label-size-output"),
            prLabelOffset: tabPane.querySelector("#wme-pr-index-label-offset"),
            prLabelOffsetOutput: tabPane.querySelector("#wme-pr-index-label-offset-output"),
            prLabelColor: tabPane.querySelector("#wme-pr-index-label-color"),
            prLabelOutlineColor: tabPane.querySelector("#wme-pr-index-label-outline-color"),
            prLabelOutlineWidth: tabPane.querySelector("#wme-pr-index-label-outline-width"),
            prLabelOutlineWidthOutput: tabPane.querySelector("#wme-pr-index-label-outline-width-output"),
            saveAppearance: tabPane.querySelector("#wme-pr-save-appearance"),
            resetAppearance: tabPane.querySelector("#wme-pr-reset-appearance"),
            dataOrigin: tabPane.querySelector("#wme-pr-data-origin"),
            dataServer: tabPane.querySelector("#wme-pr-data-server"),
            dataNetwork: tabPane.querySelector("#wme-pr-data-network"),
            dataLocal: tabPane.querySelector("#wme-pr-data-local"),
            dataInfoTitle: tabPane.querySelector("#wme-pr-data-info-title"),
            dataIgnLink: tabPane.querySelector("#wme-pr-data-ign-link"),
            dataLicenseLink: tabPane.querySelector("#wme-pr-data-license-link"),
            saveSettings: tabPane.querySelector("#wme-pr-save-settings"),
            locate: tabPane.querySelector("#wme-pr-locate"),
            status: tabPane.querySelector("#wme-pr-status"),
            resultActions: tabPane.querySelector("#wme-pr-result-actions"),
            result: tabPane.querySelector("#wme-pr-result"),
            resultTitle: tabPane.querySelector("#wme-pr-result-title"),
            resultDetails: tabPane.querySelector("#wme-pr-result-details"),
            copy: tabPane.querySelector("#wme-pr-copy"),
            permalink: tabPane.querySelector("#wme-pr-permalink"),
            clearResult: tabPane.querySelector("#wme-pr-clear-result"),
            mapCommentOpen: tabPane.querySelector("#wme-pr-map-comment-open"),
            mapCommentEditor: tabPane.querySelector("#wme-pr-map-comment-editor"),
            mapCommentSubject: tabPane.querySelector("#wme-pr-map-comment-subject"),
            mapCommentBody: tabPane.querySelector("#wme-pr-map-comment-body"),
            mapCommentExpiration: tabPane.querySelector("#wme-pr-map-comment-expiration"),
            mapCommentCustomDateField: tabPane.querySelector("#wme-pr-map-comment-custom-date-field"),
            mapCommentCustomDate: tabPane.querySelector("#wme-pr-map-comment-custom-date"),
            mapCommentGeometryInfo: tabPane.querySelector("#wme-pr-map-comment-geometry-info"),
            mapCommentCreate: tabPane.querySelector("#wme-pr-map-comment-create"),
            mapCommentCancel: tabPane.querySelector("#wme-pr-map-comment-cancel"),
        };
        fillAppearanceControls(appearanceSettings);
        // DEV Supabase : projet et clé publique intégrés ; aucun identifiant à saisir.
        displayMode = readSetting(SETTINGS_DISPLAY_MODE_KEY) === "floating" ? "floating" : "sidebar";
        ui.displayMode.value = displayMode;
        currentCountry = COUNTRY_CONFIG[String(readSetting(SETTINGS_COUNTRY_KEY) || "FR").toUpperCase()] ? String(readSetting(SETTINGS_COUNTRY_KEY) || "FR").toUpperCase() : "FR";
        const savedLanguage = String(readSetting(SETTINGS_LANGUAGE_KEY) || COUNTRY_CONFIG[currentCountry].defaultLanguage).toLowerCase();
        currentLanguage = ["fr", "es", "en"].includes(savedLanguage) ? savedLanguage : COUNTRY_CONFIG[currentCountry].defaultLanguage;
        const savedRouteType = String(readSetting(SETTINGS_SEARCH_ROUTE_TYPE_KEY) || "D").toUpperCase();
        searchRouteType = ["A", "D", "N", "I"].includes(savedRouteType) ? savedRouteType : "D";
        setSearchRouteType(searchRouteType, { preserveAxis: true });
        ui.autoSelect.checked = readSetting(SETTINGS_AUTO_SELECT_KEY) !== "0";
        try {
            const savedAxisFilter = JSON.parse(readSetting(SETTINGS_PR_INDEX_AXIS_FILTER_KEY) || "null");
            prIndexAxisFilter = normalizePrIndexAxisFilter(savedAxisFilter);
        } catch (error) {
            prIndexAxisFilter = null;
        }
        updatePrIndexAxisFilterUi();
        setPrIndexStatus(
            prIndexLayerEnabled
                ? "Calque des PR activé — chargement de la vue…"
                : `Calque général des PR : désactivé. Activez « ${PR_INDEX_CHECKBOX} » dans les calques WME.`,
            "info",
        );
        ui.country.addEventListener("change", () => observeAsync(setCountry(ui.country.value, { updateLanguage: false }), "changement de pays"));
        ui.language.addEventListener("change", () => setLanguage(ui.language.value));
        applyCountryAndLanguageUi();
        for (const routeTab of ui.routeTabs) {
            routeTab.addEventListener("click", () => setSearchRouteType(routeTab.dataset.routeType));
        }
        ui.manager.addEventListener("change", () => {
            intercommunalAutoSelectGeneration += 1;
            const manager = String(ui.manager.value || "").trim();
            writeSetting(SETTINGS_INTERCOMMUNAL_MANAGER_KEY, manager);
            void loadIntercommunalAxes(manager).catch((error) => {
                setStatus(`Axes intercommunaux indisponibles : ${error?.message || error}`, "warning");
            });
        });
        ui.textSearchAction.addEventListener("click", () => {
            void locateFromDepartmentalText();
        });
        ui.textSearchInput.addEventListener("keydown", (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
                event.preventDefault();
                void locateFromDepartmentalText();
            }
        });
        ui.locate.addEventListener("click", locate);
        ui.axisFilterApply.addEventListener("click", applyPrIndexAxisFilterFromSearch);
        ui.axisFilterClear.addEventListener("click", clearPrIndexAxisFilter);
        ui.autoSelect.addEventListener("change", () => {
            writeSetting(SETTINGS_AUTO_SELECT_KEY, ui.autoSelect.checked ? "1" : "0");
        });
        ui.customizationToggle.addEventListener("click", () => {
            const showCustomization = ui.customizationToggle.getAttribute("aria-expanded") !== "true";
            ui.customizationToggle.setAttribute("aria-expanded", showCustomization ? "true" : "false");
            ui.panelTitle.textContent = showCustomization
                ? ({ fr: "Personnalisation", es: "Personalización", en: "Customization" }[currentLanguage] || "Personnalisation")
                : tr("title");
            ui.customizationToggle.textContent = showCustomization ? tr("back") : tr("customize");
            ui.customizationToggle.title = showCustomization
                ? "Revenir au panneau de recherche"
                : "Ouvrir le panneau de personnalisation";
            ui.searchPanel.hidden = showCustomization;
            ui.customizationPanel.hidden = !showCustomization;
            if (showCustomization && floatingCollapsed) setFloatingCollapsed(false);
        });
        ui.displayToggle.addEventListener("click", () => {
            applyDisplayMode(displayMode === "floating" ? "sidebar" : "floating");
        });
        ui.greasyForkButton.addEventListener("click", () => {
            root.open(GREASYFORK_PAGE_URL, "_blank", "noopener,noreferrer");
        });
        ui.floatingCollapse.addEventListener("click", () => setFloatingCollapsed(!floatingCollapsed));
        ui.displayMode.addEventListener("change", () => applyDisplayMode(ui.displayMode.value));
        ui.saveAppearance.addEventListener("click", () => observeAsync(saveAppearance(), "enregistrement apparence"));
        ui.resetAppearance.addEventListener("click", () => observeAsync(resetAppearance(), "réinitialisation apparence"));
        ui.copy.addEventListener("click", () => observeAsync(copyPermalink(), "permalink"));
        ui.clearResult.addEventListener("click", clearResult);
        ui.mapCommentOpen.addEventListener("click", openMapCommentEditor);
        ui.mapCommentCancel.addEventListener("click", closeMapCommentEditor);
        ui.mapCommentCreate.addEventListener("click", () => observeAsync(createMapCommentFromResult(), "création de note"));
        ui.mapCommentExpiration.addEventListener("change", () => {
            ui.mapCommentCustomDateField.hidden = ui.mapCommentExpiration.value !== "custom";
            if (!ui.mapCommentCustomDateField.hidden && !ui.mapCommentCustomDate.value) {
                const date = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
                ui.mapCommentCustomDate.value = date.toISOString().slice(0, 10);
            }
        });
        for (const control of [
            ui.resultMarkerSize,
            ui.resultLineWidth,
            ui.resultOpacity,
            ui.resultLabelStyle,
            ui.resultShowLabels,
            ui.resultShowSense,
            ui.resultShowMotorwayDestination,
            ui.resultCartoucheScale,
            ui.resultCartoucheOpacity,
            ui.resultLabelOffset,
            ui.resultLabelSize,
            ui.resultLabelOutlineWidth,
            ui.prMarkerSize,
            ui.prOpacity,
            ui.prCartoucheScale,
            ui.prCartoucheOpacity,
            ui.prLabelSize,
            ui.prLabelOffset,
            ui.prLabelOutlineWidth,
            ui.prLabelMode,
            ui.prLabelStyle,
            ui.prShowMotorwayDestination,
        ]) {
            control.addEventListener("input", updateAppearanceOutputs);
        }
        ui.prCartoucheScale.addEventListener("input", previewCartoucheAppearance);
        ui.prCartoucheOpacity.addEventListener("input", previewCartoucheAppearance);
        for (const control of [
            ui.resultLabelStyle,
            ui.resultShowLabels,
            ui.resultShowSense,
            ui.resultShowMotorwayDestination,
            ui.resultMotorwayCartoucheColor,
            ui.resultDepartmentCartoucheColor,
            ui.resultCartoucheScale,
            ui.resultCartoucheOpacity,
            ui.resultLabelOffset,
            ui.resultLabelColor,
            ui.resultLabelSize,
            ui.resultLabelOutlineColor,
            ui.resultLabelOutlineWidth,
        ]) {
            control.addEventListener("input", () => {
                appearanceSettings = appearanceSettingsFromControls();
                updateAppearanceOutputs();
                if (latestResult?.results?.length) {
                    observeAsync(drawResult(latestResult.results, latestResult.label, latestResult.zonePath, latestResult.zoneDiscontinuities || []), "aperçu du résultat");
                }
            });
        }
        for (const control of [
            ui.resultPanelBackgroundColor,
            ui.resultPanelBorderColor,
            ui.resultPanelTitleColor,
            ui.resultPanelTextColor,
        ]) {
            control.addEventListener("input", () => {
                const preview = appearanceSettingsFromControls();
                if (!ui?.root) return;
                ui.root.style.setProperty("--wme-pr-result-panel-bg", preview.resultPanelBackgroundColor);
                ui.root.style.setProperty("--wme-pr-result-panel-border", preview.resultPanelBorderColor);
                ui.root.style.setProperty("--wme-pr-result-panel-title", preview.resultPanelTitleColor);
                ui.root.style.setProperty("--wme-pr-result-panel-text", preview.resultPanelTextColor);
            });
        }
        ui.pr.addEventListener("keydown", (event) => {
            if (event.key === "Enter") observeAsync(locate(), "recherche PR");
        });
        ui.pr2.addEventListener("keydown", (event) => {
            if (event.key === "Enter") observeAsync(locate(), "recherche PR");
        });
        ui.axis.addEventListener("input", () => {
            if (ui.axis.value.trim().toUpperCase() !== ui.axis.dataset.autoValue) delete ui.axis.dataset.autoValue;
            if (currentCountry === "FR") {
                const typedType = routeTypeFromAxis(ui.axis.value);
                if (typedType && typedType !== searchRouteType) setSearchRouteType(typedType, { preserveAxis: true });
                refreshSearchSideOptions();
            }
        });
        applyDisplayMode(displayMode);
        await refreshSelectionSummary();
    }

    function apiError(code, message) {
      return Object.assign(new Error(message), { code });
    }

    function nonEmpty(value, name, maxLength = 80) {
      const text = String(value ?? '').trim();
      if (!text || text.length > maxLength) {
        throw apiError('INVALID_REQUEST', `${name} doit être renseigné (${maxLength} caractères maximum).`);
      }
      return text;
    }

    function optionalText(value, name, maxLength = 80) {
      if (value === null || value === undefined || value === '') return '';
      const text = String(value).trim();
      if (text.length > maxLength) {
        throw apiError('INVALID_REQUEST', `${name} dépasse ${maxLength} caractères.`);
      }
      return text;
    }

    function segmentIdsFrom(result) {
      const ids = result.zonePath?.segmentIds?.length
        ? result.zonePath.segmentIds
        : result.results.flatMap((point) => [point.segmentId, ...(point.pathSegmentIds ?? [])]);
      return [...new Set(ids.map(Number).filter((id) => Number.isInteger(id) && id > 0))];
    }

    // Contrat public minimal : le moteur de localisation reste celui du userscript.
    function createPrLocatorPublicApi({ search, isReady, scriptVersion, sdkDiagnostic }) {
      return Object.freeze({
        apiVersion: 1,
        scriptVersion,
        // La signature de recherche reste inchangée ; ce diagnostic est une
        // lecture locale accessible aux versions de développement.
        // Le diagnostic est un instantané obtenu après avoir attendu les
        // Promises SDK (y compris getSDKVersion / getWMEVersion).
        ...( /\.(?:dev|temp)\d+\b/i.test(scriptVersion) ? {
          sdkDiagnostic: () => sdkDiagnostic(),
        } : {} ),
        status() {
          return {
            apiVersion: 1,
            scriptVersion,
            ready: Boolean(isReady()),
            capabilities: ['fr-pr-point', 'fr-pr-range'],
          };
        },
        async locate(request) {
          if (!request || typeof request !== 'object' || Array.isArray(request)) {
            throw apiError('INVALID_REQUEST', 'La recherche attend un objet.');
          }
          if (request.country && String(request.country).toUpperCase() !== 'FR') {
            throw apiError('UNSUPPORTED_COUNTRY', 'Cette interface prend actuellement en charge la France uniquement.');
          }
          const axis = nonEmpty(request.axis, 'axis', 24);
          const prFrom = nonEmpty(request.prFrom, 'prFrom', 24);
          const prTo = optionalText(request.prTo, 'prTo', 24);
          const departmentCode = optionalText(request.departmentCode, 'departmentCode', 3);
          const manager = optionalText(request.manager, 'manager', 120);
          const side = optionalText(request.side, 'side', 40);
          if (!isReady()) throw apiError('NOT_READY', 'Localiser PR n’est pas encore prêt dans cet onglet WME.');
          let result;
          try {
            result = await search({ external: true, axis, prFrom, prTo, departmentCode, manager, side });
          } catch (error) {
            if (error?.code) throw error;
            throw apiError('SEARCH_FAILED', error?.message || String(error));
          }
          if (!result?.results?.length) throw apiError('SEARCH_FAILED', 'La recherche n’a renvoyé aucune localisation.');
          return {
            apiVersion: 1,
            scriptVersion,
            country: 'FR',
            axis: result.axis,
            departmentCode: result.departmentCode ?? null,
            label: result.label,
            permalink: result.permalink,
            points: result.results.map((point) => ({
              pr: point.parsedPr?.formatted ?? null,
              longitude: point.point?.[0] ?? null,
              latitude: point.point?.[1] ?? null,
              segmentId: point.segmentId ?? null,
              estimated: Boolean(point.estimated),
              confidence: point.confidence ?? null,
            })),
            zone: result.results.length > 1 ? {
              segmentIds: segmentIdsFrom(result),
              distanceMeters: result.zonePath?.distance ?? null,
              discontinuous: Boolean(result.zoneCrossesDiscontinuity),
            } : null,
            selectedSegmentIds: [...(result.automaticallySelectedSegmentIds ?? [])],
            ...(request.includeCommentGeometry === true ? {
              commentGeometry: mapCommentGeometryForResult(result),
              commentGeometryDescription: mapCommentGeometryDescription(result),
            } : {}),
          };
        },
      });
    }

    function installPublicApi() {
        root.WmePrLocator = createPrLocatorPublicApi({
            search: locate,
            isReady: () => Boolean(sdk && ui),
            scriptVersion: VERSION,
            sdkDiagnostic: () => ({ ...sdkModeDiagnostic }),
        });
        try {
            root.dispatchEvent(new root.Event("wme-pr-locator-ready-v1"));
        } catch (error) {
            console.warn(`${SCRIPT_NAME}: notification du pont indisponible`, error);
        }
    }

    async function initialize() {
        try {
            await root.SDK_INITIALIZED;
            // SDK asynchrone exclusivement : pas de seconde tentative sans
            // mode explicite, ni de passage silencieux à l'ancien SDK.
            sdk = root.getWmeSdk({ scriptId: SCRIPT_ID, scriptName: SCRIPT_NAME, mode: "async" });
            // Le diagnostic est bloquant : aucune couche ni UI si WME ignore
            // le mode demandé ou renvoie une valeur synchrone.
            await inspectSdkCompatibility();
            appearanceSettings = loadAppearanceSettings();
            motorwayDestinationOverrides = loadMotorwayDestinationOverrides();
            addStyles();
            await ensurePrIndexLayer();
            await ensureResultLayer();
            await applyAppearanceSettings();
            bindPrIndexMapEvents();
            await buildSidebar();
            installPublicApi();
            if (!selectionEventBound) {
                sdk.Events.on({ eventName: "wme-selection-changed", eventHandler: () => observeAsync(refreshSelectionSummary(), "lecture de la sélection") });
                selectionEventBound = true;
            }
            if (prIndexLayerEnabled) schedulePrIndexRefresh(0, true);
            console.info(`${SCRIPT_NAME} ${VERSION} chargé — ${BUILD_ID}.`);
        } catch (error) {
            console.error(`${SCRIPT_NAME}: initialisation impossible`, error);
        }
    }

    initialize();
})(typeof unsafeWindow !== "undefined" ? unsafeWindow : (typeof window !== "undefined" ? window : null));

