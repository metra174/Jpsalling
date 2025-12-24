
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  image: string;
  description: string;
  stock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
