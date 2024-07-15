export interface IReview {
  id: number;
  productId: number;
  memberId: number;
  images: string[];
  content: string;
  score: number;
  createdAt: Date;
}
