import './Post.css'

export const Post = () => {
    return (
        <>
        <section className='posts'>
        <div className='container-posts'>
            <section className='header'>Registre seu Imóvel</section>

            <form>
                <div className="form first">
                    <div className="details ID">
                        <span id='span'>Detalhes do imóvel</span>

                        <div className="fields">
                            <div className="input-field">
                                <label>Título</label>
                                <input type="text" name="title" id="title" placeholder='Dê um título para seu imóvel'/>                                
                            </div>

                            <div className="input-field">
                                <label>CEP</label>
                                <input type="text" name="zipcode" id="zipcode" placeholder='Digite o CEP'/>                                
                            </div>

                            <div className="input-field">
                                <label>Bairro</label>
                                <input type="text" name="neighborhood" id="neighborhood" placeholder='Digite o bairro'/>                                
                            </div>

                            <div className="input-field">
                                <label>Cidade</label>
                                <input type="text" name="city" id="city" placeholder='Digite a cidade'/>                                
                            </div>

                            <div className="input-field">
                                <label>Estado</label>
                                <input type="text" name="state" id="state" placeholder='Digite o estado'/>                                
                            </div>

                            <div className="input-field">
                                <label>País</label>
                                <input type="text" name="country" id="country" placeholder='Digite o país'/>                                
                            </div>

                            <div className="input-field">
                                <label>Número</label>
                                <input type="number" name="number" id="number" placeholder='Número do imóvel'/>                                
                            </div> 
                        </div>
                    </div>

                    <div className="details personal">
                        <span id='span'>Atributos do imóvel</span>

                        <div className="fields">
                            <div className="input-field">
                                <label>Quartos</label>
                                <input type="number" name="rooms" id="rooms" placeholder='Quant. de quartos' className='details-input'/>                                
                            </div>

                            <div className="input-field">
                                <label>Banheiros</label>
                                <input type="number" name="bathrooms" id="bathrooms" placeholder='Quant. de banheiros' className='details-input'/>                                
                            </div>

                            <div className="input-field">
                                <p> WIFI?</p>
                                <label>Sim</label>
                                <input type="radio" name="yes-wifi" id="yes-wifi"/> 
                                
                                <label>Não</label>
                                <input type="radio" name="no-wifi" id="no-wifi"/> 
                            </div>

                            <div className="input-field">
                                <p> Piscina?</p>
                                <label>Sim</label>
                                <input type="radio" name="yes-pool" id="yes-pool"/> 
                                
                                <label>Não</label>
                                <input type="radio" name="no-pool" id="no-pool"/>                                
                            </div>

                            <button className='btn-form-imovel'>
                            <i class="fa-solid fa-arrow-right-to-bracket"></i>
                            Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
</section>
        </>
    )
}
