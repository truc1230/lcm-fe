import {
    configureStore,
    ThunkDispatch,
    ThunkAction,
    combineReducers,
    AnyAction
} from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

const rootReducer = combineReducers({
    // auth: authSlice.reducer
});
const persistConfig = {
    key: 'root',
    storage: storage,

   };
   
const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware)=>[
        ...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
          }
        })
      ],
    devTools: process.env.NODE_ENV === 'development'
});

export type StoreState = ReturnType<typeof store.getState>;
export type ReduxState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, AnyAction>;

export const useAppDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
export const persistor = persistStore(store)

export default store;
