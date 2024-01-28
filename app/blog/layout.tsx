import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/app/ui/Nav';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Nav />
			<div className={`${inter.className} text-center`}>{children}</div>
		</>
	);
}
