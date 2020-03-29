import React from 'react';
import { usePosts } from './hooks/usePosts';

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

function App() {
	const posts = usePosts();
	return (
		<div className="App">
			{posts &&
				posts.map((item: Post) => <p key={item.title}>{item.title}</p>)}
		</div>
	);
}

export default App;
