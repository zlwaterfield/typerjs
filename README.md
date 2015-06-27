typerjs (v 0.0.1)
========================

Introduction
------------
Simple function that types ourt strings and arrays of strings for cool typing effects

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
 - `interval (time between each typed letter)`
 - `attribute (attribute by class or id to add to)`

Example
-------

```javascript
var type = new typerJs({
    data: "hello",
    attribute: ".message1",
    interval: 500
});
```

```javascript
var type = new typerJs({
    data: ["hello1","hello2","hello3"],
    attribute: ".message2",
    interval: 2000
});
```

Issues
------

Any issues, report them [here](https://github.com/zlwaterfield/typerjs/issues).