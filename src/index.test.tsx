import * as React from "react";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import IcoMoon, { iconList } from "../dist/index";

Enzyme.configure({ adapter: new Adapter() });

describe("IcoMoon Component Test", () => {
  const iconSet = getIconSet();
  it("Check define", () => {
    expect(IcoMoon).toBeDefined();
  });

  it("Check render", () => {
    const Icon = Enzyme.render(
      <IcoMoon iconSet={iconSet} icon="chat" size={22} />
    );
    expect(Icon).toBeDefined();
  });

  it("Check size props", () => {
    const Icon = Enzyme.render(
      <IcoMoon iconSet={iconSet} icon="chat" size={22} />
    );
    expect(Icon.prop("style").width).toEqual("22px");
    expect(Icon.prop("style").height).toEqual("22px");
  });

  it("Check custom attribute", () => {
    const Icon = Enzyme.render(
      <IcoMoon iconSet={iconSet} icon="chat" size={22} data-name="chat" />
    );
    expect(Icon.prop("data-name")).toEqual("chat");
  });

  it("Check title attribute", () => {
    const Icon = Enzyme.render(
      <IcoMoon iconSet={iconSet} icon="chat" size={22} title="Chat" />
    );
    expect(Icon.find("title").text()).toEqual("Chat");
  });
});

describe("iconList Method Tests", () => {
  const iconSet = getIconSet();

  it("Check define", () => {
    expect(iconList).toBeDefined();
  });

  it("Check array of iconSet", () => {
    const expected = ["chat"];
    expect(iconList(iconSet)).toEqual(expect.arrayContaining(expected));
  });
});

function getIconSet() {
  return {
    icons: [
      {
        icon: {
          paths: [
            "M1140.864 448.736c-8.448-2.624-17.408 1.984-20.096 10.4-2.656 8.416 1.984 17.408 10.4 20.096 125.056 39.84 180.832 99.264 180.832 192.768 0 83.168-75.872 147.712-121.056 178.816-4.352 3.008-6.944 7.904-6.944 13.184v122.336c-23.36-8.704-64.096-28.48-100.032-68.96-3.744-4.192-9.44-6.112-14.976-5.088-9.12 1.76-18.432 4.256-27.872 6.784-16.32 4.384-33.152 8.928-49.12 8.928-82.176 0-139.712-17.664-198.528-60.896-7.168-5.248-17.12-3.68-22.368 3.424-5.248 7.136-3.712 17.12 3.392 22.368 64.864 47.68 127.872 67.104 217.504 67.104 20.192 0 39.136-5.088 57.44-10.016 5.696-1.568 11.36-3.104 16.96-4.416 59.808 63.168 127.456 77.536 130.4 78.112 1.056 0.224 2.112 0.32 3.2 0.32 3.648 0 7.264-1.248 10.112-3.616 3.744-3.040 5.888-7.584 5.888-12.384v-135.648c82.624-58.912 128-129.824 128-200.352 0-108.192-64.544-179.136-203.136-223.264zM1056 432c0-246.272-224.576-432-522.336-432-299.264 0-533.664 189.792-533.664 432.064 0 145.248 102.752 249.312 192 312.288v212.352c0 5.44 2.752 10.464 7.296 13.44 2.656 1.696 5.664 2.56 8.704 2.56 2.208 0 4.448-0.48 6.56-1.408 4.672-2.080 113.888-51.712 207.328-153.888 40.48 7.52 86.272 14.752 127.808 14.752 302.816 0 506.304-160.832 506.304-400.16zM549.664 800.16c-41.92 0-89.568-8.032-130.656-15.872-5.536-0.992-11.232 0.896-14.976 5.088-65.6 73.984-142.688 120.992-180.032 141.248l0-194.624c0-5.28-2.592-10.176-6.944-13.184-84.416-58.080-185.056-155.616-185.056-290.752 0-224.352 220.352-400.064 501.664-400.064 279.552 0 490.336 171.968 490.336 400 0 220.224-190.624 368.16-474.336 368.16zM528 368c-35.296 0-64 28.704-64 64s28.704 64 64 64 64-28.704 64-64-28.704-64-64-64zM528 464c-17.632 0-32-14.336-32-32s14.368-32 32-32 32 14.336 32 32-14.368 32-32 32zM752 368c-35.296 0-64 28.704-64 64s28.704 64 64 64 64-28.704 64-64-28.704-64-64-64zM752 464c-17.632 0-32-14.336-32-32s14.368-32 32-32 32 14.336 32 32-14.368 32-32 32zM304 371.040c-35.296 0-64 28.704-64 64s28.704 64 64 64 64-28.704 64-64-28.704-64-64-64zM304 467.040c-17.632 0-32-14.336-32-32s14.368-32 32-32 32 14.336 32 32-14.368 32-32 32z",
          ],
          width: 1344,
          attrs: [],
          isMulticolor: false,
          isMulticolor2: false,
          tags: ["chat", "bubbles", "talk", "message", "conversation"],
          defaultCode: 57417,
          grid: 32,
        },
        attrs: [],
        properties: {
          id: 74,
          order: 1008,
          prevSize: 32,
          code: 57417,
          name: "chat",
        },
        setIdx: 0,
        setId: 5,
        iconIdx: 73,
      },
    ],
  };
}
