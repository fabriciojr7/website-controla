import { Container, AreaLinks, Description, Bar, Copyright } from './styles'

export default function Footer() {
    return (
        <Container>
            <Copyright>
                <h2>Controla</h2>
                <h3>Desenvolvimento de sistemas</h3>
                <p>Copyright © 2022</p>
            </Copyright>

            <AreaLinks>
                <ul>
                    <Description>
                        <h4>Links úteis</h4>
                        <Bar/>
                    </Description>

                    <li><a href="https://www.controla.com.br/contabil/" target='_blank' rel="noopener noreferrer">Portal contábil</a></li>
                    <li><a href="https://sistemasatfacil.com.br/parceiros/" target='_blank' rel="noopener noreferrer">Sistema de parceiros</a></li>
                </ul>
                <ul>
                    <Description>
                        <h4>Downloads</h4>
                        <Bar/>
                    </Description>

                    <li><a href="http://www.controla.com.br/download/TeamViewerQS_pt.exe">Suporte remoto (TeamViewer)</a></li>
                    <li><a href="http://www.controla.com.br/download/Instalador_Firebird_2_5.exe">Banco de dados (Firebird)</a></li>
                </ul>
            </AreaLinks>
        </Container>
    )
}