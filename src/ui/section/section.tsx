import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'
import style from './section.module.scss'

const Section = forwardRef<HTMLElement, AreaHTMLAttributes<HTMLElement>>(function sectionRef({ children, className,...props }, ref) {
    return (
        <section ref={ ref } className={ classNames(style['section'], className) } { ...props }>
            { children }
        </section>
    )
})

export default Section