import React, { useState } from 'react';
import axios from 'axios';
import './Post.css';

export const Post = () => {
    const [wifi, setWifi] = useState(false);
    const [pool, setPool] = useState(false);

    const handleWifiChange = (event) => {
        setWifi(event.target.value === 'yes');
    };

    const handlePoolChange = (event) => {
        setPool(event.target.value === 'yes');
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        const formData = new FormData(event.target);

        const postData = {
            title: formData.get('title'),
            description: formData.get('description'),
            zipcode: formData.get('zipcode'),
            neighborhood: formData.get('neighborhood'),
            city: formData.get('city'),
            state: formData.get('state'),
            country: formData.get('country'),
            postType: "FOR_SALE",
            number: parseInt(formData.get('number')),
            rooms: parseInt(formData.get('rooms')),
            bathrooms: parseInt(formData.get('bathrooms')),
            wifi: wifi,
            pool: pool,
            userId: 1 
        };

        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('http://localhost:8080/post/create', postData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Dados enviados com sucesso!');
            
        } catch (error) {
            console.error('Erro ao enviar os dados:', error.message);
        }
    };

    return (
        <>
            <section className='posts'>
                <div className='container-posts'>
                    <section className='header'>Registre seu Imóvel</section>

                    <form onSubmit={handleSubmit}>
                        <div className="form first">
                            <div className="details ID">
                                <span id='span'>Detalhes do imóvel</span>

                                <div className="fields">
                                    <div className="input-field">
                                        <label>Título</label>
                                        <input type="text" name="title" id="title" placeholder='Dê um título para seu imóvel' required/>
                                    </div>
                                    
                                    <div className="input-field">
                                        <label>Descrição</label>
                                        <input type="text" name="description" id="description" placeholder='Defina seu imóvel' required/>
                                    </div>


                                    <div className="input-field">
                                        <label>CEP</label>
                                        <input type="text" name="zipcode" id="zipcode" placeholder='Digite o CEP' required/>
                                    </div>

                                    <div className="input-field">
                                        <label>Bairro</label>
                                        <input type="text" name="neighborhood" id="neighborhood" placeholder='Digite o bairro' required/>
                                    </div>

                                    <div className="input-field">
                                        <label>Cidade</label>
                                        <input type="text" name="city" id="city" placeholder='Digite a cidade' required/>
                                    </div>

                                    <div className="input-field">
                                        <label>Estado</label>
                                        <input type="text" name="state" id="state" placeholder='Digite o estado' required/>
                                    </div>

                                    <div className="input-field">
                                        <label>País</label>
                                        <input type="text" name="country" id="country" placeholder='Digite o país' required/>
                                    </div>

                                    <div className="input-field">
                                        <label>Número</label>
                                        <input type="number" name="number" id="number" placeholder='Número do imóvel' required/>
                                    </div>
                                </div>
                            </div>

                            <div className="details personal">
                                <span id='span'>Atributos do imóvel</span>

                                <div className="fields">
                                    <div className="input-field">
                                        <label>Quartos</label>
                                        <input type="number" name="rooms" id="rooms" placeholder='Quant. de quartos' className='details-input' required/>
                                    </div>

                                    <div className="input-field">
                                        <label>Banheiros</label>
                                        <input type="number" name="bathrooms" id="bathrooms" placeholder='Quant. de banheiros' className='details-input' required/>
                                    </div>

                                    <div className="input-field">
                                        <p> WIFI?</p>
                                        <label>
                                            <input type="radio" name="wifi" value="yes" onChange={handleWifiChange} checked={wifi} required/> Sim
                                        </label>
                                        <label>
                                            <input type="radio" name="wifi" value="no" onChange={handleWifiChange} checked={!wifi} required/> Não
                                        </label>
                                    </div>

                                    <div className="input-field">
                                        <p> Piscina?</p>
                                        <label>
                                            <input type="radio" name="pool" value="yes" onChange={handlePoolChange} checked={pool} required/> Sim
                                        </label>
                                        <label>
                                            <input type="radio" name="pool" value="no" onChange={handlePoolChange} checked={!pool} required/> Não
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className='btn-form-imovel'>
                                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Post;
