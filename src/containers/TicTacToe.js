import React, {Component} from 'react';
import {Stage} from 'react-konva';
import {Board, Squares} from '../styled/TicTacToe';
import Relay from 'react-relay/classic';
import TuringTest from '../styled/TuringTest';

class TicTacToe extends Component {

  // Define a set a winning combinations of positions
  // Put in a constructor function to make it available
  // throughout the app
  constructor(props) {
    super(props)
    this.combos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

  }

    state = {
        rows: 3,
        gameState: new Array(9).fill(false),
        ownMark: 'X',
        otherMark: 'O',
        gameOver: false,
        yourTurn: true,
        winner: false,
        win: false

    }

    componentWillMount() {
      let height = window.innerHeight
      let width = window.innerWidth
      let size = (height < width) ? height * .8 : width * .8
      let rows = this.state.rows
      let unit = size / rows
      // generate x and y coordinates needed to draw the grid lines on canvas
      // using this function makes the lines dependant on rows and unit variables
      let coordinates = []
      for (let y = 0; y < rows; y++) {
          for (let x = 0; x < rows; x++) {
              coordinates.push([x*unit, y*unit])
          }
      }

      this.setState({
        size,
        rows,
        unit,
        coordinates
      })
    }

    move = (index, marker) => {
      // wrap the entire move function in setState
      // because the state is where we will hold all the info about the game
        this.setState( (prevState, props) => {
          // this is the state prior to this move function executing
          let {gameState, yourTurn, gameOver, winner} = prevState;
          yourTurn = !yourTurn;
          // add the move to the gameState array
          // splice takes the index of the array item to be modified,
          //the number of arrays to modifiy
          //and what to place in that array position
          gameState.splice(index, 1, marker);
          // check if there is a win
          let foundWin = this.winChecker(gameState)
          if(foundWin) {
            winner = gameState[foundWin[0]];
          }
          if(foundWin || !gameState.includes(false)) {
            gameOver = true;
          }
          if(!yourTurn && !gameOver) {
            this.makeAiMove(gameState)
          }

          // this is the new state we return from the function
          return {
            gameState,
            yourTurn,
            gameOver,
            win: foundWin || false,
            winner
          }
        })
    }

    makeAiMove = (gameState) => {
        // we are just trying to get to mvp (minimum viable product)
        // so we will just place a mark in at an empty positions
        // instead of developing or calling an ai api
        let otherMark = this.state.otherMark
        let openSquares = []
        // build an array of the indexes of empty squares
        gameState.forEach((square, index) => {
          // if the square is empty
          if(!square) {
            openSquares.push(index)
          }
        })
        let aiMove = openSquares[this.random(0, openSquares.length)]
        // introduce a delay to computer's move cause its thinking
        setTimeout(() => {
          this.move(aiMove,otherMark)
        }, 1000)


    }

    turingTest = () => {
        if(this.state.gameOver) {
          return(
            <TuringTest
              recordGame={this.recordGame}
            />
          )
        }
    }

    // given a min and max returns a round random number between the two
    random = (min, max) => {
      // ensure min is a round number
      min = Math.ceil(min)
      // ensure max is a round number
      max = Math.floor(max)
      return Math.floor(Math.random() * (max-min)) + min
    }

    // Compares the values in the set of arrays in gameState
    // with the values in set of the combos arrays
    // return a boolean true if a gameState array matches a combo array
    winChecker = (gameState) => {
      let combos = this.combos
      return combos.find((combo) => {
        let [a,b,c] = combo
        return (gameState[a] === gameState[b] && gameState[a] === gameState[c] && gameState[a])
      })

    }

    recordGame = (guess) => {
      console.log(guess)
    }

    render() {
      // Call state variables into the render function
      let {
      size,
      unit,
      rows,
      coordinates,
      gameState,
      win,
      gameOver,
      yourTurn,
      ownMark
    } = this.state
        return (
            <div>
              <Stage
                width={size}
                height={size}
              >
                <Board
                  unit={unit}
                  rows={rows}
                  size={size}
                />
                <Squares
                  unit={unit}
                  coordinates={coordinates}
                  gameState={gameState}
                  win={win}
                  gameOver={gameOver}
                  yourTurn={yourTurn}
                  ownMark={ownMark}
                  move={this.move}
                />
              </Stage>
              {this.turingTest()}
            </div>
        )
    }
}

export default Relay.createContainer(
    TicTacToe, {
        fragments: {
            viewer: () => Relay.QL`
            fragment on Viewer {
                user {
                    id
                }
            }
            `,
        }
    }
)
