# Web Tic-Tac-Toe

A classic tic-tac-toe game built with vanilla HTML, CSS, and JavaScript. Play against a friend in this browser-based implementation of the timeless strategy game.

## Features

- **Two-player gameplay** - Take turns as Player One (X) and Player Two (O)
- **Interactive web interface** - Click on cells to place your moves
- **Game state management** - Automatic win detection and draw detection
- **Restart functionality** - Start a new game anytime with the restart button
- **Responsive design** - Clean, modern UI that works across devices

## How to Play

1. Open [index.html](index.html) in your web browser
2. Player One (X) goes first
3. Click on any empty cell to place your mark
4. Players alternate turns until someone wins or the board is full
5. Click "Restart Game" to play again

## Game Rules

- **Winning**: Get three of your marks in a row (horizontally, vertically, or diagonally)
- **Draw**: If all 9 cells are filled and no player has won
- **Invalid moves**: Clicking on an occupied cell won't place a mark

## Project Structure

```
├── index.html          # Main HTML structure
├── style.css           # Game styling and layout
├── script.js           # Game logic and DOM manipulation
├── README.md           # Project documentation
└── LICENSE             # MIT License
```

## Technical Implementation

The game is built using a modular architecture with separate components:

- **[`Gameboard`](script.js)** - Manages the 3x3 game board state
- **[`Cell`](script.js)** - Represents individual board cells
- **[`GameController`](script.js)** - Handles game flow, turns, and win conditions
- **[`ScreenController`](script.js)** - Manages DOM updates and user interactions

## Getting Started

1. Clone or download this repository
2. Open [index.html](index.html) in any modern web browser
3. Start playing immediately - no installation required!

## Browser Compatibility

This game works in all modern web browsers that support:
- ES6 JavaScript features
- CSS Grid
- DOM manipulation APIs

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to fork this project and submit pull requests for any improvements or bug fixes!