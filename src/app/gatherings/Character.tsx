'use client';

import Image from 'next/image';

export default function Character() {
  return (
    <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
      <div className="relative h-full w-full">
        <Image
          src="/assets/charactor.svg"
          alt="left charactor"
          width={231.75}
          height={460.35}
          className="absolute left-[10%] top-[28%]"
        />
        <Image
          src="/assets/charactor2.svg"
          alt="topRight charactor"
          width={288.23}
          height={207.04}
          className="absolute right-[15%] top-[10%]"
        />
        <Image
          src="/assets/charactor3.svg"
          alt="right charactor"
          width={345.82}
          height={283.02}
          className="absolute bottom-[25%] right-10"
        />
      </div>
    </div>
  );
}
