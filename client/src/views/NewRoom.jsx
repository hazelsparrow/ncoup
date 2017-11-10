import React from 'react';
import {observer} from 'mobx-react';
import {Button} from '../components';

async function wait() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

const NewRoom = observer(({}) => {
  return (
    <div className='border p2 bg-haze'>
      <Button onClick={() => wait()}>
        Create new Room
      </Button>
    </div>
  );
});

export default NewRoom;
