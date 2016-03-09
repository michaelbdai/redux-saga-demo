import Immutable from 'immutable';
import { combineReducers } from 'redux'
import { start, next, points, end } from '../actions/game';

const startType = start().type;
const nextType = next().type;
const pointsType = points().type;
const endType = end().type;

function game(current, action) {
    switch (action.type) {
        case startType:
            return current
                .set('plusPoints', 0)
                .set('minusPoints', 0)
                .set('state', 'running');
        case nextType:
            return current
                .set('isHot', action.isHot)
                .set('disabled', false);
        case pointsType:
            const next = current.set('disabled', true);
            if (action.points > 0) {
                return next.set('plusPoints', current.get('plusPoints') + action.points)
            } else {
                return next.set('minusPoints', current.get('minusPoints') - action.points)
            }
        case endType:
            return current.set('state', 'over');
        default:
            return current || Immutable.Map({
                    state: 'ready'
                });
    }
}

export default combineReducers({
    game
});
