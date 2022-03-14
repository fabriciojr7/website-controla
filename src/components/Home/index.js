import { useEffect } from 'react'
import Bottom from '../Bottom'
import { ContainerHome, Banner, Container, BannerContainer, Skills, ContainerSkill, SkillItem } from './styles'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <ContainerHome id="home">
            <Banner data-aos='flip-left'>
                <Container>
                    <BannerContainer>
                        <h1>Nosso objetivo é ajudar sua empresa a crescer</h1>
                        <p>Temos soluções ideais para micros e pequenas
                            empresas de varejo.</p>


                        <div className='botao'>
                            <Bottom  title='Saiba mais' to='products' />
                        </div>
                    </BannerContainer>
                </Container>
            </Banner>
            
            <Skills data-aos='fade-down'>
                <ContainerSkill>
                    <SkillItem>
                        <img src="/images/produto-qualidade.png" />
                        <h4>Produtos e serviços de qualidade</h4>
                        <p>Temos soluções completas para a automação comercial de sua empresa</p>
                    </SkillItem>
                    <SkillItem>
                        <img src="/images/leis.png" />
                        <h4>Atendemos as leis vigentes</h4>
                        <p>Mantemos os nossos sistemas sempre atualizados e preparados para as leis que estão em vigor</p>
                    </SkillItem>
                    <SkillItem>
                        <img src="/images/relogio.png" />
                        <h4>Atualizações periódicas</h4>
                        <p>Mantemos nosso sistemas sempre atualizados, prezando a segurança e tecnologia</p>
                    </SkillItem>
                    <SkillItem>
                        <img src="/images/conversando.png" />
                        <h4>Suporte técnico</h4>
                        <p>Suporte feito tanto remotamente, quanto presencial</p>
                    </SkillItem>

                </ContainerSkill>
            </Skills>
        </ContainerHome>

    )
}