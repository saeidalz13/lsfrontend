import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    // pattern, module file
    route("about", "routes/home.tsx"),
] satisfies RouteConfig;
