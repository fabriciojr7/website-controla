import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Base64 } from 'js-base64'

import {
    Container, Wrapper, Header, Logo, Title, Apresentacao, AreaCard, Area,
    Card, HeaderCard, Line, Unauthenticated
} from './styles'

import api from '../../services/api'
import { showAlert } from '../ClientArea'

export default function LayoutClient() {
    const [chaves, setChaves] = useState([]);
    const [boletos, setBoletos] = useState([]);
    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState()

    const router = useRouter()

    useEffect(() => {
        const cnpjLocalStorage = localStorage.getItem('cnpj')
        
        localStorage.removeItem('cnpj')

        setCnpj(cnpjLocalStorage)

        if (cnpjLocalStorage !== null) {
            api.get(`?cnpj=${cnpjLocalStorage}`)
                .then(({ data }) => {
                    setChaves(data.registros_chaves)
                    setBoletos(data.registros_boletos)
                    setNome(data.nome)
                })
                .catch((err) => {
                    showAlert('error', err)
                })
        } else {
            router.push('/')
        }

    }, [router])


    return (

        <Container>
            <Wrapper>
                {
                    cnpj !== null ? (
                        <>
                            < Header >
                                <Logo>
                                    <img src="/images/ControlaCliente.jpg" alt='Logo Controla' />
                                </Logo>

                                <Title>
                                    <h1><span>Área</span> do <span>cliente</span></h1>
                                </Title>
                            </Header>

                            <Apresentacao>
                                {
                                    nome !== '' ? <h2>Olá, {Base64.atob(nome)}</h2> : <></>
                                }

                                <h4>Bem-vindo a área do cliente, aqui você pode visualizar seus boletos e obter sua chave de liberação do sistema</h4>
                            </Apresentacao>


                            <AreaCard>
                                {

                                    (chaves.length > 0) || (boletos.length > 0) ? (
                                        <>
                                            <Area>
                                                {
                                                    chaves.length > 0 ? (
                                                        <>
                                                            <h3>Chave de liberação</h3>
                                                            {
                                                                chaves.map((chave) => (
                                                                    <Card key={chave.CHAVE_LIBERACAO}>
                                                                        <HeaderCard>
                                                                            <h4>Sistema: {Base64.atob(chave.SISTEMA)}</h4>
                                                                        </HeaderCard>

                                                                        <Line>
                                                                            <h6>Chave: {chave.CHAVE_LIBERACAO}</h6>
                                                                            <h6>Validade: {Base64.atob(chave.VALIDADE)}</h6>
                                                                        </Line>

                                                                    </Card>
                                                                ))
                                                            }
                                                        </>

                                                    ) : (
                                                        <h3>Nenhuma chave de liberação foi encontrada</h3>
                                                    )
                                                }

                                            </Area>


                                            <Area>
                                                {
                                                    boletos.length > 0 ? (
                                                        <>
                                                            <h3>Boletos</h3>

                                                            {
                                                                boletos.map((boleto) => (
                                                                    <Card key={boleto.LINK} className='boleto'>
                                                                        <a
                                                                            href={Base64.atob(boleto.LINK)}
                                                                            target='_blank' rel="noopener noreferrer"
                                                                        >
                                                                            <HeaderCard>
                                                                                <h4>Visualizar boleto</h4>
                                                                            </HeaderCard>
                                                                            <Line>
                                                                                <h6>Vencimento: {Base64.atob(boleto.VENCIMENTO)}</h6>
                                                                                <h6>Valor: {boleto.VALOR_BOLETO}</h6>
                                                                            </Line>
                                                                        </a>
                                                                    </Card>
                                                                ))
                                                            }
                                                        </>
                                                    ) : (
                                                        <h3>Nenhuma boleto de pagamento foi encontrado</h3>
                                                    )
                                                }
                                            </Area>
                                        </>

                                    ) : (
                                        <Area>
                                            <h3>Nenhuma informação de chave ou boleto para o cnpj informado!</h3>
                                        </Area>
                                    )
                                }

                            </AreaCard>

                        </>

                    ) : (
                        <Unauthenticated >
                            <img src="/images/ControlaCliente.jpg" alt='Logo Controla'/>
                        </Unauthenticated>
                    )
                }
            </Wrapper>
        </Container >
    )
}