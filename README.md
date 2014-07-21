# grunt-css-idtoattr

> A Grunt Plugin to convert all ID-Selectors to in Attribute-Selectors.

Ever since the CSS became more complex, people argued wether to use ID-Selectors in CSS. Some people [defend](http://www.zeldman.com/2012/11/21/in-defense-of-descendant-selectors-and-id-elements/) the use of ID-Selectors while [others](http://csswizardry.com/2011/09/when-using-ids-can-be-a-pain-in-the-class/) don't. One possible solution to deal with ID-Selectors is to use [attribute-selectors](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/) instead. While it is a hack these selectors have the same specificity as a class. Maybe this grunt task helps to use IDs in CSS but not at the cost of specificity. 

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-idtoattr --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-idtoattr');
```

## The "cssidtoattr" task

### Overview
In your project's Gruntfile, add a section named `cssidtoattr` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cssidtoattr: {
    files: {
      'dest/output.css': ['src/css/source_one.css', 'src/css/source_two.css']
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

21-7-2014: Create repo
