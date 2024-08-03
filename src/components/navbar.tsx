import type { FC } from 'react';

import Link from 'next/link';

import { Puzzle } from 'lucide-react';

import { cn } from '@/lib/utils';

import { frizon } from '@/assets/fonts';

const Navbar: FC = () => {
  return (
    <div className="flex items-center justify-between bg-[#ed5966] p-4 text-sm sm:text-lg">
      <Link className={cn(frizon.className, 'flex items-center text-white')} href="/">
        <Puzzle color="#fff" />

        <p className="pl-3">YesNoGame</p>
      </Link>

      <p className="text-lg text-white sm:text-xl">Правила</p>
    </div>
  );
};

export default Navbar;
