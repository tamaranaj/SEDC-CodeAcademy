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
        images: ['https://assets.catawiki.com/image/cw_normal/plain/assets/catawiki/assets/2015/11/3/1/5/d/15da934c-8258-11e5-85a7-acca8b1f89ce.jpg', 'https://oldtimer.zone/wp-content/uploads/2020/11/Opel_Kadett_B_1971.jpg'],
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
    }
]