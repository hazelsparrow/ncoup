import {extendObservable, toJS, action} from 'mobx';
import _ from 'lodash';

class Model {
  constructor (other) {
    if (other) {
      this.merge(other);
    }
  }

  merge = action((partialModel, relations = {}) => {
    if (!partialModel) return;
    _.merge(this, partialModel);
  })

  get id() {
    return this._id;
  }

  toJS() {
    return toJS(this);
  }
}

export default Model;
