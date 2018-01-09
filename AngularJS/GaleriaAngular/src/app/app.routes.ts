import { GalleryComponent } from './gallery/gallery.component';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ModuleWithProviders } from '@angular/core';
import { adminRoutes } from './admin/admin.routes';
const appRoutes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full'},
  { path: 'gallery', component: GalleryComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'admin', component: AdminComponent, children: adminRoutes},
  { path: '**', component: GalleryComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
