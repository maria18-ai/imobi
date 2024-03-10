import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importando o componente Link
import './Profile.css';
import axios from 'axios';

import profileImg from '../image/profile-photo.jpg';

export const Profile = () => {
    const [hasToken, setHasToken] = useState(localStorage.getItem("token"));
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setHasToken(token);
    }, [hasToken]); // Atualizar sempre que hasToken mudar

    const handleLogout = () => {
        localStorage.removeItem("token");
        setHasToken(null);
    };

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8080/auth/token`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) return <div className='loading'>Carregando...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <div className="container">
                <div className="container-profile">
                    <img src={profileImg} alt="Foto de Perfil" />
                    <h3>{data.name}</h3>
                    <div className='list-user'>
                        <p><span>Telefone: </span>{data.phone}</p>
                        <p><span>E-mail: </span>{data.email}</p>
                    </div>
                </div>
            </div>

            <div className='logOut-container'>
                <div className="button flex">
                    {/* Utilizando o componente Link para redirecionar para "/" */}
                    <Link to="/" className='btn-logOut' onClick={handleLogout}>
                        <i class="fa-solid fa-right-from-bracket"></i>
                        Sair
                    </Link>
                </div>
            </div>
        </>
    )
}
