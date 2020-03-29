import { useEffect, useState } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});

export const usePosts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function callApi() {
			try {
				const result = await axiosInstance.get('/posts');
				setPosts(result.data);
			} catch (err) {
				setPosts(err);
			}
		}
		callApi();
	}, []);
	return posts as any[];
};
