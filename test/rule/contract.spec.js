import { expect } from 'chai'
import {contractNameFormat} from '../../src/rule/contract'

describe("contractNameFormat", () => {
  before(() => {
  })

  after(() => {
  })

  it("should not match if start with -", function() {
    expect(contractNameFormat.test('-lzy')).to.be.false
  })

  it("should not match if end with .", function() {
    expect(contractNameFormat.test('lzy.')).to.be.false
  })

  it("should not match if case is lzy-.p", function() {
    expect(contractNameFormat.test('lzy-.p')).to.be.true
  })

})
