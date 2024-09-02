import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  rootClassName: string = ''
  @Input()
  imageAlt: string = 'image'
  @Input()
  imageSrc: string = '/assets/My logo/untitled%20design-5-200h.png'
  constructor() {}
}
