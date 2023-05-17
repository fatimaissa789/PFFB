import React from 'react'
// import './style.css'
import { Link } from "react-router-dom";

import { useFormik } from "formik";
export default function Renicial() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
     
},

validateOnBlur:false,
validateOnChange:false,
onSubmit: async values => {
  console.log(values)
},
//validate form
// validationSchema:Yup.object({
//   email: Yup.string()
//   .email("Invalid email address")
//   .required("Email est obligatoire"),

//   password: Yup.string()
//   .max(5,"doit contenir 5 characters")
//   .required("Password est obligatoire")

// }),

});
  return (
  
  <div id="test"className='container  h-full  w-full mx-auto'>
  <div >
  <div className="title p-10 flex flex-col items-center">
          <h4 className='text-5xl font-bold'>Réinitialiser mot de passe</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
          Entrez OTP pour modifier votre mot de passe.        </span>
       </div>

     <form className='max-w-[400px] w-full mx-auto rounded-lg max-h-max md:mt-8 bg-emerald-600 mt-3 mb-3  p-16 px-8' >

           <div className="textbox flex flex-col items-center gap-6">
               <div className="input text-center">
                 <span className='py-4 text-sm text-left text-white'>
                 Entrez l'OTP à 6 chiffres envoyé à votre adresse e-mail.
                 </span>
                
               </div>
               <div   {...formik.getFieldProps('password')} className="flex flex-col text-white py-2">
           
            <input
              className="p-2 rounded-lg text-black bg-white mt-2 focus:border-blue-500 focus:bg-white focus:outline-none"
              placeholder='OTP'
             
             
            />
           
          </div>
          <button className='w-32 py-2 my-4 bg-blue-600 text-white rounded-lg '>Valider</button>
           </div>

           <div className="text-center py-4">
                <Link className="text-white"  to="/reload"> Vous n'avez pas reçu OTP ? <button className='text-red-500'>Renvoyer</button></Link>
              </div>
       </form>
     

  </div>
</div>
  )
}
