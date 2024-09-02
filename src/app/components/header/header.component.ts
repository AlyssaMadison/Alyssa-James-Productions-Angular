import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  imageAlt: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  imageSrc: string = '/assets/My logo/untitled%20design-5-200h.png'
  constructor() {}
}
