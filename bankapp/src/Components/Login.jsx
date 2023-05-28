import React from 'react'
import { Alert, Box, Button, Center, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios  from 'axios'

const Login = () => {
  const [loading,setLoading] = useState(false)
  const login = {
    username:'',
    password:""
  }
  const [data,setData] = useState(login)
  const navigate = useNavigate()

  const cahtch=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
const submit=()=>{
  
  setLoading(false)
  axios.post('https://bankbackend3.onrender.com/login',data)
  .then((res)=>{
    setLoading(false)
    localStorage.setItem('token',(res.data.token))
    if(res.data.token){
      alert('Login Successfull')
    navigate('/tras')
    }
  })
}

  return (
    <div>
      <Center>
       <Text fontSize='30px' fontWeight='medium'fontFamily='sans-serif'>AAPNA BANK</Text>
      </Center>
        <Box w='30%' h='auto' margin='auto' mt='3cm'  p='10px' boxShadow='md'> 

        <FormControl>
       
      
       <Input name='username'  onChange={(e)=>cahtch(e)} placeholder='Email' mt='10px'></Input>
      
       <Input name='password'  onChange={(e)=>cahtch(e)} placeholder='password' mt='10px'></Input>
       <Button isLoading={loading}  mt='10px' w='full' onClick={submit}>Login</Button>
        </FormControl>
        </Box>
    </div>
  )
}

export default Login