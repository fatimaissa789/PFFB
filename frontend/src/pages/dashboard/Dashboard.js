/* eslint-disable no-unused-vars */
import { useNavigate  } from 'react-router-dom';
import Cards from '../../components/card/Cards';

import Navbar from '../../components/Navbar/Navbar';

let userImg =
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export default function dashboard() {

  return (
    <>
 
   <Navbar/>
     <Cards/>
    </>
    
       
  )
}
