import React from 'react';
import logo from "../../assets/logo.png"
const Header = () => {
    return (
        <header className=''>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center lg:mt-[5px]'>
                    <a href="#">
                        <img src={ logo } alt="logo" />
                    </a>
                    <button className='btn btn-sm'>
                       <a href="https://wa.me/201141826327?text=">Work with me</a>
                       </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
