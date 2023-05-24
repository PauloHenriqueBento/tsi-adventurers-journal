import React from 'react';
import ModalityCard from '../Components/ModalityCard';
import ButtonCustom from '../Components/ButtonCustom';
import BannerHome from '../Components/BannerHome';
import SectionModalityPlan from '../Components/SectionModalityPlan';
import SectionTouristGuide from '../Components/SectionTouristGuide';
import SectionReviews from '../Components/SectionReviews';
import SectionAbout from '../Components/SectionAbout';

const Home = () => {
  return (

    <>
      <div id='body'>
        <main>
          <BannerHome />
          <SectionModalityPlan />
          <SectionTouristGuide />
          <SectionReviews />
          <SectionAbout />

        </main>
      </div>
    </>
  );
};

export default Home;
