import { Room } from "@api/models/room";
import IPlayer from "@api/models/player";

// firebase
import { updateSecondsToDraw } from "@api/fetch/updateSecondsToDraw";




export class Game {
    room: Room
    player: IPlayer;
    timer: any

    constructor(room: Room, player: IPlayer) {

        this.room = room
        this.player = player
        this.startSecondsToDraw()

    }

    private startSecondsToDraw() {
        if (this.player.name === this.room.creator) {

            this.timer = setTimeout(() => {


                if (this.room.game.secondsRemaining > 0) {
                    updateSecondsToDraw(this.room, 0, "decrement", 1, false)


                } else {
                    this.changeCurrentPlayer()
                }
            }
                , 1000)
        }
    }
    private stopSecondsToDraw() {
        clearTimeout(this.timer)
    }

    private changeCurrentPlayer() {
        const playersLength = this.room.players.length
        const currentPlayerNumber = this.room.game.currentPlayerNumber
        this.stopSecondsToDraw()

        // if currentPlayerNumber if < total players change to next player but if is = total players then change to first player
        if (currentPlayerNumber < playersLength - 1) {
            updateSecondsToDraw(this.room, currentPlayerNumber + 1, "decrement", 1, true)
        } else if (currentPlayerNumber === playersLength - 1) {
            updateSecondsToDraw(this.room, 0, "decrement", 1, true)
        }
    }
}

