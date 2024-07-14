/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { Rubik_Bubbles } from 'next/font/google';

const rubikBubbles = Rubik_Bubbles({
  subsets: ['latin'],
  weight: '400',
});

export default function LeftNavbar() {
  return (
    <h1>
      <Link href="/" className="flex items-center md:gap-4 gap-2">
        <span className="block md:w-10 w-8 md:h-10 h-8">
          <img src="/images/logo.png" alt="로고" className="w-full h-full" />
        </span>
        <span
          className={`${rubikBubbles.className} md:text-4xl text-2xl text-primary-400 md:tracking-wider tracking-wide`}
        >
          koharu
        </span>
      </Link>
    </h1>
  );
}
