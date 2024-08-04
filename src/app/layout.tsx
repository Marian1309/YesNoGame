import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';

import { Toaster } from 'react-hot-toast';

import { cn } from '@/lib/utils';

import Navbar from '@/components/navbar';

import { roboto } from '@/assets/fonts';

import './globals.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextjs.marian1309.vercel.app'),
  title: {
    template: '%s • Данетки',
    default: 'Данетки'
  },
  description: 'Данетки'
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen', roboto.className)}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
