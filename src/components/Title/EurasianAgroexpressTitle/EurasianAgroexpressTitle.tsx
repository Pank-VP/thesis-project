import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import styles from '../Title.module.scss';

const EurasianAgroexpressTitle: FC = () => {
	const {itemsEurasianAgroexpress} = useSelector((state: RootState) => state.addDataEurasianAgroexpress);
	const DataEurasianAgroexpress = itemsEurasianAgroexpress?.content.rendered.split('{~*~}');
	
  return (
    <div className={styles.name_page}>
		  <div className={styles.wrapper}>
		  	<h1 className={styles.title}><span className={styles.red}>{DataEurasianAgroexpress?.[5]}<br/> {DataEurasianAgroexpress?.[7]}</span> {DataEurasianAgroexpress?.[9]}</h1>
		  	<div className={styles.line}></div>
		  	<a className={styles.link} href="#aboutEurasionAgroexpress">{DataEurasianAgroexpress?.[17]}</a>
		  </div>
    </div>
  );
};

export default EurasianAgroexpressTitle;
