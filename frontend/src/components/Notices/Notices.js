import React from 'react'
import  {useState, useEffect} from 'react';
import { AiOutlineDown } from "react-icons/ai";


export default function Notices() {
    const [isOpen, setOpen] = useState(false);
   
    const List = () => setOpen(!isOpen);
  
  
    
  return (
    <div className="">
    <div className="absolute mx-20  mt-8 inline-flex w-1/4 h-16 rounded-md border bg-emerald-600">
     
      <div className="absolute">
        <button
          type="button"
          // eslint-disable-next-line react/jsx-no-duplicate-props
          className= " inline-flex w-10 h-16 items-center justify-center text-xl pl-16  text-white "
          onClick={List}
        >Notices
       <div className=' text-white icons'>
    
      </div>
        </button>
       
      </div>
     
      <AiOutlineDown   onClick={List} className='inline-flex w-10 h-16 text-lg ml-96 cursor-pointer text-white'/>
      {isOpen && (
        <div className="absolute top-10 mt-4 min-w-[100%] pl-10 rounded-md border border-emerald-600 bg-white shadow-lg">
             <ul className='list-disc'>
           
                
             <li>Veuillez contacter l’éboueur  pour vider la poubelle quand celle-ci est pleine.</li>
               
             <li>Si l’ouverture de la  poubelle dépasse le temps impartie ; veuillez en faire part à la personne  concernée.</li>
           

     
     </ul>
        </div>
      )}
    </div>
  </div>
  )
}
