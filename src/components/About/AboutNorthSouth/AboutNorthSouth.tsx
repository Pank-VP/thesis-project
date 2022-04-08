import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import styles from '../About.module.scss';

const AboutNorthSouth: FC = () => {
	const {itemsNorthSouth} = useSelector((state: RootState) => state.addDataNorthSouth);
	const DataNorthSouth = itemsNorthSouth?.content.rendered.split('{~*~}');

  return (
    <div className={styles.about} id="aboutNorthSouth" onClick={() => console.log(DataNorthSouth)}>
	  	<div className={styles.wrapper}>
				<div className={styles.container}>
					<h2 className={styles.title}>
						{DataNorthSouth?.[19]} <span className={styles.color_red}>{DataNorthSouth?.[21]}</span>
					</h2>
					<p className={styles.subtitle_north_south}>
						{DataNorthSouth?.[23]}
					</p>
				</div>
	  	</div>
  	</div>
  );
};

export default AboutNorthSouth;
