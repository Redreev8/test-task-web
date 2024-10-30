import { forwardRef, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import style from './input.module.scss'

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function inputRef(
    { className, ...props },
    ref
) {
    return <input className={classNames(className, style['input'])} ref={ref} {...props} />
})

export default Input
