/*
 * grunt-css-idtoattr
 * https://github.com/closingtag/grunt-css-idtoattr
 *
 * Copyright (c) 2014 Robert Weber
 * Licensed under the MIT license.
 */

'use strict';

var rework = require('rework');
var rework_plugin = require('rework-idtoattr');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('cssidtoattr', 'The best Grunt plugin ever.', function() {

    // Iterate over all specified file groups.

    this.files.forEach(function(f) {

      // Concat specified files.
      var src = f.src.filter(function(filepath) {

        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }

      }).map(function(filepath) {

        return rework(grunt.file.read(filepath), 'utf8').use(rework_plugin).toString();

      }).join('\n\n');

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
