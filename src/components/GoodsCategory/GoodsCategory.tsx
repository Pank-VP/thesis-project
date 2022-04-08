import { FC } from 'react';
import styles from './GoodsCategory.module.scss';
import checkpoint from '../../images/Terminals/check point.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const GoodsCategory: FC = () => {
  const {itemsMagistral} = useSelector((state: RootState) => state.addDataMagistral);
	const DataMagistral = itemsMagistral?.content.rendered.split('{~*~}');
  const DataMagistralImage = itemsMagistral?.content.rendered.split('src=\"');
  const firstImage = DataMagistralImage?.[1];
	const firstDataImage = firstImage?.split(' ');
  
  return (
    <div className={styles.category}>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title} >{DataMagistral?.[57]}</h3>
        <div className={styles.container}>
          <div className={styles.left_column}>
            <div className={styles.container_li}>
              <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
              <p className={styles.container_text}>
                {DataMagistral?.[61]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
              <p className={styles.container_text}>
                {DataMagistral?.[63]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
              <p className={styles.container_text}>
                {DataMagistral?.[65]}
              </p>
            </div>
          </div>
          <div className={styles.right_column}>
            <div className={styles.container_li}>
              <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
              <p className={styles.container_text}>
                {DataMagistral?.[67]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
              <p className={styles.container_text}>
                {DataMagistral?.[69]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
              <p className={styles.container_text}>
                {DataMagistral?.[71]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpoint} alt="check-point" className={styles.container_logo}/>
              <p className={styles.container_text}>
                {DataMagistral?.[73]}
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

export default GoodsCategory;
