import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'categories',children: [

        {path: '',loadComponent: ()=>
            import('./categories/categories.component').then((c)=>c.CategoriesComponent) },
        {path: 'details/:id',loadComponent: ()=> import('./categories/components/card-details/card-details.component').then((c)=>c.CardDetailsComponent)}
    ]
    },
    {path: 'cart', loadComponent: ()=>
        import('./cart/cart.component').then((c)=>c.CartComponent)
    },
    {path: 'contact', loadComponent: ()=>
        import('./contact/contact.component').then((c)=>c.ContactComponent)
    },
    {path: 'about', loadComponent: ()=>
        import('./about/about.component').then((c)=>c.AboutComponent)
    },
    {path: 'favorites', loadComponent: ()=>
        import('./favorites/favorites.component').then((c)=>c.FavoritesComponent)
    },
    {path: 'notfound', component: NotFoundComponent },
    {
        path: '**', redirectTo: 'notfound'
    }
];
