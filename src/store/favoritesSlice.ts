import { Character } from '../types/characters';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   favorites: new Array<Character>(),
};

const favoritesSlice = createSlice({
   initialState,
   name: 'favorites',
   reducers: {
      addFavorite: (state, { payload }: { payload: Character }) => {
         state.favorites.push(payload);
      },
      clearFavorites: state => {
         state.favorites = [];
      },
      removeFavorite: (state, { payload }: { payload: number }) => {
         state.favorites = state.favorites.filter(character => character.id !== payload);
      },
   },
});

export const { addFavorite, clearFavorites, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
