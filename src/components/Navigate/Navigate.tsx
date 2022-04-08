import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import styles from './Navigate.module.scss';

const Navigate: FC = () => {
  const navigate = useNavigate();
	const {items} = useSelector((state: RootState) => state.addData);
	const DataNavigation = items?.content.rendered.split('{~*~}');

  const handleOnHome = () => {
    navigate('/');
  }

  return (
    <nav className={styles.navigation}>
      <a className={styles.item} href="#about" onClick={handleOnHome}>{DataNavigation?.[3]}</a>
			<a className={styles.item} href="#services" onClick={handleOnHome}>{DataNavigation?.[5]}</a>
			<a className={styles.item} href="#terminals" onClick={handleOnHome}>{DataNavigation?.[7]}</a>
			<a className={styles.item} href="#projects">{DataNavigation?.[9]}</a>
			<a className={styles.item} href="#contacts">{DataNavigation?.[11]}</a>
    </nav>
  );
};

export default Navigate;
