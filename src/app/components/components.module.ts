import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { GalleryCard2 } from './gallery-card2/gallery-card2.component'
import { Header } from './header/header.component'
import { Footer } from './footer/footer.component'
import { GalleryCard21 } from './gallery-card21/gallery-card21.component'
import { NavigationLinks } from './navigation-links/navigation-links.component'

@NgModule({
  declarations: [GalleryCard2, Header, Footer, GalleryCard21, NavigationLinks],
  imports: [CommonModule, RouterModule],
  exports: [GalleryCard2, Header, Footer, GalleryCard21, NavigationLinks],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
