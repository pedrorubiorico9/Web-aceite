
export interface Product {
  id: string;
  name: string;
  size: string;
  price: number;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  author: string;
  location: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface ShippingStep {
  title: string;
  description: string;
  icon: string;
}
