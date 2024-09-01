import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'create', component: CreateCarComponent},
    {path: 'favorite', component: FavoritesComponent}
];
