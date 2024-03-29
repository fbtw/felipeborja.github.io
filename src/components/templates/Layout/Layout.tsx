import { useTheme } from 'next-themes';
import { FC, ReactNode, useEffect } from 'react';

import { Footer } from 'Organisms/Footer';
import { Header } from 'Organisms/Header';
import { SkipToContent } from 'Atoms/SkipToContent';

interface LayoutProps {
	children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		const favicon = document.querySelector("link[rel~='icon']") as any;
		if (favicon) favicon.href = `/assets/favicon_${resolvedTheme}.png`;
	}, [resolvedTheme]);

	return (
		<div className="flex flex-col justify-between min-h-screen">
			<SkipToContent />
			<Header />
			<main id="content">{children}</main>
			<Footer />
		</div>
	);
};
