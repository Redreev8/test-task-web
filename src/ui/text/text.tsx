import React, { AreaHTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'
import style from './text.module.scss'

interface TextProps extends AreaHTMLAttributes<HTMLParagraphElement> {

}

const Text = forwardRef<HTMLParagraphElement, TextProps>(function TextRef({ className, children }, ref) {
    const cl = classNames(style.title, className)
    return (
        <p ref={ ref } className={ cl }>{ children }</p>
    )
})

export default Text