import expect from 'expect.js'
import sum from '../sum'

describe('sum', function() {
	it('sum 1+1', function() {
		if (sum(1, 1) !== 2) throw new Error(`expect sum(1,1) to 2`)
	})
})
