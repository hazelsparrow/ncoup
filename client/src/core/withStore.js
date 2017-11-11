import React from 'react';
import {observer} from 'mobx-react';
import {extendObservable} from 'mobx';
import _ from 'lodash';

export default (WrappedComponent, Store) => {
  return observer(class extends React.Component {
    constructor() {
      super();

      const store = new Store();
      extendObservable(this, {
        store,
        ready: !store.load
      });
    }

    async componentDidMount() {
      _.merge(this.store, {
        router: {
          history: this.props.history,
          match: this.props.match,
          location: this.props.location
        }
      });

      if (this.store.load) {
        await this.store.load();
        this.ready = true;
      }

      this.store.didMount && this.store.didMount();
    }

    render() {
      if (!this.ready) {
        return (
          <div className=''>Working...</div>
        );
      }

      return (
        <WrappedComponent store={this.store}/>
      );
    }
  })
}
