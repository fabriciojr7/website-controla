import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Container } from './styles'
import { FaAngleDoubleUp } from "react-icons/fa";

export default function ScrollTop() {
    const [visible, setVisible] = useState(false)



    useEffect(() => {
        function handleScroll(){
            let scrollPosition = window.scrollY
            if (scrollPosition > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }

        document.addEventListener('scroll', handleScroll)

        return () => document.removeEventListener('scroll',handleScroll)    
    },[])

    return (
        <Container visible={visible}>
            <Link to="home" spy={true} smooth={true} offset={0} duration={500} data-after="Home">
                <FaAngleDoubleUp className='icon' size={25} />
            </Link>

        </Container>
    )
}

