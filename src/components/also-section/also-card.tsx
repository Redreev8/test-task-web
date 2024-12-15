import { FC } from 'react'
import style from './also-section.module.scss'
import Text from '@/ui/text'
import Title from '@/ui/title'
import Card from '@/ui/card'
import Svg from '@/ui/svg'

export interface AlsoCardProps {
    icon: string
    title: string
    text: string[]
}

const AlsoCard: FC<AlsoCardProps> = ({ title, text, icon }) => {
    const ComponentSvg = Svg[icon] ?? null
    return (
        <Card className={style['card']} isText>
            <div className={style['card__top']}>
                {ComponentSvg && <ComponentSvg className={style['card__icon']} />}
                <Title className={style['card__title']} level={3}>
                    {title}
                </Title>
            </div>
            <div className={style['card__text--wrapp']}>
                {text.map((t, i) => (
                    <Text className={style['card__text']} key={i}>
                        {t}
                    </Text>
                ))}
            </div>
        </Card>
    )
}

export default AlsoCard
