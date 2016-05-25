import { initialState } from './initial-state'

export default function bitcoins(state = initialState, action) {
	switch(action.type){
    case "RECEIVE_BITCOIN_DATA":
			return Object.assign({}, state, {
				bitcoins: action.bitcoins
			});
  	default:
    	return state
  }
}
