import style from './form-contact.module.scss'
import Field from '@/ui/field'
import Input from '@/ui/input/input'
import Textarea from '@/ui/textarea'
import { FC } from 'react'

interface FormContactsFieldProps {
    isDisebled: boolean
}

const FormContactsField: FC<FormContactsFieldProps> = ({ isDisebled }) => {
    return (
        <>
            <Field
                label="Name"
                name="name"
                messages={[
                    {
                        children: 'enter your name',
                        match: 'valueMissing'
                    },
                    {
                        children: 'max 20 characters',
                        match: 'tooLong'
                    }
                ]}
            >
                <Input
                    disabled={isDisebled}
                    type="text"
                    maxLength={20}
                    placeholder="Alex"
                    required
                />
            </Field>
            <Field
                label="Email"
                name="email"
                messages={[
                    {
                        children: 'enter your email',
                        match: 'valueMissing'
                    },
                    {
                        children: 'Please provide a valid email',
                        match: 'typeMismatch'
                    }
                ]}
            >
                <Input disabled={isDisebled} type="email" placeholder="insunus@mail.ru" required />
            </Field>
            <Field
                className={style['messange-wrapp']}
                label="Message"
                name="message"
                messages={[
                    {
                        children: 'enter your message',
                        match: 'valueMissing'
                    }
                ]}
            >
                <Textarea disabled={isDisebled} className={style['messange']} required />
            </Field>
        </>
    )
}

export default FormContactsField
