import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BRoll } from './b-roll.component'

const routes = [
  {
    path: '',
    component: BRoll,
  },
]

@NgModule({
  declarations: [BRoll],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BRoll],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BRollModule {}
