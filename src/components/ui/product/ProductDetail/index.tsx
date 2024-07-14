'use client';

import { TABS } from '@/constants/tabs';
import { IProductDetail } from '@/types/Product';
import { Element } from 'react-scroll';
import Info from './Info';
import Review from './Review';
import Question from './Question';
import Delivery from './Delivery';

interface Props {
  product: IProductDetail;
}

export default function ProductDetail({ product }: Props) {
  return (
    <div>
      <Element name={TABS[0]}>
        <Info content={product.content} />
      </Element>
      <Element name={TABS[1]} className="mt-[1800px]">
        {/* <Review productId={product.id} score={product.score} reviewCount={product.reviewCount} /> */}
        <Review />
      </Element>
      <Element name={TABS[2]} className="mt-[1800px]">
        <Question />
      </Element>
      <Element name={TABS[3]} className="mt-[1800px]">
        <Delivery />
      </Element>
    </div>
  );
}
