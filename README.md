# Clean Split [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/clean-split/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/clean-split)

Cleanly split a string by retaining the delimiter.

[![NPM Badge](https://nodei.co/npm/clean-split.png)](https://npmjs.com/package/clean-split)

## Install

```sh
npm install clean-split
```

## Usage

```js
const cleanSplit = require("clean-split");

cleanSplit("a-b-c", "-");
//=> ["a", "-", "b", "-", "c"]

cleanSplit("a-b-c", "-", { anchor: "before" });
//=> ["a-", "b-", "c"]

cleanSplit("a-b-c", "-", { anchor: "after" });
//=> ["a", "-b", "-c"]
```

## API

### cleanSplit(string, delimiter, options?)

#### string

Type: `string`

The string to split.

#### delimiter

Type: `string or regexp`

The delimiter to split the string by.

#### options

Type: `object`

##### anchor

Type: `string` (`none`, `before`, `after`, `left` or `right`)\
Default: `none`

Anchor the delimiter to different sides of the split.
