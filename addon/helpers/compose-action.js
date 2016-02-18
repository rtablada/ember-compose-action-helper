import Ember from 'ember';

export function composeAction(actions/*, hash*/) {
  return function (...args) {
    return actions.map((action) => {
      return action(...args);
    });
  };
}

export default Ember.Helper.helper(composeAction);
