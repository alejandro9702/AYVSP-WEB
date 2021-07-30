import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './componentes/products/products.component';
import { NewsComponent } from './componentes/news/news.component';
import { CategoriesComponent } from './componentes/categories/categories.component';
import { AdministratorsComponent } from './componentes/administrators/administrators.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewsComponent,
    CategoriesComponent,
    AdministratorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
