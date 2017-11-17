import {extendObservable} from 'mobx';

class ActionStore {
  roomStore;

  constructor(roomStore) {
    this.roomStore = roomStore;

    extendObservable(this, {
    })
  }
}

export default ActionStore;
