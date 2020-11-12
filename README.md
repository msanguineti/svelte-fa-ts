# svelte-fa-ts

[![npm][badge-version]][npm]
[![bundle size][badge-size]][bundlephobia]
[![npm downloads][badge-downloads]][npm]
[![license][badge-license]][license]

[![github][badge-issues]][github]
![build][badge-build]
![ci][badge-ci]
![dependabot][badge-dependabot]

Tiny [FontAwesome 5][fontawesome] component for [Svelte][svelte] with [TypeScript][ts] types.

- FontAwesome svg icons
- Tree-shakable, only import used icons
- No CSS file required
- FontAwesome duotone icons
- TypeScript types

## svelte-fa-ts *Vs.* svelte-fa

**This library is derived from [svelte-fa][npm]** and can be used as a drop-in replacement for it. I did try to fix the original library but it was more work than to actually start anew (old [rollupjs][rollup] plugins, old deps, babel...)

So, I moved the code to TypeScript, dropped everything else (all the build tools), wrote a `.d.ts` file and created this package.

Now the library works flawlessly when using `<script lang="ts">`.

I am, of course, in debt to [@Cweili](https://github.com/Cweili) and its work on the original library. 🎉 👏

## Installation

```shell
npm install svelte-fa-ts
```

**Notice:** For [Sapper][sapper] user, you have to install the component as a devDependency.

```shell
npm install svelte-fa-ts -D
```

## Usage

```html
<!-- <script lang="ts"> if using TypeScript -->
<script>
  import Fa from 'svelte-fa-ts'
  import { faFlag } from '@fortawesome/free-solid-svg-icons'
</script>

<Fa icon="{faFlag}" />
```

## Properties

```html
<Fa
  icon="{faFlag}"
  fw
  flip="horizontal"
  pull="left"
  rotate="{90}"
  size="2x"
  color="#ff0000"
/>
```

- `fw`: fixed width
- `flip`: `string` values `horizontal`, `vertical`, `both`
- `pull`: `string` values `left`, `right`
- `rotate`: `number or string` values `90`, `180`, `270`, `30`, `-30` ...
- `size`: `string` values `xs`, `sm`, `lg` or `2x`, `3x`, `4x` ...
- `color`: icon color, default `currentColor`


### Element properties

```html
<Fa
  id="css_id"
  class="css_class"
  style="{color: #000;}"
/>
```

## Duotone Icons

> a font-awesome subscription is needed to download the `pro` version of the icons!

```html
<script>
  import Fa from 'svelte-fa-ts'
  import { faFlag } from '@fortawesome/pro-duotone-svg-icons'
</script>

<Fa
  icon="{faFlag}"
  primaryColor="red"
  secondaryColor="#000000"
  primaryOpacity="{0.8}"
  secondaryOpacity="{0.6}"
  swapOpacity
/>
```


### Duotone Icons Theme

```html
<script>
  import Fa from 'svelte-fa-ts'
  import { faFlag } from '@fortawesome/pro-duotone-svg-icons'

  const theme = {
    primaryColor: 'red',
    secondaryColor: '#000000',
    primaryOpacity: 0.8,
    secondaryOpacity: 0.6,
  }
</script>

<Fa icon="{faFlag}" {...theme} />
```

[fontawesome]: https://fontawesome.com/
[svelte]: https://svelte.dev/
[sapper]: https://sapper.svelte.dev/
[rollup]: http://rollupjs.org
[ts]: https://www.typescriptlang.org/

[badge-version]: https://badgen.net/npm/v/svelte-fa-ts
[badge-downloads]: https://badgen.net/npm/dt/svelte-fa-ts
[npm]: https://www.npmjs.com/package/svelte-fa-ts
[badge-size]: https://badgen.net/bundlephobia/minzip/svelte-fa-ts

[bundlephobia]: https://bundlephobia.com/result?p=svelte-fa-ts
[badge-license]: https://badgen.net/npm/l/svelte-fa-ts
[license]: https://github.com/msanguineti/svelte-fa-ts/blob/main/LICENSE
[badge-issues]: https://badgen.net/github/issues/msanguineti/svelte-fa-ts
[github]: https://github.com/msanguineti/svelte-fa-ts
[badge-build]: https://badgen.net/github/status/msanguineti/svelte-fa-ts
[badge-ci]: https://badgen.net/github/status/msanguineti/svelte-fa-ts/main/ci
[badge-dependabot]: https://badgen.net/github/dependabot/msanguineti/svelte-fa-ts
