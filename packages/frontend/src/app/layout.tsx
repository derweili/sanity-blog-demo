import BaseLayout from '@components/BaseLayout';
import Nav from '@components/Nav';
import { cx } from '@linaria/core';
import Navigation from '@modules/Navigation';
import PreviewButton from '@modules/PreviewButton';
import Theme from '@theme';
import { styles } from '@theme/styles';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { draftMode } from 'next/headers';

/**
 * Root layout for all pages
 * 
 * TODO: only render Preview button if preview is enabled
 * 
 * @param param0 
 * @returns 
 */
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftModeEnabled } = draftMode();

  return (
		<html lang="en">
				<body className={cx(styles)} style={{margin: 0, padding: 0}}>
            <Navigation />
            <BaseLayout>
              {children}
            </BaseLayout>

            {
              isDraftModeEnabled && <PreviewButton />
            }
				</body>
			</html>
  );
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};