import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'videos-ive-created',
  templateUrl: 'videos-ive-created.component.html',
  styleUrls: ['videos-ive-created.component.css'],
})
export class VideosIveCreated {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Videos-Ive-created - Alyssa James Productions')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Videos-Ive-created - Alyssa James Productions',
      },
    ])
  }
}
