import { useEffect, useState } from 'react';
import axios from 'axios';

const GetEmployees = () => {
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data: response } = await axios.get(process.env.REACT_APP_API_URL, {
					headers: {
						Authorization: `${process.env.REACT_APP_API_KEY}`
					}
				});
				setData(response);
			} catch (error) {
				console.error(error);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	return {
		data,
		loading
	};
};

export default GetEmployees;
