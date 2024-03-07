import React from 'react'
import './Footer.css'
import logo from '../image/icon-imobi.png'

export const Footer = () => {
    return (
        <>
        <section className="footerContact">
            <div className="container">
                <div className="send flex">
                    <div className="text">
                        <h1>Dúvidas sobre nossos serviços?</h1>
                        <p>Vamos te ajudar gerenciar seu imóvel.</p>
                    </div>
                    <button className='btn5'>Tire suas dúvidas aqui!</button>
                </div>
            </div>
        </section>

        <footer>
            <div className="container">
                <div className="box">
                    <div className="logo">
                        <img src={logo} alt="" id='img'/>
                        <h2>Você precisa de ajuda com algo?</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque blanditiis quae laboriosam..</p>

                        <div className="input flex">
                            <input type="text" placeholder='Endereço de E-mail' name='' id=''/>
                            <button>
                                Enviar 
                            </button>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <h3>lorem</h3>
                    <ul>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                    </ul>
                </div>

                <div className="box">
                    <h3>lorem</h3>
                    <ul>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                    </ul>
                </div>

                <div className="box">
                    <h3>lorem</h3>
                    <ul>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className="legal">
            <span>&copy; 2024 - Maria Teodoro e Joao Machado</span>
        </div>
        </>
    )
}
