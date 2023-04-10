import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from './charactersSlice';
import favoritesSlice from './favoritesSlice';

const store = configureStore({
   devTools: true,
   reducer: {
      characters: charactersSlice,
      favorites: favoritesSlice,
   },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
