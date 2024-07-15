import { IProduct, IProductDetail } from '@/types/Product';
import { IReview } from '@/types/Review';

export const products: IProduct[] = [
  {
    id: 1,
    name: 'Handmade Vase',
    price: 40000,
    img1: '/dummy/product.jpg',
    sale: 20000,
    type4: 'Y',
    score: 4.5,
    reviewCount: 10,
  },
  {
    id: 2,
    name: 'Wooden Chair',
    price: 30000,
    img1: '/dummy/product.jpg',
    sale: 25000,
    type4: 'Y',
    score: 4.5,
    reviewCount: 10,
  },
  {
    id: 3,
    name: 'Ceramic Plate Set',
    price: 20000,
    img1: '/dummy/product.jpg',
    sale: 18000,
    type4: 'Y',
    score: 4.5,
    reviewCount: 10,
  },
  {
    id: 4,
    name: 'Glass Bottle',
    price: 40000,
    img1: '/dummy/product.jpg',
    sale: 30000,
    type4: 'Y',
    score: 4.5,
    reviewCount: 10,
  },
  {
    id: 5,
    name: 'Woolen Scarf',
    price: 30000,
    img1: '/dummy/product.jpg',
    sale: 2800,
    type4: 'Y',
    score: 4.5,
    reviewCount: 10,
  },
];

export const product: IProductDetail = {
  id: 1,
  name: 'Handmade Vase',
  content: `<div>
&nbsp; 싼타클레이(ssantaclay) 

&nbsp; ❤헤어샵 미용실 명함꽂이 ❤ 

&nbsp;&nbsp; 명함 꽂이(명함 홀더)는
&nbsp;&nbsp; 점토를 물들이고 모양을 만들어 자르고 
&nbsp;&nbsp; 정성스럽게 구성하여
&nbsp;&nbsp; 소중한 하나의 핸드메이드 작품으로 만들어 
&nbsp;&nbsp; 선물해 드립니다 !


❤주문제작❤ 

&nbsp;&nbsp; 시간과 정성이 많이 필요한 핸드메이드 작품으로 
&nbsp;&nbsp; 주문제작은 7일 이내 발송됩니다. 

&nbsp;&nbsp; 다양한 궁금 사항은 문의주세요~
&nbsp;&nbsp; 친절히 답변하겠습니다~~~😉


❤작품구성❤ 

&nbsp;&nbsp; 드라이기, 롤빗, 샴푸 


❤재료❤ 

&nbsp;&nbsp; 원목홀더, 메모홀더,미니거울,수지점토,레진등


❤제작기간❤ 

&nbsp;&nbsp; 주문 후 순차적으로 발송되므로,
&nbsp;&nbsp; 일주일 정도 소요됩니다.


❤사이즈❤ 

&nbsp;&nbsp; 원목 홀더(지름×높이) 8×2&nbsp; 
&nbsp;&nbsp; 거울(지름) 4.5cm
&nbsp;&nbsp; 메모꽂이(높이)&nbsp; 약 10cm
&nbsp;&nbsp; 포장케이스 (가로×세로×높이) 8×8×14


❤참고 사항❤ 

&nbsp;&nbsp; 핸드메이드 작품으로 
&nbsp;&nbsp; 색감이나 형태가 조금씩 다를 수 있으나,
&nbsp;&nbsp; 정성을 다해 만들어 보내드립니다 ! 

&nbsp;&nbsp;&nbsp; 감사합니다 😊</div>`,
  price: 40000,
  sale: 3000,
  createdAt: new Date(),
  updatedAt: new Date(),
  count: 4,
  deleted: 'N',
  images: ['/dummy/product.jpg'],
  seoTitle: 'seoTitle',
  buyMinCount: 2,
  buyMaxCount: 4,
  displayOption: 'Y',
  type1: 'Y', // 추천상품
  type2: 'Y', // 신상품
  type3: 'Y', // 인기상품
  type4: 'Y', // 할인상품
  // optionSubject: stringnumber,
  // supplySubject: stringnumber,
  score: 5,
  reviewCount: 20,
};

export const reviews: IReview[] = [
  {
    id: 1,
    productId: 1,
    score: 5,
    memberId: 1,
    images: ['/dummy/product.jpg'],
    content: 'Good product',
    createdAt: new Date(),
  },
  {
    id: 2,
    productId: 1,
    score: 4,
    memberId: 1,
    images: ['/dummy/product.jpg'],
    content: 'Good product',
    createdAt: new Date(),
  },
  {
    id: 3,
    productId: 1,
    score: 5,
    memberId: 1,
    images: ['/dummy/product.jpg'],
    content: 'Good product',
    createdAt: new Date(),
  },
  {
    id: 4,
    productId: 1,
    score: 5,
    memberId: 1,
    images: ['/dummy/product.jpg'],
    content: 'Good product',
    createdAt: new Date(),
  },
  {
    id: 5,
    productId: 1,
    score: 1,
    memberId: 1,
    images: ['/dummy/product.jpg'],
    content: 'Good product',
    createdAt: new Date(),
  },
];
