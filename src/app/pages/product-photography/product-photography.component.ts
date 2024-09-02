import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'product-photography',
  templateUrl: 'product-photography.component.html',
  styleUrls: ['product-photography.component.css'],
})
export class ProductPhotography {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Product-Photography - Alyssa James Productions')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Product-Photography - Alyssa James Productions',
      },
    ])
  }
}
