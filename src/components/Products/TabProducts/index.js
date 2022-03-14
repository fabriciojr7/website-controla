import { useState } from 'react'
import ProductsGallery from '../ProductsGallery';
import { Container, TabProdHead, Tab, TabProdBody, TabContent } from './styles'
import { infosSatFacil, infosMobile } from '../ProdData'



export default function TabProducts() {
    const [toggle, setToggle] = useState(1);
    const toggleTab = (index) => {
        setToggle(index)
    }

    return (
        <Container>
            <TabProdHead>
                <Tab
                    onClick={() => toggleTab(1)}
                    className={toggle === 1 ? 'active' : ''}
                >
                    <h4>S@T Fácil</h4>
                </Tab>
                <Tab
                    onClick={() => toggleTab(2)}
                    className={toggle === 2 ? 'active' : ''}
                >
                    <h4>Mobile</h4>
                </Tab>
            </TabProdHead>
            <TabProdBody>
                <TabContent className={toggle === 1 ? 'active' : ''}>
                    <ProductsGallery infosProduct={infosSatFacil} />
                </TabContent>
                <TabContent className={toggle === 2 ? 'active' : ''}>
                   <ProductsGallery mobile={true} infosProduct={infosMobile} />
                </TabContent>

            </TabProdBody>
        </Container>
    )
}