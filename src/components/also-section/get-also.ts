import { AlsoCardProps } from './also-card'

const getAlso: () => Promise<AlsoCardProps[]> = async () => {
    return Array.from(
        { length: 6 },
        () =>
            ({
                icon: 'img',
                title: 'Title',
                text: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'
                ]
            }) as AlsoCardProps
    )
}

export default getAlso
