import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Portraits } from './portraits.component'

const routes = [
  {
    path: '',
    component: Portraits,
  },
]

@NgModule({
  declarations: [Portraits],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Portraits],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortraitsModule {}
