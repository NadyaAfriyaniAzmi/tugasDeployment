import { combineReducers } from 'redux';
import productReducer from './reducers'; // Sesuaikan dengan lokasi Anda

const rootReducer = combineReducers({
  product: productReducer, // Sesuaikan dengan nama reducer Anda
});

export default rootReducer;