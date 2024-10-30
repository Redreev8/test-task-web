import { FC, ReactNode } from 'react'
import { Control, Field, FormMessageProps, Label, Message } from '@radix-ui/react-form'
import classNames from 'classnames'
import style from './field.module.scss'

interface FieldProps {
    name: string
    label: ReactNode
    className?: string
    children: ReactNode
    messages: {
        children: ReactNode
        match: FormMessageProps['match']
    }[]
}

const FieldCustom: FC<FieldProps> = ({ children, className, name, label, messages }) => {
    return (
        <Field className={classNames(className, style['field'])} name={name}>
            <Label className={style['label']}>{label!}</Label>
            <Control asChild>{children}</Control>
            {messages.map((el, i) => (
                <Message key={i} match={el.match}>
                    {el.children}
                </Message>
            ))}
        </Field>
    )
}

export default FieldCustom
