/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { useNavigate,NavLink  } from 'react-router-dom';
import { useState } from 'react';
import { BiExit } from "react-icons/bi";
let userImg =
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
 

export default function Navbar() { 
             // eslint-disable-next-line react-hooks/rules-of-hooks
  const[open, setOpen]= useState (false);
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  return (
    <div className="items-center bg-emerald-600  justify-between flex w-full space-x-4 pb-2 pt-4 px-3">
    {/* logo */}
    <div className=''>
   
    <div className='relative'>
      <img 
      onClick={()=>setOpen(!open)}
      src={userImg}
      alt= 'user'
      className= "h-20 w-20 object-cover border-4 border-gray-400 align-items ml-16 rounded-full cursor-pointer " 
      />
         <p className='align-items  ml-16'>nom prenom</p>
      {
        open && (
          <div className="bg-white p-4 w-52 ml-16  shadow-lg absolute ">
        
          <ul>
           
                
                <li Link="/" onClick={()=>{setOpen(false)
                  ;navigate("/reload")} } className="p-2 text-lg cursor-pointer  rounded hover:bg-green-200 "  > Editer</li>
                    
                  
                

          
          </ul>
        </div>

        )
      }
   
    </div>

  </div>
  <div className='text-5xl cursor-pointer ml-10 text-slate-50 w-11 h-14'>
  <NavLink
    className="navbar-item"
    activeClassName="is-active"
    to="/"
    exact
>
<BiExit/>
</NavLink>
 

  </div>

  
    </div>
  )
}
