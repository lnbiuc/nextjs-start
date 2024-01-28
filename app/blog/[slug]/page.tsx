export default function BLogPost({ params }: { params: { slug: string } }) {
	return (
		<>
			<h1>title: {params.slug}</h1>
			<br />
			<p>blog post page</p>
		</>
	);
}
