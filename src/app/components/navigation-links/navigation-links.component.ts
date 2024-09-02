import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  text1: string = 'Work'
  @Input()
  text5: string = 'Resume'
  @Input()
  text3: string = 'Contact'
  @Input()
  rootClassName: string = ''
  @Input()
  text2: string = 'Resume'
  @Input()
  text: string = 'About'
  constructor() {}
}
