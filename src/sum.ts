/*#if _TARGET === 'es3'
console.log("test")
//#endif */

/**
 * sum
 * @param args 	numbers
 */
export function sum(...args: number[]): number

export function sum(): number {
	let rs = 0
	for (let i = 0, l = arguments.length; i < l; i++) {
		rs += arguments[i]
	}
	return rs
}
