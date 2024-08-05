# unplugin-strip

[![NPM version](https://img.shields.io/npm/v/unplugin-strip?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-strip)

🍣 A universal bundler plugin to remove `debugger` statements and functions like `assert.equal` and `console.log` from your code.

## Install

```bash
npm i unplugin-strip
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginStrip from 'unplugin-strip/vite'

export default defineConfig({
  plugins: [
    UnpluginStrip({
      /* options */
    }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginStrip from 'unplugin-strip/rollup'

export default {
  plugins: [
    UnpluginStrip({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-strip/webpack')({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    [
      'unplugin-strip/nuxt',
      {
        /* options */
      },
    ],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-strip/webpack')({
        /* options */
      }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import UnpluginStrip from 'unplugin-strip/esbuild'

build({
  plugins: [UnpluginStrip()],
})
```

<br></details>

## Usage

### Options

For all options please refer to [docs](https://github.com/rollup/plugins/tree/master/packages/strip#options).

This plugin accepts all [@rollup/plugin-strip](https://github.com/rollup/plugins/tree/master/packages/strip#options) options.
