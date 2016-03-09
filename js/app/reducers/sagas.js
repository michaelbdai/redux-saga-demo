import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects'
import { start, next, end } from '../actions/game';

const numberOfSteps = 20;
const minDuration = 50;
const maxDuration = 500;

function getDuration(index) {
    // linear decrease of duration during game
    return ((minDuration - maxDuration) / numberOfSteps) * index + maxDuration;
}

function randomBoolean(probability) {
    return Math.random() < probability;
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* nextStep(action) {
    yield delay(getDuration(action.index));

    const nextIndex = action.index + 1;
    if (nextIndex < numberOfSteps) {
        yield put(next(action.index + 1, randomBoolean(0.5)));
    } else {
        yield put(end());
    }
}

const startType = start().type;
const nextType = next().type;

function* onGameStart() {
    yield* takeEvery(startType, () => put(next(0), randomBoolean(0.7)));
}

function* onGameNext() {
    yield* takeEvery(nextType, nextStep);
}

export default [
    onGameStart,
    onGameNext
];