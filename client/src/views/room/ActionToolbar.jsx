import React from 'react';
import {observer} from 'mobx-react';
import Action from './actions';

const ActionToolbar = observer(({store}) => {
  return (
    <div className='bg-white border-top p2'>
      {store.game.actions.map(a => <Action key={a.id} action={a} store={store}/>)}
    </div>
  );
});

export default ActionToolbar;
