var TyperJs = (function () {

    function TyperJs(opts) {

        var data = opts.data;

        opts.string_index = -1;
        opts.array_index = 0;
        opts.colors = colorObject(opts);
        opts.highlight = opts.highlight === undefined ? false : opts.highlight;

        if(typeof data === "string") {
            showText(opts);
        } else if(typeof(data) === "object") {
            showArray(opts);
        }
    }

    /*============================
     Color Object Build
     ============================*/

    var colorObject = function(opts) {
        return {
            highlightColor: opts.highlightColor,
            textHighlightColor: opts.textHighlightColor,
            textColor: opts.textColor
        };
    };

    /*============================
     Show Single Word
     ============================*/

    var showText = function (opts) {
        if (opts.string_index < opts.data.length) {
            $(opts.attribute).append(opts.data[opts.string_index]);
            opts.string_index++;
            setTimeout(function () { showText(opts); }, opts.type_interval);
        }
    };

    /*============================
     Show Array
     ============================*/

    var showArray = function (opts) {

        var data = opts.data;
        var attr = opts.attribute;
        var string = data[opts.array_index];

        if (opts.string_index < string.length) {
            $(attr).append(string[opts.string_index]);
            opts.string_index++;
            setTimeout(function () { showArray(opts); }, opts.type_interval);
        } else {
            deleteWord(opts);
        }
    };

    /*============================
     Callback to ShowArrray
     ============================*/

    var callbackToShowArray = function (opts) {

        opts.string_index = -1;
        if(opts.data.length - 1 === opts.array_index) {
            opts.array_index = 0;
            showArray(opts);
        } else {
            opts.array_index++;
            showArray(opts);
        }
    };

    /*============================
     DeleteWord
     ============================*/

    var deleteWord = function(opts) {

        var position = opts.data[opts.array_index].length;

        if(opts.highlight) {
            highlight(opts, position, function () {
                $(opts.attribute).empty();
                callbackToShowArray(opts);
            });
        } else {
            backspace(opts, position-1, function () {
                $(opts.attribute).empty(); //make sure its empty
                callbackToShowArray(opts);
            });
        }
    };

    /*============================
     Highlight
     ============================*/

    var highlight = function(opts, position, callback) {

        var string = opts.data[opts.array_index];
        var leftText = string.substring(0, position - 1);
        var highlightedText = string.substring(position - 1, string.length);
        var colors = opts.colors;
        var attr = opts.attribute;

        if(position >= 0) {
            setTimeout(function () {
                $(attr).html(leftText)
                    .append(
                    $('<span></span>')
                        .css('color', colors.textHighlightColor)
                        .css('background-color', colors.highlightColor)
                        .append(highlightedText)
                );
                highlight(opts, position-1, callback);
            }, opts.remove_interval);
        } else {
            return callback();
        }
    };

    /*============================
     Backspace
     ============================*/

    var backspace = function (opts, position, callback) {

        var attr = opts.attribute;
        var string = opts.data[opts.array_index];

        if (opts.string_index >= 0 ) {
            $(attr).html(string.slice(0, opts.string_index));
            setTimeout(function () {
                opts.string_index--;
                backspace(opts, position, callback);
            }, opts.remove_interval);
        } else {
            return callback();
        }

    };

    return TyperJs;
})();

module.exports = TyperJs;