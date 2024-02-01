'use client';

import '@/app/globals.css';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import ThemeChange from '@/app/ui/ThemeChange';
import { useState } from 'react';

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar shouldHideOnScroll>
			<NavbarBrand>
				<p className="font-bold text-inherit">Violet</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link href="/">Home</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="/blog">Blog</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="/about">About</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<ThemeChange />
			</NavbarContent>
		</Navbar>
	);
}
