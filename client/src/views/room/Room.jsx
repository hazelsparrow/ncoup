import React from 'react';
import {observer} from 'mobx-react';

const Room = observer(({store}) => {
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
