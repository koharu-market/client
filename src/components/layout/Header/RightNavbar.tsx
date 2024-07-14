'use client';

import Link from 'next/link';
import { BsCart2, BsPerson } from 'react-icons/bs';
import { IoMdHeartEmpty, IoMdSearch } from 'react-icons/io';

export default function RightNavbar() {
  return (
    <div>
      <div className="flex md:gap-5 gap-4 items-center">
        <div className="md:hidden">
          <button type="button" className="text-2xl justify-center items-center flex pt-1">
            <IoMdSearch />
          </button>
        </div>
        <div className="relative">
          <Link href="/cart" className="md:text-3xl text-2xl flex justify-center items-center">
            <BsCart2 />
          </Link>
          <div className="flex items-center justify-center bg-[#ef7014] px-1 min-w-[16px] h-4 absolute rounded-full -top-1 -right-1 z-10 text-white">
            <span className="text-xs font-light">0</span>
          </div>
        </div>
        <div className="hidden md:block">
          <Link href="/favor" className="text-3xl justify-center items-center flex">
            <IoMdHeartEmpty />
          </Link>
        </div>
        <div className="hidden md:block">
          <Link href="/mypage" className="text-3xl justify-center items-center flex">
            <BsPerson />
          </Link>
        </div>
      </div>
    </div>
  );
}
