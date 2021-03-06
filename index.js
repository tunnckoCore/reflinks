/*!
 * reflinks <https://github.com/jonschlinkert/reflinks>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var utils = require('./lib/utils');

/**
 * Generate a list of reflinks for a `glob` of files,
 * relative to the specified `dest` file.
 *
 * @param  {String|Array} `glob` Glob patterns to pass to [matched][].
 * @param  {String} `dest`
 * @param  {String} `opts` Options to pass to [matched][].
 * @return {String} List of reflinks.
 */

module.exports = function reflinks(names, options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  options = options || {};
  var time = new utils.Time();
  var log = utils.log;
  var name = options.spinnerName || 'reflinks';
  var start = options.spinnerStart || 'creating reference links from npm data';
  var stop = options.spinnerStop || 'created reference links from npm data';

  // start spinner
  log.spinner.startTimer(time, name, start, options);

  utils.pkgs(names, options, function(err, arr) {
    if (err) return cb(err);

    // stop spinner
    log.spinner.stopTimer(time, name, stop, options);
    cb(null, linkify(arr, options));
  });
}

/**
 * Create a formatted reflink
 */

function linkify(arr, options) {
  return arr.reduce(function(acc, pkg) {
    pkg.homepage = utils.homepage(pkg);

    var link = typeof options.template !== 'function'
      ? utils.reference(pkg.name, pkg.homepage)
      : options.template(pkg, options);

    if (link) {
      acc.push(link.replace(/#readme$/, ''));
    }
    return acc;
  }, []);
}
