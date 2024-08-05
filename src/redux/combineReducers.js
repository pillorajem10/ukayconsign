import { combineReducers } from 'redux';

import margaukay from './margaukay/reducers';
import common from './common/reducers';

const reducers = combineReducers({
  margaukay,
  common
});

export default reducers;