import { useState } from "react";
import { useOutlet } from "react-router";

export function AnimatedOutlet() {
  const [outlet] = useState(useOutlet());
  return outlet;
}
