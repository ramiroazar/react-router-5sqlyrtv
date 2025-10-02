import type { ComponentPropsWithoutRef } from "react";
import styles from "./ButtonTwo.module.css";
import { NavLink } from "react-router";

type ButtonTwoProps = ComponentPropsWithoutRef<typeof NavLink>;

export const ButtonTwo = ({ children, ...props }: ButtonTwoProps) => {
  return (
    <NavLink className={styles.button} {...props}>
      {children}
    </NavLink>
  );
};
