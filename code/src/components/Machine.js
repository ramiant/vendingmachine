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

class Machine extends Component {
	render() {
		const { classes, items } = this.props
		console.log(items);
		
		return (
			<div>
				{
					items.map((row, i) => {
						return (
							<div key={i}>
								{
									row.map((spring, j) => {
										console.log(spring)
										return <span key={i + j}>{spring[0].name}</span>
									})
								}
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default withStyles(styles)(Machine)