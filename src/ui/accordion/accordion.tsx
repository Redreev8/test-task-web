'use client'
import { FC, HTMLProps, ReactNode, createContext } from 'react'
import style from './accordion.module.scss'
import classNames from 'classnames'
import useAccordion from './useAccordion'
import { UseBooleanReturn } from '@/hook/useBoolean'

interface AccordionInterface extends HTMLProps<HTMLDivElement> {
    className?: string
    children: ReactNode
    isActive?: boolean
}

export const AccordionContext = createContext<UseBooleanReturn[1]>(() => {})

const Accordion: FC<AccordionInterface> = ({ className, children, isActive = false, ...props }) => {
    const { refDiv, value, toggle } = useAccordion(isActive)
    const cl = classNames(style.accordion, className, {
        [style['accordion--active']]: value
    })
    return (
        <AccordionContext.Provider value={toggle}>
            <div ref={refDiv} className={cl} {...props}>
                {children}
            </div>
        </AccordionContext.Provider>
    )
}

export default Accordion
