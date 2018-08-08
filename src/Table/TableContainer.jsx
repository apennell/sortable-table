import React, { Component } from 'react';

import data from '../data.json';

class TableContainer extends Component {
	render() {
		console.log(data);
		
		return (
			<div>
				{data.map((person, index) => (
				  <p key={index}>{person.name}</p>
				))}
			</div>
		)
	}
}

export default TableContainer;
