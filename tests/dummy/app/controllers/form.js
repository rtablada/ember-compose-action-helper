import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',

  actions: {
    myAwesomeSubmit(name, afterSuccess, ev) {
      ev.preventDefault();

      window.setTimeout(() => {
        afterSuccess({ name });
      });
    },

    resetForm() {
      this.set('name', '');
    },

    alertSuccess(user) {
      this.set('savedName', user.name);
    },
  },
});
