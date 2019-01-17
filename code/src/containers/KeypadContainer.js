import { connect } from 'react-redux'
import Keypad from '../components/Keypad'
import { Actions } from '../actions/actions'


const mapStateToProps = ({KeypadReducer: state}, ownProps) => {
	return {
		productId: state.productId,
		credit: state.credit
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onKeypadEnter: event => {
			const value = Number(event.target.innerText)
			dispatch(Actions.changeInput(value))
		},
		onClearKeypad: _ => {
			dispatch(Actions.clearKeypad())
		},
		onRestCredit: _ => {
			dispatch(Actions.restCredit())
		},
		onCreditEnter: credit => {
			dispatch(Actions.changeCredit(credit))
		}
	}
}

const KeypadContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Keypad)

export default KeypadContainer
