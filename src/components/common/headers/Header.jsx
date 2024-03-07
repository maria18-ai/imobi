import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export const Header = () => {
    const [hasToken, setHasToken] = useState(localStorage.getItem("token"));

    const handleLogout = () => {
        localStorage.removeItem("token");
        setHasToken(null);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        setHasToken(token);
    }, [hasToken]); // Atualizar sempre que hasToken mudar

    
    return (
        <>
            <header>
                <div className='nav-flex'>
                    <div className='logo'>
                        {/* <img src={logo} alt="logo" /> */}
                    </div>

                    <div className="nav">
                        <Link to="/" className='link'>Home</Link>
                        <Link to="imoveis" className='link'>Imóveis</Link>
                        <Link to="planos" className='link'>Planos</Link>
                        <Link to="sobre" className='link'>Sobre</Link>
                    </div>

                    {hasToken ? (
                        <div className="button flex">
                            <button className='btn2' onClick={handleLogout}>
                                <i className="fa-regular fa-user"></i>
                                Sair
                            </button>
                        </div>
                    ) : (
                        <div className="button flex">
                            <Link to="login">
                                <button className='btn1'>
                                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                    Entrar
                                </button>
                            </Link>
                        </div>
                    )}
                </div>

            </header>
        </>
    )
}

export default Header;
