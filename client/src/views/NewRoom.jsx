import React from 'react';
import {observer} from 'mobx-react';
import {Button} from '../components';

const NewRoom = observer(({}) => {
  return (
    <div className='border p2 box-shadow-1'>
      <Button onClick={() => console.log('click')}>
        Create new Room
      </Button>
    </div>
  );
});

export default NewRoom;
