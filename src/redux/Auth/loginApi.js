import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginReducer = createApi({
  reducerPath: 'loginReducer',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().contacts.token;
      headers.set('Authorization', token);
      return headers;
    },
  }),

  endpoints: build => ({
    signUp: build.mutation({
      query(body) {
        return { url: `signup`, method: 'POST', body };
      },
    }),
    logIn: build.mutation({
      query(body) {
        return { url: `login`, method: 'POST', body };
      },
    }),
    logOut: build.mutation({
      query(body) {
        return { url: `logout`, method: 'POST', body };
      },
    }),
    getUser: build.query({
      query: () => `current`,
    }),
  }),
});

export const {
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
  useGetUserQuery,
} = loginReducer;
