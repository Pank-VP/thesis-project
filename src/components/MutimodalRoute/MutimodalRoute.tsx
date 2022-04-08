import { FC } from 'react';
import { useSelector } from 'react-redux';
import checkpoint from '../../images/Terminals/check point.svg';
import { RootState } from '../../store/store';
import styles from '../GoodsCategory/GoodsCategory.module.scss';

const MutimodalRoute: FC = () => {
  const {itemsEurasianAgroexpress} = useSelector((state: RootState) => state.addDataEurasianAgroexpress);
	const Data = itemsEurasianAgroexpress?.content.rendered.split('{~*~}');
  const DataImage = itemsEurasianAgroexpress?.content.rendered.split('src=\"');
  const firstImage = DataImage?.[1];
	const firstDataImage = firstImage?.split(' ');
  
  return (
    <div className={styles.category}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h3 className={styles.title}>{Data?.[89]}</h3>
          <div className={styles.container}>
            <div className={styles.left_column}>
              <div className={styles.container_li}>
                <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
                <p className={styles.container_text}>
                  {Data?.[93]}
                </p>
              </div>
              <div className={styles.container_li}>
                <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
                <p className={styles.container_text}>
                  {Data?.[95]}
                </p>
              </div>
              <div className={styles.container_li}>
                <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
                <p className={styles.container_text}>
                  {Data?.[97]}
                </p>
              </div>
              <div className={styles.container_li}>
                <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
                <p className={styles.container_text}>
                  {Data?.[99]}
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

export default MutimodalRoute;
