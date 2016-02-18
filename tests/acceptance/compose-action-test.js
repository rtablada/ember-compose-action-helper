import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | compose action');

test('Form can submit and trigger actions', function (assert) {
  visit('/compose');
  click('button');

  andThen(function() {
    assert.equal(currentURL(), '/compose');
    assert.equal(find('#result').length, 1);
    assert.equal(find('#result').text().trim(), '42');
  });
});
