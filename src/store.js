import { createStore } from 'redux';

import rootReducer from './reducers';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Witch of Endor',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Angel of Death',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'The Babylonian Kingdom',
      category: 'Sci-Fi',
    },
  ],
};

const store = createStore(
  rootReducer,
  initialState,

);

export default store;
