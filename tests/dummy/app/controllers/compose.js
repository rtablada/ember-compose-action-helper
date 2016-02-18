import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add(a, b) {
      return a + b;
    },

    multiply(a, b) {
      return a * b;
    },

    alert(result) {
      this.set('result', result);
    },
  }
});
