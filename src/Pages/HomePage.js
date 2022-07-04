 
import '../App.css';
import {useState, useEffect } from 'react';
import {getHoney,addHoney,deleteHoney} from '../redux/Actions/Action'
import { useDispatch, useSelector } from 'react-redux';
import UpdateModal from '../UpdateModal'
import NavBar from './NavBar';

function HomePage() {
    const dispatch=useDispatch()
    const honey=useSelector(state=>state.honeyReducer.honey)
    console.log(honey)
    useEffect(()=>{
      dispatch(getHoney())
    },[dispatch])
    const [prod,setProd]=useState({
      title:'',
      image:'',
      price:''
    })
    const addProd=()=>{
     
      dispatch(addHoney(prod))
    } 
    const deleteProd=(id)=>{
     
      dispatch(deleteHoney(id))
    } 
    
  
     return (
      <div className="container-fluid">
   <div className='row'>
   <NavBar/>
   
   {
         honey.map(({image,title,price,id})=>
           <div className='col-4 text-center'> <div class=" card" key={id}>
  
           <img src={image} width='190' alt='' />
     <div className='content'> <h1>{title}</h1>
          <p>{price}</p></div>
<div className='btnSec'> <button className='delete' onClick={()=>deleteProd(id)}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>
          <UpdateModal image={image} title={title} price={price} id={id} /> </div>

          </div> </div>
          )
       }
 
        <form onSubmit={()=>addProd()}>
         <input type='text' onChange={(e)=>setProd({...prod,title:e.target.value})} />
         <input type='text' onChange={(e)=>setProd({...prod,image:e.target.value})} />
         <input type='text' onChange={(e)=>setProd({...prod,price:e.target.value})} />
         <input type='submit'   />  
       </form>
      </div>
      </div>
    );
  }
  
  export default HomePage;