import {Model} from '../core';
import {extendObservable} from 'mobx';

class Player extends Model {
  constructor(other) {
    super(other);

    extendObservable({
      name: '',
      coins: 2,
      cards: 2
    });
  }
}

export default Player;
