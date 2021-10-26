export interface Game {
    isStart: boolean;
    isEnd: boolean;
    rounds: number;
    currentRound: number;
    currentPlayer: string;
    currentPlayerNumber: number;
    secondsToDraw: number;
    secondsRemaining: number;
    words: string[];
    extraWords: string[];

}
