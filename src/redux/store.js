import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

//selectors
//export const getFilteredCards = (state, columnId) => state.cards
  //.filter(card => card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase()));
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });

const reducer = (state, action) => {
  //if(action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload,  }]};
  //return state;

switch (action.type) {
  case 'ADD_COLUMN':
    return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload,  }]};
  case 'ADD_CARD':
    return { ...state, cards: [...state.cards, {id: shortid(), ...action.payload, }]};
  case 'UPDATE_SEARCHSTRING':
    return { ...state, searchString: action.payload };
  default:
    return state;
  }

};


//const dispatch = action => {
  //state = reducer(state, action);
//};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
