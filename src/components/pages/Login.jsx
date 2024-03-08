import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Navigate } from 'react-router-dom';

export const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [registroData, setRegistroData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        userType: 'COMMON',
        
    });

    const [showLoginForm, setShowLoginForm] = useState(true); // Estado para controlar a exibição do formulário de login

    const [isToken, setIsToken] = useState(null); // Estado para armazenar o token

    const handleRegistroSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/auth/register', registroData);
            const data = response.data;
            console.log('Resposta da API de registro:', data);

            if (data.response) {
                console.log('Mensagem da API de registro:', data.response);
                setShowLoginForm(true); // Mostrar o formulário de login após o registro
            } else {
                console.log(data);
            }
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
        }
    
    };

    // função de login
    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/auth/login', loginData);
            const { token } = response.data;
            console.log(token)

            if (token) {
                localStorage.setItem('token', token);
                console.log('Token JWT recebido após o login:', token);
                setIsToken(token);
                // requisição do tipo get || endpoint /token || setar return no localstorage
            } else {
                console.error('Token JWT não recebido após o login');
            }

        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    // Redirecionamento se o token for válido
    if (isToken) {
        return <Navigate to="/perfil" replace />;
    }


    return (
        <div className='container-register'>

            {showLoginForm ? (
                <form onSubmit={handleLoginSubmit} className='form-container'>
                    <h1>Entrar</h1>
                    <input type="email" 
                        id="email" 
                        name="email" 
                        placeholder='Digite seu e-mail'
                        value={loginData.email} 
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})} required />

                    <input type="password" 
                        id="senha" 
                        name="senha" 
                        placeholder='Digite sua senha'
                        value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})} 
                        required />

                    <input type="submit" 
                        value="Entrar" 
                        className='button'/>
                    <p onClick={toggleForm}>Não possui uma conta? Criar</p> {/* Mensagem de criar conta */}
                </form>

            ) : (
                <form onSubmit={handleRegistroSubmit} className='form-container'>
                    <h1>Criar Conta</h1>
                    <input type="text" 
                        id="nome" 
                        name="nome" 
                        placeholder='Digite seu nome'
                        value={registroData.name} onChange={(e) => setRegistroData({...registroData, name: e.target.value})} 
                        required />

                    <input type="tel" 
                        id="tel" 
                        name="tel" 
                        placeholder='Digite seu telefone'
                        value={registroData.phone} 
                        onChange={(e) => setRegistroData({...registroData, phone: e.target.value})} 
                        required />

                    <input type="email" 
                        id="emailRegistro" 
                        name="emailRegistro" 
                        placeholder='Digite seu e-mail'
                        value={registroData.email} 
                        onChange={(e) => setRegistroData({...registroData, email: e.target.value})} 
                        required />

                    <input type="password" 
                        id="senhaRegistro" 
                        name="senhaRegistro" 
                        placeholder='Digite sua senha'
                        value={registroData.password} onChange={(e) => setRegistroData({...registroData, password: e.target.value})} 
                        required />

                    <input type="submit" 
                        value="Registrar" 
                        className='button'/>
                    <p onClick={toggleForm}>Já possui uma conta? Entrar</p> {/* Mensagem de entrar */}
                </form>
            )}
        </div>
    );
};

export default Login;
