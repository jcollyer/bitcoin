import { initialState } from './initial-state'

export default function totalBitcoin(state = initialState.bitcoinTotal, action) {
	switch(action.type){
    case "RECEIVE_SINGLE_BITCOIN_DATA_TOTAL":
			const totalBit = state + action.amount
      return totalBit
  	default:
    	return state
  }
}
