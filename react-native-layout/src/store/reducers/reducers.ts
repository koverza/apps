import {SET_EMAIL, SET_PASSWORD} from '../actions/actions';

const initialState = {
    email: '',
    password: '',
};

const userReducer = (
    state = initialState,
    action: {type: string; payload: string},
) => {
    switch (action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
