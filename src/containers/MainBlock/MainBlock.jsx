import React from 'react';
import { connect } from 'react-redux';

import CountriesTable from './../../components/CountriesTable/CountriesTable.jsx';
import CountryInfo from './../../components/CountryInfo/CountryInfo';

import './MainBlock.scss';

const MainBlock = ({ country, region }) => {
    return (
        <main role="main" className="col-sm-9 ml-auto col-lg-10">
            {region && country === '' ? <CountriesTable /> : null}
            {!region && country === '' && <h2>Find your country! ;)</h2>}
            {country && country !== '' && <CountryInfo />}
        </main>
    );
};

const mapStateToProps = ({ countries }) => ({
    country: countries.country,
    region: countries.region,
});

export default connect(mapStateToProps)(MainBlock);
