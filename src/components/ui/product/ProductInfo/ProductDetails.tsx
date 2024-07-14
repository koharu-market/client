import Rating from '@/components/ui/Score';
import { TABS } from '@/constants/tabs';
import calculateDiscountRate from '@/lib/calculateDiscountRate';
import { useTabStore } from '@/store/useTabStore';
import { IProductDetail } from '@/types/Product';
import { Link } from 'react-scroll';

interface Props {
  product: IProductDetail;
}

export default function ProductDetails({ product }: Props) {
  const { changeTab } = useTabStore();
  return (
    <div>
      <h2 className="md:text-2xl text-lg font-medium">{product.name}</h2>
      <div className="mt-1">
        <Link
          activeClass="active"
          to={TABS[1]}
          spy={true}
          smooth={true}
          offset={-180}
          duration={0}
          onSetActive={(to) => changeTab(to)}
          className="cursor-pointer"
          onClick={() => changeTab(TABS[1])}
        >
          <Rating score={product.score} reviewCount={product.reviewCount} />
        </Link>
      </div>
      <div className="md:mt-2">
        {product.type4 === 'N' ? (
          <>
            <span className="md:text-3xl text-xl font-semibold">
              {product.sale.toLocaleString('ko-KR')}
              <span className="font-normal">원</span>
            </span>
          </>
        ) : (
          <>
            <span className="md:text-3xl text-xl font-semibold mr-2 text-red-600">
              {calculateDiscountRate(product.price, product.sale)}%
            </span>

            <span className="md:text-3xl text-xl font-semibold">
              {product.sale.toLocaleString('ko-KR')}
              <span className="font-normal">원</span>
            </span>
            <span className="md:text-2xl text-xl line-through text-gray-300 ml-3">
              {product.price.toLocaleString('ko-KR')}
              <span>원</span>
            </span>
          </>
        )}
      </div>
      <div className="mt-4 md:text-base text-sm">
        <div className="flex border-b py-3">
          <span className="w-[84px] font-semibold">배송비</span>
          <div>
            <div>
              <span>3,500원</span>
            </div>
            <div>
              <span className="md:text-sm text-xs mt-1 text-slate-400">50,000원 이상 무료배송</span>
            </div>
          </div>
        </div>
        <div className="flex border-b py-3">
          <span className="w-[84px] font-semibold">배송시작</span>
          <span className="flex-1">
            평균 <span className="font-semibold">3일</span> / 최대 7일 이내
          </span>
        </div>
      </div>
    </div>
  );
}
