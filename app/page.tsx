import { AnnouncementBar } from '@/components/sales/AnnouncementBar'
import { HeroSection } from '@/components/sales/HeroSection'
import { PainSection } from '@/components/sales/PainSection'
import { ScienceSection } from '@/components/sales/ScienceSection'
import { AuthoritySection } from '@/components/sales/AuthoritySection'
import { ScheduleSection } from '@/components/sales/ScheduleSection'
import { FormatSection } from '@/components/sales/FormatSection'
import { TestimonialsSection } from '@/components/sales/TestimonialsSection'
import { OfferSection } from '@/components/sales/OfferSection'
import { GuaranteeSection } from '@/components/sales/GuaranteeSection'
import { FAQSection } from '@/components/sales/FAQSection'
import { FinalCTA } from '@/components/sales/FinalCTA'
import { Footer } from '@/components/sales/Footer'

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <HeroSection />
      <PainSection />
      <ScienceSection />
      <ScheduleSection />
      <FormatSection />
      <AuthoritySection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
