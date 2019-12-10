import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Column, Table, SortDirection, SortIndicator } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import { selectRegionCountries } from './../../store/selectors/country';

import './CountriesTable.scss';
import { setCountry } from './../../store/actions/countries';

const CountriesTable = ({ setCountry, ...props }) => {
    const [countries, sortCountries] = useState(props.countries);
    const [sortBy, setSortBy] = useState('name');
    const [sortDirection, setSortDirection] = useState(SortDirection.ASC);

    const labels = [
        {
            label: 'Name',
            dataKey: 'name',
            width: 200,
        },
        {
            label: 'Capital',
            dataKey: 'capital',
            width: 200,
        },
        {
            label: 'Population',
            dataKey: 'population',
            width: 200,
        },
        {
            label: 'Area',
            dataKey: 'area',
            width: 200,
        },
        {
            label: 'NativeName',
            dataKey: 'nativeName',
            width: 200,
        },
    ];

    const sort = ({ sortBy, sortDirection }) => {
        const List = [...countries].sort((a, b) => {
            if (typeof a[sortBy] === 'number') {
                return a[sortBy] - b[sortBy];
            } else if (typeof a[sortBy] === 'string') {
                const valueA = a[sortBy].toUpperCase();
                const valueB = b[sortBy].toUpperCase();
                if (valueA < valueB) {
                    return -1;
                }
                if (valueA > valueB) {
                    return 1;
                }
                return 0;
            } else {
                return 1;
            }
        });

        const sortedList = sortDirection === SortDirection.DESC ? List.reverse() : List;
        console.log(sortedList);
        sortCountries(sortedList);
        setSortBy(sortBy);
        setSortDirection(sortDirection);
    };

    const headerRenderer = ({ label, dataKey, sortBy, sortDirection }) => {
        return (
            <div>
                {label}
                {sortBy === dataKey && <SortIndicator sortDirection={sortDirection} />}
            </div>
        );
    };

    useEffect(() => sortCountries(props.countries), [props.countries]);

    const rowClassName = ({ index }) => {
        if (index < 0) {
            return 'headerRow';
        } else {
            return index % 2 === 0 ? 'evenRow' : 'oddRow';
        }
    };

    return (
        <div className="show-table">
            <Table
                {...{ sort, sortBy, sortDirection }}
                width={300}
                height={850}
                headerHeight={30}
                rowHeight={30}
                rowCount={countries.length}
                rowGetter={({ index }) => countries[index]}
                onRowClick={({ index }) => setCountry(countries[index].numericCode)}
                rowClassName={rowClassName}
            >
                {labels.map(({ label, dataKey, width }) => (
                    <Column
                        {...{ label, dataKey, width }}
                        key={dataKey}
                        disableSort={false}
                        headerRenderer={headerRenderer}
                    />
                ))}
            </Table>
        </div>
    );
};

const mapStateToProps = (state) => ({
    countries: selectRegionCountries(state),
});

const dispatchMapToProps = (dispatch) => ({
    setCountry: (value) => dispatch(setCountry(value)),
});

export default connect(mapStateToProps, dispatchMapToProps)(CountriesTable);
