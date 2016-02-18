import Ember from 'ember';

export function groupAction(actions/*, hash*/) {
  return function (...args) {
    return actions.map((action) => {
      return action(...args);
    });
  };
}

export default Ember.Helper.helper(groupAction);
