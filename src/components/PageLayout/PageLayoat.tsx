import { FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const PageLayout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
