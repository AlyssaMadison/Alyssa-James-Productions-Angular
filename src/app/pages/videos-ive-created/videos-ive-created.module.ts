import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { VideosIveCreated } from './videos-ive-created.component'

const routes = [
  {
    path: '',
    component: VideosIveCreated,
  },
]

@NgModule({
  declarations: [VideosIveCreated],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [VideosIveCreated],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VideosIveCreatedModule {}
