export default function BlogPostLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<main className="text-center">{children}</main>
		</>
	);
}
