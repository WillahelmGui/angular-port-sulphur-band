import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-last-release',
  templateUrl: './last-release.component.html',
  styleUrls: ['./last-release.component.scss']
})
export class LastReleaseComponent {
  @Input() src: string = ''
  @Input() alt: string = ''
}
