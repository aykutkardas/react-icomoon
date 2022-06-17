import { createElement, SVGProps, JSXElementConstructor } from "react";
import { getComputedSvgData, getIconList, IconSet } from "compute-svg-data";

export interface IconProps extends SVGProps<SVGElement> {
  icon: string;
  size?: string | number;
  title?: string;
  disableFill?: boolean;
  removeInlineStyle?: boolean;
  native?: boolean;
  SvgComponent?: JSXElementConstructor<any>;
  PathComponent?: JSXElementConstructor<any>;
}

interface IcoMoonProps extends IconProps {
  iconSet: IconSet;
}

const IcoMoon = ({
  iconSet,
  icon,
  size,
  title,
  disableFill,
  removeInlineStyle,
  native,
  SvgComponent,
  PathComponent,
  ...props
}: IcoMoonProps) => {
  const iconData = getComputedSvgData(iconSet, icon, {
    size,
    title,
    disableFill,
    removeInlineStyle,
    native,
    ...props,
  });

  if (!iconData) return null;

  const children = iconData.paths.map((pathData) => {
    return createElement(PathComponent || "path", pathData);
  });

  if (title && !native) {
    children.push(createElement("title", { key: title }, title));
  }

  const { viewBox, style } = iconData;

  return createElement(
    SvgComponent || "svg",
    { ...props, viewBox, style },
    children
  );
};

export const iconList = getIconList;

export default IcoMoon;
