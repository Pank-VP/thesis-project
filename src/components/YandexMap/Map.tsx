import { FC } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import mapIcon from '../../images/Map/mapIcon.svg';

const YandexMap: FC = () => {
  const coordinatesHamburg = [53.553838, 9.999758];
  const coordinatesMinsk = [53.899546, 27.543074];
  const coordinatesMoskow = [55.75399400, 37.62209300];
  
  return (
    <YMaps
        query={{
          apikey: 'a00d9244-b702-44d5-91b7-2253c8de026f',
          lang: 'en_US'
        }}
        >
        <Map
            modules={['geocode']}
            defaultState={{ center: [53.49, 53.42], zoom: 4 }}
            width={"100%"}
            height={"100%"}
        >
          <Placemark
            geometry={coordinatesHamburg}
            properties={{
              hintContent: 'Hamburg Office',
              balloonContent: 'Ferdinandstrasse 25-27, D-20095 Hamburg, Germany'
            }}
            options={{
              iconLayout: 'default#image',
              iconImageHref: mapIcon, 
              iconImageSize: [30, 41], 
              hideIconOnBalloonOpen: true, 
              balloonOffset: [3, -40]
            }}
          />
          <Placemark
            geometry={coordinatesMinsk}
            properties={{
              hintContent: 'Minsk Office',
              balloonContent: 'Nemiga 40, 220004 Minsk, Belarus'
            }}
            options={{
              iconLayout: 'default#image',
              iconImageHref: mapIcon, 
              iconImageSize: [30, 41], 
              hideIconOnBalloonOpen: true, 
              balloonOffset: [3, -40]
            }}
          />
          <Placemark
            geometry={coordinatesMoskow}
            options={{
              iconLayout: 'default#image',
              iconImageHref: mapIcon, 
              iconImageSize: [30, 41], 
              hideIconOnBalloonOpen: false, 
              balloonOffset: [3, -40]
            }}
            modules={['objectManager.addon.objectsBalloon', 'objectManager.addon.objectsHint']}
            properties={{
              hintContent: 'Moskow Office',
              balloonContent: 'Krasnopresnenskaya nab. 12-17, 123317 Moscow, Russia',
            }}
          />
        </Map>
      </YMaps>
  );
};

export default YandexMap;
