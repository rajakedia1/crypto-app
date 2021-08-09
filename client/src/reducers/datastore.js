import * as Actions from './actions';

function DataStore(
    state = {},
    action,
) {
    switch (action.type) {
        case Actions.UPDATE_DATA:
            return { ...action.payload };
        default:
            return state;
    }
}

export default DataStore;
