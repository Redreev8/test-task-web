'use client'
import { FC, HTMLProps, ReactNode } from 'react'
import style from './accordion.module.scss'
import classNames from 'classnames'
interface AccordionContentInterface extends HTMLProps<HTMLDivElement> {
    className?: string
    children: ReactNode
}

const AccordionContent: FC<AccordionContentInterface> = ({ children, className, ...props }) => {
    const cl = classNames(style['accordion__wrapp'], className)
    return (
        <div className={ cl } { ...props }>
            <div className={ style['accordion__inner'] }>
                <div className={ style['accordion__content'] }>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default AccordionContent