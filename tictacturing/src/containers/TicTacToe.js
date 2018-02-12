import React, {Component} from 'react'
import {Stage} from 'react-konva' //Canvas
import {Board, Squares} from '../styled/TicTacToe'
import {random} from '../utils/utils'
import Relay from 'react-relay'
import TuringTest from '../styled/TuringTest'
import CreateGame from '../mutations/CreateGame'

class TicTacToe extends Component {
    constructor(props){
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
        gameState: new Array(9).fill(false), //fill() not supported in <= IE11
        ownMark: 'X',
        otherMark: 'O',
        gameOver: false,
        yourTurn: true,
        winner: false,
        win: false
    }

    componentWillMount(){
        let height = window.innerHeight
        let width = window.innerWidth
        let size = (height < width) ? height * .8 : width * .8
        let rows = this.state.rows
        let unit = size / rows
        let coordinates = []
        for(let y=0; y < rows; y++){
            for(let x=0; x < rows; x++){
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

    //pass clicked value and see who finishes or makes next move
    move = (marker, index) => {
        //console.log('move made', marker, index)
        this.setState((prevState, props) => {
            let {gameState, yourTurn, gameOver, winner} = prevState

            yourTurn = !yourTurn
            //replace the selected empty square with the current marker added by splicing it into the existing array
            gameState.splice(index, 1, marker)

            let foundWin = this.winChecker(gameState)

            //console.log(`winChecker: ${JSON.stringify(foundWin)}`)

            if(foundWin) {
                winner = gameState[foundWin[0]]
            }

            //if winner found OR no blank squares left, end game
            if(foundWin || !gameState.includes(false)){
                gameOver = true
            }

            if(!yourTurn && !gameOver){
                this.makeAiMove(gameState)
            }

            return {
                gameState,
                yourTurn,
                gameOver,
                win: foundWin || false,
                winner
            }
        })
    }

    //computer takes current gameState and makes a move
    makeAiMove = (gameState) => {
        let otherMark = this.state.otherMark
        let openSquares = []
        //console.log(`gameState: ${JSON.stringify(gameState)}`)
        gameState.forEach((square, index) => {
            if(!square) {
                openSquares.push(index)
            }
        })

        let aiMove = openSquares[random(0, openSquares.length)]
        setTimeout(() => {
            this.move(otherMark, aiMove)
        }, 1000)
    }

    winChecker = (gameState) => {
        let combos = this.combos
        return combos.find( combo => {
            let [a,b,c] = combo
            //console.log(gameState[a] + ', ' + gameState[b] + ', ' + gameState[c])
            return (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c])
        })
    }

    turingTest = () => {
        if(this.state.gameOver) {
            return (
                <TuringTest
                    recordGame={this.recordGame}
                />
            )
        }
    }

    recordGame = (guess) => {
        let {user} = this.props.viewer
        let {relay} = this.props
        let {winner,ownMark} = this.state

        if (user) {
            let winnerId = (winner === ownMark) ? user.id : undefined

            let guessCorrect = (guess === 'ROBOT') ? true : false
            relay.commitUpdate(
                new CreateGame({
                    user,
                    winnerId,
                    guess,
                    guessCorrect
                })
            )
        }

        this.setState({
            gameState: new Array(9).fill(false),
            gameOver: false,
            yourTurn: true,
            winner: false,
            win: false
        })
    }

  render() {
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
