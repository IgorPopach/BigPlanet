import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';

import { List } from 'react-virtualized';
import { selectRegionCountries, getRegion } from '../../store/selectors/country';
import { setCountry, setFilter } from './../../store/actions/countries';

import './Countries.scss';

const Countries = ({ countries, setCountry, region, clicked, filter, setFilter }) => {
    const filteredCountries = useMemo(
        () => countries.filter(({ name }) => name.toLowerCase().search(filter.toLocaleLowerCase()) !== -1),
        [filter, countries],
    );

    const onChangeHandler = useCallback((e) => setFilter(e.target.value), [setFilter]);

    const onRowClicked = (index) => {
        setCountry(filteredCountries[index].numericCode);
        clicked();
    };

    const rowRenderer = ({ key, index, style }) => (
        <div key={key} style={style} className="countries" onClick={() => onRowClicked(index)}>
            {filteredCountries[index].name}
        </div>
    );
    console.log({ filter, region });
    return (
        <div className="select-countries">
            <div className="sidebar-heading">
                <h6>Select Countries</h6>
                <input onChange={onChangeHandler} value={filter} className="sidebar-heading" />
            </div>
            {(filter || region) && (
                <List
                    width={250}
                    height={300}
                    rowCount={filteredCountries.length}
                    rowHeight={30}
                    rowRenderer={rowRenderer}
                />
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    countries: selectRegionCountries(state),
    region: getRegion(state),
    filter: state.countries.filter,
});

const mapDispatchToProps = (dispatch) => ({
    setCountry: (country) => dispatch(setCountry(country)),
    setFilter: (value) => dispatch(setFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
