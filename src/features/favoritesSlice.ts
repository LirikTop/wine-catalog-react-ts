/* eslint-disable no-param-reassign */
// /* eslint-disable no-param-reassign */
// // favoritesSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Wine } from '../types/Wine';
// import { RootState } from '../app/store';

// export interface FavoritesState {
//   favorites: Wine[];
// }

// const initialState: FavoritesState = {
//   favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
// };

// export const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     addFavorite: (state, action: PayloadAction<Wine>) => {
//       const exists = state.favorites.some(p => p.id === action.payload.id);

//       if (!exists) {
//         state.favorites.push(action.payload);
//         localStorage.setItem('favorites', JSON.stringify(state.favorites));
//       }
//     },
//     removeFavorite: (state, action: PayloadAction<number>) => {
//       state.favorites = state.favorites.filter(p => p.id !== action.payload);
//       localStorage.setItem('favorites', JSON.stringify(state.favorites));
//     },
//     setFavorites: (state, action: PayloadAction<Wine[]>) => {
//       state.favorites = action.payload;
//       localStorage.setItem('favorites', JSON.stringify(state.favorites));
//     },
//     clearFavorites: state => {
//       state.favorites = [];
//       localStorage.removeItem('favorites');
//     },
//   },
// });

// // export const { addFavorite, removeFavorite, setFavorites, clearFavorites } =
// //   favoritesSlice.actions;

// export const selectFavorites = (state: RootState) => state.favorites.favorites;
// export const { addFavorite, removeFavorite, setFavorites, clearFavorites } =
//   favoritesSlice.actions;

// export default favoritesSlice.reducer;

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Wine } from '../types/Wine';
import { RootState } from '../app/store';

const KEY = 'favorites';

type FavoritesState = {
  items: Wine[];
};

const loadFavoritesFromStorage = (): Wine[] => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
};

const saveFavoritesToStorage = (items: Wine[]) => {
  if (items.length) {
    localStorage.setItem(KEY, JSON.stringify(items));
  } else {
    localStorage.removeItem(KEY);
  }
};

const initialState: FavoritesState = {
  items: loadFavoritesFromStorage(),
};

// thunk: додати
export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (product: Wine) => {
    const current = loadFavoritesFromStorage();
    const exists = current.some(f => f.id === product.id);

    let updated: Wine[];

    if (exists) {
      updated = current; // вже є, не дублюємо
    } else {
      updated = [...current, product];
    }

    saveFavoritesToStorage(updated);

    return updated;
  },
);

// thunk: видалити
export const removeFavorite = createAsyncThunk(
  'favorites/removeFavorite',
  async (id: number) => {
    const current = loadFavoritesFromStorage();
    const updated = current.filter(f => f.id !== id);

    saveFavoritesToStorage(updated);

    return updated;
  },
);

// thunk: toggle (додати/видалити однією кнопкою)
export const toggleFavorite = createAsyncThunk(
  'favorites/toggleFavorite',
  async (product: Wine) => {
    const current = loadFavoritesFromStorage();
    const exists = current.some(f => f.id === product.id);

    let updated: Wine[];

    if (exists) {
      updated = current.filter(f => f.id !== product.id);
    } else {
      updated = [...current, product];
    }

    saveFavoritesToStorage(updated);

    return updated;
  },
);

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<Wine[]>) {
      state.items = action.payload;
      saveFavoritesToStorage(state.items);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export const { setFavorites } = favoritesSlice.actions;
export const selectFavorites = (state: RootState) => state.favorites.items;
export default favoritesSlice.reducer;
