// import {HiMenuAlt4} from 'react-icons-hi';
// import {AiOutlineClose} from 'react-icons-ai';
import React from "react";
import logo from '../../images/logo3.png'

const NavBarItem = ({title, classprops}) =>{
    console.log(title);
    return(
        <li className={`mx-4 cursor-pointer ${classprops}`}>
            {title}
        </li>
    );
}

const NavBar = () =>{
    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt='logo' className='w-32 cursor-pointer'/>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item,index)=>(
                    <NavBarItem key={item+index} title={item}/>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;