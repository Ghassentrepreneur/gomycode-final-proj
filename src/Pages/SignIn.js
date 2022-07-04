import React ,{useState}from 'react'
import axios from 'axios'
const SignIn = () => {
    const [user,setUser]= useState([])
    const [logIn,setLogIn]=useState({
        email:'',
        password:""
    })
    const getUsers=()=>{
        
        axios.get('http://localhost:3000/user').then(res=>
        setUser(res.data))
    }
 
      React.useEffect(()=>{
        getUsers()
   
      },[])
const [errorMessage,setErrorMessage]=useState('')
      const submitIt =(e)=>{
        e.preventDefault()
        var y = user.filter((x)=> x.email === logIn.email && x.password === logIn.password ).map(el=> el)
        
        if(y[0]){

        localStorage.setItem('id',y[0].id)
        setErrorMessage('Sign in Successful')
        }else{
            setErrorMessage('email or password is not corect check your iformation')
        }

      }
      
      return (
    <div>
       { errorMessage}
<form >
    <input type='text' placeholder='email' onChange={(e)=>setLogIn({...logIn,email:e.target.value})} />
    
    <input type='password' placeholder='password' onChange={(e)=>setLogIn({...logIn,password:e.target.value})} />
     <button onClick={(e)=> submitIt(e)}>
        save
     </button>
</form>

    </div>
  )
}

export default SignIn