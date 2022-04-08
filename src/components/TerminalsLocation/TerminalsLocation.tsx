import { FC } from 'react';
import styles from './TerminalsLocation.module.scss';
import TerminalLocationYandexMap from '../TerminalLocationYandexMap/TerminalLocationYandexMap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const TerminalsLocation: FC = () => {
	const {itemsTerminal} = useSelector((state: RootState) => state.addDataTerminals);
	const DataTerminals = itemsTerminal?.content.rendered.split('{~*~}');

  return (
    <div className={styles.location}>
		  <div className={styles.wrapper}>
		  	<div className={styles.title}>
		  		<h3 className={styles.heading}>{DataTerminals?.[69]} <span className={styles.red}>{DataTerminals?.[71]}</span></h3>
		  	</div>
				<div className={styles.container}>
					<TerminalLocationYandexMap />
				</div>
		  </div>
	  </div>
  );
}

export default TerminalsLocation;
