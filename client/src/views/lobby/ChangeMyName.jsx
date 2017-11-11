import React from 'react';
import {observer} from 'mobx-react';
import {Submit, ActionLink} from '../../components';

const GoBack = observer(({store}) => {
  return (
    <div className='MyName h4 p1'>
      <i className="fa fa-chevron-left" aria-hidden="true"></i>  
      <ActionLink onClick={() => store.hideChangeNameForm()} className='NameChange'>
        Cancel
      </ActionLink>
    </div>
  );
});

const ChangeMyName = observer(({store}) => {
  return (
    <form>
      <div className='NewRoomBtnContainer mx-auto'>
        <p className='subtle left-align'>
          Enter your name:
        </p>
        <div className='mt1'>
          <input type='text'
                 value={store.editName}
                 onChange={e => store.updatePlayerName(e.target.value)}
                 className='NewRoomBtn block'>
          </input>
        </div>
        <div className='mt2 center'>
          <Submit onClick={() => store.createOrUpdatePlayer()} style={{minWidth: '140px'}}>
            Save
          </Submit>
        </div>
      </div>
      <GoBack store={store}/>
    </form>
  );
});

export default ChangeMyName;
