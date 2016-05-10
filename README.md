![alt text](http://zlwaterfield.com/images/projects/typerjs-small.png "Logo") (v 1.0.1)
=======================================================================================

Introduction
------------
Typing is hard, let Typer.js do it for you.

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
 - `type_interval (time between each typed letter)`
 - `remove_interval (time between delete/removable of a letter)`
 - `highlightColor`
 - `textHighlightColor`
 - `highlight (boolean [default - false])(option to remove string by highlighting/deleting all or backspacing)`
 
### highlight
![alt text](http://zlwaterfield.com/images/github/highlight-new.gif "highlight")

### backspace
![alt text](http://zlwaterfield.com/images/github/backspace-new.gif "backspace")
 

Example
-------

```javascript
var type = new typerjs({
    data: "hello",
    attribute: ".message1",
    interval: 500
});
```

```javascript
var type = new typerjs({
    data: ["Santa Claus", "Beer", "Happy Day"],
    attribute: ".message2",
    type_interval: 200,
    remove_interval: 20,
    highlightColor: "#444",
    textHighlightColor: "#fff",
    highlight:true
});
```

Issues
------

Any issues, report them [here](https://github.com/zlwaterfield/typerjs/issues).
