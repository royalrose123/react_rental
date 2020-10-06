import { useState, useEffect, useRef } from 'react'
import { isEmpty } from 'lodash'

// Components
import Marker from 'assets/images/marker.png'
import Circle from 'assets/images/circle.png'

function useMapEffect({ result, setSeletedHouse, searchForm, setSearchForm }) {
  const [position, setPosition] = useState({})
  const [map, setMap] = useState(null)

  const markersRef = useRef([])
  const markerCluster = useRef(null)

  const initialSWLat = map?.getBounds()?.getSouthWest().lat()
  const { mapBounds } = searchForm
  const { SWLat, SWLng, NELat, NELng } = mapBounds

  // get current map bounds
  useEffect(() => {
    if (map) {
      const mapDragendEvent = map.addListener('dragend', () => {
        const SWLat = map.getBounds().getSouthWest().lat()
        const SWLng = map.getBounds().getSouthWest().lng()
        const NELat = map.getBounds().getNorthEast().lat()
        const NELng = map.getBounds().getNorthEast().lng()

        setSearchForm({
          ...searchForm,
          mapBounds: {
            SWLat,
            SWLng,
            NELat,
            NELng,
          },
        })
      })

      const mapZoomChangedEvent = map.addListener('zoom_changed', () => {
        const SWLat = map.getBounds().getSouthWest().lat()
        const SWLng = map.getBounds().getSouthWest().lng()
        const NELat = map.getBounds().getNorthEast().lat()
        const NELng = map.getBounds().getNorthEast().lng()

        setSearchForm({
          ...searchForm,
          mapBounds: {
            SWLat,
            SWLng,
            NELat,
            NELng,
          },
        })
      })
      return () => {
        mapDragendEvent.remove()
        mapZoomChangedEvent.remove()
      }
    }
  }, [map, searchForm, setSearchForm])

  // add map marker
  useEffect(() => {
    if (map && result) {
      // 當 result 更新時要把原本的 marker 跟 cluster 清掉
      markersRef.current.forEach((marker) => marker.setMap(null))
      markersRef.current = []

      result.forEach((house, index) => {
        const marker = new window.google.maps.Marker({
          position: { lat: house.latLng.lat, lng: house.latLng.lng }, // marker的放置位置
          map,
          title: house.title,
          icon: Marker,
        })

        marker.addListener('click', () => {
          setSeletedHouse(house)
        })

        markersRef.current.push(marker)

        return marker
      })

      if (!isEmpty(markerCluster.current)) {
        markerCluster.current.clearMarkers()
      }

      markerCluster.current = new window.MarkerClusterer(map, markersRef.current, {
        gridSize: 140,
        maxZoom: 16,
        styles: [
          {
            url: Circle,
            height: 40,
            width: 40,
            textColor: '#FFF76F',
            textSize: 14,
          },
        ],
      })
    }
  }, [map, result, setSeletedHouse])

  // get user location
  useEffect(() => {
    if (isEmpty(position)) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }

        setPosition(coords)
      })
    }
  }, [position])

  // initaila map
  useEffect(() => {
    if (!isEmpty(position)) {
      const newMap = new window.google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 12,
        mapTypeId: 'roadmap',
      })

      setMap(newMap)
    }
  }, [position])

  // didmount 完後設定 map 初始的 bounds
  useEffect(() => {
    if (initialSWLat && SWLat === SWLng && SWLng === NELat && NELat === NELng) {
      const SWLat = map.getBounds().getSouthWest().lat()
      const SWLng = map.getBounds().getSouthWest().lng()
      const NELat = map.getBounds().getNorthEast().lat()
      const NELng = map.getBounds().getNorthEast().lng()

      setSearchForm({
        ...searchForm,
        mapBounds: {
          SWLat,
          SWLng,
          NELat,
          NELng,
        },
      })
    }
  }, [NELat, NELng, SWLat, SWLng, initialSWLat, map, searchForm, setSearchForm])
}

export default useMapEffect
