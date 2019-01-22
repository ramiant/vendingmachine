import { connect } from 'react-redux'
import Machine from '../components/Machine'
import { Actions } from '../actions/actions'


const mapStateToProps = ({ KeypadReducer: kr, MachineReducer: mr }, ownProps) => {
	return {
		items: mr.items,
		credit: kr.credit,
		productId: kr.productId
	}
}

const mapDispatchToProps = dispatch => {
	return { }
}

const MachineContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Machine)

export default MachineContainer
