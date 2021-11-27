import React, { createElement, CSSProperties, FunctionComponent } from "react";

type IconSetItem = {
  properties: {
    name: string;
  };
  icon: { paths: string[]; attrs: Object[]; width?: number | string };
};

type IconSet = {
  icons: IconSetItem[];
};

const style: CSSProperties = {
  display: "inline-block",
  stroke: "currentColor",
  fill: "currentColor",
};

const IcoMoon: FunctionComponent<{
  iconSet: IconSet;
  icon: string;
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
  [name: string]: any;
}> = ({
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
}) => {
  if (!iconSet || !icon) return null;

  const currentIcon = iconSet.icons.find(
    (item) => item.properties.name === icon
  );

  if (!currentIcon) return null;

  if (native) {
    style.display = "flex";
    style.flexDirection = "row";
    style.flexWrap = "wrap";
  }

  props.style = {
    ...(removeInlineStyle ? {} : style),
    ...(size ? { width: size, height: size } : {}),
    ...(props.style || {}),
  };

  const { width = "1024" } = currentIcon.icon;

  props.viewBox = `0 0 ${width} 1024`;

  const childs = currentIcon.icon.paths.map((path, index) => {
    const pathProps = {
      d: path,
      key: icon + index,
      ...(!disableFill ? currentIcon.icon.attrs[index] : {}),
    };

    return PathComponent
      ? createElement(PathComponent, pathProps)
      : createElement("path", pathProps);
  });

  if (title && !native) {
    childs.push(createElement("title", { key: title }, title));
  }

  return SvgComponent
    ? createElement(SvgComponent, props, childs)
    : createElement("svg", props, childs);
};

export const iconList = (iconSet) => {
  if (iconSet && Array.isArray(iconSet.icons)) {
    return iconSet.icons.map((icon) => icon.properties.name);
  }

  return null;
};

export default IcoMoon;
