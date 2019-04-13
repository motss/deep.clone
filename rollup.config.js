// @ts-check

import { terser } from 'rollup-plugin-terser';
import nodeResolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import tslint from 'rollup-plugin-tslint';
import typescript from 'rollup-plugin-typescript2';

const isProd = !process.env.ROLLUP_WATCH;
const input = ['src/index.ts'];
const pluginFn = (isIife = false) => [
  nodeResolve(),
  isProd && tslint({
    throwError: true,
    configuration: `tslint${isProd ? '.prod' : ''}.json`,
  }),
  typescript({
    tsconfig: `./tsconfig${isIife ? '.iife' : ''}.json`,
    exclude: isProd ? ['src/(demo|test)/**/*'] : [],
  }),
  isProd && terser(),
  isProd && filesize({ showBrotliSize: true }),
];

const multiBuild = [
  {
    file: 'dist/index.mjs',
    format: 'esm',
    sourcemap: true,
    exports: 'named',
  },
  {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
  },
  {
    file: 'dist/deep.clone.js',
    format: 'esm',
    sourcemap: true,
    // exports: 'named',
  },
  {
    file: 'dist/deep.clone.iife.js',
    name: 'DeepClone',
    format: 'iife',
    sourcemap: true,
    exports: 'named',
  },
].map(n => ({ input, output: n, plugins: pluginFn('iife' === n.format) }));

export default multiBuild;
