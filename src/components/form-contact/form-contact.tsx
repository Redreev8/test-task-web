'use client'
import style from './form-contact.module.scss'
import Btn from '@/ui/btn'
import { Root, Submit } from '@radix-ui/react-form'
import { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react'
import consoleAction from './console'
import FormContactsField from './form-contacts-field'

interface Elemets extends HTMLFormControlsCollection {
    name: HTMLInputElement
    email: HTMLInputElement
    message: HTMLTextAreaElement
}

interface Form extends HTMLFormElement {
    readonly elements: Elemets
}

interface Props {
    setIsSubmit: Dispatch<SetStateAction<boolean>>
}

const FormContact: FC<Props> = ({ setIsSubmit }) => {
    const [isLoding, setIsLoding] = useState<boolean>(false)
    const handlerSubmit = async (e: FormEvent<Form>) => {
        e.preventDefault()
        const target = e.currentTarget.elements
        setIsLoding(true)

        const res = await consoleAction({
            name: target.name.value,
            email: target.email.value,
            messange: target.message.textContent!
        })

        setIsSubmit(res)
    }
    return (
        <Root className={style['form']} onSubmit={handlerSubmit}>
            <FormContactsField isDisebled={isLoding} />
            <Submit className={style['btn']} asChild>
                <Btn disabled={isLoding}>Post question</Btn>
            </Submit>
        </Root>
    )
}

export default FormContact
