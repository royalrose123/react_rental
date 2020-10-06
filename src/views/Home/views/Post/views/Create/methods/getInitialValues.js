export const getInitialValues = () => {
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))

  delete userInfo.__typename

  return {
    postUser: {
      ...userInfo,
    },
    // city: '台北市',
    // device: {
    //   airConditioner: true,
    //   bed: true,
    //   cable: true,
    //   chair: true,
    //   heater: true,
    //   laundryMachine: true,
    //   network: true,
    //   refrigerator: true,
    //   sofa: true,
    //   table: true,
    //   television: true,
    //   wardrobe: true,
    // },
    // distinct: '大安區',
    // floor: 10,
    // houseDetail: '無',
    // livingroomAmount: 1,
    // others: {
    //   kitchen: true,
    //   elevator: false,
    // },
    // price: 20000,
    // priceInclude: {
    //   associationFee: false,
    //   cleaningFee: true,
    //   networkBill: false,
    //   waterBill: true,
    // },
    // require: {
    //   cook: '可以',
    //   deposit: '半個月',
    //   gender: '都可',
    //   identify: '學生、上班族',
    //   leastPeriod: '一年',
    //   pet: '可以',
    // },
    // restroomAmount: 1,
    // roomAmount: 2,
    // roomType: '獨立套房',
    // size: '12',
    // street: '建安路',
    // surrounding: '還在想',
    // title: '高級住宅',
    // totalFloor: 5,
    // latLng: {
    //   lat: 5,
    //   lng: 5,
    // },
    fileList: [],
  }
}
