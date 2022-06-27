import React, { useEffect, useState } from 'react';
import GetEmployees from '../data/GetEmployees';

function EmployeesList(props) {
	const [ employees, setEmployees ] = useState([]);
	const { data, loading } = GetEmployees();

	useEffect(
		() => {
			if (!data) return;
			setEmployees(data);
		},
		[ data ]
	);

	const sortedEmployees = () => {
		return employees.sort((a, b) => (a[props.sortValue] > b[props.sortValue] ? 1 : -1));
	};

	if (loading) {
		return <p>Loading employees...</p>;
	}

	return sortedEmployees().map((employ) => {
		return (
			<div>
				<h1 key={employ.email}>
					{employ.name} {employ.office}
				</h1>
			</div>
		);
	});
}

export default EmployeesList;
