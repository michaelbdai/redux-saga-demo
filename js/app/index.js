import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import redux from './reducers/redux';
import sagas from './reducers/sagas';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import style from './style.css';
import { Provider } from 'react-redux';
import Game from './containers/Game';

document.addEventListener('DOMContentLoaded', () => {
    const store = createStore(
        redux,
        applyMiddleware(
            createSagaMiddleware(...sagas)
        )
    );

    ReactDOM.render(
        <div className={style.applicationWrapper}>
            <h1>Redux Saga Demo</h1>

            <Provider store={store}>
                <Game />
            </Provider>
        </div>,
        document.getElementById('appContainer')
    );
});
