import {createSlice} from '@reduxjs/toolkit'

export const dataSlice=createSlice({
    name:'data',//identifire of state
    initialState:{
        value:{
            id:0,
            tittle: "",
            s_description: "",
            author: "",
            date: "",
            readtime: "24",
            quotation: "",
            p1: "",
            p2: "",
            p3: "",
            tag: "",
            photo: "",
        }
    },
    reducers:{
        change_data:(state,action) =>{
            state.value=action.payload.data//return value
        }
    }
})

//create actions
export const {change_data}=dataSlice.actions
export default dataSlice.reducer