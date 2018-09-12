'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeCallData = undefined;

var _gxbjs = require('gxbjs');

var _bytebuffer = require('bytebuffer');

var _bytebuffer2 = _interopRequireDefault(_bytebuffer);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isArrayType(type) {
    return type.indexOf('[]') !== -1;
}

var serializeCallData = exports.serializeCallData = function serializeCallData(action, params, abi) {
    abi = (0, _lodash.cloneDeep)(abi);
    var struct = abi.structs.find(function (s) {
        return s.name === action;
    });
    var b = new _bytebuffer2.default(_bytebuffer2.default.DEFAULT_CAPACITY, _bytebuffer2.default.LITTLE_ENDIAN);
    struct.fields.forEach(function (f) {
        var value = params[f.name];
        var isArrayFlag = false;
        if (isArrayType(f.type)) {
            isArrayFlag = true;
            f.type = f.type.split('[')[0];
        }

        var type = _gxbjs.types[f.type];
        if (!type) {
            var t = abi.types.find(function (t) {
                return t.new_type_name === f.type;
            });
            if (t) {
                type = _gxbjs.types[t.type];
            }
        }
        if (!type) {
            type = _gxbjs.ops[f.type];
        }

        if (type) {
            if (isArrayFlag) {
                type = _gxbjs.types.set(type);
            }
            type.appendByteBuffer(b, value);
        }
    });
    return Buffer.from(b.copy(0, b.offset).toBinary(), 'binary');
};