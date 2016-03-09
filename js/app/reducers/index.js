import {combineReducers} from 'redux'

function game(current, action) {
    console.log(action);
    switch (action.type) {
        default:
            return current || {
                    state: 'ready'
                };
    }
}

export default combineReducers({
    game
});
