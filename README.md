# {{addCommas}} [![Build Status](http://img.shields.io/travis/makotot/handlebars-helper-add-commas/master.svg?style=flat)](https://travis-ci.org/makotot/handlebars-helper-add-commas)

> Handlebars helper for adding commas to a number.

## Install

```sh
$ npm install handlebars-helper-add-commas --save-dev
```

## Register

In the Gruntfile:
```js
grunt.initConfig({
  assemble: {
    options: {
      ...,
      helpers: ['handlebars-helper-add-commas']
    },
    ...
  },
  ...
});
```

## Usage

```hbs
{{addCommas 1000}}
```

## License

MIT
