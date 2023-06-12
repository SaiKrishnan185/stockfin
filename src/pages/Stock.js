import React from 'react'
import { Console } from '../components/Console'
import { MyChartComponent, TestChart } from '../components'

export const Stock = () => {
  return (
    <div className='pt-8  min-h-screen justify-center items-center '>
        <div className=' border-solid border-3 rounded-sm mt-6 h-4/6'>< TestChart/></div>
        < Console />
    </div>
  )
}
