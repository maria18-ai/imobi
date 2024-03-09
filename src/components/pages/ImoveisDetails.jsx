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
                const token = localStorage.getItem('token');
       
                const response = await axios.get(`http://localhost:8080/post/getPostById/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                });

                setImovel(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchImovel();
    }, [id]);

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

        <div className='icons-container'>
            <div className='top-icons'>
                <i className={`fa-solid fa-toilet-paper`}></i><span>{imovel.bathRooms}</span>
                <i className={`fa-solid fa-bed`}></i><span>{imovel.rooms}</span>
            </div>
            <div className='bottom-icons'>
                <i className={`fa-solid ${imovel.wifi ? 'fa-wifi' : 'fa-wifi-slash'}`}></i><span>{imovel.wifi ? 'Wifi Disponível' : 'Sem Wifi'}</span>
                <i className={`fa-solid ${imovel.pool ? 'fa-water-ladder' : 'fa-water-slash'}`}></i><span>{imovel.pool ? 'Piscina Disponível' : 'Sem Piscina'}</span>
            </div>
        </div>

        <h6 >{imovel.title}</h6>
        <p>Descrição do Imóvel: {imovel.description}</p>

        {/* Adicione outras informações do imóvel que você deseja exibir */}
    </div>
</div>

    );
};

export default ImoveisDetails;
