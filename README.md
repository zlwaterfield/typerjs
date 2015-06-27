typerjs (v 0.0.3)
========================

Introduction
------------
Simple function that types out strings and arrays of strings for cool typing effects

First run
---------
```
npm install typerjs --save
```

Requirements
------------

 - `JQuery`

```html
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
```

Use
---

You'll have to host the library yourself, so:

 - Require
```javascript
var typerjs = require('typerjs');
```
  
 - Pull in with script (in html)

```html
<script src="your/path/to/typerjs.min.js"></script>
```


Full list of options supported
------------------------------

 - `data (string or array)`
 - `attribute (attribute by class or id to add to)`
 - `interval (time between each typed letter)`
 - `highlightColor`
 - `textHighlightColor`

Example
-------

```javascript
var type = new typerJs({
    data: "hello",
    attribute: ".message1",
    interval: 500
});
```
** Do to timing issues, currently the max sized string per array index supported it 20. (To be increased at a later time).
```javascript
var type = new typerJs({
    data: ["hello1","hello2","hello3"],
    attribute: ".message2",
    interval: 2000,
    highlightColor: "#444",
    textHighlightColor: "#fff"
});
```

Issues
------

Any issues, report them [here](https://github.com/zlwaterfield/typerjs/issues).