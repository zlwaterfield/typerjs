var TyperJs = (function () {

    function TyperJs(opts) {
        var data = opts.data;
        var attr = opts.attribute;
        var interval = opts.interval;
        var string_index = -1;
        var array_index = 0;
        var boolhighlight = opts.highlight;

        if(interval < 250) {
            interval = 250;
        }

        var colors = colorObject(opts);

        if(typeof data === "string") {
            showText(data, attr, string_index, interval);
        } else if(typeof(data) === "object") {
            showArray(data, attr, string_index, array_index, interval, colors, boolhighlight);
        }
    }

    var showText = function (data, attr, index, interval) {
        if (index < data.length) {
            $(attr).append(data[index]);
            setTimeout(function () { showText(data, attr, index+1, interval); }, interval);
        }
    };

    var showArray = function (data, attr, string_index, array_index, interval, colors, boolhighlight) {
        //TODO : add randomization of array index
        //array_index = Math.floor(Math.random()*data.length);
        var string = data[array_index];
        if(string.length >= 20) {
            array_index++;
            string = data[array_index];
        }
        if (string_index < string.length) {
            $(attr).append(string[string_index]);
            setTimeout(function () { showArray(data, attr, string_index+1, array_index, interval, colors, boolhighlight); }, interval);
        } else {
            deleteWord(data, attr, string_index, array_index, interval, colors, boolhighlight);
        }
    };

    var highlight = function(data, attr, position, array_index, colors, callback) {

        var string = data[array_index];
        var leftText = string.substring(0, position - 1);
        var highlightedText = string.substring(position - 1, string.length);

        if(position >= 0) {
            setTimeout(function () {
                $(attr).html(leftText)
                    .append(
                    $('<span></span>')
                        .css('color', colors.textHighlightColor)
                        .css('background-color', colors.highlightColor)
                        .append(highlightedText)
                );
                highlight(data, attr, position-1, array_index, colors, callback);
            }, 20);
        } else {
            return callback();
        }
    };

    var colorObject = function(opts) {
        var colors = {
            highlightColor: opts.highlightColor,
            textHighlightColor: opts.textHighlightColor,
            textColor: opts.textColor
        };
        return colors;
    };

    var deleteWord = function(data, attr, string_index, array_index, interval, colors, boolhighlight) {
        var position = data[array_index].length;
        if(boolhighlight) {
            highlight(data, attr, position, array_index, colors, function () {
                $(attr).empty();
            });
        } else {
            backspace(data, attr, position-1, array_index, interval, function () {
                $(attr).empty(); //make sure its empty
            });
        }

        string_index = -1;
        if(data.length - 1 === array_index) {
            array_index = 0;
            showArray(data, attr, string_index, array_index, interval, colors, boolhighlight);
        } else {
            showArray(data, attr, string_index, array_index+1, interval, colors, boolhighlight);
        }
    };

    var backspace = function (data, attr, string_index, array_index, interval, callback) {

        var string = data[array_index];

        if (string_index >= 0 ) {
            $(attr).html(string.slice(0,string_index));
            setTimeout(function () {
                backspace(data, attr, string_index-1, array_index, interval, callback);
            }, 15);
        } else {
            return callback();
        }

    };

    return TyperJs;
})();

module.exports = TyperJs;
