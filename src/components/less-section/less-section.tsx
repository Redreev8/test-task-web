import { FC } from 'react'
import style from './less-section.module.scss'
import Container from '@/ui/container'
import Title from '@/ui/title'
import Card from '@/ui/card'
import Btn from '@/ui/btn'
import Section from '@/ui/section'

const LessSection: FC = () => {
    return (
        <Section aria-labelledby="less-title">
            <Container className={style['container']}>
                <Card isTitle>
                    <Title level={2} id="less-title">
                        Less important title
                    </Title>
                </Card>
                <Btn href="/contacts" isCard>
                    Contact us
                </Btn>
            </Container>
        </Section>
    )
}

export default LessSection
