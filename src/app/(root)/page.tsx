import type { FC } from 'react';

import Link from 'next/link';

import YES_NO from '@/lib/constants';

import { Button } from '@/components/ui/button';

const RootPage: FC = () => {
  return (
    <div className="m-3 rounded-md p-2 text-center shadow-md sm:text-xl">
      {YES_NO.map((yes) => (
        <div className="flex flex-col items-end gap-y-2 py-1" key={yes.id}>
          <div className="cursor-pointer" key={yes.id}>
            {yes.yesno.slice(0, 80)}...
          </div>

          <div className="">
            <Link href={`/stories/${yes.id}`}>
              <Button>Перейти</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RootPage;
