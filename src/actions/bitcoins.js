module.exports = {
	startListeningToToshi: function() {
		return function(dispatch, getState){
			var ws = new WebSocket('wss://bitcoin.toshi.io');
			ws.onopen = function() {
				ws.send('{"subscribe":"transactions"}');
			}

			ws.onmessage = function(e) {
				var response = JSON.parse(e.data);
				dispatch({ type: "RECEIVE_BITCOIN_DATA", bitcoins: response.data });
				dispatch({ type: "RECEIVE_SINGLE_BITCOIN_DATA", bitcoins: response.data });
				dispatch({ type: "RECEIVE_SINGLE_BITCOIN_DATA_TOTAL", amount: response.data.inputs[0].amount });
			}
		}
	}
};
