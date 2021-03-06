// @ts-check

import { terser } from 'rollup-plugin-terser';
import nodeResolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import tslint from 'rollup-plugin-tslint';
import typescript from 'rollup-plugin-typescript2';

const NODE_ENV = process.env.NODE_ENV;
const isProd = 'production' === NODE_ENV;
const isTest = 'test' === NODE_ENV;
const input = ['src/index.ts'];
const pluginFn = (iife = false) => [
  nodeResolve(),
  isProd && tslint({
    throwError: true,
    configuration: `tslint${isProd ? '.prod' : ''}.json`,
  }),
  typescript({
    tsconfig: './tsconfig.json',
    exclude: isProd ? ['src/(demo|test)/**/*'] : [],
    ...(iife ? { tsconfigOverride: { compilerOptions: { target: 'es5' } } } : {}),
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
const testBuild = [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      nodeResolve(),
      typescript({
        tsconfig: './tsconfig.json',
        include: ['src/*.ts'],
        exclude: ['src/(demo|test)/**/*.ts'],
      }),
    ],
  },
];

export default isTest ? testBuild : multiBuild;
