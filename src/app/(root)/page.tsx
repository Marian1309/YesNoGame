'use client';

import type { FC } from 'react';

import STORIES from '@/lib/constants';

import Stories from '@/components/stories';

const RootPage: FC = () => {
  if (typeof window !== 'undefined' && !localStorage.getItem('stories')) {
    localStorage.setItem('stories', JSON.stringify(STORIES));
  }

  return <Stories />;
};

export default RootPage;
