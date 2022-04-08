import { FC, useState } from 'react';
import styles from './Contacts.module.scss';
import plus from '../../images/Map/plus.svg';
import minus from '../../images/Map/minus.svg';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import YandexMap from '../YandexMap/Map';
import YandexMapMobile from '../YandexMap/MapMobile';

const Contacts: FC = () => {
  const { items } = useSelector((state: RootState) => state.addData);
	const DataContacts = items?.content.rendered.split('{~*~}');
  const [isActiveMoskow, setIsActiveMoskow] = useState(false);
  const [isActiveMinsk, setIsActiveMinsk] = useState(false);
  const [isActive, setIsActive] = useState(true);
  
  const handleOnChangeMoscow = () => {
    setIsActiveMoskow(!isActiveMoskow);
    setIsActiveMinsk(false);
    setIsActive(false);
  };

  const handleOnChangeMinsk = () => {
    setIsActiveMinsk(!isActiveMinsk);
    setIsActiveMoskow(false);
    setIsActive(false);
  };

  const handleOnChange = () => {
    setIsActive(!isActive);
    setIsActiveMinsk(false);
    setIsActiveMoskow(false);
  };

  return (
    <div className={styles.map} id="contacts">
		  <div className={styles.wrapper}>
		  	<h3 className={styles.title}>{DataContacts?.[133]} <span className={styles.color_red}>{DataContacts?.[135]}</span></h3>
		  </div>
		  <div className={styles.yandex}>
        <div className={styles.yandex_map}><YandexMap /></div>
        <div className={styles.yandex_map_mobile}><YandexMapMobile /></div>
      </div>
      <div className={styles.accordeon}>
        <div className={styles.accordeon_wrapper}>
          <div className={styles.section}>
            <div className={clsx(styles.header, isActiveMoskow && styles.active_header)} onClick={handleOnChangeMoscow}>
              <p className={clsx(styles.header_title, isActiveMoskow && styles.active_header_title)}>{DataContacts?.[137]}</p>
              <div className={clsx(styles.header_img, isActiveMoskow && styles.active_header_img)}>
                <img src={plus} alt="plus" className={clsx(styles.img_plus, isActiveMoskow && styles.hidden)} />
                <img src={minus} alt="minus" className={styles.img_minus} />
              </div>
            </div>
            <div className={clsx(styles.body, isActiveMoskow && styles.active)}>
              <div className={styles.body_padding}>
                <h4 className={styles.body_title}>{DataContacts?.[139]}</h4>
                <p className={styles.body_address}>{DataContacts?.[141]}</p>
                <p className={styles.body_tel}>{DataContacts?.[143]}</p>
                <p className={styles.body_email}>{DataContacts?.[145]}</p>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={clsx(styles.header, isActiveMinsk && styles.active_header)} onClick={handleOnChangeMinsk}>
              <p className={clsx(styles.header_title, isActiveMinsk && styles.active_header_title)}>{DataContacts?.[147]}</p>
              <div className={clsx(styles.header_img, isActiveMinsk && styles.active_header_img)}>
                <img src={plus} alt="plus" className={clsx(styles.img_plus, isActiveMinsk && styles.hidden)} />
                <img src={minus} alt="minus" className={styles.img_minus} />
              </div>
            </div>
            <div className={clsx(styles.body, isActiveMinsk && styles.active)}>
              <div className={styles.body_padding}>
                <h4 className={styles.body_title}>{DataContacts?.[149]}</h4>
                <p className={styles.body_address}>{DataContacts?.[151]}</p>
                <p className={styles.body_tel}>{DataContacts?.[153]}</p>
                <p className={styles.body_email}>{DataContacts?.[155]}</p>
              </div>
            </div>
          </div>
          <div className={styles.section}>
          <div className={clsx(styles.header, isActive && styles.active_header)} onClick={handleOnChange}>
              <p className={clsx(styles.header_title, isActive && styles.active_header_title)}>{DataContacts?.[157]}</p>
              <div className={clsx(styles.header_img, isActive && styles.active_header_img)}>
                <img src={plus} alt="plus" className={clsx(styles.img_plus, isActive && styles.hidden)} />
                <img src={minus} alt="minus" className={styles.img_minus} />
              </div>
            </div>
            <div className={clsx(styles.body, isActive && styles.active)}>
              <div className={styles.body_padding}>
                <h4 className={styles.body_title}>{DataContacts?.[159]}</h4>
                <p className={styles.body_address}>{DataContacts?.[161]}</p>
                <p className={styles.body_tel}>{DataContacts?.[163]}</p>
                <p className={styles.body_email}>{DataContacts?.[165]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
	  </div>
  );
};

export default Contacts;
