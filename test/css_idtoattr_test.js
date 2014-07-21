'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.css_idtoattr = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/output.css');
    var expected = grunt.file.read('test/expected/output.css');
    
    test.equal(actual, expected, 'Replaced all id selectors in source css files with attribute selectors');

    test.done();
  },
  custom_options: function(test) {
    test.expect(4);

    test.ok(grunt.file.exists('tmp/source_one.css'), 'source_one.css exits');
    test.ok(grunt.file.exists('tmp/source_two.css'), 'source_two.css exists');

    test.equal(grunt.file.read('tmp/source_one.css'),
               grunt.file.read('test/expected/source_one.css'), 'Replaced all id selectors in source_one.css with attribute selectors');

    test.equal(grunt.file.read('tmp/source_two.css'),
               grunt.file.read('test/expected/source_two.css'), 'Replaced all id selectors in source_one.css with attribute selectors');

    test.done();
  }
};
