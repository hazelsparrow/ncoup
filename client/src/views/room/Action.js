import {extendObservable} from 'mobx';

ACTION = {
  ONE_COIN: 'one',
  TWO_COINS: 'two',
  THREE_COINS: 'three',
  STEAL: 'steal',
  ASSASSINATE: 'assassinate',
  COUP: 'coup',
  CHANGE_CARDS: 'change'
}

class Action {
  constructor() {
    extendObservable(this, {
      actor: {},
      target: {},
      type: ACTION.ONE_COIN
    });
  }
}

export default Action;
