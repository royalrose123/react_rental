export const onSubmitClick = async (data, setIsShownModal, mutationHouse) => {
  setIsShownModal(true)
  const address = data.city + data.distinct + data.street

  const geocoder = new window.google.maps.Geocoder()

  geocoder.geocode({ address }, (results, status) => {
    if (status === 'OK') {
      const addressData = results[0]

      const formattedAddress = addressData.formatted_address
      const latLng = addressData.geometry.location

      const newData = {
        ...data,
        address: formattedAddress,
        latLng,
        size: Number(data.size),
        price: Number(data.price),
        floor: Number(data.floor),
        totalFloor: Number(data.totalFloor),
        livingroomAmount: Number(data.livingroomAmount),
        roomAmount: Number(data.roomAmount),
        restroomAmount: Number(data.restroomAmount),
      }

      mutationHouse({ variables: { ...newData } })
    }
  })
}
