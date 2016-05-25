import { initialState } from './initial-state'

export default function singleBitcoin(state = initialState.singleBitcoin, action) {
	switch(action.type){
    case "RECEIVE_SINGLE_BITCOIN_DATA":
			const singleBit = {
				amount: action.bitcoins.inputs[0].amount,
				size: action.bitcoins.size,
				hash: action.bitcoins.hash
			}
      return singleBit
  	default:
    	return state
  }
}
