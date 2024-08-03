'use client';

import type { FC } from 'react';

import { useParams } from 'next/navigation';

import YES_NO from '@/lib/constants';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const YesNoPage: FC = () => {
  const { id } = useParams();

  const yesNo = YES_NO.find((story) => +story.id === +id);

  return (
    <Dialog>
      <div className="m-3 flex max-w-[1000px] flex-col items-start justify-normal gap-y-3 rounded-md p-4 shadow-md">
        <div className="text-left">{yesNo?.yesno}</div>

        <DialogTrigger>
          <Button>Дізнатися вирішення</Button>
        </DialogTrigger>
      </div>

      <DialogContent className="p-4 flex-center">{yesNo?.solution}</DialogContent>
    </Dialog>
  );
};

export default YesNoPage;
