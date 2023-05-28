import assert from "assert/strict"

const {default: {echo, grep, tr}} = await import("./index.js")

assert.equal(echo('foo').toString(), 'foo\n')
assert.equal(tr.call({input: 'bar'}, '[a-z]', '[A-Z]').toString(), 'BAR')
assert.equal(grep('something', 'somewhere').status, 2)
