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
    this.router.history.push(`/rooms/${response.data.id}`);
  });

  showJoiningHint = action(async () => {
    this.hintVisible = true;
  });
}

export default LobbyStore;
