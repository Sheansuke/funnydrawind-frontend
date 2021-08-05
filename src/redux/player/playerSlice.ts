import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {

    PlayerPerfilProps,
} from "@components/PlayerPerfil/PlayerPerfil";

import type { RootState } from "@redux/store"

const initialState: PlayerPerfilProps = {
    avatarUrl: "",
    name: "",
    points: 0,
    rank: 0,
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlayer: (state, payload: PayloadAction<PlayerPerfilProps>) => {
            state.avatarUrl = payload.payload.avatarUrl;
            state.name = payload.payload.name;
            state.points = payload.payload.points
            state.rank = payload.payload.rank;
        },

    },
})

export const { setPlayer } = playerSlice.actions


export const selectPlayer = (state: RootState) => state.playerReducer

export default playerSlice.reducer