
import React from 'react'
import Tdy from '../TimeDateDay/Tdy';
import vide from "../../assets/vide.jpg";

export default function Cards() {
  return (
    <div class="grid grid-cols-3 gap-4 overflow-auto  md:grid-cols-3  ">
      <div className="pl-20">
      <p className='pl-10 pt-5 text-xl'>Etat de la poubelle:</p>
        <div class="columns-1  border-black ">
          <img class="   " src={vide} alt="vide" />
        </div>
      </div>
      <div className="bg-white"><Tdy/></div>

      <div className="">
      <div className=" pl-20 ">
        <p className='pl-10 pt-5 text-xl'>Alerte:</p>
        <div class="columns-1  border-black ">
        <img class="   " src={vide} alt="vide" />
        </div>
      </div>
      </div>
    </div>
  )
}
