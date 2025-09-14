function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  // Create a 2d array that will represent the state of the game board
  // For this 2d array, row 0 will represent the top row and
  // column 0 will represent the left-most column.
  // This nested-loop technique is a simple and common way to create a 2d array.
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  // This will be the method of getting the entire board that our
  // UI will eventually need to render it.
  const getBoard = () => board;

  const placeToken = (row, col, player) => {
    if (row < 0 || row >= rows || col < 0 || col >= columns) return false;
    if (board[row][col].getValue() !== 0) return false;
    
    board[row][col].addToken(player);
    return true;
  };
  // This method will be used to print our board to the console.
  // It is helpful to see what the board looks like after each turn as we play,
  // but we won't need it after we build our UI
  const printBoard = () => {
    const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardWithCellValues);
  };

  // Here, we provide an interface for the rest of our
  // application to interact with the board
  return { getBoard, placeToken, printBoard };
}

/*
** A Cell represents one "square" on the board and can have one of
** 0: no token is in the square,
** 1: Player One's token,
** 2: Player 2's token
*/

function Cell() {
  let value = 0;

  // Accept a player's token to change the value of the cell
  const addToken = (player) => {
    value = player;
  };

  // How we will retrieve the current value of this cell through closure
  const getValue = () => value;

  return {
    addToken,
    getValue
  };
}

/* 
** The GameController will be responsible for controlling the 
** flow and state of the game's turns, as well as whether
** anybody has won the game
*/
function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      token: 1
    },
    {
      name: playerTwoName,
      token: 2
    }
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  // Check if player has won after the move
  const checkWin = () => {
    const b = board.getBoard();
    const t = activePlayer.token;
    // Check rows, columns, diagonals
    for (let i = 0; i < 3; i++) {
      if (b[i][0].getValue() === t && b[i][1].getValue() === t && b[i][2].getValue() === t) return true;
      if (b[0][i].getValue() === t && b[1][i].getValue() === t && b[2][i].getValue() === t) return true;
    }
    if (b[0][0].getValue() === t && b[1][1].getValue() === t && b[2][2].getValue() === t) return true;
    if (b[0][2].getValue() === t && b[1][1].getValue() === t && b[2][0].getValue() === t) return true;
    return false;
  };
  
  // Check if the board is full (for a draw)
  const checkDraw = () => {
    return board.getBoard().every(row => row.every(cell => cell.getValue() !== 0));
  };

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  const playRound = (row, col) => {
    console.log(`Placing token for ${getActivePlayer().name} at row ${row}, column ${col}...`);
    const validMove = board.placeToken(row, col, getActivePlayer().token);
    if (!validMove) {
      console.log("Invalid move, try again.");
      return; 
    }

    if (checkWin()) {
      console.log(`${getActivePlayer().name} wins!`);
      return;
    }
    if (checkDraw()) {
      console.log("It's a draw!");
      return;
    }

    // Switch player turn
    switchPlayerTurn();
    printNewRound();
  };

  // Initial play game message
  printNewRound();

  // For the console version, we will only use playRound, but we will need
  // getActivePlayer for the UI version, so I'm revealing it now
  return {
    playRound,
    getActivePlayer
  };
}

const game = GameController();