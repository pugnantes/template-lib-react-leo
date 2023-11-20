import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import cssImport from "postcss-import";
import cssUrl from "postcss-url";
import external from "rollup-plugin-peer-deps-external";
import css from "rollup-plugin-postcss";
import copy from 'rollup-plugin-copy';
import scss from 'rollup-plugin-scss';
import svgSprite from 'rollup-plugin-svg-sprite-deterministic';
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel';

import pkg from "./package.json" assert { type: "json" };

export default [
  {
    /* input must be equal to entry point of the library */
    input: pkg.source,
    /* generate a compatible output for both esm and commonjs environments */
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
        strict: false
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
        strict: false
      },
    ],
    /* processing */
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      /* generate automatically the list of peer dependencies */
      external(),

      /* handle css bundling and minification */
      css({
        extract: pkg.style.slice(pkg.style.indexOf("/") + 1),
        minimize: true,
        to: pkg.style,
        plugins: [
          /* resolve and inline css @import statements */
          cssImport(),
          /* resolve url("...") and copy corresponding assets in dist folder */
          cssUrl({
            url: "copy",
            assetsPath: "../assets",
            useHash: true
          })
        ]
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      nodeResolve(),
      /* handle images and svgs imports in ts */
      image({ dom: false }),
      /* handle import of json file in ts */
      json({ namedExports: true }),
      /* typescript transpilation */
      typescript({ tsconfig: "./tsconfig.json" }),
      /* js minification and sourcemaps generation */
      terser({
        compress: { drop_console: true },
        format: { comments: false },
        toplevel: true,
        sourceMap: true
      })
    ],
    external: ['react', 'react-dom']
  },
];
