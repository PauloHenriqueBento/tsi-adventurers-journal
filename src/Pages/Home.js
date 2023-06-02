import React from 'react';
import BannerHome from '../Components/BannerHome';
import SectionModalityPlan from '../Components/SectionModalityPlan';
import SectionTouristGuide from '../Components/SectionTouristGuide';
import SectionReviews from '../Components/SectionReviews';
import SectionAbout from '../Components/SectionAbout';

const Home = () => {
  return (
    <main>
      <BannerHome />
      <SectionModalityPlan />
      <SectionTouristGuide />
      {/* <SectionReviews /> */}
      <SectionAbout />
    </main>
  );
};

export default Home;
