'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@/app/globals.css';

export default function Nav() {
	const pathname = usePathname();
	return (
		<nav className="flex flex-col items-center justify-between p-24">
			<ul>
				<li>
					<Link href="/" className={`${pathname === '/' ? 'text-violet' : ''}`}>
						home
					</Link>
				</li>
				<li>
					<Link href="/blog" className={`${pathname === '/blog' ? 'text-green' : ''}`}>
						blog
					</Link>
				</li>
				<li>
					<Link href="/about" className={`${pathname === '/about' ? 'active' : ''}`}>
						about
					</Link>
				</li>
			</ul>
		</nav>
	);
}
