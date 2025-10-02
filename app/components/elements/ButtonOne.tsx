import type { ComponentPropsWithoutRef } from "react";
import styles from "./ButtonOne.module.css";
import { NavLink } from "react-router";

type ButtonOneProps = ComponentPropsWithoutRef<typeof NavLink>;

export const ButtonOne = ({ children, ...props }: ButtonOneProps) => {
  return (
    <NavLink className={styles.button} {...props}>
      {children}
    </NavLink>
  );
};
