import { FC } from 'react';
import AboutNorthSouth from '../../components/About/AboutNorthSouth/AboutNorthSouth';
import Contacts from '../../components/Contacts/Contacts';
import Enumeration from '../../components/Enumeration/Enumeration';
import PageLayout from '../../components/PageLayout/PageLayoat';
import RailwayRoute from '../../components/RailwayRoute/RailwayRoute';
import TheProjects from '../../components/TheProjects/TheProjects';
import NorthSouthTitle from '../../components/Title/NorthSouthTitle/NorthSouthTitle';

const NorthSouth: FC = () => {
  return (
    <PageLayout>
      <NorthSouthTitle />
      <AboutNorthSouth />
      <Enumeration />
      <RailwayRoute />
      <TheProjects />
      <Contacts />
    </PageLayout>
  );
};

export default NorthSouth;
