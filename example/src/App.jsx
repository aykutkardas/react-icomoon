import "./App.css";

import Highlight from "react-highlight";

import Icon from "./Icon";

const App = () => (
  <div className="App">
    <img src="/banner.png" alt="" />

    <div className="Demo">
      <div>
        <a
          href="https://github.com/aykutkardas/react-icomoon"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        -
        <a
          href="https://codesandbox.io/s/react-icomoon-demo-13pce?file=/src/index.js"
          target="_blank"
          rel="noreferrer"
        >
          Interactive Demo
        </a>
      </div>
    </div>

    <div className="Demo">
      <h4>Install</h4>
      <p>With NPM</p>
      <Highlight className="bash">{`npm install react-icomoon`}</Highlight>
      <p>With Yarn</p>
      <Highlight className="bash">{`yarn add react-icomoon`}</Highlight>
    </div>

    <div className="Demo">
      <h4>Create Icon component</h4>
      <p>
        To get the selection.json file, go to icomoon and select the icons you
        want and download them as fonts. Inside the zip there will be a
        selection.json file.
      </p>
      <a href="https://icomoon.io/app/" target="_blank" rel="noreferrer">
        Icomoon
      </a>
      <Highlight className="react">
        {`
import IcoMoon from "react-icomoon";
const iconSet = require("./selection.json");

const Icon = (props) => (
  <IcoMoon iconSet={iconSet} {...props} />
);

export default Icon;
        `}
      </Highlight>

      <h5>with TypeScript</h5>
      <Highlight className="react">
        {`
import IcoMoon, { IconComponent } from "react-icomoon";
const iconSet = require("./selection.json");

const Icon: typeof IconComponent = (props) => (
  <IcoMoon iconSet={iconSet} {...props} />
);

export default Icon;
        `}
      </Highlight>
    </div>

    <div className="Demo">
      <h4>Basic</h4>
      <p>You can make basic customizations using the props provided.</p>
      <Highlight className="html">
        {`
<Icon icon="chat" size={30} color="#5096ec" />
<Icon icon="heart" size="50px" color="#5096ec" />
        `}
      </Highlight>

      <div className="IconsWrapper">
        <Icon icon="chat" size={30} color="#5096ec" />
        <Icon icon="heart" size="50px" color="#5096ec" />
      </div>
    </div>

    <div className="Demo">
      <h4>With Title</h4>
      <p>
        Using titles with SVG works a little differently. React-Icomoon provides
        a support for this.
      </p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title"
        target="_blank"
        rel="noreferrer"
      >
        {`<title> — the SVG accessible name element`}
      </a>
      <Highlight className="html">
        {`
<Icon icon="chat" title="Chat" size={30} color="#5096ec" />
        `}
      </Highlight>

      <div className="IconsWrapper">
        <Icon icon="chat" title="Chat" size={30} color="#5096ec" />
      </div>
    </div>

    <div className="Demo">
      <h4>With ClassName</h4>
      <p>You can write your own styles for more customization without props.</p>
      <Highlight className="html">
        {`
<Icon icon="chat" className="edit-icon" />
        `}
      </Highlight>

      <Highlight className="css">
        {`
.edit-icon {
  width: 30px;
  height: 30px;
  color: #5096ec;
}

.edit-icon:hover {
  color: #ffffff;
}
        `}
      </Highlight>

      <div className="IconsWrapper">
        <Icon icon="chat" className="edit-icon" />
      </div>
    </div>
  </div>
);

export default App;
