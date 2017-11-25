import React from 'react';
import {observer} from 'mobx-react';
import RoomNotFound from './RoomNotFound';
import Players from './Players';
import GameLog from './GameLog';
import ActionToolbar from './ActionToolbar';
import './Room.css';

const Room = observer(({store}) => {
  if (store.notFound) {
    return <RoomNotFound/>;
  }

  return (
    <div className='clearfix mx-auto fit m2 px2'>
      <div className='md-col-8 mx-auto'>
        <Players store={store}/>
        <div className='border rounded box-shadow'>
          <GameLog store={store}/>
          <ActionToolbar store={store}/>
        </div>
      </div>
    </div>
  );
});

export default Room;
