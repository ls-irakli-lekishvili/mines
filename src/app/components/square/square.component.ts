import { Component, Input } from '@angular/core';
import { Isquare} from '../../interfaces/isquare'
@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() square: Isquare;
}
