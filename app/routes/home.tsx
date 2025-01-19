import type { Route } from "./+types/home";
import { Main } from "../pages/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lifestyle" },
    { name: "description", content: "Welcome to Lifestyle!" },
  ];
}

export default function Home() {
  return <Main />;
}
