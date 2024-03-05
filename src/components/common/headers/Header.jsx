import React from 'react'
import logo from '../../image/icon-imobi.png'
import { Link } from 'react-router-dom'

import './Header.css'

export const Header = () => {
    return (
        <>
            <header>
                <div className='nav-flex'>
                    <div className='logo'>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="nav">
                        <Link to="/" className='link'>Home</Link>
                        <Link to="imoveis" className='link'>Imóveis</Link>
                        <Link to="planos" className='link' >Planos</Link>
                        <Link className='link' >Sobre</Link>
                    </div>
                    
                    <div className="button flex">
                        <Link to="login">
                            <button className='btn1'>
                            <i class="fa-solid fa-arrow-right-to-bracket"></i>
                            Entrar
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}
