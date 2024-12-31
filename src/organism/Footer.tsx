import React,{useContext} from 'react'
import { AppContext } from '@/context/Appcontext'

export default function Footer() {

const contextvalue = useContext(AppContext);

  return (
    <div className='bg-yellow-300 p-5 text-center text-sm lg:text-lg font-semibolds leading-none'>
      Copyright © 202{contextvalue?.contchaeck} All Rights Reserved.
    </div>
  )
}
