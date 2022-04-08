import { FC } from 'react';
import styles from '../GoodsCategory/GoodsCategory.module.scss';
import enumer from '../Enumeration/Enumeration.module.scss';
import checkpointWhite from '../../images/Enumeration/check-point-white.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const EnumerationEurasian: FC = () => {
  const {itemsEurasianAgroexpress} = useSelector((state: RootState) => state.addDataEurasianAgroexpress);
	const Data = itemsEurasianAgroexpress?.content.rendered.split('{~*~}');
  
  return (
    <div className={enumer.enumeration}>
      <div className={enumer.wrapper}>
        <div className={enumer.container}>
          <div className={styles.left_column_mr}>
            <h3 className={enumer.title}>{Data?.[35]}</h3>
            <div className={enumer.red_line}></div>
            <div className={enumer.subtitle}>
              {Data?.[39]}
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {Data?.[43]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {Data?.[45]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {Data?.[47]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {Data?.[49]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {Data?.[51]}
              </p>
            </div>
          </div>
          <div className="p-f-good-category__right-column">
            <h3 className={enumer.title}>{Data?.[61]}</h3>
            <div className={enumer.red_line}></div>
            <div className={enumer.subtitle}>
              {Data?.[65]}
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {Data?.[69]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {Data?.[71]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {Data?.[73]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {Data?.[75]}
              </p>
            </div>
            <div className={styles.container_li}>
              <img src={checkpointWhite} alt="check-point" className={styles.container_logo}/>
              <p className={enumer.container_text}>
                {Data?.[77]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnumerationEurasian;
