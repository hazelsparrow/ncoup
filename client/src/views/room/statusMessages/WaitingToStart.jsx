import React from 'react';
import {observer} from 'mobx-react';
import {Button} from '../../../components';

const WaitingToStart = observer(({store}) => {
  return (
    <div className=''>
      <p>Waiting for other players to start the game...</p>
      <div className='h5 pt1'>
        Invite your friends by sharing this link: <a href={window.location.toString()}>{window.location.toString()}</a>
      </div>
      <div className='pt1 center'>
        {!store.linkCopied && <Button className='Btn Btn--small' onClick={() => store.copyLink(window.location.href)}>Copy to clipboard</Button>}
        {store.linkCopied && <span className='success bold h5'>Link copied!</span>}
      </div>
    </div>
  );
});

export default WaitingToStart;
