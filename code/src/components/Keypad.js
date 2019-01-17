import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	button: {
    margin: theme.spacing.unit,
	},
	keysGroup: {

	}
})

class Keypad extends Component {
	render() {
		const { classes } = this.props

		return (
			<div>
				<div className={classes.keysGroup}>
					{
						Object.keys(Array(10).fill()).map((e, i) => {
							return (
								<Button 
								key={i} 
								variant="outlined" 
								color="secondary" 
								className={classes.button} 
								onClick={e => this.props.onKeypadEnter(e)}>
									{e}
								</Button>
							)
						})
					}
				</div>
				<div>
					<Button variant="outlined" color="secondary" className={classes.button}>
						Confirm
					</Button>
					<Button variant="outlined" color="secondary" className={classes.button} onClick={this.props.onClearKeypad}>
						Clear
					</Button>
					<Button variant="outlined" color="secondary" className={classes.button} onClick={this.props.onRestCredit}>
						Rest
					</Button>
				</div>
				<div>
					Enter credit:
					{
						[0.5, 1, 5, 10].map((credit, i) => {
							return (
								<Button 
								key={i} 
								variant="outlined" 
								color="secondary" 
								className={classes.button}
								onClick={e => this.props.onCreditEnter(credit)}>
									{credit} lei
								</Button>
							)
						})
					}
				</div>
				<div>
					<output>Current credit: {this.props.credit}</output>
					<br/>
					<output>Desired product: {this.props.productId}</output>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Keypad)