import { compose } from 'dummy/helpers/compose';
import { module, test } from 'qunit';

module('Unit | Helper | compose');

function add(a, b) {
  return a + b;
}

function double(a) {
  return a * 2;
}

test('it composes a single function', function(assert) {
  let result = compose([add]);

  assert.equal(result(21, 21), 42);
});

test('it composes two functions', function(assert) {
  let result = compose([add, double]);

  assert.equal(result(13, 8), 42);
});
