export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  status: "For Sale" | "For Rent" | "Sold" | "Rented";
  image: string;
}
