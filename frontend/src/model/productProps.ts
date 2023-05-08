export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  image: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}