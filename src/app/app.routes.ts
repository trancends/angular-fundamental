import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateFormComponent } from './form/templateForm/template-form.component';
import { ReactiveFormComponent } from './form/reactiveForm/reactive-from.component';
import { BuilderFormComponent } from './form/builderForm/builder-form.component';
import { FetchRedditComponent } from './detail/fetchData/fetch-reddit.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings.component').then((m) => m.SettingsComponent),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./detail/detail.component').then((m) => m.DetailComponent),
  },
  {
    path: 'form',
    component: TemplateFormComponent,
  },
  {
    path: 'form/reactive',
    component: ReactiveFormComponent,
  },
  {
    path: 'form/builder',
    component: BuilderFormComponent,
  },
  {
    path: 'fetch',
    component: FetchRedditComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
