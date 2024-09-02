import { Component, Input } from '@angular/core'

@Component({
  selector: 'gallery-card21',
  templateUrl: 'gallery-card21.component.html',
  styleUrls: ['gallery-card21.component.css'],
})
export class GalleryCard21 {
  @Input()
  imageSrc: string =
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&h=1000'
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  @Input()
  imageAlt: string = 'image'
  @Input()
  title: string = 'Project Title'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
