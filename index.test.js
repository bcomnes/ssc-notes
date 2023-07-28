import test from 'node:test'
import assert from 'node:assert'
import { hello } from './index.js'

test('index export', async (t) => {
  assert.strictEqual(hello(), 'world', 'A message')
})
