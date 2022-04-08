import { FC } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import mapIcon from '../../images/Map/mapIcon.svg';

const TerminalLocationYandexMap: FC = () => {
  const coordinatesOrsha = [54.443675, 30.291721];
  const coordinatesBerestovica = [53.120986, 23.904406];
  const coordinatesBruzgi = [53.528557, 23.676242];
  
  return (
    <YMaps
        query={{
          apikey: 'a00d9244-b702-44d5-91b7-2253c8de026f',
          lang: 'en_US'
        }}
        >
        <Map
            modules={['geocode']}
            defaultState={{ center: [53.90, 27.56], zoom: 6 }}
            width={"100%"}
            height={"100%"}
        >
          <Placemark
            geometry={coordinatesOrsha}
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
            geometry={coordinatesBerestovica}
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
            geometry={coordinatesBruzgi}
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

export default TerminalLocationYandexMap;
