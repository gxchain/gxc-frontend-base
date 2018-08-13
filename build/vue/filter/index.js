'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    // add commas on amount, 12312 => 12,123
    amountCommaslize: function amountCommaslize(value) {
        var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        value = value + '';
        if (isNaN(Number(value))) {
            return value;
        }
        precision = precision >= 0 && precision <= 20 ? precision : 2;
        value = parseFloat((value + '').replace(/[^\d.-]/g, '')).toFixed(precision) + '';
        var l = value.split('.')[0].split('').reverse();
        var r = value.split('.')[1];
        var t = '';
        for (var i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '');
        }
        if (precision == 0) {
            return t.split('').reverse().join('');
        }
        return t.split('').reverse().join('') + '.' + r;
    }
};