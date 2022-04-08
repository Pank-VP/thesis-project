import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import logoFooter from '../../images/Footer/Logo-footer.svg';
import Navigate from '../Navigate/Navigate';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  const navigate = useNavigate();
  const handleOnHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.footer}>
		  <div className={styles.wrapper}>
        <footer>
          <div className={styles.navigate}>
            <a href='#heading'>
              <img className={styles.logo} src={logoFooter} onClick={handleOnHome} alt="Logo"/>
            </a>
            <Navigate />
          </div>
        </footer>
		  </div>
    </div>
  );
};

export default Footer;
