import { Car, CarBrands, CarTypes,FuelType } from "../types/interface.car";


export const cars: Car[] = [
    {
        id: "kksdksd",
        description: "In excellent shape ",
        price: 25000,
        images: ['http://www.thecoolcars.nl/wordpress/wp-content/uploads/Mercedes-SL-Pagoda-02-1024x768.jpg'],
        type: CarTypes.Coupe,
        year: 1963,
        color: "black",
        fuelType: FuelType.Petrol,
        distance: 90000,
        isNew: false,
        location:{
            city: 'Skopje',
            country: 'Macedonia'
        },
        brand: CarBrands.Mercedes,
        model: '280 SL',
        enginePower: 200,
        doors: 3,
        seats: 5,
        transmission: 'Manual'
    },
    {        
        id: "uuhfhdfhuer",
        description: "Oldtimer",
        price: 15000,
        images: ['https://live.staticflickr.com/65535/49138693932_a88337071c_b.jpg'],
        type: CarTypes.Coupe,
        year: 1972,
        color: "orange",
        fuelType: FuelType.Petrol,
        distance: 14000,
        isNew: false,
        location:{
            city: 'Skopje',
            country: 'Macedonia'
        },
        brand: CarBrands.Opel,
        model: 'Kadett b',
        enginePower: 200,
        doors: 3,
        seats: 5,
        transmission: 'Manual' 
    },
    {        id: "qkedksdksd",
        description: "Oldtimer in excellent shape.",
        price: 9000,
        images: ['https://d2dsc1gf0t80gb.cloudfront.net/wp-content/uploads/2015/02/22133349/simplicity-led-to-the-fiat-500-s-unintentional-charm-1476934022562-1200x628-1.jpg', 'https://i.pinimg.com/originals/a8/0c/b6/a80cb660b140a4940f7214a05b21ee3d.jpg'],
        type: CarTypes.Coupe,
        year: 1975,
        color: "black",
        fuelType: FuelType.Petrol,
        distance: 15000,
        isNew: false,
        location:{
            city: 'Skopje',
            country: 'Macedonia'
        },
        brand: CarBrands.Fiat,
        model: '500',
        enginePower: 90,
        doors: 3,
        seats: 4,
        transmission: 'Manual'
    },
    {        id: "ffhjsdfhksdjf",
        description: "Oldtimer in excellent shape.",
        price: 150000,
        images: ['https://www.supercars.net/blog/wp-content/uploads/2016/03/Screenshot-2016-03-07-21.21.32.png'],
        type: CarTypes.Coupe,
        year: 1965,
        color: "gray",
        fuelType: FuelType.Petrol,
        distance: 15000,
        isNew: false,
        location:{
            city: 'Skopje',
            country: 'Macedonia'
        },
        brand: CarBrands.Porshe,
        model: '356 Speedster',
        enginePower: 80,
        doors: 3,
        seats: 4,
        transmission: 'Manual'
    },
    {        id: "kljlkjaskdj",
        description: "Oldtimer in excellent shape.",
        price: 120000,
        images: ['https://rtclassicgarage.com/wp-content/uploads/2023/08/Porsche-911-964-Turbo-Kultowy-Model-w-Historii-Motoryzacji-RT.jpg'],
        type: CarTypes.Coupe,
        year: 1983,
        color: "gray",
        fuelType: FuelType.Petrol,
        distance: 15000,
        isNew: false,
        location:{
            city: 'Skopje',
            country: 'Macedonia'
        },
        brand: CarBrands.Porshe,
        model: '911 Turbo 3.3 WLS',
        enginePower: 80,
        doors: 3,
        seats: 4,
        transmission: 'Manual'
    },
    {        id: "kljlkjaskdj",
        description: "Oldtimer in excellent shape.",
        price: 11000,
        images: ['https://erclassics.b-cdn.net/media/catalog/product/cache/2/thumbnail/1920x/17f82f742ffe127f42dca9de82fb58b1/o/p/opel-rekord-sprint-1968-o8796-041.jpg'],
        type: CarTypes.Coupe,
        year: 1983,
        color: "gray",
        fuelType: FuelType.Petrol,
        distance: 15000,
        isNew: false,
        location:{
            city: 'Skopje',
            country: 'Macedonia'
        },
        brand: CarBrands.Opel,
        model: 'Record C',
        enginePower: 80,
        doors: 3,
        seats: 4,
        transmission: 'Manual'
    }
]
