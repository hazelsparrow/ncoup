import React from 'react';
import {observer} from 'mobx-react';

const NoMatch = observer(({}) => {
  return (
    <div className='clearfix mx-auto fit m2 px2'>
      <div className='col md-col-4'>
        <h1 style={{fontSize: '80px'}} className='h1 pt0 mt2 center'>
          <span className='dark'>4</span><span className='light'>0</span><span className='dark'>4</span>
        </h1>
      </div>
      <div className='col md-col-8'>
        <h1>
          You just broke the Internet.
        </h1>
        <p className='pt1'>
          {"Sorry, but the URL you've entered doesn't make sense."}
        </p>
        <p className='pt2 pl1'>
          <b>Q:</b> {"But it wasn't me! A link brought me here."}
        </p>
        <p className='pt1 pl1'>
          <b>A:</b> We understand how frustrating this is. We all hate 404s.
          Unfortunately, there is nothing else we can do.
        </p>
        <p className='pt2 pl1'>
          <b>Q:</b> {"Did I really break the Internet?"}
        </p>
        <p className='pt1 pl1'>
          <b>A:</b> {"No, of course not. It is very unlikely that you did. We're quite confident the Internet is fine. We think."}
        </p>
        <p className='pt3'>
          <a href='/'>Back to home page</a>
        </p>
      </div>
    </div>
  );
});

export default NoMatch;
