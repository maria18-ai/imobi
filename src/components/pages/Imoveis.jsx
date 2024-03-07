import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Imoveis.css';

export const Imoveis = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasToken, setHasToken] = useState(localStorage.getItem("token"));
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/post/getAllPosts');
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setHasToken(token);
    }, []); 

    const handleLogout = () => {
        localStorage.removeItem("token");
        setHasToken(null);
    };

    const handleInserirImovel = () => {
        navigate('/posts');
    };

    const redirectToDetails = (id) => {
        navigate(`/imoveis/details/${id}`);
    };

    if (loading) return <div className='loading'>Carregando...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='container-imoveis'>
            <h1 className='heading-imoveis'>O imóvel ideal você encontra aqui!</h1>
            <p>Navegue entre os melhores imóveis da região</p>

            <div className='div-imoveis-container'>
                <div className="imoveis-list">
                    {data.map(photo => (
                        <div key={photo.id} className='imovel-card' onClick={() => redirectToDetails(photo.id)}>
                            <img src={`data:image/jpeg;base64,${photo.imageBase64}`} alt={photo.title} className='post-image' />
                            <div className="card-content">
                                <h3>{photo.title}</h3>
                                <p>{photo.description}</p> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='button flex'>
                {hasToken && (
                    <button className='inserir-imovel-button' onClick={handleInserirImovel}>Inserir Imóvel</button>
                )}
            </div>
        </div>
    );
};
