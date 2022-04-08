import { FC } from 'react';
import styles from './TheProjects.module.scss';
import svg from '../../images/TheProjects/Group 434.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const TheProjects: FC = () => {
	const navigate = useNavigate();
	const { items } = useSelector((state: RootState) => state.addData);
	const DataProjects = items?.content.rendered.split('{~*~}');

	const handleOnNorthSouth = () => {
		navigate('/north-south');
	};

	const handleOnMagistral = () => {
		navigate('/magistral');
	};

	const handleOnEurasianAgroexpress = () => {
		navigate('/eurasian-agroexpress');
	};

  return (
    <div className={styles.projects} id="projects" onClick={() => console.log(DataProjects)}>
		  <div className={styles.wrapper}>
		  	<h2 className={styles.heading}>{DataProjects?.[107]} <span className={styles.color}>{DataProjects?.[109]}</span></h2>
		  	<div className={styles.container}>
		  		<div className={styles.card}>
		  			<h3 className={styles.title_one}>
							{DataProjects?.[113]}
		  			</h3>
		  			<p className={styles.subtitle_one}>
							{DataProjects?.[115]}
		  			</p>
		  			<div className={styles.pointer}>
							<a href='#heading'>
								<img src={svg} alt="pointer" className={styles.pointer_img} onClick={handleOnNorthSouth}/>
							</a>
		  			</div>
		  		</div>
		  		<div className={styles.card_two}>
		  			<h3 className={styles.title_two}>
							{DataProjects?.[119]}
		  			</h3>
		  			<p className={styles.subtitle_two}>
							{DataProjects?.[121]}
		  			</p>
		  			<div className={styles.pointer}>
							<a href='#heading'>
		  					<img src={svg} alt="pointer" className={styles.pointer_img} onClick={handleOnMagistral} />
							</a>
		  			</div>
		  		</div>
		  		<div className={styles.card_three}>
		  			<h3 className={styles.title_three}>
							{DataProjects?.[125]}
		  			</h3>
		  			<p className={styles.subtitle_three}>
							{DataProjects?.[127]}
		  			</p>
            <div className={styles.pointer}>
							<a href='#heading'>
		  					<img src={svg} alt="pointer" className="c-card__pointer-img" onClick={handleOnEurasianAgroexpress} />
							</a>
		  			</div>
		  		</div>
		  	</div>
		  </div>
	  </div>
  );
};

export default TheProjects;
