import { gql } from '@apollo/client'

export const HOUSE_LIST = gql`
  query {
    house {
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
      distict
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
        url
      }
    }
  }
`
