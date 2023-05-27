import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
  } from '@chakra-ui/react'
import axios from 'axios'

const Depostmodal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const depositdata = {
        amount:'',
        type:'deposit'
    }
    const [data,setData] = useState(depositdata)
    const token =localStorage.getItem('token')
    const  getdata=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
    const headers = {
        'Content-Type': 'application/json',
        Authorization: token,
      }
  const deposit_amount=()=>{
    axios.post('https://bankbackend3.onrender.com/user/deposit',data,{headers})
    .then((res)=>{
        console.log(res)
        alert(res.data.message)
        window.location.reload()
    })
 
  }
  return (
    <>
    <Button onClick={onOpen}>Deposit</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
           <Input placeholder='Enter Amount'
             name = 'amount'
             borderBottom='1px' 
             borderColor='blue'
             onChange={(e)=>getdata(e)}
              >
           </Input>
           <Button mt='10px' size='md' onClick={deposit_amount} >Deposit</Button>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
        
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default Depostmodal