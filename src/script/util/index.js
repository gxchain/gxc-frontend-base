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
    if ($client.btoa) {
        return $client.btoa(unescape(encodeURIComponent(str)))
    } else {
        return new Buffer(str).toString('base64')
    }
}

/**
 * b64_to_utf8
 * @param {String} str
 */
export function b64_to_utf8(str) {
    if ($client.atob) {
        return decodeURIComponent(escape($client.atob(str)))
    } else {
        return new Buffer(str, 'base64').toString()
    }
}

/**
 * validate gxchain account name
 * @param {String} name 
 */
export function validate_account_name(name) {
    var i, label, len, length

    if (!name) {
        return 'empty_name'
    }
    length = name.length
    if (length < 3) {
        return 'name_should_be_longer'
    }
    if (length > 63) {
        return 'name_should_be_shorter'
    }

    if (!(/[0-9-]/.test(name) || !/[aeiouy]/.test(name))) {
        return 'premium_name'
    }

    let ref = name.split('.')
    for (i = 0, len = ref.length; i < len; i++) {
        label = ref[i]
        if (!/^[~a-z]/.test(label)) {
            return 'name_should_start_with_a_letter'
        }
        if (!/^[~a-z0-9-]*$/.test(label)) {
            return 'name_format_error'
        }
        if (/--/.test(label)) {
            return 'name_one_dash_error'
        }
        if (!/[a-z0-9]$/.test(label)) {
            return 'name_end_error'
        }
        if (!(label.length >= 3)) {
            return 'name_segment_should_be_longer'
        }
    }
    return null
}
