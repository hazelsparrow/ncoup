import React from 'react';
import {observer} from 'mobx-react';
import {Button, ActionLink} from '../../components';
import './NewRoom.css';

const Header = observer(() => {
  return (
    <h1 className='h1'>
      <span className='bold primary'>n</span>
      <span className='dark'>Coup</span>
    </h1>
  );
});

const Info = observer(({}) => {
  return (
    <h3 className='h5 subtle thin'>
      An online version of the famous board game <a href='https://boardgamegeek.com/boardgame/131357/coup'>Coup</a>.
    </h3>
  );
});

const Lobby = observer(({store}) => {
  return (
    <div className='clearfix mx-auto fit m2 px2'>
      <div className='md-col-6 mx-auto'>
        <div className='border rounded bg-haze CoupHeader'>
          <div className='px2'>
            <Header/>
            <Info/>
          </div>
        </div>
        <div className='border rounded NewRoomContainer pt4 px2 center'>
          <div>
            <Button onClick={() => store.createNewRoom()}
                    className='Btn NewRoomBtn'>
              Create new Room
            </Button>
          </div>
          <div className='pt2'>
            {!store.hintVisible &&
              <ActionLink onClick={() => store.showJoiningHint()}>
                Looking to join an existing room?
              </ActionLink>}
            {store.hintVisible &&
              <p className='subtle thin'>
                {"If you're looking to join an existing room, ask the person who created it to share its URL with you."}
              </p>}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Lobby;
