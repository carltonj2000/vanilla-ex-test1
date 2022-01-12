import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const root = style({
  // background: vars.color.aqua,
  // color: vars.color.blue,
  padding: vars.space.medium,
});

export const background = styleVariants(vars.color, (background) => ({
  background,
}));

export const color = styleVariants(vars.color, (color) => ({
  color,
}));
