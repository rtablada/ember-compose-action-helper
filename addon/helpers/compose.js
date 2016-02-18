import Ember from 'ember';

export function compose(actions = []/*, hash*/) {
  return function(...args) {
    return actions.reduce((carry, curr) => {
      if (carry === undefined) {
        return curr(...args);
      }

      return curr(carry, ...args);
    }, undefined);
  };
}

export default Ember.Helper.helper(compose);
