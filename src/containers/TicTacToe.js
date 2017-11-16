import React, {Component} from 'react';
import {Stage} from 'react-konva';

class TicTacToe extends Component {

    state = {
        rows: 3

    }

    componentWillMount () {
        // When my comonent mounts - do these things
        let height = window.innerHeight
        let width = window.innerwidth
        let size = (height < width) ? height * .8 : width * .8
        let rows = this.state.rows
        let units = size / rows

        this.setState({
            size,
            rows,
            units
        })
    }

    move = () => {
        // placeholder
    }

    makeAiMove = () => {
        // placeholder
    }

    turingTest = () => {
        // placeholder
    }

    recordGame = () => {
        // placeholder
    }

    render() {
        return (
            <div>
                <Stage
                    width={}
                    height={}
                >
                    {/* <Board/> */}
                    {/* <Squares/> */}
                </Stage>
            </div>
        )
    }
}

export default TicTacToe;
