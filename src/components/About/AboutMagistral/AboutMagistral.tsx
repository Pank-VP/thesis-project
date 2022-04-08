import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import styles from '../About.module.scss';

const AboutMagistral: FC = () => {
	const {itemsMagistral} = useSelector((state: RootState) => state.addDataMagistral);
	const DataMagistral = itemsMagistral?.content.rendered.split('{~*~}');
	
  return (
    <div className={styles.about}>
	  	<div className={styles.wrapper}>
				<div className={styles.container} id="about">
					<h2 className={styles.title}>
						{DataMagistral?.[23]} <span className={styles.color_red}>{DataMagistral?.[25]}</span>
					</h2>
					<p className={styles.subtitle}>
						{DataMagistral?.[29]}
					</p>
					<div className={styles.row}>
						<div className={styles.cont_card}>
							<div className={styles.heading}>
								<div className={styles.cont_title}>{DataMagistral?.[31]}</div>
								<div className={styles.title_color}>{DataMagistral?.[33]}</div>
							</div>
							<p className={styles.cont_subtitle}>
								{DataMagistral?.[35]}
							</p>
							<div className={styles.first_line}></div>
							<div className={styles.second_line}></div>
						</div>
						<div className={styles.cont_card}>
							<div className={styles.heading}>
								<div className={styles.cont_title}>{DataMagistral?.[37]} <span className={styles.title_color}>{DataMagistral?.[39]}</span></div>
							</div>
							<p className={styles.cont_subtitle}>
								{DataMagistral?.[41]}
							</p>
							<div className={styles.first_line}></div>
							<div className={styles.second_line}></div>
						</div>
						<div className={styles.cont_card}>
							<div className={styles.heading}>
              <div className={styles.cont_title}>{DataMagistral?.[43]} <span className={styles.title_color}>{DataMagistral?.[45]}</span></div>
							</div>
							<p className={styles.cont_subtitle}>
								{DataMagistral?.[47]}
							</p>
							<div className={styles.first_line}></div>
							<div className={styles.second_line}></div>
						</div>
						<div className={styles.cont_card}>
							<div className={styles.heading}>
								<div className={styles.cont_title}>{DataMagistral?.[49]} <span className={styles.title_color}>{DataMagistral?.[51]}</span></div>
							</div>
							<p className={styles.cont_subtitle}>
								{DataMagistral?.[53]}
							</p>
						</div>
					</div>
				</div>
	  	</div>
  	</div>
  );
};

export default AboutMagistral;
