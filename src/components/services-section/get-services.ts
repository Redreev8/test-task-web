import Img from '@/type/img'

export interface Service {
    img: Img
    title: string
    text: string[]
}

const getServices = async () => {
    return Array.from(
        { length: 80 },
        (_, i) =>
            ({
                img: {
                    src: '/img-ver.png',
                    alt: 'test img srq gorizont',
                    width: 240,
                    height: 300
                },
                title: `Title ${i}`,
                text: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'
                ]
            }) as Service
    )
}

export default getServices
