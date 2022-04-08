import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import styles from '../Title.module.scss';

const NorthSouthTitle: FC = () => {
	const {itemsNorthSouth} = useSelector((state: RootState) => state.addDataNorthSouth);
	const DataNorthSouth = itemsNorthSouth?.content.rendered.split('{~*~}');
	
  return (
    <div className={styles.name_page}>
		  <div className={styles.wrapper}>
		  	<h1 className={styles.title}>{DataNorthSouth?.[3]}<span className={styles.red}> <br/>{DataNorthSouth?.[5]}</span> {DataNorthSouth?.[7]}</h1>
		  	<div className={styles.line} onClick={() => console.log(DataNorthSouth)}></div>
		  	<a className={styles.link} href="#aboutNorthSouth">{DataNorthSouth?.[15]}</a>
		  </div>
    </div>
  );
};

export default NorthSouthTitle;
