import {extendObservable} from 'mobx';
import ACTION_TYPES from './actionTypes';

class Action {
  constructor() {
    extendObservable(this, {
      actor: {},
      target: {},
      type: ACTION_TYPES.ONE_COIN
    });
  }
}

export default Action;
