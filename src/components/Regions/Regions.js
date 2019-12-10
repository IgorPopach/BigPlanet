import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCountries, setRegion, clearCountry } from '../../store/actions/countries';
import { selectRegions } from '../../store/selectors/country';
import ListItem from './../UI/ListItem/ListItem';

import './Regions.scss';

const Regions = ({ fetchCountries, regions, activeRegion, setRegion, clearCountry }) => {
    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    const onHandlerClick = (region) => {
        setRegion(region);
        clearCountry();
    };

    return (
        <div className="list-group">
            {regions.map((region) => {
                return (
                    <ListItem
                        key={region}
                        name={region}
                        isActive={region === activeRegion}
                        onClick={() => onHandlerClick(region)}
                    />
                );
            })}
        </div>
    );
};

Regions.propTypes = {
    countries: PropTypes.array,
    getCountries: PropTypes.func,
};

const mapStateToProps = (state) => ({
    regions: selectRegions(state),
    activeRegion: state.countries.region,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCountries: () => dispatch(getCountries()),
    setRegion: (region) => dispatch(setRegion(region)),
    clearCountry: () => dispatch(clearCountry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Regions);
