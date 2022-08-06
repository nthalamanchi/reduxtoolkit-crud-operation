import {configureStore} from '@reduxjs/toolkit'
import userreducer from "./Usersslice"

export const store = configureStore({
    reducer:{
        users:userreducer
    }
})