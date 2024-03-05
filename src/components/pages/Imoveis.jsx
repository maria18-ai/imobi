import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Imoveis.css'

export const Imoveis = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className='loading'>Carregando...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='container-imoveis'>
            <h1 className='heading-imoveis'>O imovel ideal você encontra aqui!</h1>
            <p>Naveque entre os melhores imovéis da região</p>

            <div className='div-imoveis-container'>
                <div className="imoveis-list">
                    {data.map(photo => (
                        <div key={photo.id} className='imovel-card'>
                        <img src={photo.thumbnailUrl} alt={photo.title}/>

                        <div className="card-content">
                            <h3>{photo.title}</h3>
                            <p>Info
                                Info
                                Info</p> 
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



