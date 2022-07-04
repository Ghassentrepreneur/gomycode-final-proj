import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../redux/Actions/contactActions'

function GetContacts() {
    const dispatch=useDispatch()
    const contacts=useSelector(state=>state.contactReducer.contacts)
    useEffect(()=>{
        dispatch(getContacts())
      },[dispatch])
      console.log(contacts)
  return (
    <div></div>
  )
}

export default GetContacts