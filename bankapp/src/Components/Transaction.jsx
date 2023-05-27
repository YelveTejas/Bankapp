import { Box, Button, Table , TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Depostmodal from './Modal/Depostmodal'
import Withdrawmodel from './Modal/Withdrawmodel'

const Transaction = () => {
  const {isOpen ,onOpen ,OnClose} = useDisclosure()
const token =localStorage.getItem('token')

  const [data,setData] = useState([])

// useEffect(()=>{
//   axios.get('http://localhost:4500/user/account')
//   .then((res)=>{
//     console.log('account details',res)
//   })
// },[])

  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  }
  useEffect(()=>{
  axios.get('https://bankbackend3.onrender.com/user/transaction',{headers})
  .then((res)=>{
    //console.log(res)
    setData(res.data.transactions)
  })
  },[])
  console.log(data)
  return (
    <div>
      <Box w='50%' margin='auto' mt='3cm'>
      <TableContainer>
          <Table variant='simple'>
               <TableCaption>Account Details</TableCaption>
                <Thead>
                  <Tr>
                <Th>Date</Th>
                <Th>Amount</Th>
                <Th>Deposit</Th>
                <Th>Withdraw</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                   data.length>0 ?( data.map((e)=>(
                      <Tr>
                        <Td>{e.timestamp}</Td>
                        <Td>{e.amount}</Td>
                        <Td>
                          <Button onClick={onOpen} bgColor='white'>
                           <Depostmodal/>
                          </Button>
                        </Td>
                        <Td>
                          <Button bgColor='white'>
                           <Withdrawmodel/>
                          </Button>
                        </Td>
                      </Tr>
                    ))
                   ):(
                    <>
                    <Depostmodal/>
                    <Withdrawmodel/>
                    </>
                   )
                  }
                </Tbody>
          </Table>
      </TableContainer>
      </Box>
    </div>
  )
}

export default Transaction