import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';

export default function ThemeChange() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			color="primary"
			variant="flat"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
			{theme === 'dark' ? 'Dark' : 'Light'}
		</Button>
	);
}
