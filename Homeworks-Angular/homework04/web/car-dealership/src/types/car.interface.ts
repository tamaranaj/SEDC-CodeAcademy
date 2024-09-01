import { LocationCar } from "./car-location.interface";
import { CarBrands } from "./enums/car-brands.enum";
import { CarTypes } from "./enums/car-types.enum";
import { FuelType } from "./enums/fuel-type.enum";
import { Transmission } from "./enums/transmission.enum";

export interface Car {
    id: string; 
    description: string;
    price: number; 
    images: string[]; 
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
    transmission: Transmission; 
}
