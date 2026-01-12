import Wrapper from '@/app/Wrapper'
import ContactCTASection from '@/components/ContactCTASection'
import RoiBeforeAfterSection from '@/components/roi/RoiBeforeAfterSection'
import RoiCalculatorSection from '@/components/roi/RoiCalculatorSection'
import RoiHero from '@/components/roi/RoiHero'
import RoiMeasurementSection from '@/components/roi/RoiMeasurementSection'

export default function page() {
    return (
        <Wrapper>
            <RoiHero />
            <RoiBeforeAfterSection />
            <RoiCalculatorSection />
            <RoiMeasurementSection />
            <ContactCTASection />
        </Wrapper>
    )
}
