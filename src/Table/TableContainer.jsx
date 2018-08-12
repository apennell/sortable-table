import React, { Component } from 'react';

import './Table.css';
import data from '../data.json';

class TableContainer extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	    sortBy: 'name',
	    ascending: true,
	    data: data,
	  };
	}

	handleSort = (column) => (e) => {
		// Reset to default of ascending if a new sort column was clicked
		// Otherwise toggle ascending/descending for column sort order
		const prevSortColumn = this.state.sortBy;
		const prevSortOrder = this.state.ascending;
		const ascending = column !== prevSortColumn ? true : !prevSortOrder;

		const sortedData = this.state.data.sort(this.compareValues(column, ascending));

		this.setState({
			sortBy: column,
			ascending: ascending,
			data: sortedData,
		});
	}

	// Use for determining sort order in Array.sort()
	compareValues = (column, ascending) => {
		return function(a, b) {
			// Set two comparing variables to value at the selected sort key
			const varA = typeof a[column] === 'string' ? a[column].toLowerCase() : a[column];
			const varB = typeof b[column] === 'string' ? b[column].toLowerCase() : b[column];

			// Determine if the objects should be swapped based on key value comparison
			let comparison = 0;
			if (varA > varB) {
				comparison = 1;
			} else if (varA < varB) {
				comparison = -1;
			}

			// Reverse the sort order if descending sort
			return ascending ? comparison : comparison * -1;
		};
	}

	render() {
		const columns = [
			'name',
			'address',
			'city',
			'region',
			'country',
			'birthday'
		];

		return (
			<div className="table-container">
				<table>
					<thead>
						<tr>
							{columns.map((column, index) => (
								<th key={`col-${index}`}>
									<button
										onClick={this.handleSort(column)}
										value={column}
									>
										{column}
										{this.state.sortBy === column ?
											<span className="fa-stack">
											  <i className="fas fa-sort fa-stack-1x"></i>
											  <i className={`fas fa-stack-1x fa-sort-${this.state.ascending ? 'down' : 'up'}`}></i>
											</span>
										:
											<i className={"fa fa-sort"} />
										}
									</button>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.map((person, index) => (
							<tr key={`person-${index}`}>
								<td>{person.name}</td>
								<td>{person.address}</td>
								<td>{person.city}</td>
								<td>{person.region}</td>
								<td>{person.country}</td>
								<td>{person.birthday}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)
	}
}

export default TableContainer;
