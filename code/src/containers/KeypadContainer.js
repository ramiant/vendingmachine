import { connect } from 'react-redux'
import Keypad from '../components/Keypad'
import Actions from '../actions/actions'

const mapStateToProps = ({ KeypadReducer: kr, MachineReducer: mr }, ownProps) => {
	return kr
}

const mapDispatchToProps = dispatch => {
	return {
		onKeypadEnter: event => {
			const value = Number(event.target.innerText)
			dispatch(Actions.changeInput(value))
			dispatch(Actions.showInfo(''))
		},
		onClearKeypad: _ => {
			dispatch(Actions.clearKeypad())
			dispatch(Actions.showInfo(''))
		},
		onRestCredit: _ => {
			dispatch(Actions.restCredit())
			dispatch(Actions.showInfo(''))
		},
		onCreditEnter: credit => {
			dispatch(Actions.changeCredit(credit))
			dispatch(Actions.showInfo(''))
		},
		onBuyItem: _ => {
			// Thunk function | dispatch buy event, only if requirements are met
			dispatch((() => {
				return (dispatch, getState) => {
					const { KeypadReducer: kr, MachineReducer: mr } = getState()
					const [row, col] = [Math.floor((kr.productId-1)/mr.height), (kr.productId-1)%mr.width]

					if (kr.productId <= mr.width*mr.height && kr.productId > 0 && mr.items[row][col].length && mr.items[row][col][0].credit <= kr.credit)
						dispatch(Actions.buyItem({
							// For machine reducer
							itemLocation: [row, col],
							// For keypad reducer
							cost: mr.items[row][col][0].credit
						}))

					if (!(kr.productId <= mr.width*mr.height && kr.productId > 0))
						dispatch(Actions.showInfo('Product id is invalid'))
					else if (!mr.items[row][col].length)
						dispatch(Actions.showInfo('No more items'))
					else if (mr.items[row][col][0].credit > kr.credit)
						dispatch(Actions.showInfo('Credit is not enough'))
				}
			})())
		}
	}
}

const KeypadContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Keypad)

export default KeypadContainer
