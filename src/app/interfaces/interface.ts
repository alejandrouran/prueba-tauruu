export interface Product {
  id?: string;
  name: string;
  image: string;
  price: number;
  discount: boolean;
  discountValue?: number;
  isFeatured: boolean;
}
