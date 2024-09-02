import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'b-roll',
  templateUrl: 'b-roll.component.html',
  styleUrls: ['b-roll.component.css'],
})
export class BRoll {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('B-roll - Alyssa James Productions')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'B-roll - Alyssa James Productions',
      },
    ])
  }
}
