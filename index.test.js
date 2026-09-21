const test = require('node:test');
const assert = require('node:assert/strict');
const { multiply } = require('./index');

test('multiply devuelve el producto de dos numeros', () => {
	assert.equal(multiply(2, 3), 6);
});

test('multiply maneja negativos', () => {
	assert.equal(multiply(-2, 3), -6);
});
