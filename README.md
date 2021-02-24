# Progress React Component

[![NPM](https://img.shields.io/npm/v/@idui/react-progress.svg)](https://www.npmjs.com/package/@idui/react-progress/)
[![Size](https://img.shields.io/bundlephobia/min/@idui/react-progress)](https://www.npmjs.com/package/@idui/react-progress)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![LICENSE](https://img.shields.io/github/license/id-ui/react-progress)](https://github.com/id-ui/react-progress/blob/main/LICENSE)

## Install

```bash
npm install --save @idui/react-progress
```

```bash
yarn add @idui/react-progress
```

### Circular Progress

- [Docs](https://id-ui.github.io/react-progress/?path=/docs/circularprogress--playground)
- [Playground](https://id-ui.github.io/react-progress/?path=/story/circularprogress--playground)
- you can configure custom icons for circular progress (install @idui/react-icon and configureIcons)
- "progressCircle", "longLinesProgressCircle" and "shortLinesProgressCircle" are available by default

```jsx
import React from 'react'
import { CircularProgress } from '@idui/react-progress'

function Example() {
  return <CircularProgress 
      name="longLinesProgressCircle" // default progressCircle
      color="orangered" // default #9552D4
      size="3.5rem"  // default 3rem
      duration={1000} // default 1500
  />
}
```

### Linear Progress

- [Docs](https://id-ui.github.io/react-progress/?path=/docs/linearprogress--playground)
- [Playground](https://id-ui.github.io/react-progress/?path=/story/linearprogress--playground)

```jsx
import React from 'react'
import { LinearProgress } from '@idui/react-progress'

function Example() {
  return <LinearProgress
      color="orangered" // default #9552D4
      duration={1000} // default 1500
      length="50rem" // default 100%
      orientation="vertical" // default "horizontal"
      size="1rem" // default 0.5rem
  />
}
```

## License

MIT © [kaprisa57@gmail.com](https://github.com/id-ui)