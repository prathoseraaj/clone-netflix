import React, { useState } from 'react'
import './App.scss';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {

    const [isscrolled, setIsscrolled] = useState(false);
    window.onscroll =() => {
        setIsscrolled(window.pageYOffset === 0? false : true);
        return() => (window.onscroll =null);
    }
  return (
    <div className= {isscrolled ? "navbar scrolled" :"navbar"}>
        <div className='container'>
            <div className='left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='netflixlogo'/>
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>My list</span>
            </div>
            <div className='right'>
                <IoSearch className='icon'/>
                <span>ABC</span>
                <IoIosNotifications className='icon'/>
                <img src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
                <div className='profile'>
                    <IoMdArrowDropdown className='icon'/>
                    <div className='profile'>
                        <div className='options'>
                            <span>settings</span>
                            <span>logout</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar
