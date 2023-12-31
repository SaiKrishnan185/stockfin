import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from "../asset/logo.png"

export const Header = () => {

    const activeClass = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    const inActiveClass = "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

  return (
    <div>    
        <nav className=" fixed w-full z-20 top-0 left-0 bg-black  border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
            <img src= {Logo} className="h-12 mr-3" alt="TradeWorld logo"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">TradeWorld</span>
        </Link>
        <div className="flex md:order-2">
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
                <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActiveClass} end>Home</NavLink>
            </li>
            <li>
                <NavLink to="/Stock" className={({isActive}) => isActive ? activeClass : inActiveClass}>Live Trade</NavLink>
            </li>
            </ul>
        </div>
        </div>
        </nav>

    </div>
  )
}
