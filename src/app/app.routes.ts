import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { HobbiesComponent } from './pages/hobbies/hobbies';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // fallback → Home
];
