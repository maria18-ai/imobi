import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ImoveisDetails = () => {
    const { id } = useParams(); // Obtendo o ID do parâmetro de rota
    const [imovel, setImovel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImovel = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/post/getPostById/${id}`); // Supondo que há uma rota para buscar o imóvel pelo ID
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
        <div>
            <h2>Detalhes do Imóvel</h2>
            <p>Título: {imovel.title}</p>
            <p>Descrição: {imovel.description}</p>
            {/* Adicione outras informações do imóvel que você deseja exibir */}
        </div>
    );
};

export default ImoveisDetails;
