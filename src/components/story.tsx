import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import type { Story } from '@/types';

import { Button } from '@/components/ui/button';

type Props = {
  story: Story;
};

const Story: FC<Props> = ({ story }) => {
  return (
    <div className="flex max-w-[840px] flex-col gap-y-2 rounded-md p-3 text-left shadow-md">
      <div className="cursor-pointer">{story.question?.slice(0, 80)}...</div>

      <div className="flex items-center justify-between">
        <Image
          alt="story"
          height={60}
          priority
          quality={100}
          src={`/${story?.id}.svg`}
          width={60}
        />

        <div className="flex items-center gap-x-2">
          <Link href={`/stories/${story.id}`}>
            <Button>Перейти</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Story;
