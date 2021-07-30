import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NewsComponent } from './components/news/news.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AdministratorsComponent } from './components/administrators/administrators.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewsComponent,
    CategoriesComponent,
    AdministratorsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
