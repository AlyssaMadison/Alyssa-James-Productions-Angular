import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { LandscapeNaturePhotography } from './landscape-nature-photography.component'

const routes = [
  {
    path: '',
    component: LandscapeNaturePhotography,
  },
]

@NgModule({
  declarations: [LandscapeNaturePhotography],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandscapeNaturePhotography],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandscapeNaturePhotographyModule {}
