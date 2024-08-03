import type { FC } from 'react';

import Link from 'next/link';

import YES_NO from '@/lib/constants';

import { Button } from '@/components/ui/button';

const RootPage: FC = () => {
  return (
    <div className="m-3 text-center text-lg flex-center sm:text-xl">
      {YES_NO.map((yes) => (
        <div
          className="flex max-w-[840px] flex-col items-baseline gap-y-2 rounded-md p-3 text-left shadow-md"
          key={yes.id}
        >
          <div className="cursor-pointer" key={yes.id}>
            {yes.yesno.slice(0, 80)}...
          </div>

          <Link href={`/stories/${yes.id}`}>
            <Button>Перейти</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RootPage;
