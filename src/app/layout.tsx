import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import { cn } from '@/lib/utils';

import './globals.scss';

const figtree = Figtree({ subsets: ['latin'], weight: ['400'] });

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
      <body className={cn('min-h-screen', figtree.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;
