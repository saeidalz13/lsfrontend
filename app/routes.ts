import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./components/navbarLayout.tsx", [index("routes/home.tsx")]),

  // pattern, module file
  // route("about", "routes/home.tsx"),
] satisfies RouteConfig;
