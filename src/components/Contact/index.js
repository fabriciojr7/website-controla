import { useEffect } from 'react'
import Title from '../Title'
import {
    Container,
    Wrapper,
    Description,
    Items,
    ContainerContact,
    Item,
    Icon,
    Text,
    SubText,
    Info
} from './styles'
import { MdOutlineLocationOn, MdOutlineMail, MdOutlineLocalPhone } from "react-icons/md";

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <Container data-aos='fade-right' id="contact">
            <Wrapper>
                <Title>
                    <h1>Entre em <span>Contato</span></h1>
                </Title>
                <ContainerContact>
                    <Description>
                        <h4>Entre em contato conosco, para tirar duvidas sobre o sistema, marcar reuniões ou visitas, ficaremos felizes em atende-los</h4>
                        <p>Nosso funcionamento é de segunda à sexta, das <span>8h às 11h</span>, e das <span>13h às 18h</span>. O atendimento é feito tanto presencialmente, quanto por acesso remoto.</p>
                    </Description>
                    <Items>
                        <Item>
                            <Icon className='icon'>
                                <MdOutlineLocationOn size={40} />
                            </Icon>
                            <Text>
                                <h5>Endereço</h5>
                            </Text>
                            <SubText>
                                Quer fazer uma visita?
                            </SubText>
                            <Info>
                                <p>R. Antônio Francisco Xavier, 1270</p>
                            </Info>
                        </Item>

                        <Item className='email'>
                            <Icon className='icon'>
                                <MdOutlineMail size={40} />
                            </Icon>
                            <Text>
                                <h5>E-mail</h5>
                            </Text>
                            <SubText>
                                Tem alguma duvida?
                            </SubText>
                            <Info>
                                <p>suporte@controla.com.br</p>
                            </Info>
                        </Item>

                        <Item >
                            <Icon className='icon'>
                                <MdOutlineLocalPhone size={40} />
                            </Icon>
                            <Text>
                                <h5>Telefone</h5>
                            </Text>
                            <SubText>
                                Você pode ligar a qualquer hora.
                            </SubText>
                            <Info>
                                <p>(18)3704-4668</p>
                            </Info>
                        </Item>
                    </Items>
                </ContainerContact>



            </Wrapper>
        </Container>
    )
}