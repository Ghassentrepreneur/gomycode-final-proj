import { Button } from 'bootstrap'
import React from 'react'
import {getHoney,addHoney,deleteHoney,updateHoney} from './redux/Actions/Action'
import {Modal}from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
const UpdateModal = ({title,price,image,id}) => {
    const dispatch=useDispatch()
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
        const [prod,setProd]=React.useState({
            id:id  ,
            title:title,
            image:image,
            price:price
          })
          const putProd=()=>{
   
            dispatch(updateHoney(prod))
          } 
  return (
    <div><button className='delete' onClick={handleShow}>
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
  </button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>     <form onSubmit={()=>putProd()}>
       <input type='text' defaultValue={prod.title} onChange={(e)=>setProd({...prod,title:e.target.value})} />
       <input type='text' defaultValue={prod.image} onChange={(e)=>setProd({...prod,image:e.target.value})} />
       <input type='text' defaultValue={prod.price} onChange={(e)=>setProd({...prod,price:e.target.value})} />
       <input type='submit'  />

     </form></Modal.Body>
    <Modal.Footer>
 
    </Modal.Footer>
  </Modal>
 </div>
  )
}

export default UpdateModal