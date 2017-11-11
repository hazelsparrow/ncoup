import React from 'react';
import {observer} from 'mobx-react';
import {Button} from '../../components';

const Lobby = observer(({store}) => {
  return (
    <div className=''>
      <div className=''>
        This is a lobby.
      </div>
      <Button onClick={() => store.createNewRoom()}>
        Create new Room
      </Button>
    </div>
  );
});

export default Lobby;
