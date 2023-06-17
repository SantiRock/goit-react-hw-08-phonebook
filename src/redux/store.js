import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./sliceContacts";
import { filterReducer } from "./sliceFilter";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
})


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