import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'guest-login',
    loadChildren: () => import('./pages/guest-login/guest-login.module').then( m => m.GuestLoginPageModule)
  },
  {
    path: 'chats-page',
    loadChildren: () => import('./pages/chats-page/chats-page.module').then( m => m.ChatsPagePageModule)
  },
  {
    path: 'events-page',
    loadChildren: () => import('./pages/events-page/events-page.module').then( m => m.EventsPagePageModule)
  },
  {
    path: 'groups-page',
    loadChildren: () => import('./pages/groups-page/groups-page.module').then( m => m.GroupsPagePageModule)
  },
  {
    path: 'resources-page',
    loadChildren: () => import('./pages/resources-page/resources-page.module').then( m => m.ResourcesPagePageModule)
  },
  // group details page - overview
  {
    path: 'group-overview',
    loadChildren: () => import('./pages/group-overview/group-overview.module').then( m => m.GroupOverviewPageModule)
  },
  //
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
