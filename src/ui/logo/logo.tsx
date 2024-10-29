import Link from 'next/link'
import style from './logo.module.scss'

const Logo = () => {
    return (
        <Link className={style['logo']} href="/">
            Some Company
        </Link>
    )
}

export default Logo
