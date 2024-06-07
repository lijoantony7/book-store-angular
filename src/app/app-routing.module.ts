import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AboutUsComponent } from './about-us/components/about-us/about-us.component';
import { PublicComponent } from './public/public.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'about-us', pathMatch: 'full'},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'public', component: PublicComponent,
    loadChildren: () => import('./public/public.module').then(x => x.PublicModule)
  },
  {path: 'auth', component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  },
  {path: 'user/:userId', component: UserComponent,
    loadChildren: () => import('./user/user.module').then(x => x.UserModule)
  },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Import RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
