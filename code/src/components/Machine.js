import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

const styles = theme => ({
	button: {
    margin: theme.spacing.unit,
	},
	keysGroup: {

	},
	table: {
		margin: 'auto'
	}
})

class Machine extends Component {
	render() {
		const { classes, items } = this.props
		
		return (
			<table className={classes.table}>
				<tbody>
				{
					items.map((row, i) => {
						return (
							<tr key={i}>
								{
									row.map((spring, j) => {
										return (
											<td key={i + j}>
												<Badge className={classes.margin} badgeContent={4} color="primary">
													{spring[0].name}
												</Badge>
											</td>
										);
									})
								}
							</tr>
						)
					})
				}
				</tbody>
			</table>
		)
	}
}

export default withStyles(styles)(Machine)