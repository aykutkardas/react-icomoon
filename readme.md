# React-IcoMoon

[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

![React-IcoMoon Logo](https://github.com/aykutkardas/React-IcoMoon/blob/v1.0.1/logo.png?raw=true "React IcoMoon")

## [Demo](https://codesandbox.io/s/github/aykutkardas/react-icomoon-playground)

#### Install

```
npm install react-icomoon
```

Use +498 free icon.
Visit the IcoMoon site to see the icon list.

https://icomoon.io/app/

#### Usage

```js
import IcoMoon from "react-icomoon";
```

```js
<IcoMoon icon="pencil" />
```

```js
<IcoMoon icon={value ? "play" : "pause"} />
```

## Custom IconSet

You can use the icons you selected on IcoMoon by downloading the **selection.json** file.

https://icomoon.io/app/

### Declare
```js
// icon.js
import React from "react";
import IcoMoon from "react-icomoon";
const iconSet = require("./selection.json");

const Icon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;
```
### Use
```js
import Icon from "./icon";

<Icon icon="focus" />
```