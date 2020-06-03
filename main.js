// Create an address list from this data that looks like the output below
// Use destructuring to name your variables
// OUTPUT:
// Mr. Arthur Schmidt
// 6492 Marsh Ln
// Brisbane,Western Australia, 2018
// Birthdate: 01-0-1977
// Mr. Anton Halla
// 1415 Satakennankatu
// Vårdö,North Karelia, 22939
// Birthdate: 06-1-1982


let data = [
    {
      results: [
        {
          gender: 'male',
          name: {
            title: 'Mr',
            first: 'Arthur',
            last: 'Schmidt',
          },
          location: {
            street: {
              number: 6492,
              name: 'Marsh Ln',
            },
            city: 'Brisbane',
            state: 'Western Australia',
            country: 'Australia',
            postcode: 2018,
            coordinates: {
              latitude: '71.0548',
              longitude: '-75.8305',
            },
            timezone: {
              offset: '0:00',
              description: 'Western Europe Time, London, Lisbon, Casablanca',
            },
          },
          email: 'arthur.schmidt@example.com',
          login: {
            uuid: 'ba547934-3011-4d7a-b3ec-308dde76dca4',
            username: 'smallostrich327',
            password: 'stone55',
            salt: 'mcI1Y5Cy',
            md5: '7eed83a8147887688ce36a2466fc9815',
            sha1: '1c840815f208135b5920dee12dbfac3b4b763942',
            sha256:
              '6dcda1f1785e5c09e63a2bbc6e1a1041016a135a67605ec0ec2848e969485260',
          },
          dob: {
            date: '1977-01-01T05:16:42.404Z',
            age: 43,
          },
          registered: {
            date: '2013-07-26T11:38:34.202Z',
            age: 6,
          },
          phone: '05-6204-6802',
          cell: '0457-477-656',
          id: {
            name: 'TFN',
            value: '661697698',
          },
          picture: {
            large: 'https://randomuser.me/api/portraits/men/33.jpg',
            medium: 'https://randomuser.me/api/portraits/med/men/33.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/33.jpg',
          },
          nat: 'AU',
        },
        {
          gender: 'male',
          name: {
            title: 'Mr',
            first: 'Anton',
            last: 'Halla',
          },
          location: {
            street: {
              number: 1415,
              name: 'Satakennankatu',
            },
            city: 'Vårdö',
            state: 'North Karelia',
            country: 'Finland',
            postcode: 22939,
            coordinates: {
              latitude: '-27.1057',
              longitude: '135.4270',
            },
            timezone: {
              offset: '0:00',
              description: 'Western Europe Time, London, Lisbon, Casablanca',
            },
          },
          email: 'anton.halla@example.com',
          login: {
            uuid: '48ea8a27-0ff3-4121-89aa-a47f1336e59e',
            username: 'angryelephant404',
            password: 'lorena',
            salt: 'MjmaYl2e',
            md5: 'f7765283fda00e34c71ac271ef595bb8',
            sha1: 'c544666ab7da07e2a00ca05b44dbff051a5b9fe5',
            sha256:
              'fcbfa092e7b73ed298ffb602a560e666a71bde653c37bba832e90dee106bde08',
          },
          dob: {
            date: '1982-06-17T02:26:01.444Z',
            age: 37,
          },
          registered: {
            date: '2007-05-01T08:54:16.375Z',
            age: 12,
          },
          phone: '04-205-937',
          cell: '046-255-50-12',
          id: {
            name: 'HETU',
            value: 'NaNNA937undefined',
          },
          picture: {
            large: 'https://randomuser.me/api/portraits/men/42.jpg',
            medium: 'https://randomuser.me/api/portraits/med/men/42.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/42.jpg',
          },
          nat: 'FI',
        },
      ],
      info: {
        seed: '7f7afbdf325e20e5',
        results: 15,
        page: 1,
        version: '1.3',
      },
    },
  ];

let [
    {
        results: [
            {
                name: {
                    title, first, last
                },
                location: {
                    street: {
                        number, name: streetName
                    },
                    city, state: stateName, postcode
                },
                dob: {
                    date
                }
            },
            {
                name: {
                    title: title2, first: first2, last: last2
                },
                location: {
                    street: {
                        number: number2, name: streetName2
                    },
                    city: city2, state: stateName2, postcode: postcode2
                },
                dob: {
                    date: date2
                }
            },
        ]
    }
] = data;

//console.log(title, first, last, number, streetName, city, stateName, postcode, date);
//console.log(title2, first2, last2, number2, streetName2, city2, stateName2, postcode2, date2);

let year = date.substr(0, 4);
let month = date.substr(5, 2);
let day = date.substr(8, 2);

let year2 = date2.substr(0, 4);
let month2 = date2.substr(5, 2);
let day2 = date2.substr(8, 2);

console.log(
`
${title} ${first} ${last}
${number} ${streetName}
${city},${stateName}, ${postcode}
Birthdate: ${month}-${day}-${year}

${title2} ${first2} ${last2}
${number2} ${streetName2}
${city2},${stateName2}, ${postcode2}
Birthdate: ${month2}-${day2}-${year2}
`
);
