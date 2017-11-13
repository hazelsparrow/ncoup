import React from 'react';
import {observer} from 'mobx-react';
import {Button} from '../../components';

const Actions = observer(({store}) => {
  return (
    <div className='bg-white border-top p2'>
      <Button onClick={() => console.log('click')}>
        Click me
      </Button>
    </div>
  );
});

export default Actions;
