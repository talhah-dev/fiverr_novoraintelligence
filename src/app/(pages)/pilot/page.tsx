import Wrapper from '@/app/Wrapper'
import ContactCTASection from '@/components/ContactCTASection'
import PilotBreakdownSection from '@/components/Pilot/PilotBreakdownSection'
import PilotDeliverablesSection from '@/components/Pilot/PilotDeliverablesSection'
import PilotHero from '@/components/Pilot/PilotHero'
import PilotRequirementsSection from '@/components/Pilot/PilotRequirementsSection'

export default function Pilot() {
    return (
        <Wrapper>
            <PilotHero />
            <PilotDeliverablesSection />
            <PilotBreakdownSection />
            <PilotRequirementsSection />
            <ContactCTASection />
        </Wrapper>
    )
}
