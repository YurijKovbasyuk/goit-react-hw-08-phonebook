import { createSlice } from '@reduxjs/toolkit';
import { loginReducer } from './loginApi';

const sliceUser = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      loginReducer.endpoints.logIn.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.user.email;
        state.name = payload.user.name;
        state.token = payload.token;
      }
    );
    builder.addMatcher(
      loginReducer.endpoints.getUser.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.email;
        state.name = payload.name;
      }
    );

    builder.addMatcher(
      loginReducer.endpoints.logOut.matchFulfilled,
      (state, { payload }) => {
        state.email = null;
        state.name = null;
        state.token = null;
      }
    );
  },
});

export default sliceUser.reducer;
