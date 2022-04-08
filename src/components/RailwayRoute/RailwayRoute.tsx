import { FC } from 'react';
import { useSelector } from 'react-redux';
import checkpoint from '../../images/Terminals/check point.svg';
import { RootState } from '../../store/store';
import styles from '../GoodsCategory/GoodsCategory.module.scss';

const RailwayRoute: FC = () => {
  const {itemsNorthSouth} = useSelector((state: RootState) => state.addDataNorthSouth);
	const DataNorthSouth = itemsNorthSouth?.content.rendered.split('{~*~}');
  const DataNorthSouthImage = itemsNorthSouth?.content.rendered.split('src=\"');
  const firstImage = DataNorthSouthImage?.[1];
	const firstDataImage = firstImage?.split(' ');
  
  return (
    <div className={styles.category}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h3 className={styles.title}>{DataNorthSouth?.[83]}</h3>
          <div className={styles.container}>
            <div className={styles.left_column}>
              <div className={styles.container_li}>
                <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
                <p className={styles.container_text}>
                  {DataNorthSouth?.[87]}
                </p>
              </div>
              <div className={styles.container_li}>
                <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
                <p className={styles.container_text}>
                  {DataNorthSouth?.[89]}
                </p>
              </div>
              <div className={styles.container_li}>
                <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
                <p className={styles.container_text}>
                  {DataNorthSouth?.[91]}
                </p>
              </div>
              <div className={styles.container_li}>
                <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
                <p className={styles.container_text}>
                  {DataNorthSouth?.[93]}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={firstDataImage?.[0]} alt="highway" className={styles.container_img}/>
      </div>
    </div>
  );
};

export default RailwayRoute;
