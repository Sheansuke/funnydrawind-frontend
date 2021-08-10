import { configureStore } from '@reduxjs/toolkit'


// reducers
import playerReducer from "@redux/player/playerSlice";
import roomIdReducer from "@redux/roomId/roomIdSlice";
import roomReducer from "@redux/room/roomSlice";


const reducer = {
    playerReducer,
    roomIdReducer,
    roomReducer
}

export const store = configureStore({
    reducer,
    devTools: true,
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch