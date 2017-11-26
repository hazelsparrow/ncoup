import {extendObservable, action} from 'mobx';
import ACTION_TYPES from './actionTypes';
import {Model} from '../core';

class Action extends Model {
  name;
  type;

  constructor(other) {
    super(other);

    extendObservable(this, {
      actor: {},
      target: {},
      disabled: false
    });
  }

  execute(game) {
    // default execute implementation is just sending action to server
    // override this to change how action is handled on the front end
    this.disable();
    this.send(game);
  }

  send(game) {
    // override this to change how action is send to the server
    game.send(this);
  }

  enable = action(() => {
    this.disabled = false;
  });

  disable = action(() => {
    this.disabled = true;
  });
}

export default Action;
