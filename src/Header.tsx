import { ReactNode } from "react";

import * as styles from "./Header.css";
import { sprinkles } from "./theme.css";

interface HeaderProps {
  children: ReactNode;
  // background: keyof typeof styles.background;
  // color: keyof typeof styles.color;
}

function Header({ children }: HeaderProps) {
  // function Header({ children, background, color }: HeaderProps) {
  return (
    // <div
    //   className={[
    //     styles.root,
    //     styles.background[background],
    //     styles.color[color],
    //   ].join(" ")}
    // >
    <div
      className={sprinkles({
        padding: { mobile: "small", tablet: "medium", desktop: "large" },
        background: { lightMode: "pink", darkMode: "blue" },
        color: { lightMode: "blue", darkMode: "pink" },
      })}
    >
      <h1>{children}</h1>
    </div>
  );
}

export default Header;
