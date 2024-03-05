import React from 'react'
import { Heading } from '../common/headers/Heading'
import { CardPlanos } from './CardPlanos'

export const Planos = () => {
    return (
    <>
        <section className='price padding'>
            <div className="container">

                <Heading title="Planos para inscrição" subtitle="Assine um de nossos planos para inscrever seu imóvel no nosso site."/>

                <CardPlanos />
            </div>
        </section>
    </>
    )
}
