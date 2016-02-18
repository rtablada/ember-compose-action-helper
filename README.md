# Ember Compose Action Helper

Action composition for Ember.

```bash
ember install ember-compose-action-helper
```

## Usage

Use the `group-action` helper to combine multiple actions in to a single action.

For instance, if a form needs to be reset and an alert needs to be created after a form submission is successful:

```htmlbars
<form onsubmit={{action 'myAwesomeSubmit' name (group-action (action 'resetForm') (action 'alertSuccess'))}}>
  {{input placeholder="Name" value=name}}

  <button>Submit</button>
</form>
```

Then in the controller the action handlers would look like:

```js
import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',

  actions: {
    myAwesomeSubmit(name, afterSuccess, ev) {
      ev.preventDefault();

      this.store.createRecord('user', {name}).save()
        .then(afterSuccess);
    },

    resetForm() {
      this.set('name', '');
    },

    alertSuccess(user) {
      window.alert(`The user ${user.name} was created`);
    },
  }
});
```
