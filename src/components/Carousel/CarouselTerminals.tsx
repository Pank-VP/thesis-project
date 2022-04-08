import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './CarouselTerminals.module.scss';

const CarouselTerminals: FC = () => {
	const {itemsTerminal} = useSelector((state: RootState) => state.addDataTerminals);
	const DataServicesImage = itemsTerminal?.content.rendered.split('src=\"');
  const firstImage = DataServicesImage?.[1];
	const firstDataImage = firstImage?.split(' ');
  const secondImage = DataServicesImage?.[2];
	const secondDataImage = secondImage?.split(' ');
  const thirdImage = DataServicesImage?.[3];
	const thirdDataImage = thirdImage?.split(' ');
  const fourthImage = DataServicesImage?.[4];
	const fourthDataImage = fourthImage?.split(' ');
  const fifthImage = DataServicesImage?.[5];
	const fifthDataImage = fifthImage?.split(' ');

  return (
    <div className={styles.gallery}>
		  <div className={styles.wrapper}>
		  	<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
		  		<div className="carousel-inner">
		  			<div className="carousel-item active">
		  				<img src={firstDataImage?.[0]} className={styles.block} alt="truck"/>
		  			</div>
		  			<div className="carousel-item">
		  				<img src={secondDataImage?.[0]} className={styles.block} alt="box"/>
		  			</div>
		  			<div className="carousel-item">
		  				<img src={thirdDataImage?.[0]} className={styles.block} alt="warehouse"/>
		  			</div>
		  			<div className="carousel-item">
		  				<img src={fourthDataImage?.[0]} className={styles.block} alt="warehouse"/>
		  			</div>
		  			<div className="carousel-item">
		  				<img src={fifthDataImage?.[0]} className={styles.block} alt="warehouse"/>
		  			</div>
		  		</div>
		  		<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
		  			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
		  			<span className="visually-hidden">Previous</span>
		  		</button>
		  		<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
		  			<span className="carousel-control-next-icon" aria-hidden="true"></span>
		  			<span className="visually-hidden">Next</span>
		  		</button>
		  	</div>
		  </div>
	  </div>
  );
};

export default CarouselTerminals;
