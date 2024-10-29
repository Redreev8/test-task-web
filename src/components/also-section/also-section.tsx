import { FC } from 'react'
import style from './also-section.module.scss'
import Container from '@/ui/container'
import Text from '@/ui/text'
import Title from '@/ui/title'
import Card from '@/ui/card'
import Btn from '@/ui/btn'
import Section from '@/ui/section'

const AlsoSection: FC = () => {
    const arr = Array.from({ length: 6 }, () => ({
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'
    }))
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
                            <Card className={style['card']} isText>
                                <Title className={style['card__title']} level={3}>
                                    {el.title}
                                </Title>
                                <Text className={style['card__text']}>{el.text}</Text>
                            </Card>
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
