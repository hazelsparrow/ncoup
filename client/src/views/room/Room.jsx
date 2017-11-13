import React from 'react';
import {observer} from 'mobx-react';
import RoomNotFound from './RoomNotFound';
import Players from './Players';
import GameLog from './GameLog';
import Actions from './Actions';
import './Room.css';

const Room = observer(({store}) => {
  if (store.notFound) {
    return <RoomNotFound/>;
  }

  return (
    <div className='clearfix mx-auto fit m2'>
      <div className='md-col-8 mx-auto'>
        <div className='border rounded bg-haze'>
          <Players store={store}/>
          <GameLog store={store}/>
          <Actions store={store}/>
        </div>
      </div>
    </div>
  );
});

export default Room;
