import { createRequire } from "node:module";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import iconSet from "./selection.json";

// Test the built CommonJS output, exactly as consumers load it.
const require = createRequire(import.meta.url);
const current = require("../dist/index.js");
// Last published release, used as the reference for backward compatibility.
const published = require("react-icomoon-2.6.1");

const render = (lib: any, props: Record<string, unknown>) =>
  renderToStaticMarkup(createElement(lib.default, props));

const Svg = (props: any) => createElement("custom-svg", props);
const Path = (props: any) => createElement("custom-path", props);

const cases: Record<string, Record<string, unknown>> = {
  "basic": { iconSet, icon: "chat" },
  "number size": { iconSet, icon: "chat", size: 22 },
  "string size": { iconSet, icon: "chat", size: "1em" },
  "color and className": { iconSet, icon: "chat", color: "red", className: "icon" },
  "style override": { iconSet, icon: "chat", size: 10, style: { fill: "blue", width: 5 } },
  "title": { iconSet, icon: "chat", title: "Chat" },
  "multi path with attrs": { iconSet, icon: "multicolor" },
  "disableFill": { iconSet, icon: "multicolor", disableFill: true },
  "removeInlineStyle": { iconSet, icon: "chat", size: 20, removeInlineStyle: true },
  "native": { iconSet, icon: "chat", native: true, title: "Hidden" },
  "custom components": { iconSet, icon: "multicolor", SvgComponent: Svg, PathComponent: Path },
  "missing width": { iconSet, icon: "no-width" },
  "unknown icon": { iconSet, icon: "does-not-exist" },
  "missing icon": { iconSet },
  "missing iconSet": { icon: "chat" },
};

describe("backward compatibility with 2.6.1", () => {
  for (const [name, props] of Object.entries(cases)) {
    it(`renders identical markup: ${name}`, () => {
      expect(render(current, props)).toBe(render(published, props));
    });
  }

  it("iconList returns identical results", () => {
    for (const input of [iconSet, null, undefined, {}, { icons: "x" }]) {
      expect(current.iconList(input)).toEqual(published.iconList(input));
    }
  });

  it("exposes the same exports", () => {
    expect(Object.keys(current).sort()).toEqual(Object.keys(published).sort());
  });
});

describe("IcoMoon", () => {
  it("applies size and default style", () => {
    const html = render(current, { iconSet, icon: "chat", size: 22 });
    expect(html).toContain('viewBox="0 0 1344 1024"');
    expect(html).toContain("width:22px");
    expect(html).toContain("height:22px");
    expect(html).toContain("fill:currentColor");
  });

  it("renders a title only when provided and not native", () => {
    expect(render(current, { iconSet, icon: "chat", title: "Chat" })).toContain("<title>Chat</title>");
    expect(render(current, { iconSet, icon: "chat" })).not.toContain("<title>");
    expect(render(current, { iconSet, icon: "chat", native: true, title: "Chat" })).not.toContain("<title>");
  });

  it("applies path attrs unless disableFill is set", () => {
    expect(render(current, { iconSet, icon: "multicolor" })).toContain('fill="#f00"');
    expect(render(current, { iconSet, icon: "multicolor", disableFill: true })).not.toContain('fill="#f00"');
  });

  it("falls back to a 1024 wide viewBox", () => {
    expect(render(current, { iconSet, icon: "no-width" })).toContain('viewBox="0 0 1024 1024"');
  });

  it("renders nothing for unknown icons", () => {
    expect(render(current, { iconSet, icon: "does-not-exist" })).toBe("");
  });
});

describe("iconList", () => {
  it("lists icon names", () => {
    expect(current.iconList(iconSet)).toEqual(["chat", "multicolor", "no-width"]);
  });

  it("returns null for invalid input", () => {
    expect(current.iconList(null)).toBeNull();
    expect(current.iconList({})).toBeNull();
  });
});
