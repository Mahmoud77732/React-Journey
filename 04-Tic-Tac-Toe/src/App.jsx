import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import { useState } from 'react'
import Log from './components/Log.jsx';
import { WINNING_COMBINATIONS } from './WINNING_COMBINATIONS.js';
import GameOver from './components/GameOver.jsx';

const PLAYERS = {
  'X': 'Player 1',
  'O': 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let curPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    curPlayer = 'O';
  }
  return curPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];
  for (const turn of gameTurns) {
    const { row, col } = turn.square;
    gameBoard[row][col] = turn.player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, playerNames) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = playerNames[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [playerNames, setPlayerNames] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const [hasWinner, setHasWinner] = useState(false);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, playerNames);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const curPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: curPlayer },
        ...prevTurns
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayerNames((prevNames) => ({
      ...prevNames,
      [symbol]: newName
    }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangename={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.Y}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangename={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
