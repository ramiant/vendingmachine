// Action Types

export const ActionTypes = {
	CHANGE_INPUT: 'CHANGE_INPUT',
	REST_CREDIT: 'REST_CREDIT',
	CHANGE_CREDIT: 'CHANGE_CREDIT',
	CLEAR_KEYPAD: 'CLEAR_KEYPAD',

	BUY_ITEM: 'BUY_ITEM'
}

// Actions

export const Actions = {
	// Keypad actions
	changeInput: function(value) {
		return { type: ActionTypes.CHANGE_INPUT, value: value }
	},
	restCredit: function() {
		return { type: ActionTypes.REST_CREDIT }
	},
	changeCredit: function(value) {
		return { type: ActionTypes.CHANGE_CREDIT, value: value }
	},
	clearKeypad: function() {
		return { type: ActionTypes.CLEAR_KEYPAD }
	},
	// Vending machine actions
	buyItem: function() {
		return { type: ActionTypes.BUY_ITEM }
	}
}

export default Actions
