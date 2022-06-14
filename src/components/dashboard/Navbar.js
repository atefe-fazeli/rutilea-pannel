import React, { useState } from 'react';
import img2 from '../images/img2.png';
import { BsBell } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';
import img5 from "../images/img5.png";
import BoardParent from './BoardParent';


const Navbar = () => {
    return (
        <div id='interface'>
            <div className='navigation'>
                <div className='profile'>
                    <i><BsBell /></i>
                    <img src={img5}></img>
                    <div className='profileadmin'>
                        <h4>Farnoosh Jamali <span><BsChevronDown /></span></h4>
                        <p>Admin</p>
                    </div>
                </div>
            </div>
            <div className='taskcontainer'>
            <img src={img2} className='taskimg'/>
                <div className='taskleftsec'>
                    <h1>Tasks</h1>
                    <p>An explanation text here would be nice and helpful.</p>
                </div>
                <div className='taskbtncontainer'>
                    
                    <button className='taskbtn'>ADD A NEW TASK</button>
                </div>
            </div>
            <BoardParent />
        </div>
    );
};

export default Navbar;