import { expect } from 'chai'
import { privateKeyFormat } from '../../src/rule/index'

describe("privateKeyFormat", () => {
    before(() => {
    })

    after(() => {
    })

    it("should at least has 51 length", function () {
        var falseWifKey = '5KNJvWQQX2LYSoaeAR8EaPsoG2LXHBRXhjWKCujH9PaxeqmdQ3'
        expect(privateKeyFormat.test(falseWifKey)).to.be.false
    })

    it("correct case", function () {
        var rightWifKey = '5KNJvWQQX2LYSoaeAR8EaPsoG2LXHBRXhjWKCujH9PaxeqmdQ3f'
        expect(privateKeyFormat.test(rightWifKey)).to.be.true
    })
})
