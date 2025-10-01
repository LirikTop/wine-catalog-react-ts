import { client } from '../utils/fetchClient';

export type PlaceOrderResponse = {
  paymentUrl: string;
};

type Data = { id: number; quantity: number };

export const getOrder = (data: Data[]) => {
  return client.post<PlaceOrderResponse>('/cart', data);
};
