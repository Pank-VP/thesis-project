import { FC } from 'react';
import styles from './OurServices.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


const OurServices: FC = () => {
	const { items } = useSelector((state: RootState) => state.addData);
	const DataServices = items?.content.rendered.split('{~*~}');

	const DataServicesImage = items?.content.rendered.split('src=\"');
  const firstImage = DataServicesImage?.[1];
	const firstDataImage = firstImage?.split(' ');
  const secondImage = DataServicesImage?.[2];
	const secondDataImage = secondImage?.split(' ');
  const thirdImage = DataServicesImage?.[3];
	const thirdDataImage = thirdImage?.split(' ');
	
  return (
    <div className={styles.services} id="services">
      <div className={styles.wrapper}>
		  	<h2 className={styles.title}> 
		  		<span className={styles.title_color}>{DataServices?.[65]} </span>
		  		 {DataServices?.[67]}
		  	</h2>
		  	<div className={styles.cont}>
					<img src={firstDataImage?.[0]} alt="truck" className={styles.img_first} />
		  		<div className={styles.location_first}>
		  			<div className={styles.location}>
		  				<p className={styles.heading}>01</p>
		  				<p className={styles.heading_number}><span className={styles.title_color}>#</span>One</p>
		  				<div className={styles.cont_line}></div>
		  				<p className={styles.cont_title}>{DataServices?.[69]}</p>
		  				<p className={styles.cont_subtitle}>{DataServices?.[71]}</p>
		  				<div className={styles.line_one}></div>
		  				<div className={styles.line_two}></div>
		  			</div>
		  		</div>
		  	</div>
		  	<div className={styles.cont_two}>
		  		<img src={secondDataImage?.[0]} alt="box" className={styles.img_second} />
		  		<div className={styles.location_second}>
		  			<div className={styles.location}>
		  				<p className={styles.heading}>02</p>
		  				<p className={styles.heading_number}><span className={styles.title_color}>#</span>Two</p>
		  				<div className={styles.cont_line}></div>
		  				<p className={styles.cont_title}>{DataServices?.[73]}</p>
		  				<p className={styles.cont_subtitle}>{DataServices?.[75]}</p>
		  				<div className={styles.line_three}></div>
		  				<div className={styles.line_four}></div>
		  			</div>
		  		</div>
		  	</div>
		  	<div className={styles.cont}>
		  		<img src={thirdDataImage?.[0]} alt="warehouse" className={styles.img_thirt} />
		  		<div className={styles.location_third}>
		  			<div className={styles.location}>
		  				<p className={styles.heading}>03</p>
		  				<p className={styles.heading_number}><span className={styles.title_color}>#</span>Three</p>
		  				<div className={styles.cont_line}></div>
		  				<p className={styles.cont_title}>{DataServices?.[77]}</p>
		  				<p className={styles.cont_subtitle}>{DataServices?.[79]}</p>
		  				<div className={styles.line_two}></div>
		  				<div className={styles.line_four}></div>
		  			</div>
		  		</div>
		  	</div>
		  </div>
    </div>
  );
};

export default OurServices;
