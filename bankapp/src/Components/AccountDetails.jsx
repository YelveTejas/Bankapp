import React, { useEffect } from 'react'

const AccountDetails = () => {
    const [data,setData]= useEffect([])
    const token =localStorage.getItem('token')
    
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  }
    useEffect(()=>{
        axios.get('http://localhost:4500/user/account',{headers})
        .then((res)=>{
          console.log(res)
        })
        },[])
  return (
    <div>AccountDetai</div>
  )
}

export default AccountDetails