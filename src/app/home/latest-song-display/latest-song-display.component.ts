import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-latest-song-display',
  templateUrl: './latest-song-display.component.html',
  styleUrls: ['./latest-song-display.component.scss']
})
export class LatestSongDisplayComponent {
  @Input() src : string = ' '
  @Input() alt : string = ' '
}
