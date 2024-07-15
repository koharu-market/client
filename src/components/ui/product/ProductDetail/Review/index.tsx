'use client';

import { IReview } from '@/types/Review';
import { useEffect, useState } from 'react';
import ReviewFeed from './ReviewFeed';
import Score from '@/components/ui/Score';
import { reviews } from '@/data/products';
import ReviewItem from './ReviewItem';

interface Props {
  productId: number;
  score: number;
  reviewCount: number;
}

export default function Review({ productId, score, reviewCount }: Props) {
  return (
    <div>
      <div className="flex justify-between">
        <h2>
          리뷰
          <span>({reviewCount})</span>
        </h2>
        <div>
          <button className="text-sky-500">리뷰 작성</button>
        </div>
      </div>
      {/* 리뷰 총 평점 */}
      <div className="mt-5">
        <div className="bg-primary-100 rounded-md md:py-12 py-8 flex text-slate-500 text-sm">
          <div className="flex md:flex-row flex-col items-center md:gap-5 gap-0 md:w-1/2 w-[136px] justify-center">
            <div className="md:order-1 order-2 md:scale-100 scale-75">
              <Score score={score} size="base" />
            </div>
            <span className="md:order-2 order-1 font-bold md:text-[34px] text-2xl text-[#424242]">
              {score.toFixed(1)}
            </span>
          </div>
          <div className="border-l-[1px] border-l-slate-300 flex justify-center flex-1">
            <div>
              {[5, 4, 3, 2, 1].map((index) => (
                <ReviewFeed key={index} targetScore={index} reviews={reviews} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 리뷰 리스트 */}
      <div className="mt-10">
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <ReviewItem review={review} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
