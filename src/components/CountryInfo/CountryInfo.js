import React from 'react';
import { connect } from 'react-redux';

import './CountryInfo.scss';

const CountryInfo = ({ countries, country }) => {
    const currentCountry = countries.reduce((obj, item) => {
        return {
            ...obj,
            [item.numericCode]: item,
        };
    }, {})[country];

    const currencies = currentCountry.currencies.reduce((acc, currentValue) => {
        return currentCountry.currencies.length > 1 ? `${acc}${currentValue.name}, ` : `${acc}${currentValue.name}`;
    }, '');

    const infoList = [
        {
            text: 'Native name: ',
            value: currentCountry.nativeName,
        },
        {
            text: 'Area: ',
            value: currentCountry.area,
        },
        {
            text: 'Population: ',
            value: currentCountry.population,
        },
        {
            text: 'Capital: ',
            value: currentCountry.capital,
        },
        {
            text: 'Subregion: ',
            value: currentCountry.subregion,
        },
        {
            text: 'Currencies: ',
            value: currencies,
        },
    ];

    return (
        <div className="country-info">
            <h2>{currentCountry.name} </h2>
            <img src={currentCountry.flag} alt={currentCountry.flag} />
            {infoList.map((row) => {
                return (
                    <p key={row.text}>
                        <span>{row.text}</span>
                        {row.value}
                    </p>
                );
            })}
        </div>
    );
};

const mapStateToProps = ({ countries }) => ({
    countries: countries.countriesList,
    country: countries.country,
});

export default connect(mapStateToProps)(CountryInfo);
