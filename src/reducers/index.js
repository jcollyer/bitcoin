import { combineReducers } from 'redux';
import bitcoins from './bitcoins';
import singleBitcoin from './single-bitcoin';
import totalBitcoin from './total-bitcoin';

const rootReducer = combineReducers({
  bitcoins,
  singleBitcoin,
  totalBitcoin
});

export default rootReducer;
