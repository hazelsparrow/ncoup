import {extendObservable, action} from 'mobx';
import {api} from '../../core';
import game from '../../game';

class RoomStore {
  constructor() {
    extendObservable(this, {
      notFound: false,
      game
    });
  }

  load = action(async () => {
    const {key} = this.router.match.params;
    try {
      const response = await api.get(`rooms/${key}`);
      console.log(response);
    } catch (e) {
      this.notFound = true;
    }
  })
}

export default RoomStore;
