import { gql } from '@apollo/client'

export const ADD_HOUSE = gql`
  mutation addHouse(
    $postUser: UserInput
    $city: String
    $device: DeviceInput
    $distict: String
    $floor: Int
    $houseDetail: String
    $livingroomAmount: Int
    $others: OthersInput
    $price: Int
    $priceInclude: PriceIncludeInput
    $require: RequireInput
    $restroomAmount: Int
    $roomAmount: Int
    $roomType: String
    $size: Int
    $street: String
    $surrounding: String
    $title: String
    $totalFloor: Int
    $address: String
    $latLng: LatLngInput
    $fileList: [FileInput]
  ) {
    addHouse(
      postUser: $postUser
      city: $city
      device: $device
      distict: $distict
      floor: $floor
      houseDetail: $houseDetail
      livingroomAmount: $livingroomAmount
      others: $others
      price: $price
      priceInclude: $priceInclude
      require: $require
      restroomAmount: $restroomAmount
      roomAmount: $roomAmount
      roomType: $roomType
      size: $size
      street: $street
      surrounding: $surrounding
      title: $title
      totalFloor: $totalFloor
      address: $address
      latLng: $latLng
      fileList: $fileList
    ) {
      postUser {
        displayName
        email
        gender
        phoneNumber
        photoURL
        userId
      }
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
      fileList {
        file
        fileUrl
        filename
      }
    }
  }
`
