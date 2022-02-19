import {
  createElement,
  CSSProperties,
  SVGProps,
  ReactElement,
  JSXElementConstructor,
} from "react";

type IconSetItem = {
  properties: {
    name: string;
  };
  icon: {
    paths: string[];
    attrs: Object[];
    width?: number | string;
  };
};

type IconSet = {
  icons: IconSetItem[];
};

interface IcoMoonProps extends SVGProps<SVGElement> {
  iconSet: IconSet;
  icon: string;
  size?: string | number;
  title?: string;
  disableFill?: boolean;
  removeInlineStyle?: boolean;
  native?: boolean;
  SvgComponent?: JSXElementConstructor<any>;
  PathComponent?: JSXElementConstructor<any>;
}

const style: CSSProperties = {
  display: "inline-block",
  stroke: "currentColor",
  fill: "currentColor",
};

type IcoMoonType = (props: IcoMoonProps) => ReactElement;

const IcoMoon: IcoMoonType = ({
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

  const children = currentIcon.icon.paths.map((path, index) => {
    const pathProps = {
      d: path,
      key: icon + index,
      ...(!disableFill ? currentIcon.icon.attrs[index] : {}),
    };

    return createElement(PathComponent || "path", pathProps);
  });

  if (title && !native) {
    children.push(createElement("title", { key: title }, title));
  }

  return createElement(SvgComponent || "svg", props, children);
};

export const iconList = (iconSet) => {
  if (!iconSet || !Array.isArray(iconSet.icons)) return null;

  return iconSet.icons.map((icon) => icon.properties.name);
};

export default IcoMoon;
