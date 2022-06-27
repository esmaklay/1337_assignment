import React, { useEffect, useState } from 'react';
import GetEmployees from '../data/GetEmployees';

const Employees = () => {
	const { data, loading } = GetEmployees();
	const [ employees, setEmployees ] = useState([]);

	useEffect(
		() => {
			if (!data) return;
			setEmployees(data);
		},
		[ data ]
	);

	return <div />;
};

export default Employees;
