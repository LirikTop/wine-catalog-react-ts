import { Wine } from '../types/Wine';
import { client } from '../utils/fetchClient';

export const getWines = () => {
  return client.get<Wine[]>('/wines');
};

export const getWine = (id: number) => {
  return client.get<Wine>(`/wines/${id}`);
};
