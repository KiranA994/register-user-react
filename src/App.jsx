import { useState, useEffect } from 'react'
import './App.css'
import { Button, TextField } from '@mui/material'

function App() {

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isUserName, setisUserName] = useState(true)
  const [isEmail, setisEmail] = useState(true)
  const [isPassword, setisPassword] = useState(true)

  const validate=(e)=>{
    const {name,value} = e.target
   //  regular expression to match combination of numbers in range of 0 to 9
   //  !! is used to make the expression boolean
  if(!!value.match(/^[A-Za-z]{8}$/) && name == 'username'){
    setUserName(value)
    setisUserName(true)
  }
  else if(!!value.match(/(?:.\.com)(?!.\.com)/) && name == 'email'){
    setEmail(value)
    setisEmail(true)
  }
  else if(!!value.match(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z].*[a-z]).{8}$/) && name == 'password'){
    setPassword(value)
    setisPassword(true)
  }
  else{
    if(name=='username'){
      setUserName(value)
      setisUserName(false)
    }
    else if(name=='email'){
      setEmail(value)
      setisEmail(false)
    }
    else{
      setPassword(value)
      setisPassword(false)
    }
  }

  
 }

  const handleReset = () =>{
    setUserName('')
    setEmail('')
    setPassword('')
    setisUserName(true)
    setisEmail(true)
    setisPassword(true)
  }


  const handleRegister = () =>{
    setUserName('')
    setEmail('')
    setPassword('')
    alert('User Registered succesfully')
  }


  return (
    <>
      <div className='main-container'>
        <div className='form-container rounded shadow border'>
          <form action="" className='mt-3'>
            <h3 className='text-center mt-3'>User Registration</h3>
            <div className= 'mt-3 d-flex w-100 justify-content-center align-items-center flex-column'>
            <TextField id="outlined-basic" label="Username" variant="outlined" className='w-50' 
            value={username || ''} name="username" onChange={(e)=>validate(e)} />
            {!isUserName && <p className='text-danger'>username must contain 8 alphabets</p>}
            <TextField id="outlined-basic" label="Email" variant="outlined" className='w-50 mt-3'
            value={email || ''} name="email" onChange={(e)=>validate(e)} />
            {!isEmail && <p className='text-danger email'>Enter a valid email</p>}
            <TextField id="outlined-basic" label="Password" variant="outlined" className='w-50 mt-3'
            value={password || ''} name="password" onChange={(e)=>validate(e)} />
            {!isPassword && <p className='text-danger password'>Password must contain 1 uppercase, 4 lowercase, 2 digit and 1 special character</p>}
            </div>
            <div className='d-flex justify-content-center mt-5 mb-5'>
            <Button variant="contained" color="warning" className='w-25 p-3' onClick={handleRegister}
            disabled={isUserName && isEmail && isPassword && username != '' && email != '' && password != '' 
            ? false : true}>Register</Button>
            <Button variant="outlined" color="primary"  className='w-25 p-3 ms-4'
            onClick={handleReset}>Reset</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )

}

export default App
