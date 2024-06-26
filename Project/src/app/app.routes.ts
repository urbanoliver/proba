import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ParfumokComponent } from './pages/parfumok/parfumok.component';
import { ParfumFormComponent } from './pages/parfum-form/parfum-form.component';

export const routes: Routes = [

    {
        path: '',
        component: LoginComponent
    },

    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'parfum',
        component: ParfumokComponent
    },

    {
        path:'add-parfum',
        component: ParfumFormComponent
    },

    {
        path:'edit-parfumok/:id',
        component: ParfumFormComponent
    }
]
