import React from 'react';
import img1 from '../images/img1.png'
import { RiDashboardFill } from 'react-icons/ri';
import { FaTasks } from 'react-icons/fa';
import { AiOutlineForm } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';
import { BiFileBlank } from 'react-icons/bi';
import { RiCustomerService2Fill } from 'react-icons/ri';

const SideComponent = () => {
    return (
        <div id='menu'>
            <div className='logo'>
                <img src='https://www.rutilea.com/wp-content/uploads/2021/08/cropped-CMYK_Rutilea_transparent-1-300x78.png'></img>
            </div>
            <div className='items'>
                
            <a href=''><li><i><RiDashboardFill /></i> Dashboeard</li></a>
                <a href=''><li><i><RiCustomerService2Fill /></i>Operators</li></a>
                <a href=''><li><i><FaTasks /></i>Tasks</li></a>
                <a href=''><li><i><AiOutlineForm /></i>Resorces</li></a>
                <a href=''><li><i><BsCardChecklist /></i>Reports</li></a>
                <a href=''><li><i><BiFileBlank /></i>Support</li></a>
                <a href=''><li><i><BiFileBlank /></i>FAQ</li></a>
                
            </div>
            <div >
                <img className='sidecompic' src={img1}></img>
            </div>
            
        </div>
    );
};

export default SideComponent;