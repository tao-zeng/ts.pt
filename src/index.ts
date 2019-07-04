export { sum } from './sum'

console.log('test index')

export class TestClass {
	private str: string = '123'
	constructor(str: string) {
		this.str = str
	}
	test() {}
}
