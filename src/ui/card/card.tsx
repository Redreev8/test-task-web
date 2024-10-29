import { AreaHTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'

import style from './card.module.scss'

export interface CardProps extends AreaHTMLAttributes<HTMLDivElement> {
    isText?: boolean
    isTitle?: boolean
}

const Card = forwardRef<HTMLParagraphElement, CardProps>(function TextRef({ className, children, isText, isTitle }, ref) {
    const cl = classNames(style.box, className, {
        [style['box--text']]: isText,
        [style['box--title']]: isTitle,
    })
    return (
        <div ref={ ref } className={ cl }>{ children }</div>
    )
})

export default Card