import React from 'react';
import {observer} from 'mobx-react';
import RoomNotFound from './RoomNotFound';

const Room = observer(({store}) => {
  if (store.notFound) {
    return <RoomNotFound/>;
  }

  return (
    <div className=''>
      <div className=''>
        Welcome to the room <b>{store.router.match.params.key}</b>!
      </div>
      <div className=''>
        {store.message}
      </div>
    </div>
  );
});

export default Room;
