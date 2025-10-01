/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Wine } from '../types/Wine';

// (тимчасово можна використовувати локальний json, як у users)
import Wines from '../api/wineApi.json';

// --- Types ---
type WineState = {
  wines: Wine[];
  wine: Wine | null;
  loading: boolean;
  error: string | null;
};

// --- Initial State ---
const initialState: WineState = {
  wines: [],
  wine: null,
  loading: false,
  error: null,
};

// --- Thunks ---
export const fetchWines = createAsyncThunk<
  Wine[],
  void,
  { rejectValue: string }
>('wines/fetchWines', async (_, { rejectWithValue }) => {
  try {
    // приклад з локального JSON
    // return await getWines(); <-- якщо буде api
    return Wines;
  } catch (e) {
    return rejectWithValue('Не вдалося завантажити список вин');
  }
});

export const fetchWine = createAsyncThunk<
  Wine | null,
  number,
  { rejectValue: string }
>('wines/fetchWine', async (wineId, { rejectWithValue }) => {
  try {
    // return await getWine(wineId);
    const wine = Wines.find(w => w.id === wineId) || null;

    return wine;
  } catch (e) {
    return rejectWithValue('Не вдалося завантажити вино');
  }
});

// --- Slice ---
export const wineSlice = createSlice({
  name: 'wines',
  initialState,
  reducers: {
    clearWine(state) {
      state.wine = null;
    },
  },
  extraReducers: builder => {
    // fetchWines
    builder
      .addCase(fetchWines.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWines.fulfilled, (state, action: PayloadAction<Wine[]>) => {
        state.loading = false;
        state.wines = action.payload;
      })
      .addCase(fetchWines.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Сталася помилка при завантаженні вин';
      });

    // fetchWine
    builder
      .addCase(fetchWine.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWine.fulfilled,
        (state, action: PayloadAction<Wine | null>) => {
          state.loading = false;
          state.wine = action.payload;
        },
      )
      .addCase(fetchWine.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Сталася помилка при завантаженні вина';
      });
  },
});

// --- Selectors ---
export const selectWines = (state: RootState) => state.wines;
// export const selectWine = (state: RootState) => state.wines.wine;
// export const selectWineLoading = (state: RootState) => state.wines.loading;
// export const selectWineError = (state: RootState) => state.wines.error;

export const { clearWine } = wineSlice.actions;

export default wineSlice.reducer;
