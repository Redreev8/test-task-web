import { FC } from 'react'
import style from './also-section.module.scss'
import Container from '@/ui/container'
import Btn from '@/ui/btn'
import Section from '@/ui/section'
import Title from '@/ui/title'
import Card from '@/ui/card'
import AlsoCard, { AlsoCardProps } from './also-card'
import getAlso from './get-also'

const AlsoSection: FC = async () => {
    const arr: AlsoCardProps[] = await getAlso()
    return (
        <Section aria-labelledby="also-title">
            <Container className={style['container']}>
                <Card isTitle>
                    <Title level={2} id="also-title">
                        Most important title on the page
                    </Title>
                </Card>
                <ul className={style['grid']}>
                    {arr.map((el, i) => (
                        <li className={style['item']} key={i}>
                            <AlsoCard icon={el.icon} title={el.title} text={el.text} />
                        </li>
                    ))}
                </ul>
                <Btn href="/contacts" isCard>
                    Contact us
                </Btn>
            </Container>
        </Section>
    )
}

export default AlsoSection
