import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-portraits',
  templateUrl: 'portraits.component.html',
  styleUrls: ['portraits.component.css'],
})
export class Portraits {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Portraits - Alyssa James Productions')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Portraits - Alyssa James Productions',
      },
    ])
  }
}
