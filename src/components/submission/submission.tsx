'use client'
import { FC } from 'react'
import Card from '@/ui/card'
import Title from '@/ui/title'

const SectionSubmission: FC = () => {
    return (
        <Card isTitle>
            <Title level={1} levelTag={2} id="sub-title">
                Message generated on the server
            </Title>
        </Card>
    )
}

export default SectionSubmission
