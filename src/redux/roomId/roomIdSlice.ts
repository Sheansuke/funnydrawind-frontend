import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "@redux/store"



interface roomIdState {
    roomId: string
}
const initialState: roomIdState = {
    roomId: ''
}

export const roomIdSlice = createSlice({
    name: 'roomId',
    initialState,
    reducers: {
        setRoomId: (state, payload: PayloadAction<roomIdState>) => {
            state.roomId = payload.payload.roomId
        },

    },
})

export const { setRoomId } = roomIdSlice.actions


export const selectRoomId = (state: RootState) => state.roomIdReducer

export default roomIdSlice.reducer