'use client';

import type { FC } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import STORIES from '@/lib/constants';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const YesNoPage: FC = () => {
  const { id } = useParams();

  const story = STORIES.find((story) => +story.id === +id);

  return (
    <div className="flex-center">
      <Dialog>
        <div className="m-3 flex max-w-[1000px] flex-col gap-y-3 rounded-md p-4 shadow-md">
          <div className="text-left text-lg">{story?.question}</div>

          <div className="flex justify-between">
            <DialogTrigger>
              <Button>Дізнатися вирішення</Button>
            </DialogTrigger>

            <Image
              alt="story"
              height={50}
              priority
              quality={100}
              src={`/${story?.imageUrl}`}
              width={50}
            />
          </div>
        </div>

        <DialogContent className="max-w-[90%] p-8 flex-center">
          {story?.solution}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default YesNoPage;
