import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-work',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.css'],
})
export class Work {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Work - Alyssa James Productions')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Work - Alyssa James Productions',
      },
    ])
  }
}
