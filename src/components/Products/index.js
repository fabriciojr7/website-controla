import { useEffect } from 'react'
import Title from '../Title'
import Bottom from '../Bottom'
import TabProducts from './TabProducts';
import { Container, Wrapper, ProductContainer, ProductBg, ProductDescriptionSection, ProdListFeaures } from './styles'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Products() {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (

        <Container data-aos='fade-right' id="products">
            <Wrapper>
                <Title >
                    <h1>Nossos <span>Produtos</span></h1>
                </Title>

                <ProductContainer>
                    <ProductBg>
                        <img src='/images/prod.jpg' />
                    </ProductBg>

                    <ProductDescriptionSection>
                        <p>
                            Nossos sistemas são indicados para empresas que necessitam informatizar
                            seus setores, para atender leis, e sair na frente do mercado. Com os produtos
                            Controla, você terá um controle completo sobre seu negócio.
                        </p>

                        <h4>Alguns recursos de nossos sistemas</h4>

                        <ProdListFeaures>
                            <ul>
                                <li><span>&#10004;</span>Emissão de cupons fiscais</li>
                                <li><span>&#10004;</span>Emissão de relátorios</li>
                                <li><span>&#10004;</span>Gerador de etiquetas</li>
                            </ul>

                            <ul>
                                <li><span>&#10004;</span>Controle de estoque</li>
                                <li><span>&#10004;</span>Contas a pagar e receber</li>
                                <li><span>&#10004;</span>Consumo para restaurantes</li>
                            </ul>
                        </ProdListFeaures>

                        <div className='bottom'>
                            <Bottom title='Entre em contato e saiba mais' to='contact' />
                        </div>
                    </ProductDescriptionSection>
                </ProductContainer>

                <TabProducts />
            </Wrapper>
        </Container>
    )
}