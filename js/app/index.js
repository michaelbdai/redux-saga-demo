import React from 'react';
import ReactDOM from 'react-dom';

import reducers from './reducers/index';
import {createStore} from 'redux';

import style from './style.css';
import {Provider} from 'react-redux';
import Game from './containers/Game';

document.addEventListener('DOMContentLoaded', () => {
    const store = createStore(reducers);

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
