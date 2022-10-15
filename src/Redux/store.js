import {configureStore} from '@reduxjs/toolkit'
import dataSlice from './Slice/dataSlice'
import errorSlice from './Slice/errorSlice'

export default configureStore({
    reducer:{
        data:dataSlice,
        error:errorSlice
    }
})