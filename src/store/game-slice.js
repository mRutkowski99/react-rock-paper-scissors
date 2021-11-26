import { createSlice } from "@reduxjs/toolkit";

const OPTIONS = ["scissors", "paper", "rock", "lizard", "spock"];

//Key value wins with array's values
const RESULTS = {
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  rock: ["lizard", "scissors"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

const getComputerChoice = (options, playerChoice) => {
  const random = Math.floor(Math.random() * options.length);

  if (options[random] !== playerChoice) return options[random];
  else return getComputerChoice(options, playerChoice);
};

const getWinner = (playerChoice, computerChoice, results) => {
  if (results[playerChoice].includes(computerChoice)) return "player";
  else return "computer";
};

const initialState = {
  gameStarted: false,
  playerChoice: null,
  computerChoice: null,
  winner: null,
  points: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    startGame(state, action) {
      //If game already started prevent from starting new one
      if (state.gameStarted) return;

      state.gameStarted = true;

      //Get player choice and random generated choice of computer
      const playerChoice = action.payload;
      state.playerChoice = playerChoice;
      state.computerChoice = getComputerChoice(OPTIONS, playerChoice);
      state.winner = getWinner(playerChoice, state.computerChoice, RESULTS);
    },

    resetGame(state) {
      const points = state.points;
      state = {
        ...initialState,
        points: points,
      };
    },

    addPoint(state) {
      if (state.winner === "player") state.points++;
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice;
