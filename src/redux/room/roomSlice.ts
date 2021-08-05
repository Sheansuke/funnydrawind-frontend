import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "@redux/store"

import { Room } from "@api/models/room";




const initialState: Room | { room: false } = {
    room: false
}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        setRoom: (state, payload: PayloadAction<any>) => {
            state.room = payload.payload.room
        },

    },
})

export const { setRoom } = roomSlice.actions


export const selectRoom = (state: RootState) => state.roomReducer

export default roomSlice.reducer