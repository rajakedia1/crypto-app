
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import DataStore from './datastore';

const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            datastore: DataStore,
        }),
        applyMiddleware(thunk),
    );
    return store;
};

export default ConfigureStore;