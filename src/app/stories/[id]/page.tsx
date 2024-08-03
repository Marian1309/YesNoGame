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
      <div className="p-4 text-left flex-center">{yesNo?.yesno}</div>

      <DialogTrigger>
        <Button className="ml-4">Дізнатися вирішення</Button>
      </DialogTrigger>

      <DialogContent className="p-4 flex-center">{yesNo?.solution}</DialogContent>
    </Dialog>
  );
};

export default YesNoPage;
