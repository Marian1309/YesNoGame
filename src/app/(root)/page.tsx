import type { FC } from 'react';

import STORIES from '@/lib/constants';

import { Story } from './_components';

const RootPage: FC = () => {
  return (
    <div className="m-3 text-center text-lg flex-center sm:text-xl">
      {STORIES.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
};

export default RootPage;
