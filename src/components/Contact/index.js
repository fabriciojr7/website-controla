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
                        <h4>Nosso horário de funcionamento é de segunda à sexta, das <span>8h às 11h</span>, e das <span>13h às 18h</span>.</h4>
                        <p>Entre em contato conosco através dos canais abaixo.</p>
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
                                Ligue através do número
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