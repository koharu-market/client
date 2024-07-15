'use client';

import { useTabStore } from '@/store/useTabStore';
import { Link } from 'react-scroll';

interface Props {
  item: string;
  index: number;
  reviewCount: number;
}

export default function ProductTab({ item, index, reviewCount }: Props) {
  const { tab, changeTab } = useTabStore();

  return (
    <div>
      <Link
        activeClass="active"
        to={item}
        spy={true}
        smooth={true}
        offset={-180}
        duration={0}
        className={`block md:pb-5 pb-3 pt-3 md:border-b-[4px] cursor-pointer ${
          item === `${tab}` ? 'border-black border-b-2' : 'text-gray-400'
        }`}
        onSetActive={(to) => changeTab(to)}
        onClick={() => changeTab(item)}
      >
        {item === '리뷰' ? (
          <span>
            리뷰 <span className="font-normal">({reviewCount})</span>
          </span>
        ) : item === '문의' ? (
          <span>
            문의 <span className="font-normal">(0)</span>
          </span>
        ) : (
          <span>{item}</span>
        )}
      </Link>
    </div>
  );
}
