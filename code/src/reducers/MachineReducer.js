import { ActionTypes } from '../actions/actions'
import itemGenerator from '../utils/itemGen'

export const initialState = {
	items: itemGenerator()
}

function MachineReducer(state = initialState, action ) {
	switch (action.type) {
		case ActionTypes.CHANGE_INPUT:
			return Object.assign({}, state, {
			
			})
		default:
			return state
	}
}

export default MachineReducer