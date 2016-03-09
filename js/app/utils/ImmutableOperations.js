import Immutable from 'immutable';

function resolvePath(path) {
    if (typeof path === 'string') {
        return path.split('.');
    }
    return path;
}

export function $get(realm, path) {
    const result = resolvePath(path).reduce((prev, cur) => prev[cur] || prev.get(cur), realm);

    if (typeof result === 'object' && !result instanceof Immutable.Iterable) {
        console.warn(`object at path ${path} is not Immutable, but will be converted.`, result);
        return Immutable.fromJS(result);
    }

    return result;
}
