import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Title from '../Title'
import { Container, Banner, Wrapper, ContainerClient, InfosClient, FormClient, SingleInput, InputBtn, Description } from './styles'

import { Base64 } from 'js-base64'

import Aos from 'aos'
import 'aos/dist/aos.css'

import swal from 'sweetalert'

import api from '../../services/api'

export function showAlert(type, msg) {
    swal({
        title: 'Atenção!',
        text: msg,
        icon: type,
        timer: 2000
    });
}

export default function ClientArea() {

    const [cnpj, setCnpj] = useState('')
    const router = useRouter()

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])



    function acessar() {
        if (cnpj === '') {
            showAlert('info', 'É obrigatorio informar o cnpj!')
            return;
        }

        api.get(`?cnpj=${cnpj}`)
            .then((response) => {
                if (response.data.retorno === 'OK') {
                    router.push('/areaCliente')
                    localStorage.setItem('cnpj', cnpj)
                } else {
                    showAlert('error', Base64.atob(response.data.mensagem))
                }
            })
            .catch((err) => {
                showAlert('error', err)
            })
    }


    return (
        <Container data-aos='fade-right' id="client">
            <Banner>
                <Wrapper>
                    <Title light>
                        <h1><span>Área</span> do <span>cliente</span></h1>
                    </Title>

                    <ContainerClient>
                        <InfosClient>
                            <Description>
                                <p>Acesse a área do cliente, para que possa obter sua chave de liberação, ou boleto de pagamento.</p>
                            </Description>

                            <FormClient>
                                <SingleInput>
                                    <input
                                        required
                                        type="text"
                                        placeholder='Informe o cnpj da empresa'
                                        onChange={(e) => { setCnpj(e.target.value) }}
                                    />
                                </SingleInput>
                                <InputBtn type='button' value='Acessar' onClick={acessar} />
                            </FormClient>
                        </InfosClient>
                    </ContainerClient>

                </Wrapper>
            </Banner>
        </Container>
    )
}