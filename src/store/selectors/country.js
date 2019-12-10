import { createSelector } from 'reselect';

export const getCountries = (state) => state.countries.countriesList;
export const getRegion = (state) => state.countries.region;

export const getUniqRegions = (countries) =>
    Array.from(new Set(countries.map(({ region }) => region))).filter((val) => !!val.trim());

export const getRegionCountries = (countries, selectedRegion) =>
    countries.filter(({ region }) => (selectedRegion ? selectedRegion === region : true));

export const selectRegions = createSelector(getCountries, getUniqRegions);

export const selectRegionCountries = createSelector(getCountries, getRegion, getRegionCountries);
