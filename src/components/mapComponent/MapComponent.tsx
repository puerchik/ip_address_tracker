import { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { useAppSelector } from 'shared/hooks/reduxHooks'

import { useGeographic } from 'ol/proj'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import TileLayer from 'ol/layer/Tile'
import Point from 'ol/geom/Point'
import Feature from 'ol/Feature'
import OSM from 'ol/source/OSM'
import View from 'ol/View'
import Map from 'ol/Map'
import 'ol/ol.css'

import pinIcon from 'assets/images/icon-location.svg'
import Style from 'ol/style/Style'
import Icon from 'ol/style/Icon'

export const MapComponent = () => {
  const mapElement = useRef(null)
  const longitude = useAppSelector(state => state.ipTracker.longitude)
  const latitude = useAppSelector(state => state.ipTracker.latitude)

  useEffect(() => {
    console.log('map rendered')

    useGeographic()

    if (!mapElement.current) return

    const center = [longitude, latitude]

    const pinFeature = new Feature({
      geometry: new Point(center),
    })

    const pinStyle = new Style({
      image: new Icon({
        src: pinIcon,
        anchor: [0.5, 1.2],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })

    pinFeature.setStyle(pinStyle)

    const pinSource = new VectorSource({
      features: [pinFeature],
    })

    const pinLayer = new VectorLayer({
      source: pinSource,
    })

    const map = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        pinLayer,
      ],
      view: new View({
        center: [longitude, latitude],
        zoom: 10,
      }),
    })

    return () => {
      map.setTarget(undefined)
    }
  }, [longitude])

  return <S.MapWrapper ref={mapElement} style={{ width: '100%', height: '100px' }} />
}

const S = {
  MapWrapper: styled.div`
    flex-grow: 1;
  `,
}
