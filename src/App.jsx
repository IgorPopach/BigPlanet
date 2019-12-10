import React from 'react';
import { connect } from 'react-redux';

import MainBlock from './containers/MainBlock/MainBlock.jsx';
import Burger from './components/Menu/Menu.jsx';
import { clearAll } from './store/actions/countries';

import './App.scss';
const App = ({ goHome }) => {
    return (
        <div className="App">
            <header className="fixed-top">
                <h1 onClick={goHome}>Big Planet</h1>
            </header>
            <div className="container-fluid">
                <div className="row">
                    <Burger />
                    <MainBlock />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ countries }) => ({
    countries: countries.countriesList,
});

const mapDispatchToProps = (dispatch) => ({
    goHome: () => dispatch(clearAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
