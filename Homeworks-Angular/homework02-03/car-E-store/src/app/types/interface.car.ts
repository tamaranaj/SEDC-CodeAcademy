export enum CarTypes{
    Sedan = 'Sedan',
    SUV = 'SUV',
    Coupe = 'Coupe',
    Hatchback = 'Hatchback',
    Convertible = 'Convertible',
    Truck = 'Truck'
}

export enum FuelType{
    Petrol = 'Petrol',
    Diesel = 'Diesel',
    Electric = 'Electric'
}

export enum CarBrands{
    Opel = 'Opel',
    Honda = 'Honda',
    Fiat = 'Fiat',
    BMW = 'BMW',
    Mercedes = 'Mercedes',
    Abarth = 'Abarth',
    Audi = 'Audi',
    Mazda = 'Mazda',
    Nissan = 'Nissan',
    Ford = 'Ford',
    Cadillac = 'Cadillac',
    Hyundai = 'Hyundai',
    Dodge = 'Dodge',
    Toyota = 'Toyota',
    Mitsubishi = 'Mitsubishi',
    Subaru = 'Subaru',
    Suzuki = 'Suzuki',
    Porshe = 'Porshe'
}
export interface LocationCar{
    city: string,
    country: string
}


export interface Car {
    id: string; 
    description: string;
    price: number; 
    images: string[] | []; 
    type: CarTypes; 
    year: number; 
    color: string; 
    fuelType: FuelType; 
    distance: number; 
    isNew: boolean; 
    location: LocationCar;
    brand: CarBrands; 
    model: string; 
    enginePower: number; 
    doors: number; 
    seats: number; 
    transmission: string; 
}
