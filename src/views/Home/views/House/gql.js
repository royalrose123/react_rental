import { gql } from '@apollo/client'

export const HOUSE_LIST = gql`
  query($price: PriceInput, $roomAmount: [RoomAmountInput], $roomType: [RoomTypeInput], $mapBounds: MapBoundsInput) {
    houses(price: $price, roomAmount: $roomAmount, roomType: $roomType, mapBounds: $mapBounds) {
      postId
      city
      device {
        airConditioner
        bed
        cable
        chair
        heater
        laundryMachine
        network
        refrigerator
        sofa
        table
        television
        wardrobe
      }
      distinct
      floor
      houseDetail
      livingroomAmount
      others {
        kitchen
        elevator
      }
      price
      priceInclude {
        associationFee
        cleaningFee
        networkBill
        waterBill
      }
      require {
        cook
        deposit
        gender
        identify
        leastPeriod
        pet
      }
      restroomAmount
      roomAmount
      roomType
      size
      street
      surrounding
      title
      totalFloor
      address
      latLng {
        lat
        lng
      }
      houseImg {
        filename
        fileUrl
      }
    }
  }
`
