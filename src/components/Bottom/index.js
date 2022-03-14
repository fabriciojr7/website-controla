import { BottomLink } from './styles'
import { Link } from 'react-scroll'

export default function Bottom({ title, to }) {
    return (
        <Link to={to} spy={true} smooth={true} offset={-50} duration={500} data-after="Produtos">
            <BottomLink >
                {title}
            </BottomLink>
        </Link>
    )
}