import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <div className={style.applicationWrapper}>
            <h1>Redux Saga Demo</h1>
            <p>Hello World!</p>
        </div>,
        document.getElementById('appContainer')
    );
});
