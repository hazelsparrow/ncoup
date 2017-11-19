import {extendObservable, action} from 'mobx';
import {api} from '../../core';

class RoomStore {
  constructor() {
    extendObservable(this, {
      notFound: false
    })
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
