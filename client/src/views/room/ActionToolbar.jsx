import React from 'react';
import {observer} from 'mobx-react';
import Action from './actions';

const ActionToolbar = observer(({store}) => {
  if (!store.game.actions.length) return null;
  
  return (
    <div className='bg-white border-top pb2'>
      {store.game.actions.map(a => <Action key={a.id} action={a} store={store}/>)}
    </div>
  );
});

export default ActionToolbar;
