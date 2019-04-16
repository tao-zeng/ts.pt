export default function sum(...x: number[]): number {
	let rs = 0
	for (let i = 0, l = x.length; i < l; i++) rs += x[i]
	return rs
}
