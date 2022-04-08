import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import styles from '../About.module.scss';

const AboutEurasianAgroexpress: FC = () => {
	const {itemsEurasianAgroexpress} = useSelector((state: RootState) => state.addDataEurasianAgroexpress);
	const Data = itemsEurasianAgroexpress?.content.rendered.split('{~*~}');
	
  return (
    <div className={styles.about} id="aboutEurasionAgroexpress">
	  	<div className={styles.wrapper}>
				<div className={styles.container}>
					<h2 className={styles.title}>
						{Data?.[23]} <span className={styles.color_red}>{Data?.[25]}</span>
					</h2>
					<p className={styles.subtitle_north_south}>
						{Data?.[29]}
					</p>
				</div>
	  	</div>
  	</div>
  );
};

export default AboutEurasianAgroexpress;
