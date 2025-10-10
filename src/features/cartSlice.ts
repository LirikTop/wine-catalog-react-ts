/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
// cartSlice.ts
/* eslint-disable no-param-reassign */
// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import { Wine } from '../types/Wine';
// import { RootState } from '../app/store';

// type CartItem = Wine & { quantity: number };

// type CartState = {
//   cartItems: CartItem[];
// };

// const initialState: CartState = {
//   cartItems: JSON.parse(localStorage.getItem('cart') || '[]'),
// };

// // thunk для додавання товару
// export const addToCart = createAsyncThunk(
//   'cart/addToCart',
//   async (product: Wine, { getState }) => {
//     const state = getState() as { cart: CartState };
//     const existing = state.cart.cartItems.find(item => item.id === product.id);

//     let updated;

//     if (existing) {
//       updated = state.cart.cartItems.map(item =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item,
//       );
//     } else {
//       updated = [...state.cart.cartItems, { ...product, quantity: 1 }];
//     }

//     localStorage.setItem('cart', JSON.stringify(updated));

//     return updated;
//   },
// );

// // thunk для видалення одного товару
// export const removeFromCart = createAsyncThunk(
//   'cart/removeFromCart',
//   async (id: number, { getState }) => {
//     const state = getState() as { cart: CartState };
//     const updated = state.cart.cartItems.filter(item => item.id !== id);

//     localStorage.setItem('cart', JSON.stringify(updated));

//     return id;
//   },
// );

// // thunk для зміни кількості
// export const updateQuantity = createAsyncThunk(
//   'cart/updateQuantity',
//   async ({ id, quantity }: { id: number; quantity: number }, { getState }) => {
//     const state = getState() as { cart: CartState };
//     const updated = state.cart.cartItems
//       .map(item => (item.id === id ? { ...item, quantity } : item))
//       .filter(item => item.quantity > 0);

//     localStorage.setItem('cart', JSON.stringify(updated));

//     return { id, quantity };
//   },
// );

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     toggleCart(state, action: PayloadAction<Wine>) {
//       const existing = state.cartItems.find(i => i.id === action.payload.id);

//       if (existing) {
//         // якщо вже є — прибрати
//         state.cartItems = state.cartItems.filter(
//           i => i.id !== action.payload.id,
//         );
//       } else {
//         // якщо нема — додати з кількістю 1
//         state.cartItems.push({ ...action.payload, quantity: 1 });
//       }

//       localStorage.setItem('cart', JSON.stringify(state.cartItems));
//     },
//     clearCart(state) {
//       state.cartItems = [];
//       localStorage.removeItem('cart');
//     },
//     setCart(state, action: PayloadAction<CartItem[]>) {
//       state.cartItems = action.payload;
//       localStorage.setItem('cart', JSON.stringify(action.payload));
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(addToCart.fulfilled, (state, action) => {
//         state.cartItems = action.payload;
//       })
//       .addCase(removeFromCart.fulfilled, (state, action) => {
//         state.cartItems = state.cartItems.filter(
//           item => item.id !== action.payload,
//         );
//       })
//       .addCase(updateQuantity.fulfilled, (state, action) => {
//         const { id, quantity } = action.payload;

//         state.cartItems = state.cartItems.map(item =>
//           item.id === id ? { ...item, quantity } : item,
//         );
//       });
//   },
// });

// export const { clearCart, setCart, toggleCart } = cartSlice.actions;
// export const selectCart = (state: RootState) => state.cart.cartItems;
// export default cartSlice.reducer;

// cartSlice.ts
// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import { Wine } from '../types/Wine';
// import { RootState } from '../app/store';

// const saveCartToStorage = (cartItems: CartItem[]) => {
//   localStorage.setItem('cart', JSON.stringify(cartItems));
// };

// type CartItem = Wine & { quantity: number };

// type CartState = {
//   cartItems: CartItem[];
// };

// const initialState: CartState = {
//   cartItems: JSON.parse(localStorage.getItem('cart') || '[]'),
// };

// const loadCartFromStorage = (): CartItem[] => {
//   try {
//     return JSON.parse(localStorage.getItem('cart') || '[]');
//   } catch {
//     return [];
//   }
// };

// // thunk: додати/збільшити
// export const addToCart = createAsyncThunk(
//   'cart/addToCart',
//   async (product: Wine) => {
//     const cart = loadCartFromStorage();
//     const existing = cart.find(i => i.id === product.id);

//     let updated: CartItem[];

//     if (existing) {
//       updated = cart.map(i =>
//         i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
//       );
//     } else {
//       updated = [...cart, { ...product, quantity: 1 }];
//     }

//     saveCartToStorage(updated);

//     return updated;
//   },
// );

// // thunk: видалити
// export const removeFromCart = createAsyncThunk(
//   'cart/removeFromCart',
//   async (id: number) => {
//     const cart = loadCartFromStorage();
//     const updated = cart.filter(i => i.id !== id);

//     if (updated.length) {
//       saveCartToStorage(updated);
//     } else {
//       localStorage.removeItem('cart');
//     }

//     return updated;
//   },
// );

// // thunk: оновити кількість
// export const updateQuantity = createAsyncThunk(
//   'cart/updateQuantity',
//   async ({ id, quantity }: { id: number; quantity: number }) => {
//     const cart = loadCartFromStorage();
//     const updated = cart
//       .map(i => (i.id === id ? { ...i, quantity } : i))
//       .filter(i => i.quantity > 0);

//     saveCartToStorage(updated);

//     return updated;
//   },
// );

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     clearCart(state) {
//       state.cartItems = [];
//       localStorage.removeItem('cart');
//     },
//     setCart(state, action: PayloadAction<CartItem[]>) {
//       state.cartItems = action.payload;
//       saveCartToStorage(state.cartItems);
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(addToCart.fulfilled, (state, action) => {
//         state.cartItems = action.payload;
//       })
//       .addCase(removeFromCart.fulfilled, (state, action) => {
//         state.cartItems = action.payload;
//       })
//       .addCase(updateQuantity.fulfilled, (state, action) => {
//         state.cartItems = action.payload;
//       });
//   },
// });

// export const { clearCart, setCart } = cartSlice.actions;
// export const selectCart = (state: RootState) => state.cart;
// export default cartSlice.reducer;

import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';
import { CartItem, Wine } from '../types/Wine';
import { RootState } from '../app/store';
import { getOrder } from '../api/order';
// eslint-disable-next-line import/no-extraneous-dependencies
import isEqual from 'lodash/isEqual';

// const saveCartToStorage = (cartItems: CartItem[]) => {
//   localStorage.setItem('cart', JSON.stringify(cartItems));
// };

const saveCartToStorage = (cartItems: CartItem[]) => {
  requestIdleCallback(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  });
};

// type CartItem = Wine & { quantity: number };

type CartState = {
  cartItems: CartItem[];
  loading: boolean;
  error: string | null;
  paymentUrl: string | null; // тут зберігатимемо посилання
};

const initialState: CartState = {
  cartItems: JSON.parse(localStorage.getItem('cart') || '[]'),
  loading: false,
  error: null,
  paymentUrl: null,
};

const loadCartFromStorage = (): CartItem[] => {
  try {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  } catch {
    return [];
  }
};

export type PlaceOrderResponse = {
  paymentUrl: string;
};
// thunk: додати/збільшити
// thunk: оформити замовлення
export const placeOrder = createAsyncThunk<
  PlaceOrderResponse, // що повертає
  void, // аргументів нема
  { state: { cart: CartState } }
>('cart/placeOrder', async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState();
    const cartItems = state.cart.cartItems;

    const orderData = cartItems.map(item => ({
      id: item.id,
      quantity: item.quantity,
    }));

    const response = await getOrder(orderData);

    return response; // тут уже PlaceOrderResponse
  } catch (err) {
    const error = err as Error;

    return rejectWithValue(error.message || 'Failed to place order');
  }
});

// export const addToCart = createAsyncThunk(
//   'cart/addToCart',
//   async (product: Wine) => {
//     const cart = loadCartFromStorage();
//     const existing = cart.find(i => i.id === product.id);

//     let updated: CartItem[];

//     if (existing) {
//       updated = cart.map(i =>
//         i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
//       );
//     } else {
//       updated = [...cart, { ...product, quantity: 1 }];
//     }

//     saveCartToStorage(updated);

//     return updated;
//   },
// );

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (product: Wine & { quantity?: number }) => {
    const cart = loadCartFromStorage();
    const existing = cart.find(i => i.id === product.id);

    const qty = product.quantity ?? 1; // якщо не передано — ставимо 1

    let updated: CartItem[];

    if (existing) {
      updated = cart.map(i =>
        i.id === product.id ? { ...i, quantity: i.quantity + qty } : i,
      );
    } else {
      updated = [...cart, { ...product, quantity: qty }];
    }

    saveCartToStorage(updated);

    return updated;
  },
);

// thunk: видалити
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (id: number) => {
    const cart = loadCartFromStorage();
    const updated = cart.filter(i => i.id !== id);

    if (updated.length) {
      saveCartToStorage(updated);
    } else {
      localStorage.removeItem('cart');
    }

    return updated;
  },
);

// thunk: оновити кількість
export const updateQuantity = createAsyncThunk(
  'cart/updateQuantity',
  async ({ id, quantity }: { id: number; quantity: number }) => {
    const cart = loadCartFromStorage();
    const updated = cart
      .map(i => (i.id === id ? { ...i, quantity } : i))
      .filter(i => i.quantity > 0);

    saveCartToStorage(updated);

    return updated;
  },
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart(state) {
      state.cartItems = [];
      state.paymentUrl = null;
      localStorage.removeItem('cart');
    },
    setCart(state, action: PayloadAction<CartItem[]>) {
      state.cartItems = action.payload;
      saveCartToStorage(state.cartItems);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        if (!isEqual(state.cartItems, action.payload)) {
          state.cartItems = action.payload;
        }
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        if (!isEqual(state.cartItems, action.payload)) {
          state.cartItems = action.payload;
        }
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        if (!isEqual(state.cartItems, action.payload)) {
          state.cartItems = action.payload;
        }
      })
      .addCase(placeOrder.pending, state => {
        state.loading = true;
        state.error = null;
        state.paymentUrl = null;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = [];
        localStorage.removeItem('cart');
        state.paymentUrl = action.payload.paymentUrl; // зберегли посилання
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to place order';
      });
  },
});

export const { clearCart, setCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export const selectCartItems = createSelector(
  [(state: RootState) => state.cart.cartItems],
  cartItems => [...cartItems], // або без копії, якщо стабільні
);
export default cartSlice.reducer;
