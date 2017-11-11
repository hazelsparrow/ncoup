import {extendObservable, action} from 'mobx';
import {api} from '../../core';

class LobbyStore {
  constructor() {
    extendObservable(this, {
      hintVisible: false
    });
  }

  createNewRoom = action(async () => {
    const response = await api.post('rooms');
    this.router.history.push(`/rooms/${response.data.key}`);
  });

  toggleJoiningHint = action(async () => {
    this.hintVisible = !this.hintVisible;
  });
}

export default LobbyStore;
