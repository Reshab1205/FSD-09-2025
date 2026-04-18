// console.log('Hello')
// setTimeout(() => {
//     console.log('2nd')
// },3000)
// setTimeout(() => {
//     console.log('Ist')
// })

// Promise.resolve().then(() => console.log('Promise'))
// console.log('Bye')


// const data = Promise.reject('Hello')
// data.then((x) => console.log(x)).catch((err) => console.log('err',err))


// const obj = {
//     fname: 'Reshab',
//     greet: function () {
//         console.log('Hello ' + this.fname)
//     }
// }

// obj.greet()

// const result = new Promise((resolve, reject)=> {
//     let success = true;
//     if(success) {
//         resolve("Payment successfull")
//     } else {
//         reject("Payment Failed")
//     }
// });
// result
// .then((data) => console.log(data))
// .catch((err) => console.log(err))
// .finally(() => console.log('Mai Hamesa Chalunga'))

// XML 
// fetch('https://jsonplaceholder.typicode.com/posts/2')
// .then((res) => { 
//     if(!res.ok) {
//         return Error('HTTP Error')
//     }
//      return res.json()
// })
// .then((data) => console.log(data))
// .catch((err) => console.log(err))
let lat = 23.233525031142076;
let lng = 77.4407532553543;
const apiKey = '23a13401e6964d149835d8022a7fa787'
const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`

fetch(url)
.then((res) => res.json())
.then((result) => console.log(result.results[0].formatted))
.catch((err) => console.log(err))


// [
//   {
//     annotations: {
//       DIGIPIN: '35L-8K9-LPM4',
//       DMS: [Object],
//       MGRS: '43QGF4975071463',
//       Maidenhead: 'ML83rf26va',
//       Mercator: [Object],
//       OSM: [Object],
//       UN_M49: [Object],
//       callingcode: 91,
//       currency: [Object],
//       flag: '🇮🇳',
//       geohash: 'tsph4jw8ezxk3eh9g350',
//       qibla: 274.5,
//       roadinfo: [Object],
//       sun: [Object],
//       timezone: [Object],
//       what3words: [Object]
//     },
//     bounds: { northeast: [Object], southwest: [Object] },
//     components: {
//       'ISO_3166-1_alpha-2': 'IN',
//       'ISO_3166-1_alpha-3': 'IND',
//       'ISO_3166-2': [Array],
//       _category: 'road',
//       _normalized_city: 'Bhopal',
//       _type: 'road',
//       city: 'Bhopal',
//       city_district: 'Bhopal',
//       continent: 'Asia',
//       country: 'India',
//       country_code: 'in',
//       county: 'Huzur Tahsil',
//       postcode: '462001',
//       residential: 'Housing Board Colony',
//       road: 'Chetak Flyover',
//       road_type: 'secondary',
//       state: 'Madhya Pradesh',
//       state_code: 'MP',
//       state_district: 'Bhopal'
//     },
//     confidence: 9,
//     distance_from_q: { meters: 6 },
//     formatted: 'Chetak Flyover, Bhopal, Bhopal - 462001, Madhya Pradesh, India',
//     geometry: { lat: 23.2334642, lng: 77.4407377 }
//   }
// ]
