import { TitleSection } from './styles'

export default function Title({ children, light  }) {
    return <TitleSection light ={light }>
        {children}
    </TitleSection>
}