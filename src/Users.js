import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {adduserdata,   deleteuserdata,    edituserdata,  } from './Usersslice'

const Users = () => {
  const [name,setname] = useState('')
  const[id,setid] = useState('')
  const {data} = useSelector((state)=>state.users)
  const dispatch = useDispatch()
  return (
    <div>
      usersdata:
      {data.length>0 && data.map((user,index)=>{
        return <p key={index}>{user.id}...{user.name}
        <button onClick={()=>{setname(user.name);setid(user.id)}}>Edit</button>
        <button onClick={()=>dispatch(deleteuserdata(user.id))}>Delete</button>
        </p>
      })}

      <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
    <button onClick={()=>{
      if(id){
        dispatch(edituserdata({id:id,name}))
        setid('')
        setname('')
      }
      else{
        dispatch(adduserdata({name}))
        setname('')
      }
      
    }}>
      {id?'update':'save'}
      </button>
    </div>
  )
}

export default Users