[![NPM](https://img.shields.io/npm/v/use-media-session.svg)](https://www.npmjs.com/package/use-media-session)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/use-media-session)](https://bundlephobia.com/result?p=use-media-session)

# [use-media-session](https://martynaskadisa.github.io/use-media-session/)

> Hooks for interacting with Media Session API

[Demo](https://martynaskadisa.github.io/use-media-session/)

## Install

```bash
npm install --save use-media-session
```

or

```bash
yarn add use-media-session
```

## Usage

```tsx
import React from 'react';
import { useMediaMeta } from 'use-media-session';

const Example = () => {
  useMediaMeta({
    title: 'A title for your media',
  });
};
```

## License

MIT © [martynaskadisa](https://github.com/martynaskadisa)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
