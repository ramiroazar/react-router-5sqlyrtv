import { ButtonOne } from "~/components/elements/ButtonOne";
import type { Route } from "./+types/home";

export function loader() {
  return { name: "React Router" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl">Hello, React Router</h1>
      <ButtonOne to="/page-two">Page Two</ButtonOne>
    </div>
  );
}
