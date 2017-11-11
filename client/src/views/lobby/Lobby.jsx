import React from 'react';
import {observer} from 'mobx-react';
import {Button, ActionLink} from '../../components';
import './NewRoom.css';
import ChangeMyName from './ChangeMyName';

const Header = observer(() => {
  return (
    <h1 className='h1'>
      <span className='bold primary'>n</span>
      <span className='dark'>Coup</span>
    </h1>
  );
});

const Info = observer(() => {
  return (
    <h3 className='h5 subtle thin'>
      An online version of the famous board game <a href='https://boardgamegeek.com/boardgame/131357/coup'>Coup</a>.
    </h3>
  );
});

const JoinRoom = observer(({store}) => {
  if (store.hintVisible) {
    return (
      <p className='left'>
        {"If you're looking to join an existing room, ask the person who created it to share its URL with you. "}
        (<ActionLink onClick={() => store.toggleJoiningHint()}>Hide this</ActionLink>)
      </p>
    );
  }

  return (
    <ActionLink onClick={() => store.toggleJoiningHint()}>
      Looking to join an existing room?
    </ActionLink>
  );
});

const MyName = observer(({store}) => {
  return (
    <div className='MyName h4 p1 border bg-haze'>
      <i className="fa fa-user" aria-hidden="true"></i>
      <ActionLink onClick={() => store.showChangeNameForm()} className='NameChange'>
        {store.player.name}
      </ActionLink>
    </div>
  );
});

const FormContainer = observer(({store}) => {
  if (store.nameChangeFormVisible) {
    return <ChangeMyName store={store}/>
  }

  return [
    <div className='NewRoomBtnContainer mx-auto'>
      <div>
        <Button onClick={() => store.createNewRoom()}
                className='Btn NewRoomBtn block'>
          Create a room
        </Button>
        <div className='pt2 left-align'>
          <JoinRoom store={store}/>
        </div>
      </div>
    </div>,
    <MyName store={store}/>
  ];
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
        <div className='border rounded NewRoomContainer pt4 px2 center relative'>
          <FormContainer store={store}/>
        </div>
      </div>
    </div>
  );
});

export default Lobby;
