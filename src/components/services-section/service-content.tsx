import { FC } from 'react'
import style from './services-section.module.scss'
import { Service } from './get-services'
import Text from '@/ui/text'
import Image from 'next/image'

const ServiceContent: FC<Omit<Service, 'title'>> = ({ img: { src, alt, width, height }, text }) => {
    return (
        <div className={style['content']}>
            <div className={style['content__wrapp']}>
                {text.map((t, i) => (
                    <Text className={style['content__text']} key={i}>
                        {t}
                    </Text>
                ))}
            </div>
            <Image src={src} alt={alt} width={width} height={height} />
        </div>
    )
}

export default ServiceContent
