import * as actionTypes from '../action/actionTypes'
import {updateObejct} from '../../utils/utils';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return updateObejct(state, {error: null, loading: true});
        case actionTypes.AUTH_SUCCESS:
            return updateObejct(state, {
                error: null,
                loading: false,
                token: action.token,
                userId: action.userId
            });
        case actionTypes.AUTH_FAIL:
            return updateObejct(state, {error: action.error, loading: false});
        case actionTypes.LOGOUT:
            return updateObejct(state, {token: null, userId: null, error: null, loading: false});
        default:
            return state;
    }
};

export default reducer;