import { expect } from 'chai'
import {accMult} from '../../../src/script/util/index'

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
