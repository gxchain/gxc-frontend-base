import { expect } from 'chai'
import { wifKeyFormat } from '../../src/rule/index'

describe("wifKeyFormat", () => {
    before(() => {
    })

    after(() => {
    })

    it("should at least has 51 length", function () {
        var falseWifKey = '5KNJvWQQX2LYSoaeAR8EaPsoG2LXHBRXhjWKCujH9PaxeqmdQ3'
        expect(wifKeyFormat.test(falseWifKey)).to.be.false
    })

    it("correct case", function () {
        var rightWifKey = '5KNJvWQQX2LYSoaeAR8EaPsoG2LXHBRXhjWKCujH9PaxeqmdQ3f'
        expect(wifKeyFormat.test(rightWifKey)).to.be.true
    })
})
