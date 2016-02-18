import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | group action');

test('Form can submit and trigger actions', function (assert) {
  visit('/group');
  fillIn('input', 'Bob');
  click('button');

  andThen(function() {
    assert.equal(currentURL(), '/group');
    assert.equal(find('h2').length, 1);
    assert.equal(find('h2').text().trim(), 'The user Bob was created.');
  });
});
