import { composeAction } from 'dummy/helpers/compose-action';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Unit | Helper | compose action');

// Replace this with your real tests.
test('it composes an empty array of actions', function (assert) {
  let result = composeAction([]);
  assert.ok(result());
});

test('it composes a single action', function (assert) {
  let spy = sinon.spy();
  let result = composeAction([spy]);

  assert.ok(result());
  assert.ok(spy.calledOnce, 'The action should be called once');
});

test('it composes a multiple actions', function (assert) {
  let spy = sinon.spy();
  let spy2 = sinon.spy();
  let result = composeAction([spy, spy2]);

  assert.ok(result());
  assert.ok(spy.calledOnce, 'The action should be called once');
  assert.ok(spy2.calledOnce, 'The other action should be called once');
});

test('it passes in arguments to multiple actions', function (assert) {
  let spy = sinon.spy();
  let spy2 = sinon.spy();
  let result = composeAction([spy, spy2]);

  assert.ok(result('foo'));
  assert.ok(spy.calledOnce, 'The action should be called once');
  assert.ok(spy.calledWith('foo'), 'The action should be called with arguments');
  assert.ok(spy2.calledOnce, 'The other action should be called once');
  assert.ok(spy2.calledWith('foo'), 'The other action should be called with arguments');
});
