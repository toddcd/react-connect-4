import {createStore} from 'redux';

const initial = {
    current: 'red',
    winner: '',
    board: [
        [],[],[],[],[],[],[],
    ],
};

function reducer(state, action) {
    if(action.type === 'DROP_TOKEN'){
        console.log('dropping token' + action.payload);
        const token = state.current;
        const col = state.board[action.payload].concat(token)
        const board = state.board.slice();

        board[action.payload] = col;

        return {
            winner: state.winner,
            current: state.current === 'red' ? 'yellow' : 'red',
            board: board
        }
    }

    return state;
}

export default createStore(reducer, initial);