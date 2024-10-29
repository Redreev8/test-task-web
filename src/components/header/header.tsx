import Btn from '@/ui/btn'
import Card from '@/ui/card'
import Container from '@/ui/container'
import Logo from '@/ui/logo'
import style from './header.module.scss'

const Header = () => {
    return (
        <header className={style['header']}>
            <Container>
                <Card className={style['wrapp']}>
                    <Logo />
                    <nav>
                        <Btn href="/contacts">Contact us</Btn>
                    </nav>
                </Card>
            </Container>
        </header>
    )
}

export default Header
