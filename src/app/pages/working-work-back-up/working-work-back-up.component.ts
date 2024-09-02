import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'working-work-back-up',
  templateUrl: 'working-work-back-up.component.html',
  styleUrls: ['working-work-back-up.component.css'],
})
export class WorkingWorkBackUp {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('working-work-back-up - Alyssa James Productions')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'working-work-back-up - Alyssa James Productions',
      },
    ])
  }
}
