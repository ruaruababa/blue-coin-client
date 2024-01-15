import React from 'react';

import { FadeInSection } from '../fadeInSection';
import Banner from './components/banner';
import CommingSoon from './components/commingNext';
import DownloadApp from './components/downloadApp';
import Ecosystem from './components/ecosystem';
import FeatureTab from './components/featureTab';
import Footer from './components/footer';
import IntroduceFeature from './components/introduceFeature';
import IntroduceInvestor from './components/introduceInvestor';
import IntroduceWeb3 from './components/introduceWeb3';
import PriceAndWallet from './components/priceAndWallet';

const LandingPage = () => {
  return (
    <>
      <FadeInSection>
        <Banner />
      </FadeInSection>
      <FadeInSection>
        <PriceAndWallet />
      </FadeInSection>
      <FadeInSection>
        <FeatureTab />
      </FadeInSection>
      <FadeInSection>
        <IntroduceFeature />
      </FadeInSection>
      <FadeInSection>
        <IntroduceInvestor />
      </FadeInSection>
      <FadeInSection>
        <IntroduceWeb3 />
      </FadeInSection>
      <FadeInSection>
        <Ecosystem />
      </FadeInSection>
      <FadeInSection>
        <DownloadApp />
      </FadeInSection>
      <FadeInSection>
        <CommingSoon />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
};

export default LandingPage;
