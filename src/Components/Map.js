import React from 'react';
import { YMaps, Map, Placemark, FullscreenControl, ZoomControl, GeolocationControl, RulerControl } from 'react-yandex-maps';

const MapStyle = {
    display: 'flex',
    justifyContent: 'center'
}

function MyMap() {
    return (
        <div className='Map' style={MapStyle}>
            <div
                style={{
                    display: 'inline-block',
                    border: '2px solid gray',
                }}
            >
                <YMaps>
                    <Map
                        width='90vw'
                        height='40vh'
                        defaultState={{
                            center: [40.862133, 71.459362],
                            zoom: 10
                        }}
                    >
                        <Placemark
                            geometry={[40.862133, 71.459362]}
                            options={{
                                preset: 'islands#circleDotIcon',
                                iconColor: '#00bf00'
                            }}
                            properties={{
                                balloonContentBody: `Raqamli texnologiyalar o'quv markazi - Mingbuloq tumani filiali

                                Call-markaz: +998 99 046-11-99
                                
                                Mas'ul xodim: Mamutaliyev Doston
                                
                                Manzil: Mingbuloq tumani, Jomashuy shaharchasi, Ozodlik ko'chasi, 102 uy
                                
                                Telefon: +998 99 396-68-67
                                
                                E-mail: namangan@it-park.uz
                                
                                Sayt: www.itcenter.uz`
                            }}
                        />
                        <ZoomControl options={{ float: 'left' }} />
                        <FullscreenControl />
                        <GeolocationControl options={{ float: 'left' }} />
                        <RulerControl options={{ float: 'right' }} />
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}

export default MyMap
