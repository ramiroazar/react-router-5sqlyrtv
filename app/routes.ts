import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("page-two", "routes/page-two.tsx"),
] satisfies RouteConfig;
