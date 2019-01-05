# gulp-pupa

[![github](https://badgen.net/badge//nju33,gulp-pupa/000?icon=github&list=1)](https://github.com/nju33/gulp-pupa)
[![npm:version](https://badgen.net/npm/v/gulp-pupa?icon=npm&label=)](https://www.npmjs.com/package/gulp-pupa)
[![typescript](https://badgen.net/badge/lang/typescript/0376c6?icon=npm)](https://www.typescriptlang.org/)
[![ci:status](https://badgen.net/circleci/github/nju33/gulp-pupa)](https://circleci.com/gh/nju33/gulp-pupa)
[![license](https://badgen.net/npm/license/gulp-pupa)](https://github.com/nju33/gulp-pupa/blob/master/LICENSE)
[![code style:prettier](https://badgen.net/badge//prettier/ff69b3?label=code%20style)](https://github.com/prettier/prettier)

gulp-pupa is a gulp plugin to use [pupa](https://github.com/sindresorhus/pupa).

## Usage

```js
const gulp = require('gulp');
const pupa = require('gulp-pupa');

() =>
  gulp
    .src('*')
    .pipe(pupa({foo: 123}))
    // `{foo: 123}` is just using as pupa's data (second arg).
    .pipe(gulp.dest('.'));
```
