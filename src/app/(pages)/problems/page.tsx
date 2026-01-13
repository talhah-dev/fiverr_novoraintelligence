import Wrapper from '@/app/Wrapper'
import ContactCTASection from '@/components/ContactCTASection'
import ProblemsGridSection from '@/components/Problem/ProblemsGridSection'
import ProblemsHero from '@/components/Problem/ProblemsHero'
import ProblemsWorkflowExamplesSection from '@/components/Problem/ProblemsWorkflowExamplesSection'

export default function page() {
    return (
        <Wrapper>
            <div className="overflow-x-hidden bg-[#070B14]">
                <ProblemsHero />
                <ProblemsGridSection />
                <ProblemsWorkflowExamplesSection />
                <ContactCTASection />
            </div>
        </Wrapper>
    )
}
