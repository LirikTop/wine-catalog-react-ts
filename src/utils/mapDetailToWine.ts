import { ProductDetail, Wine } from '../types/Wine';

export const mapDetailToWine = (detail: ProductDetail, id: number): Wine => {
  return {
    id: id, // assuming detail.id is number, otherwise convert as needed
    itemId: detail.id,
    name: detail.name,
    type: detail.type,
    style: detail.style || '', // provide default if missing
    country: detail.country,
    producer: detail.producer || '', // provide default if missing
    rating: detail.rating ?? 0, // provide default if missing
    price: detail.price,
    nature: detail.nature ?? false, // provide default if missing
    image: detail.image,
    occasion: detail.occasion, // optional
    volume: detail.volume, // optional
  };
};
