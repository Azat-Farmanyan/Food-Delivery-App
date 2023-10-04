export interface Food {
  id: number;
  title: string;
  price: number;
  image?: string;
  description?: string;
  category: string;
  favorite?: boolean;
  preparationTime?: number;
  rating?: number;
}
