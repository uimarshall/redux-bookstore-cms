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
      title: 'Friend and Foe',
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
    {
      id: Math.floor(Math.random() * 100),
      title: 'Minimal contact',
      category: 'Sci-Fi',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Beauty for Ashes',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'The praying Mantees',
      category: 'Kids',
    },
  ],
};

const store = createStore(
  rootReducer,
  initialState,

);

export default store;
