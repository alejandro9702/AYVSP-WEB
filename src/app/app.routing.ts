import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { NewsComponent } from './components/news/news.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AdministratorsComponent } from './components/administrators/administrators.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'productos', component: ProductsComponent },
    { path: 'novedades', component: NewsComponent },
    { path: 'categorias', component: CategoriesComponent },
    { path: 'administradores', component: AdministratorsComponent },
    { path: '**', component: ErrorComponent }
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
