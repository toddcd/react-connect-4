export function dropToken(col) {
    return {
        type: 'DROP_TOKEN',
        payload: col,
    }
};