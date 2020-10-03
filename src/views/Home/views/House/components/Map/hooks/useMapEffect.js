import { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'

function useMapEffect() {
  const [position, setPosition] = useState({})
  const [, setMap] = useState(null)

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

  useEffect(() => {
    if (!isEmpty(position)) {
      const newMap = new window.google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 15,
        mapTypeId: 'roadmap',
      })

      setMap(newMap)
    }
  }, [position])
}

export default useMapEffect
