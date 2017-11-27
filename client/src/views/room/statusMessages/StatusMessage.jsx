import React from 'react';
import {observer} from 'mobx-react';
import WaitingToStart from './WaitingToStart';
import STATUS_MESSAGES from '../../../game/statusMessages';

const Message = observer(({store}) => {
  const {game} = store;
  
  switch (game.statusMessage) {
    case STATUS_MESSAGES.WAITING_TO_START:
      return <WaitingToStart store={store}/>;
    default:
      throw new Error(`Status ${game.statusMessage} is not supported.`);
  }
});

const StatusMessage = observer(({store}) => {
  return (
    <div className='p2 border-top bg-haze h3'>
      <Message store={store}/>
    </div>
  );
});

export default StatusMessage;
