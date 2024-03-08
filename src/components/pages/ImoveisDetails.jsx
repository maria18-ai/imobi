import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ImoveisDetails.css'; // Importando o arquivo CSS

const ImoveisDetails = () => {
    const { id } = useParams(); // Obtendo o ID do parâmetro de rota
    const [imovel, setImovel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImovel = async () => {
            try {
                // Obtendo o token de alguma forma (por exemplo, armazenado em localStorage)
                const token = localStorage.getItem('token');

                const response = await axios.get(`http://localhost:8080/post/getPostById/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}` // Adicionando o token ao cabeçalho de autorização
                    }
                });

                setImovel(response.data); // Definindo o imóvel encontrado no estado
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchImovel();
    }, [id]); // Dependência do useEffect para refletir alterações no ID da rota

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Error: {error.message}</div>;

    if (!imovel) return <div>Imóvel não encontrado.</div>;

    return (
    
        <div className='contentContainer'>
            <div className='imageContent'>
            <img src={`data:image/jpeg;base64,${imovel.imageBase64}`}
                alt={imovel.title}
                className='post-image' />
            </div>
            <div className='detailsContainer'>
            <h2>Este local Oferece:</h2>

            <div className='images-container'>
                <img src="" alt="bathrooms"/><span>{imovel.bathrooms}</span>
                <img src="" alt="rooms"/><span>{imovel.rooms}</span> 
                <img src="" alt="Wifi"/>
                <img src="" alt="Pool"/>
            </div>

            <p>Título: {imovel.title}</p>
            <p>Descrição: {imovel.description}</p>

            {/* Adicione outras informações do imóvel que você deseja exibir */}
        </div>
        </div>
        
    );
};

export default ImoveisDetails;
