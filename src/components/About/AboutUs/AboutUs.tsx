import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import styles from '../About.module.scss';

const AboutUs: FC = () => {
	const {items} = useSelector((state: RootState) => state.addData);
	const DataAbout = items?.content.rendered.split('{~*~}');
	
  return (
    <div className={styles.about} id="about">
	  	<div className={styles.wrapper}>
				<div className={styles.container}>
					<h2 className={styles.title}>
						{DataAbout?.[33]} <span className={styles.color_red}>{DataAbout?.[35]}</span>
					</h2>
					<p className={styles.subtitle}>
						{DataAbout?.[37]}
					</p>
					<div className={styles.row}>
						<div className={styles.cont_card}>
							<div className={styles.heading}>
								<div className={styles.cont_title}>{DataAbout?.[39]}</div>
								<div className={styles.title_color}>{DataAbout?.[41]}</div>
							</div>
							<p className={styles.cont_subtitle}>
								{DataAbout?.[43]}
							</p>
							<div className={styles.first_line}></div>
							<div className={styles.second_line}></div>
						</div>
						<div className={styles.cont_card}>
							<div className={styles.heading}>
								<div className={styles.cont_title}>{DataAbout?.[45]}</div>
								<div className={styles.title_color}>{DataAbout?.[47]}</div>
							</div>
							<p className={styles.cont_subtitle}>
								{DataAbout?.[49]}
							</p>
							<div className={styles.first_line}></div>
							<div className={styles.second_line}></div>
						</div>
						<div className={styles.cont_card}>
							<div className={styles.heading}>
								<div className={styles.cont_title}>{DataAbout?.[51]}</div>
								<div className={styles.title_color}>{DataAbout?.[53]}</div>
							</div>
							<p className={styles.cont_subtitle}>
								{DataAbout?.[55]}
							</p>
							<div className={styles.first_line}></div>
							<div className={styles.second_line}></div>
						</div>
						<div className={styles.cont_card}>
							<div className={styles.heading}>
								<div className={styles.cont_title}>{DataAbout?.[57]}</div>
								<div className={styles.title_color}>{DataAbout?.[59]}</div>
							</div>
							<p className={styles.cont_subtitle}>
								{DataAbout?.[61]}
							</p>
						</div>
					</div>
				</div>
	  	</div>
  	</div>
  );
};

export default AboutUs;
