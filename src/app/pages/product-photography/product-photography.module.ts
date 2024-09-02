import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { ProductPhotography } from './product-photography.component'

const routes = [
  {
    path: '',
    component: ProductPhotography,
  },
]

@NgModule({
  declarations: [ProductPhotography],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ProductPhotography],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductPhotographyModule {}
