import { Box, Button, Center, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios  from 'axios'

const Signup = () => {
  
  const signup = {
    name:'',
    username:'',
    password:"",
    role:"customer"

  }
  const [data,setData] = useState(signup)


  const cahtch=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
const submit=()=>{
 
  axios.post('https://bankbackend3.onrender.com/signup',data)
  .then((res)=>{
    console.log(res)
  })
}


  return (
    <div>
      <Center>
       <Text fontSize='30px' fontWeight='medium'fontFamily='sans-serif'>AAPNA BANK</Text>
      </Center>
        <Box w='30%' h='auto' margin='auto' mt='3cm'  p='10px' boxShadow='md'> 

        <FormControl>
       
       <Input name='name' onChange={(e)=>cahtch(e)} placeholder='Name' mt='10px'></Input>
      
       <Input name='username'  onChange={(e)=>cahtch(e)} placeholder='Email' mt='10px'></Input>
      
       <Input name='password'  onChange={(e)=>cahtch(e)} placeholder='password' mt='10px'></Input>
       <Button  mt='10px' w='full' onClick={submit}>Sign Up</Button>
       <Text align='center' mt='10px' fontSize='medium' fontWeight='md'>or</Text>
       <Link to='/login'>
       <Text  mt='10px' w='full'>If you have an account <span  style={{color:'blue'}}><Link to='/login'>Login</Link></span></Text>
       </Link>
        </FormControl>
        </Box>
    </div>
  )
}

export default Signup