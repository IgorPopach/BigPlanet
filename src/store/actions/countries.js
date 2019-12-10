import * as actionTypes from './actionTypes';

import request from '../../api/request';

const baseUrl = 'https://restcountries.eu/rest/v2/all';

export const storeCountries = (countries) => ({
    type: actionTypes.STORE_COUNTRIES,
    payload: countries,
});

export const startLoading = () => ({
    type: actionTypes.START_LOADING,
});

export const setError = (error) => ({
    type: actionTypes.SET_ERROR,
    payload: error,
});

export const clearError = (error) => ({
    type: actionTypes.CLEAR_ERROR,
    payload: error,
});

export const getCountries = () => (dispatch) => {
    dispatch(startLoading());
    request
        .get(baseUrl)
        .then((resp) => {
            console.log('resp.data', resp.data);
            dispatch(storeCountries(resp.data));
        })
        .catch((error) => {
            dispatch(setError(error));
        });
};

export const setRegion = (region) => ({
    type: actionTypes.SET_REGION,
    payload: region,
});

export const clearRegion = () => ({
    type: actionTypes.CLEAR_REGION,
});

export const setCountry = (country) => ({
    type: actionTypes.SET_COUNTRY,
    payload: country,
});

export const clearCountry = () => ({
    type: actionTypes.CLEAR_COUNTRY,
});

export const setFilter = (value) => ({
    type: actionTypes.SET_FILTER,
    payload: value,
});

export const clearFilter = () => ({
    type: actionTypes.CLEAR_FILTER,
});

export const clearAll = () => (dispatch) => {
    dispatch(clearRegion());
    dispatch(clearCountry());
    dispatch(clearFilter());
};
