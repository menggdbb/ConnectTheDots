import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';


const RootReducer = combineReducers({
    firestore: firestoreReducer,
});

export default RootReducer;