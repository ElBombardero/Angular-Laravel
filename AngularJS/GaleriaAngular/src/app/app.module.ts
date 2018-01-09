import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageService } from './services/image.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ListaImagenesComponent } from './gallery/lista-imagenes/lista-imagenes.component';
import { ImagenComponent } from './gallery/lista-imagenes/imagen/imagen.component';
import { DetalleImagenComponent } from './gallery/detalle-imagen/detalle-imagen.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { routes } from './app.routes';
import { AdminComponent } from './admin/admin.component';
import { AdminImageListComponent } from './admin/admin-image-list/admin-image-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminImageCreateComponent } from './admin/admin-image-create/admin-image-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    ListaImagenesComponent,
    ImagenComponent,
    DetalleImagenComponent,
    AboutComponent,
    ContactoComponent,
    AdminComponent,
    AdminImageListComponent,
    DashboardComponent,
    AdminImageCreateComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpModule,
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
