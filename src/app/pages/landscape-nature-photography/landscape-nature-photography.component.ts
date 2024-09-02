import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landscape-nature-photography',
  templateUrl: 'landscape-nature-photography.component.html',
  styleUrls: ['landscape-nature-photography.component.css'],
})
export class LandscapeNaturePhotography {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(
      'Landscape-nature-photography - Alyssa James Productions'
    )
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Landscape-nature-photography - Alyssa James Productions',
      },
    ])
  }
}
