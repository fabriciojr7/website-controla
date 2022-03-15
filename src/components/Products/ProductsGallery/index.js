import {
    Container,
    GalleryContainer,
    GalleryDescription,
    PhotoType
} from './styles'



export default function ProductsGallery({ mobile, infosProduct }) {


    return (
        <Container>
            <GalleryContainer>
                {
                    mobile ?
                        <GalleryDescription>
                            <p>
                                {infosProduct.description1}
                            </p>

                            <ul>
                                <li><span>Comanda SAT Fácil: </span>{infosProduct.description2}</li>
                                <li><span>ADM SAT Fácil: </span>{infosProduct.description3}</li>
                                <li><span>SAT Fácil Mobile: </span>{infosProduct.description4}</li>
                                <li><span>Cotação SAT Fácil: </span>{infosProduct.description5}</li>
                            </ul>
                        </GalleryDescription>
                        :
                        <GalleryDescription>
                            <p>
                                {infosProduct.description1}
                            </p>
                            <p>
                                {infosProduct.description2}
                            </p>
                        </GalleryDescription>

                }

                <PhotoType>
                    <img src={infosProduct.photo} alt='Imagem demonstrativa sobre o S@T Facil ou Mobile' />
                </PhotoType>


            </GalleryContainer>
        </Container>
    )
}