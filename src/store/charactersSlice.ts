import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCharactersByName, getCharactersByPage } from '../services/characters';
import { Character } from '../types/characters';

export const fetchCharactersPage = createAsyncThunk(
   'characters/fetchPage',
   async (page: number) => {
      return await getCharactersByPage(page);
   }
);

export const fetchCharactersFiltered = createAsyncThunk(
   'characters/fetchFiltered',
   async ({ query: name, page }: { query: string; page: number }) => {
      return await getCharactersByName(name, page);
   }
);

export enum states {
   initial,
   fulfilled,
   pending,
   rejected,
}

export enum queryModes {
   byName,
   all,
}

const initialState = {
   shownCharacters: new Array<Character>(),
   page: 1,
   state: states.initial,
   total: 0,
   queryMode: queryModes.all,
   query: '',
};

const charactersSlice = createSlice({
   initialState,
   name: 'characters',
   reducers: {
      clearFilter: state => {
         state.query = '';
         state.queryMode = queryModes.all;
      },
      setQuery: (state, action: { payload: string }) => {
         state.queryMode = queryModes.byName;
         state.query = action.payload;
      },
      nextPage: state => {
         state.page += 1;
      },
      prevPage: state => {
         state.page -= 1;
      },
      setPage: (state, action: { payload: number }) => {
         state.page = action.payload;
      },
   },
   extraReducers: builder => {
      [fetchCharactersPage, fetchCharactersFiltered].forEach(thunk => {
         builder.addCase(thunk.pending, state => {
            state.state = states.pending;
         });

         builder.addCase(thunk.fulfilled, (state, { payload }) => {
            state.shownCharacters = payload.results;
            state.state = states.fulfilled;
            state.total = payload.info.count;
         });

         builder.addCase(thunk.rejected, state => {
            state.state = states.rejected;
         });
      });
   },
});

export const { setQuery, nextPage, prevPage, setPage, clearFilter } = charactersSlice.actions;

export default charactersSlice.reducer;
