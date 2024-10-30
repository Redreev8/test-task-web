import AlsoSection from '@/components/also-section'
import HomeIntro from '@/components/home-intro'
import LessSection from '@/components/less-section'
import Head from 'next/head'

const Home = () => {
    const title = 'home page tacks'
    const description = 'home page written in next js, scss, radix form'
    const name = 'Test task website contacts Some Company'
    return (
        <>
            <Head>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta property="og:site_name" content={name} />
                <meta name="twitter:card" content={name} />
            </Head>
            <HomeIntro />
            <AlsoSection />
            <LessSection />
        </>
    )
}

export default Home
