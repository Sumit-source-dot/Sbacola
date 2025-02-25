import React from 'react'
import Logo from '../../assets/images/logo.webp'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import CountryDrop from '../CountryDrop';


const Header = () => {
  return (
    <div>
      <div className='headerRow'>
        <div className='topRow bg-blue'>
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <strong>COVID 19</strong> epidemic, orders may be processed with a slight delay
            </p>
          </div>
        </div>
        {/* Day-3 ... Creating second Row  */}
        <header className='header'>
          <div className='container'>
            <div className='row'>

              <div className='logoCompany d-flex align-items-center col-sm-2'>
                <Link to={'/'}> <img src={Logo} alt="Company Image" /></Link>
              </div>

              <div className='col-sm-10 d-flex align-items-center part-2'>
                <CountryDrop />
                {/* Day-4 Work Search BOX */}
                <div className='headerSearch ms-3 me-3'>
                  <input type="text" placeholder='Search for products...' />
                  <Button><IoSearch /></Button>
                </div>

                <div className='part-3 d-flex align-items-center ml-auto'>
                  <Button className='circle me-3'><LuUserRound /></Button>
                  <div className='cart d-flex align-items-center'>
                    <span className='price'>$10.00</span>
                    <div className='position-relative ms-2'>
                      <Button className='circle'><IoBagOutline /></Button>
                      <span className='count d-flex align-items-center justify-content-center'>3</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            </div>
        </header>
      </div>
    </div>
  )
}

export default Header;