import axios from 'axios'
import { ADD_HONEY, DELETE_HONEY, GET_HONEY } from '../ActionsTypes/honeyActionsTypes'

export const getHoney =()=>async(dispatch)=>{
    try {
        const res = await axios.get('http://localhost:3000/product')
        dispatch({
            type:GET_HONEY,
            payload:res.data
        })
    }catch(err){
        console.log(err)
    }
}

export const addHoney =(honey)=>async(dispatch)=>{
    try {
        const res = await axios.post('http://localhost:3000/product',{...honey})
        dispatch({
            type:ADD_HONEY,
            payload:res.data
        })
    }catch(err){
        console.log(err)
    }
}

export const deleteHoney =(id)=>async(dispatch)=>{
    try {
  await axios.delete(`http://localhost:3000/product/${id}`)
        dispatch({
            type:DELETE_HONEY,
            payload:id
        })
    }catch(err){
        console.log(err)
    }
}
 

export const updateHoney =(honey)=>async(dispatch)=>{
    try {
  await axios.put(`http://localhost:3000/product/${honey.id}`,{...honey})
        dispatch({
            type:'PUT_HONEY',
            payload:honey.id
        })
    }catch(err){
        console.log(err)
    }
}
