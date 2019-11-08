import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dropToken} from "../actions";

class GridCell extends Component {
    handleClick = () => {
        if(this.checkHorizontal(this.props.board) !== undefined){

            alert (this.checkHorizontal(this.props.board) + ' wins!!!' )
        }else{

            this.props.sendTokenDrop(this.props.x);

        }
    }

    checkHorizontal = (board) => {
        // Check only if column is 3 or less
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r][c + 1] &&
                        board[r][c] === board[r][c + 2] &&
                        board[r][c] === board[r][c + 3]) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    render() {

        const board = this.props.board;
        const x = this.props.x;
        const y = this.props.y;

        let classes = 'cell';

        if (board[x][y] !== undefined) {
            if (board[x][y] === 'red') {
                classes += ' p2';
            } else {
                classes += ' p1';
            }
        }

        return (
            <div className={classes} onClick={this.handleClick}>
                <p>{this.props.x}, {this.props.y}</p>
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        board: state.board,
    };
};


const dispatchToProps = dispatch => {
    return {
        sendTokenDrop: col => dispatch(dropToken(col)),
    };
};

export default connect(stateToProps, dispatchToProps)(GridCell);