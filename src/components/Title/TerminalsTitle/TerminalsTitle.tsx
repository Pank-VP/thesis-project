import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import styles from '../Title.module.scss';

const TerminalsTitle: FC = () => {
	const {itemsTerminal} = useSelector((state: RootState) => state.addDataTerminals);
	const DataTerminals = itemsTerminal?.content.rendered.split('{~*~}');

  return (
    <div className={styles.name_page} id="term">
		  <div className={styles.wrapper}>
		  	<h1 className={styles.title_terminals}>{DataTerminals?.[3]} <br/> {DataTerminals?.[5]} <span className={styles.red}> {DataTerminals?.[7]}</span> {DataTerminals?.[9]} <span className={styles.red}>{DataTerminals?.[11]}</span></h1>
		  	<div className={styles.line}></div>
		  	<a className={styles.link} href="#aboutTerminals">{DataTerminals?.[19]}</a>
		  </div>
    </div>
  );
};

export default TerminalsTitle;
