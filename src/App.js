import React, {Component} from 'react';
import './App.css';
import GridCell from "./components/GridCell";

class App extends Component {

    renderGrid = () => {
        const grid = [];
        for (let y = 5; y >= 0; y--) {
            const row = [];
            for (let x = 0; x < 7; x++) {
                // create column
                row.push(<GridCell key={x} x={x} y={y} />);
            }
            // create row
            grid.push(<div key={y} className='row'>{row}</div>);
        }
        return grid;
    }

    render() {
        return (
            <div className='board'>
                <h1>Connect 4</h1>
                {this.renderGrid()}
            </div>
        )
    }
}

export default App;
