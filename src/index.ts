import { createElement } from "react";

const style: {
  display: string;
  stroke: string;
  fill: string;
  width?: string | number;
  height?: string | number;
} = {
  display: "inline-block",
  stroke: "currentColor",
  fill: "currentColor",
};

interface Icon {
  paths: string[];
  grid: number;
  tags: string[];
  defaultCode: number;
  attrs?: any[];
  width?: string;
}

interface Icons {
  icon: Icon;
  attrs?: any[];
  properties: object;
  setIdx: number;
  setId: number;
  iconIdx: number;
}

interface MetaData {
  name: string;
  importSize?: { width: number; height: number };
  iconsHash?: number;
}

interface IconSet {
  metadata: MetaData;
  height: number;
  prevSize?: number;
  icons: Icons[];
  IcoMoonType: string;
  colorThemes?: any[];
  preferences: object;
}

export interface IcoMoonProps {
  iconSet: IconSet;
  icon: string;
  size?: string | number;
  disableFill?: boolean;
  removeInlineStyle?: boolean;
  viewBox?: string;
  style?: React.CSSProperties;
}

const IcoMoon: React.FC<IcoMoonProps> = ({
  iconSet,
  icon,
  size,
  disableFill,
  removeInlineStyle,
  ...props
}): React.ReactSVGElement | null => {
  if (!iconSet || !icon) {
    console.warn('The "iconSet" and "icon" props are required.');
    return null;
  }

  const currentIcon = iconSet.icons.find(
    (icons) => icons.icon.tags[0] === icon
  );

  if (!currentIcon) {
    console.warn(`"${icon}" icon not found.`);
    return null;
  }

  if (size) {
    style.width = size;
    style.height = size;
  }

  props.style = {
    ...(removeInlineStyle ? {} : style),
    ...(props.style || {}),
  };

  const { width = "1024" } = currentIcon.icon;

  props.viewBox = `0 0 ${width} 1024`;

  const paths = currentIcon.icon.paths.map(<T>(path: T, index: number) =>
    createElement("path", {
      d: path,
      key: icon + index,
      ...(!disableFill ? currentIcon : {}),
    })
  );

  return createElement("svg", props, paths);
};

export default IcoMoon;

export const iconList = (iconSet: IconSet) => {
  if (iconSet && Array.isArray(iconSet.icons)) {
    return iconSet.icons.map((icon) => icon.icon.tags[0]);
  }

  return null;
};
