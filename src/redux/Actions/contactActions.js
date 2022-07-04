import axios from "axios"
import { ADD_CONTACT, GET_CONTACTS } from "../ActionsTypes/contactsActionsTypes"

export const getContacts=()=>async(dispatch)=>{
     try {
         const res= await axios.get('http://localhost:3000/contacts')
         dispatch({
             type:GET_CONTACTS,
             payload:res.data
             
         })
     } catch (error) {
        console.log(error)
     }
}

export const addContact=(contact)=>async(dispatch)=>{
    try {
        const res= await axios.post('http://localhost:3000/contacts',{...contact})
        console.log(res.data)
        dispatch({
            type:ADD_CONTACT,
            payload:res.data
        })
    } catch (error) {
       console.log(error)
    }
}
