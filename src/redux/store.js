import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contacts/sliceContacts";
import { filterReducer } from "./contacts/sliceFilter";
import { authReducer } from "./auth/authSlice";

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store)

/*
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
}

const rootReducer = combineReducers({
    filter: filterReducer,
    contacts: contactsReducers,
})

const persistedReducer = persistReducer(persistConfig, rootReducer) 

export const store =  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
      }),
});

export const persistor = persistStore(store);

/*

export const store =  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});


export default () => {
    let store = configureStore({
        reducer: {
            contacts: persistedReducer,
            filter: filterReducer,
        }
    })
    let persistor = persistStore(store)
    return { store, persistor }
}

const store = configureStore({
    reducer: {
        contacts: contactsReducers,
        filter: filterReducer,
    }
})*/