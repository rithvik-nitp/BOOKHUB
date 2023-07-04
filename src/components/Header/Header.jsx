import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>your virtual haven, providing a one-stop destination for all your literary needs. We're passionate about books, and we want to share that passion with you. So, join us on this incredible journey, immerse yourself in captivating stories, and let the magic of books transport you to new worlds.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header