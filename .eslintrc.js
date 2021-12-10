module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true
		}
	},
	extends: [
		'plugin:vue/recommended'
	],
	rules: {
		"comma-dangle": 0,
		"no-unused-vars": "warn",
		"no-console": 1,
		"no-mixed-spaces-and-tabs": 0,
		"no-unexpected-multiline": "warn"
	}
};