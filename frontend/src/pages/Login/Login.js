import React from "react";
//remplace les hooks
import { useFormik } from "formik";
import trees from "../../assets/login.jpg";

import { Link } from "react-router-dom";
import {  registerValidation } from "../helper/validate";

export default function Login() {
  //logiques formik

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
     
},
validate:registerValidation,
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
//console.log(formik.errors)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="bg-white flex flex-col justify-center">
        <form onSubmit= {formik.handleSubmit}
        className="max-w-[400px] w-full mx-auto rounded-lg max-h-max md:mt-8 bg-emerald-600 mt-3 mb-3  p-20 px-8">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Connexion
          </h2>
          <div className="flex flex-col text-white py-2">
            <label>Email</label>
            <input
              className="p-2 rounded-lg text-black bg-white mt-2 focus:border-blue-500 focus:bg-white focus:outline-none"
              type="text"
              {...formik.getFieldProps('email')}
            />
            <p className="text-red-600 block font-latoBold text-sm pb-2">{ formik.errors.email ? formik.errors.email : ""}</p>
          </div>
          <div className="flex flex-col text-white py-2">
            <label>Mot de passe</label>
            <input
              className="p-2 rounded-lg text-black bg-white mt-2 focus:border-blue-500 focus:bg-white focus:outline-none"
              type="password"
           
              {...formik.getFieldProps('password')}
              
            />
                <p className="text-red-600 block font-sans  pb-2">{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>
          </div>

          <button className="w-5/12 ml-20 my-5 py-2  rounded-full bg-emerald-600 border-white border-2  text-white font-semibold " >
            Se connecter

          </button>
          <div className="text-center py-4">
                <Link className="text-blue-500"  to="/reload"> <span className=' font-sans text-white'>Mot de passe oublié ? </span></Link>
              </div>
        </form>
      </div>

      <div className="w-full pt-16 space-x-0 hidden md:block">
        <p className=" text-6xl text-emerald-600 mt-3">Ensemble pour un </p>
        <p className=" text-6xl text-emerald-600"> Sénegal Zéro </p>
        <p className=" text-6xl text-emerald-600"> Déchet .</p>
        <img className="w-96 h-96" src={trees} alt="/" />
      </div>
    </div>
  );
}
