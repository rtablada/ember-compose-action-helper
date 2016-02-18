# Ember Compose Action Helper [![Build Status](https://travis-ci.org/rtablada/ember-compose-action-helper.svg?branch=master)](https://travis-ci.org/rtablada/ember-compose-action-helper)

Action composition for Ember.

```bash
ember install ember-compose-action-helper
```

## Usage


### Grouping

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

### Composing

Function composition or piping can be performed using the `compose` helper:

```htmlbars
<button onclick={{action (compose (action 'add') (action 'multiply' 2) (action 'alert')) 9 12}}>Compose</button>
```

Then in the controller the action handlers would look like:

```js
import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',

  actions: {
    add(a, b) {
      return a + b;
    },

    multiply(a, b) {
      return a * b;
    },

    alert(result) {
      window.alert(`The answer is ${result}`);
    },
  }
});
```

This will alert "The answer is 42" when the button is clicked.
