'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * multiply, no overflow
 * @param {Number} arg1 
 * @param {Number} arg2 
 */
var accMult = exports.accMult = function accMult(arg1, arg2) {
    var m = 0;
    var s1 = arg1.toString();
    var s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length;
    } catch (e) {}
    try {
        m += s2.split('.')[1].length;
    } catch (e) {}
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
};