//Без Redux-toolkit
// import { createStore} from 'redux';
// import { rootReduser } from './reducers/index'
// import { devToolsEnhancer } from 'redux-devtools-extension';

// const store = createStore(rootReduser, devToolsEnhancer());

// export default store;


// c Redux-toolkit
// import {configureStore } from '@reduxjs/toolkit';
// import { rootReduser } from './reducers/index';

// const store = configureStore({
//     reducer: rootReducer,
//     devTools: process.env.NODE_ENV!== 'prodaction',
// });

// export default store;


// c Redux-toolkit i Slice
import {configureStore } from '@reduxjs/toolkit';
// import items from './slices/itemsSlice';
import filter from './slices/filterSlice';
import contactsApi from './operations';

const rootReducer = {
    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        [...getDefaultMiddleware(), contactsApi.middleware],
    devTools: process.env.NODE_ENV!== 'prodaction',
});

export default store;


 

