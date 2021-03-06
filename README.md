# reflinks [![NPM version](https://img.shields.io/npm/v/reflinks.svg?style=flat)](https://www.npmjs.com/package/reflinks) [![NPM downloads](https://img.shields.io/npm/dm/reflinks.svg?style=flat)](https://npmjs.org/package/reflinks) [![Build Status](https://img.shields.io/travis/jonschlinkert/reflinks.svg?style=flat)](https://travis-ci.org/jonschlinkert/reflinks)

Generate (relative) reference links for a glob of markdown files, allowing you to more easily create references from one file to another.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install reflinks --save
```

**HEADS UP!**

The API was completely changed in v0.2. The main export is now an async function that expects a callback, and instead of globbing local files, reflinks are created from npm package names.

## Usage

```js
var reflinks = require('reflinks');

reflinks(['base', 'verb', 'generate'], function(err, links) {
  if (err) throw err;
  console.log(links);
  // results in:
  // [ '[generate]: https://github.com/generate/generate',
  //   '[verb]: https://github.com/verbose/verb',
  //   '[base]: https://github.com/node-base/base' ]
});
```

By default results are cached for 7 days. See [pkg-cache](https://github.com/jonschlinkert/pkg-cache) for more details and API documentation related to caching packages.

## Related projects

You might also be interested in these projects:

* [markdown-utils](https://www.npmjs.com/package/markdown-utils): Micro-utils for creating markdown snippets. | [homepage](https://github.com/jonschlinkert/markdown-utils)
* [remarkable](https://www.npmjs.com/package/remarkable): Markdown parser, done right. 100% Commonmark support, extensions, syntax plugins, high speed - all in… [more](https://www.npmjs.com/package/remarkable) | [homepage](https://github.com/jonschlinkert/remarkable)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/reflinks/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/reflinks/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on April 27, 2016._