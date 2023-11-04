import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ContentWrapper from '@/components/content-wrapper';
import HomeHeader from '@/components/main-nav';

import ThemeSelector from '@/components/theme-selector';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Samuel Kim - Frontend enthusiast, Fullstack Developer',
  description: 'Welcome to my personal demo website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          'max-w-screen flex max-h-screen flex-col',
        )}
      >
        <ThemeSelector />
        <HomeHeader />
        <ContentWrapper>{children}</ContentWrapper>
      </body>
    </html>
  );
}
