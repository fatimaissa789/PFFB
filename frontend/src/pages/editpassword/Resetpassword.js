import React from 'react'
// import './style.css'
import { Link } from "react-router-dom";

import { useFormik } from "formik";
import { resetPasswordValidation } from '../helper/validate';
export default function Resetpassword() {
  const formik = useFormik({
    initialValues: {
    
      password: "",
      confirm_pwd:""
     
},
validate: resetPasswordValidation,
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
          <h4 className='text-5xl font-bold'>Modifier mot de passe</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
          Entrez OTP pour modifier votre mot de passe.        </span>
       </div>

     <form className='max-w-[400px] w-full mx-auto rounded-lg max-h-max md:mt-8 bg-emerald-600 mt-3 mb-3  p-10 px-8' >

           <div className="textbox flex flex-col items-center gap-6">
           <div className="flex flex-col text-white ">
            <label>Mot de passe</label>
            <input
              className="p-2 rounded-lg text-black bg-white mt-2 focus:border-blue-500 focus:bg-white focus:outline-none"
              type="password"
           
              {...formik.getFieldProps('password')}
              
            />
                <p className="text-red-600 block font-sans  pb-2">{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>
          </div>
          <div className="flex flex-col text-white ">
            <label> Confirmer Mot de passe</label>
            <input
              className="p-2 rounded-lg text-black bg-white mt-2 focus:border-blue-500 focus:bg-white focus:outline-none"
              type="password"
           
              {...formik.getFieldProps('confirm_pwd')}
              
            />
                <p className="text-red-600 block font-sans  pb-2">{formik.touched.password && formik.errors.password ? formik.errors.exist : ""}</p>
          </div>
          <button className='w-32 py-2 my-4 bg-blue-600 text-white rounded-lg '>Modifier</button>
           </div>

          
       </form>
     

  </div>
</div>
  )
}
