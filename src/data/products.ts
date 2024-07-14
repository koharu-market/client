import { IProduct, IProductDetail } from '@/types/Product';

export const products: IProduct[] = [
  {
    id: 1,
    name: 'Handmade Vase',
    price: 40000,
    img1: '/dummy/product.jpg',
    sale: 10,
    type4: 'Y',
    score: 4.5,
    reviewCount: 10,
  },
  {
    id: 2,
    name: 'Wooden Chair',
    price: 30000,
    img1: '/dummy/product.jpg',
    sale: 10,
    type4: 'Y',
    score: 4.5,
    reviewCount: 10,
  },
  {
    id: 3,
    name: 'Ceramic Plate Set',
    price: 20000,
    img1: '/dummy/product.jpg',
    sale: 10,
    type4: 'Y',
    score: 4.5,
    reviewCount: 10,
  },
  {
    id: 4,
    name: 'Glass Bottle',
    price: 40000,
    img1: '/dummy/product.jpg',
    sale: 10,
    type4: 'Y',
    score: 4.5,
    reviewCount: 10,
  },
  {
    id: 5,
    name: 'Woolen Scarf',
    price: 30000,
    img1: '/dummy/product.jpg',
    sale: 10,
    type4: 'Y',
    score: 4.5,
    reviewCount: 10,
  },
];

export const product: IProductDetail = {
  id: 1,
  name: 'Handmade Vase',
  content: 'content',
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
  score: 10,
  reviewCount: 20,
};
