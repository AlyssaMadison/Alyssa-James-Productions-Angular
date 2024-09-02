import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'working-work-back-up',
    loadChildren: () =>
      import('./pages/working-work-back-up/working-work-back-up.module').then(
        (m) => m.WorkingWorkBackUpModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'b-roll1',
    loadChildren: () =>
      import('./pages/b-roll/b-roll.module').then((m) => m.BRollModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'b-roll11',
    loadChildren: () =>
      import(
        './pages/landscape-nature-photography/landscape-nature-photography.module'
      ).then((m) => m.LandscapeNaturePhotographyModule),
  },
  {
    path: 'work',
    loadChildren: () =>
      import('./pages/work/work.module').then((m) => m.WorkModule),
  },
  {
    path: 'portraits',
    loadChildren: () =>
      import('./pages/portraits/portraits.module').then(
        (m) => m.PortraitsModule
      ),
  },
  {
    path: 'page',
    loadChildren: () =>
      import('./pages/page/page.module').then((m) => m.PageModule),
  },
  {
    path: 'product-photography',
    loadChildren: () =>
      import('./pages/product-photography/product-photography.module').then(
        (m) => m.ProductPhotographyModule
      ),
  },
  {
    path: 'videos-ive-created',
    loadChildren: () =>
      import('./pages/videos-ive-created/videos-ive-created.module').then(
        (m) => m.VideosIveCreatedModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
