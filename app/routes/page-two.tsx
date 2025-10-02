import { ButtonTwo } from "~/components/elements/ButtonTwo";
import type { Route } from "./+types/page-two";

export function loader() {
  return { name: "React Router" };
}

export default function PageTwo({ loaderData }: Route.ComponentProps) {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl">Hello, React Router</h1>
      <ButtonTwo to="/">Home</ButtonTwo>
    </div>
  );
}
