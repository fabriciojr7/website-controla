import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HeaderContainer, NavContainer, Logo, List, Hamburguer, BarHamburguer } from './styles'

export default function Header() {
    const [active, setActive] = useState(false);
    const [showBackground, setShowBackground] = useState(false)

    function handleMenuHamb() {
        setActive((prevState) => prevState ? false : true);
    }

    useEffect(() => {
        function handleScroll() {
            let scrollPosition = window.scrollY
            if (scrollPosition > 250) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }

        document.addEventListener('scroll', handleScroll)

        return () => document.removeEventListener('scroll',handleScroll)    
    })

    return (
        <HeaderContainer showBackground={showBackground} >
            <NavContainer>
                <Logo>
                    <img src="/images/Controla.jpg" alt="Logo Controla" />
                </Logo>
                <List >
                    <Hamburguer onClick={handleMenuHamb} className={['hamb', active ? 'active' : '']} >
                        <BarHamburguer />
                    </Hamburguer>
                    <ul className={active ? 'active' : ''}>
                        <li>
                            <Link onClick={handleMenuHamb} to="home" spy={true} smooth={true} offset={-50} duration={500} data-after="Home">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleMenuHamb} to="about" spy={true} smooth={true} offset={-50} duration={500} data-after="Sobre">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleMenuHamb} to="products" spy={true} smooth={true} offset={-50} duration={500} data-after="Produtos">
                                Produtos
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleMenuHamb} to="contact" spy={true} smooth={true} offset={-50} duration={500} data-after="Contato">
                                Contato
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleMenuHamb} to="client" spy={true} smooth={true} offset={-50} duration={500} data-after="Cliente">
                                Área do cliente
                            </Link>
                        </li>
                    </ul>
                </List>
            </NavContainer>
        </HeaderContainer>
    )
}