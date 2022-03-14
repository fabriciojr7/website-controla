import { useEffect } from 'react'
import Title from '../Title'
import { Container,Wrapper, AboutContainer, AboutBg, AboutHistory, ContainerAboutItems, ItemAbout } from './styles'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <Container data-aos='fade-right' id="about">
            <Wrapper>
                <Title >
                    <h1><span>Sobre</span> a empresa</h1>
                </Title>
                <AboutContainer>
                    <AboutHistory>
                        <p>Fundada em 1997 em Pereira Barreto - SP, somos uma moderna software
                            house, onde nossa especialidade é desenvolver e comercializar
                            soluções que demandam alta tecnologia. Nosso objetivo é criar
                            ferramentas para que nossos clientes tenham o controle de cada departamento
                            de sua empresa, assim ajudando nas tomadas de decisões, para que se destaque no mercado.
                        </p>

                        <p>Somente com a ajuda de Deus, e a confiança de nossos clientes é que
                            conseguimos chegar ate aqui, sendo mais do que uma simples software
                            house, a Controla oferece soluções inteligentes e know-how tecnológico
                            necessário para colocar sua empresa à frente no mercado. Entre em
                            contato e saiba mais sobre o que temos a oferecer para sua empresa.
                        </p>
                    </AboutHistory>

                    <AboutBg >
                        <img src='/images/ControlaFachada.jpeg' />
                    </AboutBg>
                </AboutContainer>

                <ContainerAboutItems>
                    <ItemAbout>
                        <img src="/images/negocio.png" />
                        <h2>Nosso negócio</h2>
                        <p>Desenvolvimento de software, implantação e suporte técnico especializado para maior satisfação de nossos clientes.</p>
                    </ItemAbout>
                    <ItemAbout>
                        <img src="/images/alvo.png" />
                        <h2>Nossa missão</h2>
                        <p>Oferecer produtos e serviços de qualidade que excedam as expectativas e assegure a satisfação dos clientes, de nossos colaboradores e da comunidade.</p>
                    </ItemAbout>
                    <ItemAbout>
                        <img src="/images/politica.png" />
                        <h2>Política de qualidade</h2>
                        <p>A empresa está comprometida na melhoria da qualidade dos produtos e serviços, através da parceria
                            com clientes, colaboradores e fornecedores, e valendo-se de novas tecnologias, buscando sempre execer
                            a expectativa de todos envolvidos.
                        </p>
                    </ItemAbout>
                </ContainerAboutItems>
            </Wrapper>
        </Container>
    )
}