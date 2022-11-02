import  {legacy_createStore as createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';

//Reducer
import reducer from './reducer';

// const store = createStore( reducer );
const store = configureStore( { reducer : reducer } );


export default store;