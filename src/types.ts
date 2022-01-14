export interface Foods {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export type AddFood = Omit<Foods, "id">;
