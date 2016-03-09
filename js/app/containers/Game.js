import React from 'react';
import { $get } from '../utils/ImmutableOperations';

import { start, points } from '../actions/game';
import Button from '../components/Button';

import {connect} from 'react-redux';

const connection = connect((state) => $get(state, 'game').toJS());

function Game(game) {
    const intro = (
        <p>
            Click the button if it says "Yes". <br/>
            +1 point for correct click, -1 otherwise.
        </p>
    );
    const startButton = (
        <Button label="Start Game" onClick={() => game.dispatch(start())}/>
    );

    switch (game.state) {
        case 'ready':
            return (
                <div>
                    {intro}
                    {startButton}
                </div>
            );
        case 'running':
            return (
                <div>
                    {intro}
                    <Button label={game.isHot ? "Yes" : "No"} onClick={() =>
                        game.dispatch(points(game.isHot ? 1 : -1))
                    } disabled={game.disabled}/>
                </div>
            );
        case 'over':
            return (
                <div>
                    <p>Game over!</p>
                    <p>
                        You got {game.plusPoints - game.minusPoints} points: {game.plusPoints} - {game.minusPoints}.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </p>
                    {startButton}
                </div>
            );
        default:
            return <p>error</p>
    }
}

Game.propTypes = {
    state: React.PropTypes.oneOf([
        'ready',
        'running',
        'over'
    ]).isRequired,
    isHot: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    plusPoints: React.PropTypes.number,
    minusPoints: React.PropTypes.number
};

export default connection(Game);