import Wrapper from '@/app/Wrapper'
import ArchitectureSnapshotSection from '@/components/ArchitectureSnapshotSection'
import ContactCTASection from '@/components/ContactCTASection'
import DataBoundariesSection from '@/components/DataBoundariesSection'
import GovernanceControlsSection from '@/components/GovernanceControlsSection'
import SecurityHero from '@/components/SecurityHero'
import React from 'react'

export default function page() {
    return (
        <Wrapper>
            <div className="overflow-x-hidden">
                <SecurityHero />
                <DataBoundariesSection />
                <GovernanceControlsSection />
                <ArchitectureSnapshotSection />
                <ContactCTASection />
            </div>
        </Wrapper>
    )
}
