import { expect } from 'chai'
import {accMult, utf8_to_b64, b64_to_utf8} from '../../../src/script/util/index'

describe("accMult", () => {
  before(() => {
  })

  after(() => {
  })

  it("case1", function() {
    expect(accMult(1.23456,Math.pow(10,5))).to.equal(123456)
  })

  it("case2", function() {
    expect(accMult('2', Math.pow(10,5))).to.equal(200000)
  })

})

describe("utf8_to_b64", () => {
    before(() => {
    })
  
    after(() => {
    })
  
    it("case1", function() {
      expect(utf8_to_b64('我喜欢你')).to.equal('5oiR5Zac5qyi5L2g')
    })
  
  })

  describe("b64_to_utf8", () => {
    before(() => {
    })
  
    after(() => {
    })
  
    it("case1", function() {
      expect(b64_to_utf8('5oiR5Zac5qyi5L2g')).to.equal('我喜欢你')
    })
  
  })