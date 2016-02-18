import { groupAction } from 'dummy/helpers/group-action';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Unit | Helper | group action');

// Replace this with your real tests.
test('it groups an empty array of actions', function (assert) {
  let result = groupAction([]);
  assert.ok(result());
});

test('it groups a single action', function (assert) {
  let spy = sinon.spy();
  let result = groupAction([spy]);

  assert.ok(result());
  assert.ok(spy.calledOnce, 'The action should be called once');
});

test('it groups a multiple actions', function (assert) {
  let spy = sinon.spy();
  let spy2 = sinon.spy();
  let result = groupAction([spy, spy2]);

  assert.ok(result());
  assert.ok(spy.calledOnce, 'The action should be called once');
  assert.ok(spy2.calledOnce, 'The other action should be called once');
});

test('it passes in arguments to multiple actions', function (assert) {
  let spy = sinon.spy();
  let spy2 = sinon.spy();
  let result = groupAction([spy, spy2]);

  assert.ok(result('foo'));
  assert.ok(spy.calledOnce, 'The action should be called once');
  assert.ok(spy.calledWith('foo'), 'The action should be called with arguments');
  assert.ok(spy2.calledOnce, 'The other action should be called once');
  assert.ok(spy2.calledWith('foo'), 'The other action should be called with arguments');
});
