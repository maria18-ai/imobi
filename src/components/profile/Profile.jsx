import { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';

import profileImg from '../image/profile-photo.jpg'

export const Profile = () => {

    const [hasToken, setHasToken] = useState(localStorage.getItem("token"));
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const handleLogout = () => {
    //     localStorage.removeItem("token");
    //     setHasToken(null);
    // };

    useEffect(() => {
        const token = localStorage.getItem("token");
        setHasToken(token);
    }, [hasToken]); // Atualizar sempre que hasToken mudar

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // Obtendo o token de alguma forma (por exemplo, armazenado em localStorage)
                const token = localStorage.getItem('token');

                const response = await axios.get(`http://localhost:8080/auth/token`, {
                    headers: {
                        Authorization: `Bearer ${token}` // Adicionando o token ao cabeçalho de autorização
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
                    <h3>Mina Imoveis</h3>

                    <div className='list-user'>
                        <p><span>Telefone: </span>{data.phone}</p>
                        <p><span>E-mail: </span>{data.email}</p>
                    </div>
                </div>

            </div>
        </>
    )
}
