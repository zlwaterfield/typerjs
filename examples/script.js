var TyperJs = require('../src/typerjs');

var type = new TyperJs({
    data: ["Santa Claus", "Beer", "Happy Day"],
    attribute: ".message",
    type_interval: 200,
    remove_interval: 20,
    highlightColor: "red",
    textHighlightColor: "blue",
    highlight: true
});