import { forwardRef, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import style from './input/input.module.scss'

const Textarea = forwardRef<HTMLTextAreaElement, InputHTMLAttributes<HTMLTextAreaElement>>(
    function textareaRef({ className, ...props }, ref) {
        return <textarea className={classNames(className, style['input'])} ref={ref} {...props} />
    }
)

export default Textarea
