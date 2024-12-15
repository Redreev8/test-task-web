'use client'
import { FC, TransitionEvent, useState } from 'react'
import style from './contact-section.module.scss'
import Container from '@/ui/container'
import Section from '@/ui/section'
import Title from '@/ui/title'
import FormContact from '../form-contact'
import Card from '@/ui/card'
import classNames from 'classnames'
import Submission from '../submission'

const ContactSection: FC = () => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false)
    const [isFuncs, setIsFuncs] = useState<boolean>(false)
    const handelTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
        if (e.target !== e.currentTarget) return

        setIsFuncs(true)
    }
    return (
        <Section aria-labelledby="contact-title">
            <Container className={style['container']}>
                <Title className={style['title']} level={1} id="contact-title">
                    Most important title on the page
                </Title>
                <div
                    onTransitionEnd={handelTransitionEnd}
                    className={classNames([style['form']], {
                        [style['form-hiden']]: isSubmit,
                        [style['form-none']]: isFuncs
                    })}
                >
                    <Card>
                        <FormContact setIsSubmit={setIsSubmit} />
                    </Card>
                </div>
                <div className={classNames([style['funcs']], { [style['funcs-view']]: isFuncs })}>
                    <Submission />
                </div>
            </Container>
        </Section>
    )
}

export default ContactSection
