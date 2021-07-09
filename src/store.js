import { createStore } from 'redux';

const defaultStore = {
   
    color: "black"
};

function reducer(store = defaultStore, action) {
    switch (action.type) {
        case 'SET_COLOR':
            return { ...store,color: action.payload};
        default:
            return store;

    }
} export const store = createStore(reducer, defaultStore);