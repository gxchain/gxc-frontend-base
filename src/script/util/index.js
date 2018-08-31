const $client = this || {}

/**
 * multiply, no overflow
 * @param {Number} arg1 
 * @param {Number} arg2 
 */
export const accMult = (arg1, arg2) => {
    let m = 0
    let s1 = arg1.toString()
    let s2 = arg2.toString()
    try {
        m += s1.split('.')[1].length
    } catch (e) {
    }
    try {
        m += s2.split('.')[1].length
    } catch (e) {
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}

/**
 * utf8_to_b64
 * @param {String} str 
 */
export function utf8_to_b64(str) {
    if($client.btoa){
        return $client.btoa(unescape(encodeURIComponent(str)))
    }else{
        return new Buffer(str).toString('base64')
    }
}

/**
 * b64_to_utf8
 * @param {String} str 
 */
export function b64_to_utf8(str) {
    if($client.atob){
        return decodeURIComponent(escape($client.atob(str)))
    }else{
        return new Buffer(str, 'base64').toString()
    }
}