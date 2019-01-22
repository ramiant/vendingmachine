import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	button: {
    margin: theme.spacing.unit,
	},
	table: {
		margin: 'auto'
	},
	tableContainer: {
		margin: 'auto'
	},
	buttonText: {
		fontSize: 10
	},
	info: {
		// position: 'fixed'
	}
})

class Keypad extends Component {
	render() {
		const { classes } = this.props

		return (
			<div className={classes.tableContainer}>
				<table className={classes.table} border={1}>
					<tbody>
						{
							Object.keys(Array(3).fill()).map((e, i) => {
								return (
									<tr key={i}>
										{
											Object.keys(Array(3).fill()).map((e, j) => {
												return (
													<td key={j}>
														<Button 
														variant="outlined" 
														color="secondary" 
														className={classes.button} 
														onClick={e => this.props.onKeypadEnter(e)}>
															{i * 3 + j + 1}
														</Button>
													</td>
												)
											})
										}
									</tr>
								)
							})
						}
						<tr>
							<td>
								<Button variant="outlined" color="secondary" className={[classes.button, classes.buttonText].join(' ')} onClick={this.props.onBuyItem}>
									Confirm
								</Button>
							</td>
							<td>
								<Button 
								variant="outlined" 
								color="secondary" 
								className={classes.button} 
								onClick={e => this.props.onKeypadEnter(e)}>
									0
								</Button>
							</td>
							<td>
								<Button variant="outlined" color="secondary" className={[classes.button, classes.buttonText].join(' ')} onClick={this.props.onClearKeypad}>
									Clear
								</Button>
							</td>
						</tr>
					</tbody>
				</table>
				<div>
					
					
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
					<br/>
					<output className={classes.info}>{this.props.infoMessage}</output>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Keypad)