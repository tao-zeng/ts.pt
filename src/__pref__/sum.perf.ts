import { sum } from '../sum'

suite('sum', function() {
	benchmark('sum 1 + 1', function() {
		sum(1, 1)
	})
	benchmark('1 + 1', function() {
		return 1 + 1
	})
})
