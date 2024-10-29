import { AreaHTMLAttributes, FC, ReactNode } from 'react'
import classNames from 'classnames'
import style from './container.module.scss'

interface ContainerProps extends AreaHTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

const Container: FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={ classNames(className, style['container']) }>{ children }</div>
    )
}

export default Container