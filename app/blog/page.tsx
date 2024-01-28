import Nav from '@/app/ui/Nav';

export default function Blog() {
	const post = ['post1', 'post2', 'post3'];

	return (
		<>
			<h1>blog page</h1>
			<ul>
				{post.map(post => (
					<li key={post}>
						<a href={`/blog/${post}`}>{post}</a>
					</li>
				))}
			</ul>
		</>
	);
}
