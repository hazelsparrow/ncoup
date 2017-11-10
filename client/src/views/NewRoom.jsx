import React from 'react';
import {observer} from 'mobx-react';
import {action} from 'mobx';
import {Button} from '../components';
import {withState} from '../core';

// class NewRoom extends React.Component {
//   constructor() {
//
//   }
//
//   render() {
//     return (
//       <div className='border p2 bg-haze'>
//         <Button onClick={() => wait()}>
//           Create new Room
//         </Button>
//       </div>
//     );
//   }
// });
//
// export default observer(NewRoom);

class NewRoomState {
  createNewRoom = action(() => {
    console.log('hello world!!!')
  });
}

const NewRoom = withState(({uiState}) => {
  return (
    <div className='border p2 bg-haze'>
      <Button onClick={() => uiState.createNewRoom()}>
        Create new Room
      </Button>
    </div>
  );
}, NewRoomState);

export default NewRoom;
