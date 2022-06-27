import React, { useEffect, useState } from 'react';
import EmployeeList from './EmployeesList';

const Main = () => {
	const [ sortValue, setSortValue ] = useState('name');
	const [ filterValue, setfilterValue ] = useState('');

	const handleSelect = (e) => {
		setSortValue(e.target.value);
	};

	return (
		<div>
			<select onChange={handleSelect}>
				<option value="name">Name</option>
				<option value="office">Office</option>
			</select>
			<EmployeeList sortValue={sortValue} />
		</div>
	);
};

export default Main;
