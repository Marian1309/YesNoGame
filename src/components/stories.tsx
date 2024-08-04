'use client';

import type { FC } from 'react';

import STORIES from '@/lib/constants';

import Story from './story';

const Stories: FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 text-center text-lg sm:text-xl md:grid-cols-2 lg:grid-cols-3">
      {STORIES.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
};

export default Stories;
