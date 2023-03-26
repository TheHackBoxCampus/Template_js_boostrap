module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		'quotes': ['error', 'single'],
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		'semi': ['error', 'never'],
		'no-console': 'error'
	}
}
