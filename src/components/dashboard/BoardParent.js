import React, { useState } from 'react';
import Board from './Board';
import { BiSearch } from 'react-icons/bi';
import { AiFillCalendar } from 'react-icons/ai';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { MdOutlineNavigateBefore } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';
import { RiEditBoxFill } from 'react-icons/ri';



import img9 from '../images/img9.png';
import img8 from '../images/img8.png';
import img7 from '../images/img7.png';

const BoardParent = () => {

    const[search,setSearch]=useState(""); 
    const changeHandler=(event)=>{
        setSearch(event.target.value)
        } 

    const[board,setBoard]=useState([
        {id:27,sp:<img src={img9}/>,name:"Task name",PROGRESS:<progress  value="28" max="100"> 32% </progress>, STATE:"In Progress", STARTDATE:"2022-05-29",DUEDATE:"2022-05-29",HARDWARE:1,EDIT:<RiEditBoxFill />},
        {id:26,sp:<img src={img8}/>,name:"Task name",PROGRESS:<progress  value="100" max="100"> 32% </progress>, STATE:"Completed", STARTDATE:"2022-05-29",DUEDATE:"2022-05-29",HARDWARE:3,EDIT:<RiEditBoxFill />},
        {id:25,sp:<img src={img9}/>,name:"Task name",PROGRESS:<progress  value="100" max="100"> 32% </progress>, STATE:"In Progress", STARTDATE:"2022-05-29",DUEDATE:"2022-05-29",HARDWARE:4,EDIT:<RiEditBoxFill />},
        {id:24,sp:<img src={img7}/>,name:"Task name",PROGRESS:<progress  value="28" max="100"> 32% </progress>, STATE:"In Progress", STARTDATE:"2022-05-29",DUEDATE:"2022-05-29",HARDWARE:1,EDIT:<RiEditBoxFill />},
        {id:23,sp:<img src={img8}/>,name:"Task name",PROGRESS:<progress  value="28" max="100"> 32% </progress>, STATE:"Not Started", STARTDATE:"2022-05-29",DUEDATE:"2022-05-29",HARDWARE:5,EDIT:<RiEditBoxFill />},
        {id:22,sp:<img src={img8}/>,name:"Task name",PROGRESS:<progress  value="0" max="100"> 32% </progress>, STATE:"Not Started", STARTDATE:"-",DUEDATE:"2022-05-29",HARDWARE:0,EDIT:<RiEditBoxFill />},
        {id:21,sp:<img src={img9}/>,name:"Task name",PROGRESS:<progress  value="0" max="100"> 32% </progress>, STATE:"Not Started", STARTDATE:"-",DUEDATE:"2022-05-29",HARDWARE:0,EDIT:<RiEditBoxFill />},
        {id:18,sp:<img src={img9}/>,name:"Task name",PROGRESS:<progress  value="28" max="100"> 32% </progress>, STATE:"In Progress", STARTDATE:"2022-05-29",DUEDATE:"2022-05-29",HARDWARE:8,EDIT:<RiEditBoxFill />},
        {id:20,sp:<img src={img8}/>,name:"Task name",PROGRESS:<progress  value="28" max="100"> 32% </progress>, STATE:"In Progress", STARTDATE:"2022-05-29",DUEDATE:"2022-05-29",HARDWARE:4,EDIT:<RiEditBoxFill />},
        {id:19,sp:<img src={img9}/>,name:"Task name",PROGRESS:<progress  value="28" max="100"> 32% </progress>, STATE:"In Progress", STARTDATE:"2022-05-29",DUEDATE:"2022-05-29",HARDWARE:1,EDIT:<RiEditBoxFill />},
    ]);
  
    return(
       <div className='boardMainContainer'>
            <div className='boardFirstSec'>
               <div className='inputContainer'> 
                   <BiSearch />
                   <input placeholder='Search Tasks by name/ID' />
                </div>
                <button>Status<span><BsChevronDown /></span></button>
                <button>Starting Date<span><AiFillCalendar /></span></button>
                <button>Due Date<span><AiFillCalendar /></span></button>
            </div>
           
            <table>
               <tr>
                   <th>ID<span></span></th>
                   <th>NAME<span></span></th>
                   <th>PROGRESS<span></span></th>
                   <th>STATE</th>
                   <th>START DATE<span></span></th>
                   <th>DUE DATE<span></span></th>
                   <th>HARDWARE</th>
                   <th>EDIT</th>
               </tr>

               {board.map((item)=><Board  data={item}/>)}
           </table>
        <div class="btn-group">
            <button><MdOutlineNavigateBefore/></button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button><MdOutlineNavigateNext/></button>
        </div>
    </div>
    );
};

export default BoardParent;