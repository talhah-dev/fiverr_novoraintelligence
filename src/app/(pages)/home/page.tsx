import Wrapper from '@/app/Wrapper'
import ContactCTASection from '@/components/ContactCTASection'
import HeroSection from '@/components/HeroSection'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import ProblemSections from '@/components/ProblemSections'
import ROISection from '@/components/ROISection'
import SecurityComplianceSection from '@/components/SecurityComplianceSection'
import TrustedSystemsSection from '@/components/TrustedSystemsSection'
import React from 'react'

export default function HomePage() {
    return (
        <Wrapper>

            <HeroSection />
            <ProblemSections />
            <HowWeWorkSection />
            <SecurityComplianceSection />
            <ROISection />
            <TrustedSystemsSection />
            <ContactCTASection />

        </Wrapper>
    )
}
