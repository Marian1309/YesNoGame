import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import type { Story } from '@/types';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import { clearSans } from '@/assets/fonts';

type Props = {
  story: Story;
};

const Story: FC<Props> = ({ story }) => {
  return (
    <div className="flex max-w-[840px] flex-col gap-y-2 rounded-md p-3 text-left shadow-md">
      <div className="cursor-pointer">
        {story.question.split(' ').splice(0, 10).join(' ')}...
      </div>

      <div className="flex items-center justify-between">
        <div className={cn(clearSans.className, 'flex items-center')}>
          <Image
            alt="story"
            height={60}
            priority
            quality={100}
            src={`/${story?.id}.svg`}
            width={60}
          />

          <p className="pl-1 text-sm text-[#ed5966]">{story.title}</p>
        </div>

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
