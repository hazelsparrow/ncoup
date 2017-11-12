import React from 'react';
import {observer} from 'mobx-react';

const Layout = observer(({}) => {
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

export default Layout;
