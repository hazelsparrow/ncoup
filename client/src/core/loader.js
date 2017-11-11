import React from 'react';
import {observer} from 'mobx-react';
// import Raven from 'raven-js';
// import {Spinner}from 'components';

const Spinner = observer(() => {
  return (
    <div className=''>Loading...</div>
  );
});

export const loader = (WrappedComponent, load, shouldReload, CustomSpinner = Spinner, animate) => {
  return class extends React.Component {

    constructor(props) {
      super(props);

      if (typeof load !== 'function') {
        throw new Error('Collage Error 102: load must be a function. (In collage-react-async)');
      }

      if (shouldReload && typeof shouldReload !== 'function') {
        throw new Error('Collage Error 104: shouldReload must be a function. (In collage-react-async)');
      }

      this.state = {ready: !!this.props.ready, props: props};
    }

    mergeProps = (extraProps) => {
      return {...this.props, ...extraProps};
    };

    executeLoad = async (props) => {
      try {
        const result = await load(props);
        this.setState({ready: true, props: this.mergeProps(result), lastResult: {...result}});
        if (props.onLoaded) {
          props.onLoaded(result);
        }
      } catch (e) {
        if (process.env.__DEV__) {
          throw e;
        } else {
          //Raven.captureException(e);
        }
      }
    };

    async componentWillReceiveProps(nextProps) {
      if (shouldReload && shouldReload(this.props, nextProps)) {
        this.setState({ready: false});
        return this.executeLoad(nextProps);
      } else {
        return this.setState({props: this.mergeProps({...nextProps, ...this.state.lastResult})});
      }
    }

    async componentWillMount() {
      if (!this.props.ready) {
        return this.executeLoad(this.props);
      }
    }

    render() {
      if (!this.state.ready) {
        return <CustomSpinner />;
      }

      return <div className={animate && 'is-fading-in'}><WrappedComponent {...this.state.props} /></div>;
    }
  };
};
