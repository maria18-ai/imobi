import React, { useState } from 'react';
import axios from 'axios';
import './Post.css';

export const Post = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        zipcode: '',
        neighborhood: '',
        city: '',
        state: '',
        country: '',
        number: '',
        rooms: '',
        bathrooms: '',
        wifi: false,
        pool: false
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleWifiChange = (event) => {
        setFormData({ ...formData, wifi: event.target.value === 'yes' });
    };

    const handlePoolChange = (event) => {
        setFormData({ ...formData, pool: event.target.value === 'yes' });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const postData = {
            ...formData,
            postType: "FOR_SALE",
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

    const nextStep = () => {
        setStep(step + 1);
    };

    const previousStep = () => {
        setStep(step - 1);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="details ID">
                        <span className='span'>Detalhes do imóvel</span>

                        <div className="fields">
                            <div className="input-field">
                                <label>Título</label>
                                <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder='Dê um título para seu imóvel' required />
                            </div>

                            <div className="input-field">
                                <label>CEP</label>
                                <input type="text" name="zipcode" value={formData.zipcode} onChange={handleInputChange} placeholder='Digite o CEP' required />
                            </div>

                            <div className="input-field">
                                <label>Bairro</label>
                                <input type="text" name="neighborhood" value={formData.neighborhood} onChange={handleInputChange} placeholder='Digite o bairro' required />
                            </div>

                            <div className="input-field">
                                <label>Cidade</label>
                                <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder='Digite a cidade' required />
                            </div>

                            <div className="input-field">
                                <label>Estado</label>
                                <input type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder='Digite o estado' required />
                            </div>

                            <div className="input-field">
                                <label>País</label>
                                <input type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder='Digite o país' required />
                            </div>

                            <div className="input-field">
                                <label>Número</label>
                                <input type="number" name="number" value={formData.number} onChange={handleInputChange} placeholder='Número do imóvel' required />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="details personal">
                        <span className='span'>Atributos do imóvel</span>

                        <div className="fields">
                            <div className="input-field">
                                <label>Quartos</label>
                                <input type="number" name="rooms" value={formData.rooms} onChange={handleInputChange} placeholder='Quant. de quartos' className='details-input' required />
                            </div>

                            <div className="input-field">
                                <label>Banheiros</label>
                                <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleInputChange} placeholder='Quant. de banheiros' className='details-input' required />
                            </div>

                            <div className="input-field textarea-field">
                                <label>Descrição</label>
                                <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder='Defina seu imóvel' rows="4" required></textarea>
                            </div>

                            <div className="input-field">
                                <p> WIFI?</p>
                                <label>
                                    <input type="radio" name="wifi" value="yes" onChange={handleWifiChange} checked={formData.wifi} required /> Sim
                                </label>
                                <label>
                                    <input type="radio" name="wifi" value="no" onChange={handleWifiChange} checked={!formData.wifi} required /> Não
                                </label>
                            </div>

                            <div className="input-field">
                                <p> Piscina?</p>
                                <label>
                                    <input type="radio" name="pool" value="yes" onChange={handlePoolChange} checked={formData.pool} required /> Sim
                                </label>
                                <label>
                                    <input type="radio" name="pool" value="no" onChange={handlePoolChange} checked={!formData.pool} required /> Não
                                </label>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <section className='posts'>
                <div className='container-posts'>
                    <section className='header'>Registre seu Imóvel</section>

                    <form onSubmit={handleSubmit}>
                        <div className="form first">
                            {renderStep()}
                            {step !== 1 && (
                                <button type="button" className='btn-form-imovel' id='back' onClick={previousStep}>
                                    <i className="fa-solid fa-arrow-left"></i>
                                    Voltar
                                </button>
                            )}
                            {step !== 2 ? (
                                <button type="button" className='btn-form-imovel' id='next' onClick={nextStep}>
                                    <i className="fa-solid fa-arrow-right"></i>Próximo
                                </button>
                            ) : (
                                <button type="submit" className='btn-form-imovel'>
                                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                    Enviar
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Post;
