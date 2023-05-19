import BaseLayout from '@components/BaseLayout';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const PreviewButton = dynamic(() => import('@modules/PreviewButton'), {
  loading: () => <div>Loading preview button</div>,
  ssr: false,
})

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
  return (
		<html lang="en">
				<body>
          <BaseLayout>
					  {children}
          </BaseLayout>
					{/* {
						<PreviewButton />
					} */}
				</body>
			</html>
  );
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};