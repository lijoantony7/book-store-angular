import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AboutUsComponent } from './about-us/components/about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'about-us', pathMatch: 'full'},
  { path: 'about-us', component: AboutUsComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Import RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
