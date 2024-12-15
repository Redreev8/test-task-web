import { forwardRef, HtmlHTMLAttributes, LegacyRef, ReactNode } from 'react'
import classNames from 'classnames'
import style from './title.module.scss'
import listComponentTitle from './list-title'
export interface TitleProps extends HtmlHTMLAttributes<HTMLHeadingElement | HTMLSpanElement> {
    children: ReactNode
    level?: number
    levelTag?: number | 'span'
    className?: string
}

const Title = forwardRef<HTMLHeadingElement | HTMLSpanElement, TitleProps>(function TitleRef(
    { className, level = 2, levelTag = level, children, ...props },
    ref
) {
    const cl = classNames(style.title, className, style[`title--${level}`])

    const Componet = listComponentTitle[levelTag]
    return (
        <Componet ref={ref as LegacyRef<HTMLHeadingElement>} className={cl} {...props}>
            {children}
        </Componet>
    )
})

export default Title
