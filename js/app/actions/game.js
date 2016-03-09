export const start = () => {
    return {
        type: 'GAME_START'
    };
};

export const next = (index, isHot) => {
    return {
        type: 'GAME_NEXT',
        index,
        isHot
    };
};

export const end = (index) => {
    return {
        type: 'GAME_END',
        index
    };
};

export const points = (points) => {
    return {
        type: 'GAME_POINTS',
        points
    };
};
