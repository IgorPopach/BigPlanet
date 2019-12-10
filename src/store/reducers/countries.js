import * as actionTypes from '../actions/actionTypes';

const initialState = {
    countriesList: [],
    region: null,
    country: '',
    filter: '',
    error: null,
    isloading: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.START_LOADING:
            return {
                ...state,
                isloading: true,
            };
        case actionTypes.STORE_COUNTRIES:
            return {
                ...state,
                countriesList: payload,
                isloading: false,
            };
        case actionTypes.SET_ERROR:
            return {
                ...state,
                errors: state.errors.concat([payload]),
                isloading: false,
            };
        case actionTypes.CLEAR_ERROR:
            return {
                ...state,
                errors: state.errors.filter(({ message }) => message !== payload),
            };
        case actionTypes.SET_REGION:
            return {
                ...state,
                region: payload,
            };
        case actionTypes.SET_COUNTRY:
            return {
                ...state,
                country: payload,
            };
        case actionTypes.CLEAR_COUNTRY:
            return {
                ...state,
                country: '',
            };
        case actionTypes.CLEAR_REGION:
            return {
                ...state,
                region: null,
            };
        case actionTypes.SET_FILTER:
            return {
                ...state,
                filter: payload,
            };
        case actionTypes.CLEAR_FILTER:
            return {
                ...state,
                filter: '',
            };
        default:
            return state;
    }
};

export default reducer;
