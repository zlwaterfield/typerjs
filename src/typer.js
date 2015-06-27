var TyperJs = (function () {

    function TyperJs(opts) {
        //TODO : add hightlight speed, clear speed
        var data = opts.data;
        var attr = opts.attribute;
        var interval = opts.interval;
        var string_index = -1;
        var array_index = 0;

        if(typeof data === "string") {
            showText(data, attr, string_index, interval);
        } else if(typeof(data) == "object") {
            showArray(data, attr, string_index, array_index, interval);
        }

    }

    var showText = function (data, attr, index, interval) {
        if (index < data.length) {
            $(attr).append(data[index]);
            setTimeout(function () { showText(data, attr, index+1, interval); }, interval);
        }
        return;
    };

    var showArray = function (data, attr, string_index, array_index, interval) {
        //TODO : add randomization of array index
        var string = data[array_index];
        if (string_index < string.length) {
            $(attr).append(string[string_index]);
            setTimeout(function () { showArray(data, attr, string_index+1, array_index, interval); }, interval);
        } else {
            deleteWord(data, attr, string_index, array_index, interval);
        }
        return;
    };

    var highlight = function() {
        //TODO : add hightlight function
    };

    var deleteWord = function(data, attr, string_index, array_index, interval) {
        $(attr).empty();
        string_index = -1;

        if(data.length - 1 === array_index) {
            array_index = 0;
            showArray(data, attr, string_index, array_index, interval);
        } else {
            showArray(data, attr, string_index, array_index+1, interval);
        }
    };

    return TyperJs;
})();

module.exports = TyperJs;
