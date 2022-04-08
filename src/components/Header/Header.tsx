import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import companyLogo from '../../images/Header/logo.png';
import MenuMobile from '../MenuMobile/menuMobile';
import Navigate from '../Navigate/Navigate';
import styles from './Header.module.scss';

const Header: FC = () => {
  const navigate = useNavigate();
  const handleOnHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.heading} id='heading'>
		  <div className={styles.wrapper}>
      	<header className={styles.header}>
          <div className={styles.navigate}>
            <div className={styles.menu_mobile}>
              <MenuMobile />
            </div>
            <img className={styles.logo} src={companyLogo} onClick={handleOnHome} alt="Background"/>
            <div className={styles.navi}><Navigate /></div>
          </div>
      	</header>
		  </div>
    </div>
  );
};

export default Header;
