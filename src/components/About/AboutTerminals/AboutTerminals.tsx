import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import styles from '../About.module.scss';

const AboutTerminals: FC = () => {
	const {itemsTerminal} = useSelector((state: RootState) => state.addDataTerminals);
	const DataTerminals = itemsTerminal?.content.rendered.split('{~*~}');
	
  return (
    <div className={styles.about} id="aboutTerminals">
	    <div className={styles.wrapper}>
		  	<div className={styles.container}>
		  		<h2 className={styles.title}>
		  			{DataTerminals?.[25]} <span className={styles.color_red}>{DataTerminals?.[27]}</span>
		  		</h2>
		  		<p className={styles.subtitle}>
						{DataTerminals?.[31]}
		  		</p>
		  		<div className={styles.row}>
		  			<div className={styles.cont_card}>
		  				<div className={styles.heading}>
		  					<div className={styles.cont_title}>{DataTerminals?.[33]} <span className={styles.size_red}> {DataTerminals?.[35]}<sup>{DataTerminals?.[37]}</sup></span></div>
		  				</div>
		  				<p className={styles.cont_subtitle}>
								{DataTerminals?.[39]} 
		  				</p>
		  				<div className={styles.first_line}></div>
		  				<div className={styles.second_line}></div>
		  			</div>
		  			<div className={styles.cont_card}>
		  				<div className={styles.heading}>
		  					<div className={styles.cont_title}>{DataTerminals?.[41]}</div>
		  				</div>
		  				<p className={styles.cont_subtitle}>
								{DataTerminals?.[45]}
		  				</p>
		  				<div className={styles.first_line}></div>
		  				<div className={styles.second_line}></div>
		  			</div>
		  			<div className={styles.cont_card}>
		  				<div className={styles.heading}>
		  					<div className={styles.cont_title}>{DataTerminals?.[47]} <span className={styles.color_red}>{DataTerminals?.[49]}</span>{DataTerminals?.[51]}</div>
		  				</div>
		  				<p className={styles.cont_subtitle}>
								{DataTerminals?.[53]}
		  				</p>
		  				<div className={styles.first_line}></div>
		  				<div className={styles.second_line}></div>
		  			</div>
		  			<div className={styles.cont_card}>
		  				<div className={styles.heading}>
		  					<div className={styles.cont_title}>{DataTerminals?.[55]}<span className={styles.size_red}>{DataTerminals?.[57]}</span></div>
		  				</div>
		  				<p className={styles.cont_subtitle}>
								{DataTerminals?.[61]}
		  				</p>
		  			</div>
		  		</div>
		  	</div>
	    </div>
    </div>
  );
};

export default AboutTerminals;
