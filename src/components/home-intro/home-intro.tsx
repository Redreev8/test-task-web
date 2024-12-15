import { FC } from 'react'
import style from './home-intro.module.scss'
import Container from '@/ui/container'
import Text from '@/ui/text'
import Title from '@/ui/title'
import Card from '@/ui/card'
import Section from '@/ui/section'
import Image from 'next/image'

const HomeIntro: FC = () => {
    return (
        <Section aria-labelledby="home-title">
            <Container className={style['container']}>
                <Card isText>
                    <Title className={style['title']} level={1} id="home-title">
                        Most important title on the page
                    </Title>
                    <Text className={style['text']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo
                        et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus
                        tincidunt ante
                    </Text>
                </Card>
                <Card>
                    <div className={style['img']}>
                        <Image src="/img-gor.png" fill={true} alt="test img srq gorizont" />
                    </div>
                </Card>
            </Container>
        </Section>
    )
}

export default HomeIntro
