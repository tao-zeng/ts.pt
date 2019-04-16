const rollupConfig = require('./config/rollupConfig'),
	pkg = require('./package.json')

const banner = `/*
 * ${pkg.name} v${pkg.version}
 * ${pkg.homepage}
 *
 * Copyright (c) 2018 ${pkg.author}
 * Released under the ${pkg.license} license
 *
 * Date: ${new Date().toUTCString()}
 */`

const moduleName = pkg.name,
	namespace = pkg.namespace || moduleName,
	baseCfg = {
		input: './src/index.ts',
		banner,
		outDir: './dist',
		sourceRoot: '/' + moduleName,
		external: Object.keys(pkg.dependencies || {})
	},
	looseConfig = Object.assign(
		{
			target: 'es3',
			output: [
				{
					format: 'umd',
					name: namespace,
					amd: moduleName,
					file: `${moduleName}.loose`
				},
				{
					format: 'esm',
					file: `${moduleName}.loose.esm`
				}
			]
		},
		baseCfg
	),
	moduleConfig = Object.assign(
		{
			target: 'es5',
			output: [
				{
					format: 'umd',
					name: namespace,
					amd: moduleName,
					file: moduleName
				},
				{
					format: 'esm',
					file: `${moduleName}.esm`
				}
			]
		},
		baseCfg
	)

module.exports = [Object.assign({ debug: true }, moduleConfig), Object.assign({ debug: true }, looseConfig)]
	.concat(
		process.env.NODE_ENV === 'production' && [
			moduleConfig,
			looseConfig,
			Object.assign({ compact: true, codeAnalysis: `analysis/${moduleName}` }, moduleConfig),
			Object.assign({ compact: true, codeAnalysis: `analysis/${moduleName}.loose` }, looseConfig)
		]
	)
	.filter(cfg => cfg)
	.map(cfg => rollupConfig(cfg))
