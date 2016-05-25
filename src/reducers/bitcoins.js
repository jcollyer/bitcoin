export default function bitcoins(state = [], action) {
	switch(action.type){
    case "RECEIVE_BITCOIN_DATA":
		const newBit = {
			amount: action.bitcoins.inputs[0].amount,
			size: action.bitcoins.size,
			hash: action.bitcoins.hash
		}
		return [...state, newBit]
  default:
    return state
  }
}
