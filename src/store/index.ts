import {configureStore} from '@reduxjs/toolkit';
import theme from '@/store/theme';
const store =  configureStore({
  reducer: {
    theme,
  },
});

export default store

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch