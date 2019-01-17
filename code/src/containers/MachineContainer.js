import { connect } from 'react-redux'
import Machine from '../components/Machine'
import { Actions } from '../actions/actions'


const mapStateToProps = ({MachineReducer: state}, ownProps) => {
	return {
		items: state.items
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

const MachineContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Machine)

export default MachineContainer
