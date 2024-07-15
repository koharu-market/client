'use client';
import Score from '@/components/ui/Score';
import { IReview } from '@/types/Review';
import dayjs from 'dayjs';
import Image from 'next/image';

interface Props {
  review: IReview;
}

export default function ReviewItem({ review }: Props) {
  return (
    <div className="flex flex-col gap-3 py-9 border-b-1">
      <div className="flex items-center gap-4">
        <div>
          <Image src={'/dummy/profile.webp'} alt="프로필 이미지" width={34} height={34} className="rounded-full" />
        </div>
        <div>
          <div>
            <span className="text-sm">사용자</span>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <Score score={review.score} />
            </span>
            <span className="text-xs text-gray-400 mb-1">{dayjs(review.createdAt).format('YYYY년 MM월 DD일')}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <Image src={'/dummy/product.jpg'} alt="리뷰 이미지" width={120} height={120} />
        </div>
        <div>
          <p className="text-sm">{review.content}</p>
        </div>
      </div>
      <div>
        <dl className="flex gap-3 text-gray-400 text-sm">
          <dt>옵션</dt>
          <dd>옵션 설명</dd>
        </dl>
      </div>
      <div>
        <button className="py-2 px-4 text-sm border-1 border-primary-300 rounded-md text-primary-400 font-semibold">
          도움이 돼요
        </button>
      </div>
    </div>
  );
}
