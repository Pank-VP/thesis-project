import { FC } from 'react';
import AboutTerminals from '../../components/About/AboutTerminals/AboutTerminals';
import CarouselTerminals from '../../components/Carousel/CarouselTerminals';
import Contacts from '../../components/Contacts/Contacts';
import PageLayout from '../../components/PageLayout/PageLayoat';
import TerminalsLocation from '../../components/TerminalsLocation/TerminalsLocation';
import TheProjects from '../../components/TheProjects/TheProjects';
import TerminalsTitle from '../../components/Title/TerminalsTitle/TerminalsTitle';

const Terminals: FC = () => {
  return (
    <PageLayout>
      <TerminalsTitle />
      <AboutTerminals />
      <CarouselTerminals />
      <TerminalsLocation />
      <TheProjects />
      <Contacts />
    </PageLayout>
  );
};

export default Terminals;
