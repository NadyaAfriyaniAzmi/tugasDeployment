import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // Sesuaikan dengan lokasi reducer Anda

// Middleware Redux (opsional)
// import thunk from 'redux-thunk';
// const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(/* ...middleware */));

export default store;
