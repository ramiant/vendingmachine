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
		margin: 'auto',
		marginTop: 20,
		borderCollapse: 'separate',
    borderSpacing: '20px 20px'
	},
	cellContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	empty: {
		display: 'flex',
		height: 100,
		width: 100,
		flexDirection: 'column',
		justifyContent: 'center'
	}
})

class Machine extends Component {
	render() {
		const { classes, items } = this.props
		
		return (
			<table className={classes.table} border={1}>
				<tbody>
				{
					items.map((row, i) => {
						return (
							<tr key={i}>
								{
									row.map((spring, j) => {
										return (
											<td key={i*items.length + j}>
												<div className={classes.cellContent}>
													<sup>{i*items.length + j + 1}</sup>
													<Badge className={classes.margin} badgeContent={spring.length} color="primary">
														{spring[0] && <img height={100} width={100} src={spring[0].url} title={spring[0].name}></img> || <span className={classes.empty}>empty</span>}
													</Badge>
												</div>
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