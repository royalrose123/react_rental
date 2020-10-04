import { gql } from '@apollo/client'

export const HOUSE_INFO = gql`
  query house($postId: Int) {
    house(postId: $postId) {
      postUser {
        gender
        displayName
        phoneNumber
      }
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

export const EDIT_HOUSE = gql`
  mutation editHouse(
    $postId: Int
    $postUser: UserInput
    $city: String
    $device: DeviceInput
    $distinct: String
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
    editHouse(
      postId: $postId
      postUser: $postUser
      city: $city
      device: $device
      distinct: $distinct
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
      postId
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
      fileList {
        file
        fileUrl
        filename
        isExisted
      }
    }
  }
`
