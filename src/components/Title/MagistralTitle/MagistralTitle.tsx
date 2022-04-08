import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import styles from '../Title.module.scss';

const MagistralTitle: FC = () => {
	const {itemsMagistral} = useSelector((state: RootState) => state.addDataMagistral);
	const DataMagistral = itemsMagistral?.content.rendered.split('{~*~}');
	
  return (
    <div className={styles.name_page}>
		  <div className={styles.wrapper}>
		  	<h1 className={styles.title}><span className={styles.red}>{DataMagistral?.[3]}</span> {DataMagistral?.[5]} <span className={styles.red}>{DataMagistral?.[7]}</span> {DataMagistral?.[9]}</h1>
		  	<div className={styles.line}></div>
		  	<a className={styles.link} href="#aboutMagistral">{DataMagistral?.[17]}</a>
		  </div>
    </div>
  );
};

export default MagistralTitle;
