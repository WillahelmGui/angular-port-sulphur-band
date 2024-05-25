import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-display',
  templateUrl: './button-display.component.html',
  styleUrls: ['./button-display.component.scss']
})
export class ButtonDisplayComponent {

  @Input() buttontext : string = ' '
  @Input() src : string = ' '
  @Input() alt : string = ' '
}
