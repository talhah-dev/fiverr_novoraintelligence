import Wrapper from '@/app/Wrapper'
import ContactCTASection from '@/components/ContactCTASection'
import HowWeWorkHero from '@/components/HowWeWork/HowWeWorkHero'
import HowWeWorkStepsSection from '@/components/HowWeWork/HowWeWorkStepsSection'
import HowWeWorkToolsSection from '@/components/HowWeWork/HowWeWorkToolsSection'
import React from 'react'

export default function page() {
    return (
        <Wrapper>
            <div className="overflow-x-hidden">
                <HowWeWorkHero />
                <HowWeWorkStepsSection />
                <HowWeWorkToolsSection />
                <ContactCTASection />
            </div>
        </Wrapper>
    )
}
