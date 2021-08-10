import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "@redux/store"
import { Room } from "@api/models/room";

const initialState: Room = {
    id: "",
    creator: "",
    createAt: "",
    game: {
        isStart: false,
        isEnd: false,
        rounds: 3,
        currentRound: 1,
        currentPlayer: "",
        secondsToDraw: 30,
        secondsRemaining: 30,
        extraWords: []

    },
    players: [],
    chat: [],
    operations: [],
}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        setRoomGlobalState: (state, action: PayloadAction<any>) => {
            state.id = action.payload.id ?? state.id
            state.creator = action.payload.creator ?? state.creator
            state.createAt = action.payload.createAt ?? state.createAt
            state.game = action.payload.game ?? state.game
            state.players = action.payload.players ?? state.players
            state.chat = action.payload.chat ?? state.chat
            state.operations = action.payload.operations ?? state.operations
        },

    },
})

export const { setRoomGlobalState } = roomSlice.actions


export const selectRoom = (state: RootState) => state.roomReducer

export default roomSlice.reducer