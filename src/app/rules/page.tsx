'use client';

import { type FC, useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Smile } from 'lucide-react';

import { Button } from '@/components/ui/button';

// <div className="relative">
//   <div className={cn(clearSans.className, 'text-8xl left-12 absolute rotate-12')}>
//     1
//   </div>

//   <div className="bg-[#ed5966] w-full text-white flex-center flex-col bg-opacity-90 backdrop-brightness-90">
//     <Image alt="step" src={Icons.Step_1} width={100} />
//     <p className="text-2xl font-bold py-1">Гравці</p>
//     <p className="max-w-[300px] text-center py-2">
//       Щоб грати в данетки, підійде будь-яка компанія з двох чи більше людей. Для
//       початку виберіть ведучого.
//     </p>
//   </div>
// </div>

const Rules: FC = () => {
  const [counter, setCounter] = useState<number>(5);

  const router = useRouter();

  if (counter === 0) {
    router.push('/');
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <div className="h-[calc(100vh-60px)] flex-col gap-y-2 flex-center">
      <Button>
        <p>Сторінка правил все ще на стадії розробки.</p>
        <Image
          alt="development"
          height={30}
          src="https://cdn-icons-png.flaticon.com/128/3242/3242257.png"
          width={30}
        />
      </Button>

      <p className="max-w-[350px]">
        Через {counter} секунд вас буде перенаправлено на головну сторінку.{' '}
        <Smile className="inline-block" />
      </p>
    </div>
  );
};

export default Rules;
