# {{addCommas}}

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
