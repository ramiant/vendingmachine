import { ActionTypes } from '../actions/actions'
import itemGenerator from '../utils/itemGen'

export const initialState = itemGenerator()

function MachineReducer(state = initialState, action ) {
	switch (action.type) {
		case ActionTypes.BUY_ITEM:
			const [row, col] = action.itemInfo.itemLocation
			return Object.assign({}, state, {
				items: state.items.map((e, i) => e.map((f, j) => {
					if (row === i && col === j)
						return f.slice(1)
					else
						return f
				}))
			})
		default:
			return state
	}
}

export default MachineReducer