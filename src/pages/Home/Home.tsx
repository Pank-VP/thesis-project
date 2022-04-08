import { FC } from 'react';
import AboutUs from '../../components/About/AboutUs/AboutUs';
import Contacts from '../../components/Contacts/Contacts';
import OurServices from '../../components/OurServices/OurServices';
import PageLayout from '../../components/PageLayout/PageLayoat';
import TerminalsImg from '../../components/TerminalsImg/TerminalsImg';
import TheProjects from '../../components/TheProjects/TheProjects';
import HomeTitle from '../../components/Title/HomeTitle/HomeTitle';

const Home: FC = () => {
  return (
    <PageLayout>
      <HomeTitle />
      <AboutUs />
      <OurServices />
      <TerminalsImg />
      <TheProjects />
      <Contacts />
    </PageLayout>
  );
};

export default Home;
