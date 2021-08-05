import { configureStore } from '@reduxjs/toolkit'
import playerReducer from "@redux/player/playerSlice";
import roomIdReducer from "@redux/roomId/roomIdSlice";
import roomReducer from "@redux/room/roomSlice";

export const store = configureStore({
    reducer: {
        playerReducer,
        roomIdReducer,
        roomReducer
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch