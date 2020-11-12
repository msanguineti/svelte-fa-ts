import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess'
import { browser, main, module, version, author } from './package.json'
import copy from 'rollup-plugin-copy'

const external = ['svelte/internal']
const input = 'src/index.ts'
const banner = `/* svelte-fa-ts version ${version} (C) ${new Date().getFullYear()} ${author}*/`

export default [
  {
    input,
    output: {
      file: browser,
      format: 'umd',
      name: 'SvelteFa',
      banner,
    },
    plugins: [
      svelte({
        dev: false,
        preprocess: sveltePreprocess(),
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),
      typescript({ sourceMap: false }),
      terser(),
    ],
  },
  {
    input,
    output: [
      {
        file: module,
        format: 'es',
        exports: 'auto',
        banner,
      },
      {
        file: main,
        format: 'cjs',
        exports: 'auto',
        banner,
      },
    ],
    external,
    plugins: [
      svelte({
        dev: false,
        preprocess: sveltePreprocess(),
      }),
      typescript({ sourceMap: false }),
      copy({
        targets: [{ src: 'src/index.d.ts', dest: 'lib' }],
      }),
    ],
  },
]
