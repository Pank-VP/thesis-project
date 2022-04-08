import { FC } from 'react';
import styles from './TerminalsImg.module.scss';
import checkPoint from '../../images/Terminals/check point.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const TerminalsImg: FC = () => {
	const navigate = useNavigate();
	const { items } = useSelector((state: RootState) => state.addData);
	const DataTerminals = items?.content.rendered.split('{~*~}');
	const DataServicesImage = items?.content.rendered.split('src=\"');
  const firstImage = DataServicesImage?.[4];
	const firstDataImage = firstImage?.split(' ');
	
	const handleOnTerminals = () => {
		navigate('/terminals');
	}

  return (
    <div className={styles.terminals} id="terminals">
		  <div className={styles.wrapper}>
		  	<div className={styles.container}>
		  		<div className={styles.container_left}>
		  			<h2 className={styles.container_title}>{DataTerminals?.[85]}</h2>
		  			<div className={styles.container_ul}>
		  				<div className={styles.container_li}>
		  					<img src={checkPoint} alt="check-point" className={styles.container_logo} />
		  					<p className={styles.container_text}>
		  						{DataTerminals?.[89]}
		  					</p>
		  				</div>
		  				<div className={styles.container_li}>
		  					<img src={checkPoint} alt="check-point" className={styles.container_logo} />
		  					<p className={styles.container_text}>
									{DataTerminals?.[91]}
		  					</p>
		  				</div>
		  				<div className={styles.container_li}>
		  					<img src={checkPoint} alt="check-point" className={styles.container_logo} />
		  					<p className={styles.container_text}>
									{DataTerminals?.[93]}
		  					</p>
		  				</div>
		  				<div className={styles.container_li}>
		  					<img src={checkPoint} alt="check-point" className={styles.container_logo} />
		  					<p className={styles.container_text}>
									{DataTerminals?.[95]}
		  					</p>
		  				</div>
		  				<div className={styles.container_li}>
		  					<img src={checkPoint} alt="check-point" className={styles.container_logo} />
		  					<p className={styles.container_text}>
									{DataTerminals?.[97]}
		  					</p>
		  				</div>
		  			</div>
						<a href="#heading" onClick={handleOnTerminals} className={styles.link}>{DataTerminals?.[101]}</a>
		  		</div>
          <img src={firstDataImage?.[0]} alt="Belarus" className={styles.container_belarus} />
		  	</div>
		  	
		  </div>
	  </div>
  );
};

export default TerminalsImg;
