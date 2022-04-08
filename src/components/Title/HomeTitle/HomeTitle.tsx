import { FC } from 'react';
import styles from '../Title.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const HomeTitle: FC = () => {
	const {items} = useSelector((state: RootState) => state.addData);
	const DataHome = items?.excerpt.rendered.split('{~*~}');

  return (
		<div className={styles.name_page}>
		  <div className={styles.wrapper}>
		  	<h1 className={styles.title}>{DataHome?.[15]} <span className={styles.red}>{DataHome?.[17]}</span><br/> {DataHome?.[19]} <span className={styles.red}>{DataHome?.[21]}</span></h1>
		  	<div className={styles.line}></div>
		  	<p className={styles.subtitle}>{DataHome?.[25]}</p>
		  	<a className={styles.link} href="#about">{DataHome?.[29]}</a>
		  </div>
    </div>
  );
};

export default HomeTitle;
