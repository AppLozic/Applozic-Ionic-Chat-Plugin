# ES6 `Number.isNaN` polyfill

[![Build status](https://travis-ci.org/leonderijke/Number.isNaN.svg?branch=master)](https://travis-ci.org/leonderijke/Number.isNaN)
[![Dependency Status](https://david-dm.org/leonderijke/Number.isNaN.svg?theme=shields.io)](https://david-dm.org/leonderijke/Number.isNaN)
[![devDependency Status](https://david-dm.org/leonderijke/Number.isNaN/dev-status.svg?theme=shields.io)](https://david-dm.org/leonderijke/Number.isNaN#info=devDependencies)
[![browser support](https://ci.testling.com/leonderijke/Number.isNaN.png)
](https://ci.testling.com/leonderijke/Number.isNaN)

A polyfill for [the `Number.isNaN` method in ECMAScript 6](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isnan).

Other polyfills for `Number.isNaN` are available:

* <https://github.com/ljharb/is-nan> by [Jordan Harband](https://twitter.com/ljharb)
* <https://github.com/paulmillr/es6-shim/blob/0.10.1/es6-shim.js#L726-L733> by [Paul Miller](http://paulmillr.com/)

## Installation

Via [bower](http://bower.io/):

```bash
bower install Number.isNaN
```

Then, in a browser:

```html
<script src="bower_components/Number.isNaN/isnan.js"></script>
```

Via [npm](http://npmjs.org/):

```bash
npm install number.isnan
```

Then, in [Node.js](http://nodejs.org/):

```js
require('number.isnan');

// On Windows and on Mac systems with default settings, case doesn’t matter,
// which allows you to do this instead:
require('Number.isNaN');
```

## Relevant links

Find more information about `Number.isNaN` here:

* https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isnan
* http://wiki.ecmascript.org/doku.php?id=harmony:number.isnan
* http://ariya.ofilabs.com/2014/05/the-curious-case-of-javascript-nan.html
* http://www.2ality.com/2012/02/nan-infinity.html

## License

MIT License
