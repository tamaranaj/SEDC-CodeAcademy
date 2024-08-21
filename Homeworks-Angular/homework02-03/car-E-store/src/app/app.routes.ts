import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';


export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'contact', component: ContactComponent },
    {path: 'about', component: AboutComponent},
    {path: 'create-car', component: CreateCarComponent},
    {path: 'details', component: CarDetailsComponent}
];
