import { Metadata } from 'next'
import AlsoSection from '@/components/also-section'
import HomeIntro from '@/components/home-intro'
import LessSection from '@/components/less-section'

const title = 'home page tacks'
const description = 'home page written in next js, scss, radix form'

export const metadata: Metadata = {
    title: 'Some Company',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
    openGraph: {
        title,
        description
    },
    twitter: {
        title,
        description
    }
}

const Home = () => {
    return (
        <>
            <HomeIntro />
            <AlsoSection />
            <LessSection />
        </>
    )
}

export default Home
