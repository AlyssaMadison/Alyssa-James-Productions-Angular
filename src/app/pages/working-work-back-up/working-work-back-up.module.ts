import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { WorkingWorkBackUp } from './working-work-back-up.component'

const routes = [
  {
    path: '',
    component: WorkingWorkBackUp,
  },
]

@NgModule({
  declarations: [WorkingWorkBackUp],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [WorkingWorkBackUp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WorkingWorkBackUpModule {}
