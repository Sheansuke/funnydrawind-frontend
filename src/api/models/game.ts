export interface Game {
    isStart: boolean;
    isEnd: boolean;
    rounds: number;
    currentRound: number;
    currentPlayer: string;
    secondsToDraw: number;
    secondsRemaining: number;
    extraWords: string[];

}
