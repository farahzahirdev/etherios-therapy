import { SkipLink } from "./SkipLink";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { TrustBar } from "./TrustBar";
import { InsuranceStrip } from "./InsuranceStrip";
import { WhatIsSpravato } from "./WhatIsSpravato";
import { WhoItsFor } from "./WhoItsFor";
import { WhatToExpect } from "./WhatToExpect";
import { TreatmentJourney } from "./TreatmentJourney";
import { TreatmentRooms } from "./TreatmentRooms";
import { WhyEtherios } from "./WhyEtherios";
import { TrustProof } from "./TrustProof";
import { Insurance } from "./Insurance";
import { PatientVideos } from "./PatientVideos";
import { Providers } from "./Providers";
import { SpravatoVideo } from "./SpravatoVideo";
import { Services } from "./Services";
import { InlineCta } from "./InlineCta";
import { Faq } from "./Faq";
import { BookConsult } from "./BookConsult";
import { Inquiry } from "./Inquiry";
import { Footer } from "./Footer";

export function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <InsuranceStrip />
        <WhatIsSpravato />
        <WhoItsFor />
        <WhatToExpect />
        <TreatmentJourney />
        <PatientVideos />
        <TreatmentRooms />
        <WhyEtherios />
        <TrustProof />
        <Providers />
        <Insurance />
        <SpravatoVideo />
        <Services />
        <BookConsult />
        <InlineCta />
        <Faq />
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
