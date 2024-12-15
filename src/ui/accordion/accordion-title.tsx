'use client'
import { ButtonHTMLAttributes, FC, ReactNode, useContext } from 'react'
import style from './accordion.module.scss'
import classNames from 'classnames'
import { AccordionContext } from './accordion'
import Btn from '../btn'
interface AccordionTitleInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
}

const AccordionTitle: FC<AccordionTitleInterface> = ({ children, className, ...props }) => {
    const toggle = useContext(AccordionContext)
    const cl = classNames(style['accordion__btn'], className)
    return (
        <Btn isWhite isDefulPosition={false} className={ cl } onClick={ () => toggle() } { ...props }>
           { children }
        </Btn>
    )
}

export default AccordionTitle