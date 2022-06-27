import React, { useEffect, useState } from 'react';
import GetEmployees from '../data/GetEmployees';
import { Card } from 'react-bootstrap';
import './employeesList.css';

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

	return sortedEmployees().map((employee) => {
		return (
			<>
				<Card border="secondary" key={employee.email}>
					<Card.Img variant="top" src={employee.imagePortraitUrl} />
					<Card.Body>
						<Card.Title>{employee.name}</Card.Title>
						<Card.Text>{employee.office}</Card.Text>
					</Card.Body>
				</Card>
			</>
		);
	});
}

export default EmployeesList;
