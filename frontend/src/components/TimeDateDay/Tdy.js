/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import  {useState, useEffect} from 'react'
import { FaBeer } from 'react-icons/fa';
import Notices from '../Notices/Notices';

export default function Tdy() {
    const[open, setOpen]= useState (false);
  
    // Heure
    const cTime = new Date().toLocaleTimeString()
    // eslint-disable-next-line no-undef
    const [time, setTime] = useState(cTime)

    const updateTime = () =>{
        const newTime = new Date().toLocaleTimeString()
        setTime(newTime)
    }

    useEffect(() =>{
        const timeInterval = setInterval(updateTime, 1000)
        return () =>{
            clearInterval(timeInterval)
        }

    }, [time])



    // date
    const cDate = new Date().toLocaleDateString()
    const [date, setDate] = useState(cDate)

    const updateDate = () =>{
        const newDate = new Date().toLocaleDateString()
        setDate(newDate)
    }

    useEffect(() =>{
        const dateInterval = setInterval(updateDate, 1000)
        return () =>{
            clearInterval(dateInterval)
        }

    }, [date])




    //Jour
    
    const cDay = new Date().getDay()
    const [day, setDay] = useState(cDay)
    const weekDays = ['Dimanche', 'Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi']

    // const updateDay = () =>{
    //     const newDay = new Date().getDay()
    //     setDay(newDay)
    // }

    useEffect(() =>{
        const dayInterval = setInterval(updateTime, 1000)
        return () =>{
            clearInterval(dayInterval)
        }

    }, [day])

  return (
   <React.Fragment>
      <section>
                <div className="bg-emerald-600 w-96 h-96 mt-10 mx-auto rounded-full text-white flex justify-center items-center">
                    <div>
                        <div className='text-xl uppercase text-center'>
                            <p>{weekDays[day]}</p>
                        </div>

                        <div className="text-6xl">
                            <p>{time}</p>
                        </div>

                        <div className='text-xl flex justify-end'>
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
       </section>

  <Notices/>
     </React.Fragment>
  )
}
