import AccordionList from '@/ui/accordion/accordion-list'
import style from './services-section.module.scss'
import Card from '@/ui/card'
import Container from '@/ui/container'
import Section from '@/ui/section'
import Title from '@/ui/title'
import React from 'react'
import Accordion from '@/ui/accordion'
import AccordionTitle from '@/ui/accordion/accordion-title'
import AccordionContent from '@/ui/accordion/accordion-content'
import getServices from './get-services'
import ServiceContent from './service-content'
import Slider from '@/ui/slider/slider'

const ServicesSection = async () => {
    const serves = await getServices()
    return (
        <Section aria-labelledby="services-title">
            <Container className={style['container']}>
                <Card isTitle>
                    <Title className={style['title']} level={2} id="services-title">
                        Most important title on the page
                    </Title>
                </Card>
                <Slider>
                    <AccordionList className={style['accordion-list']} isVerticale>
                        {serves.map((s) => (
                            <Accordion key={s.title}>
                                <AccordionTitle>
                                    <Title level={5} levelTag={'span'}>
                                        {s.title}
                                    </Title>
                                </AccordionTitle>
                                <AccordionContent>
                                    <ServiceContent img={s.img} text={s.text} />
                                </AccordionContent>
                            </Accordion>
                        ))}
                    </AccordionList>
                </Slider>
            </Container>
        </Section>
    )
}

export default ServicesSection
