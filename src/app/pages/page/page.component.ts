import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.css'],
})
export class Page {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Page - Alyssa James Productions')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Page - Alyssa James Productions',
      },
    ])
  }
}
