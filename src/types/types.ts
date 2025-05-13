export interface Juice {
  id: number;
  name: string;
  ingredients: string;
  price: number;
  image: string;
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface Benefit {
  id: number;
  icon: string;
  title: string;
  description: string;
}