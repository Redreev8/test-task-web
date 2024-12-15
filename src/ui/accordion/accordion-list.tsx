'use client'
import { Children, createContext, FC, HTMLProps, ReactNode, useEffect, useRef } from 'react'
import style from './accordion.module.scss'
import classNames from 'classnames'
import useMaxItem, { UseMaxItemReturn } from '@/hook/useMaxItem'
interface AccordionListInterface extends HTMLProps<HTMLUListElement> {
    children: ReactNode
    className?: string
    isVerticale: boolean
    max?: number
}

export const AccordionListContext = createContext<UseMaxItemReturn<HTMLDivElement>>({ itemsActive: [], push: () => {}, remove: () => {} })

const AccordionList: FC<AccordionListInterface> = ({ isVerticale, children, className, max = 1, ...props }) => {
    const cl = classNames(style['accordion-list'], className, {
        [style['accordion-list--verticale']]: isVerticale
    })
    const ref = useRef<HTMLUListElement>(null)
    const { itemsActive, push, remove } = useMaxItem<HTMLDivElement>(max)
    return (
        <AccordionListContext.Provider value={{ itemsActive, push, remove }}>
            <ul ref={ ref } className={ cl }>
            {
                    Children.map(children, child => (
                        <li className={ style['accordion-list__item'] }>{ child }</li>
                    ))
                }
            </ul>
        </AccordionListContext.Provider>
    )
}

export default AccordionList