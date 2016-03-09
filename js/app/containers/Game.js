import React from 'react';

import {startGame} from '../actions/index';
import Button from '../components/Button';

import {connect} from 'react-redux';

const connection = connect((state) => state.game);

function Game(game) {
    switch (game.state) {
        case 'ready':
            return (
                <Button label="Start Game" onClick={() => game.dispatch(startGame())}/>
            );
        case 'running':
            return (<p>TODO</p>);
        case 'over':
            return (<p>TODO</p>);
        default:
            game.dispatch(startGame());
            return <p>starting...</p>
    }
}

Game.propTypes = {
    state: React.PropTypes.oneOf([
        'ready',
        'running',
        'over'
    ]).isRequired
};

export default connection(Game);