import {configureStore} from '@reduxjs/toolkit';
import theme from '@/store/theme';
export default configureStore({
  reducer: {
    theme,
  },
});
