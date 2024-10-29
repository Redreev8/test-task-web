import Card from '@/ui/card'
import Container from '@/ui/container'
import style from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={style['footer']}>
            <Container>
                <Card isTitle>
                    <span className={style['copy']}>Some Company 2024</span>
                </Card>
            </Container>
        </footer>
    )
}

export default Footer
