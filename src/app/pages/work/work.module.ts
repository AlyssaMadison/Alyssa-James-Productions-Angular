import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Work } from './work.component'

const routes = [
  {
    path: '',
    component: Work,
  },
]

@NgModule({
  declarations: [Work],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Work],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WorkModule {}
