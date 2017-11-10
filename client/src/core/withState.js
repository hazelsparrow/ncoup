import React from 'react';
import {observer} from 'mobx-react';
import {extendObservable} from 'mobx';

export default (WrappedComponent, State) => {
  return observer(class extends React.Component {
    constructor() {
      super();

      extendObservable(this, {
        uiState: new State()
      });
    }

    render() {
      return (
        <WrappedComponent uiState={this.uiState}/>
      );
    }
  })
}
