import { FC } from 'react';
import AboutMagistral from '../../components/About/AboutMagistral/AboutMagistral';
import Contacts from '../../components/Contacts/Contacts';
import GoodsCategory from '../../components/GoodsCategory/GoodsCategory';
import PageLayout from '../../components/PageLayout/PageLayoat';
import TheProjects from '../../components/TheProjects/TheProjects';
import MagistralTitle from '../../components/Title/MagistralTitle/MagistralTitle';

const Magistral: FC = () => {
  return (
    <PageLayout>
      <MagistralTitle />
      <AboutMagistral />
      <GoodsCategory />
      <TheProjects />
      <Contacts />
    </PageLayout>
  );
};

export default Magistral;
