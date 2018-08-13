import { expect } from 'chai'
import filter from '../../../src/vue/filter/index'

describe("amountCommaslize", () => {
  before(() => {
  })

  after(() => {
  })

  it("case1", function() {
    expect(filter.amountCommaslize(12312)).to.equal('12,312')
  })

  it("case2", function() {
    expect(filter.amountCommaslize(12)).to.equal('12')
  })

  it("case3", function() {
    expect(filter.amountCommaslize(123123)).to.equal('123,123')
  })
})
