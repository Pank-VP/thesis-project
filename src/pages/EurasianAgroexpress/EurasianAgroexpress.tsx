import { FC } from 'react';
import AboutEurasianAgroexpress from '../../components/About/AboutEurasianAgroexpress/AboutEurasianAgroexpress';
import Contacts from '../../components/Contacts/Contacts';
import EnumerationEurasian from '../../components/EnumerationEurasian/EnumerationEurasian';
import MutimodalRoute from '../../components/MutimodalRoute/MutimodalRoute';
import PageLayout from '../../components/PageLayout/PageLayoat';
import TheProjects from '../../components/TheProjects/TheProjects';
import EurasianAgroexpressTitle from '../../components/Title/EurasianAgroexpressTitle/EurasianAgroexpressTitle';

const EurasianAgroexpress: FC = () => {
  return (
    <PageLayout>
      <EurasianAgroexpressTitle />
      <AboutEurasianAgroexpress />
      <EnumerationEurasian />
      <MutimodalRoute />
      <TheProjects />
      <Contacts />
    </PageLayout>
  );
};

export default EurasianAgroexpress;
