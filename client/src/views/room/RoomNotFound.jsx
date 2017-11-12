import React from 'react';
import {observer} from 'mobx-react';

const EmptyRoom = observer(() => {
  return (
    <div className=''>
      This room doesn't exist.
    </div>
  );
});

export default EmptyRoom;
