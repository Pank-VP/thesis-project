import { FC } from 'react';
import styles from '../GoodsCategory/GoodsCategory.module.scss';
import enumer from './Enumeration.module.scss';
import checkpointWhite from '../../images/Enumeration/check-point-white.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Enumeration: FC = () => {
  const {itemsNorthSouth} = useSelector((state: RootState) => state.addDataNorthSouth);
	const DataNorthSouth = itemsNorthSouth?.content.rendered.split('{~*~}');
  
  return (
    <div className={enumer.enumeration}>
      <div className={enumer.wrapper}>
        <div className={enumer.container}>
          <div className={styles.left_column_mr}>
            <h3 className={enumer.title}>{DataNorthSouth?.[29]}</h3>
            <div className={enumer.red_line}></div>
            <div className={enumer.subtitle}>
              {DataNorthSouth?.[33]}
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {DataNorthSouth?.[37]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {DataNorthSouth?.[39]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {DataNorthSouth?.[41]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {DataNorthSouth?.[43]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {DataNorthSouth?.[45]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {DataNorthSouth?.[47]}
              </p>
            </div>
          </div>
          <div className="p-f-good-category__right-column">
            <h3 className={enumer.title}>02.</h3>
            <div className={enumer.red_line}></div>
            <div className={enumer.subtitle}>
              {DataNorthSouth?.[59]}
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {DataNorthSouth?.[63]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {DataNorthSouth?.[65]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {DataNorthSouth?.[67]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {DataNorthSouth?.[69]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {DataNorthSouth?.[71]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {DataNorthSouth?.[73]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {DataNorthSouth?.[75]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enumeration;
