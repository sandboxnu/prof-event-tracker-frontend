import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../activityForm/form.store';

export const store = configureStore({
    reducer: {
        form: formReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;