import {extendObservable, action} from 'mobx';
import {api} from '../../core';

class RoomStore {
  constructor() {
    extendObservable(this, {
      message: ''
    })
  }

  load = action(async () => {
    const {key} = this.router.match.params;
    const response = await api.get(`rooms/${key}`);
    this.message = response.data.message;
  })
}

export default RoomStore;
