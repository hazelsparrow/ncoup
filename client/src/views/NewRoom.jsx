import React from 'react';
import {observer} from 'mobx-react';
import {action} from 'mobx';
import {Button} from '../components';
import {withState, api} from '../core';

class NewRoomState {
  createNewRoom = action(async () => {
    const response = await api.post('rooms');
    window.location = `/rooms/${response.data.id}`;
  });
}

const NewRoom = withState(({uiState}) => {
  return (
    <div className='border p2 bg-haze'>
      <Button onClick={() => uiState.createNewRoom()}>
        Create new Room
      </Button>
    </div>
  );
}, NewRoomState);

export default NewRoom;
