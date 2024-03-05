import { Heading } from '../common/headers/Heading'
import './Hero.css'

export const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className="container-banner">

                    <Heading 
                    title='Encontre seu proximo imóvel'
                    subtitle='Diversos tipos de imóveis por todo o Brasil'/>

                    <form action="" className="flex">

                        <div className="box">
                            <span>Cidade</span>

                            <input 
                            className='input-search'
                            type="text" 
                            name="cidade" 
                            id="cidade" 
                            placeholder='Locação'/>
                        </div>

                        <div className="box">
                            <span>Tipo do Imóvel</span>

                            <input 
                            className='input-search'
                            type="text" 
                            name="tipo-imovel" 
                            id="tipo-imovel" 
                            placeholder='Imóvel'/>
                        </div>

                        <div className="box">
                            <span>Preço Ideal</span>

                            <input 
                            className='input-search'
                            type="text" 
                            name="preço" 
                            id="preço" 
                            placeholder='Preço'/>
                        </div>

                        <div className="box">
                            <h4>Filtro de Imóveis</h4>
                        </div>

                        <button className='btn'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        </button>

                    </form>
                </div>
            </section>
        </>
    )
}
