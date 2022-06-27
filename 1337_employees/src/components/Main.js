import React, { useEffect, useState } from 'react';
import EmployeeList from './EmployeesList';
import { Container, Navbar, Offcanvas } from 'react-bootstrap';

const Main = () => {
	const [ sortValue, setSortValue ] = useState('name');
	const [ filterValue, setFilterValue ] = useState('');

	const handleSelect = (e) => {
		setSortValue(e.target.value);
	};

	const handleInput = (e) => {
		setFilterValue(e.target.value);
	};

	return (
		<div>
			<input id="filter" name="filter" type="text" value={filterValue} onChange={handleInput} />
			Sort by:
			<select onChange={handleSelect}>
				<option value="name">Name</option>
				<option value="office">Office</option>
			</select>
			<Container>
				<EmployeeList sortValue={sortValue} filterValue={filterValue} />
			</Container>
		</div>
	);
};

export default Main;
