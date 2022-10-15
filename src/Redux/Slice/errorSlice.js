import {createSlice} from '@reduxjs/toolkit'

export const errorSlice=createSlice({
    name:'error',//identifire of state
    initialState:{
        value:'hhh'

    },
    reducers:{
        change_error:(state,action) =>{
            state.value=action.payload.error//return value
        }
    }
})

//create actions
export const {change_error}=errorSlice.actions
export default errorSlice.reducer