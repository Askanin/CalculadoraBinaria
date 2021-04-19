import { Component, Input} from '@angular/core';
import { Study } from '../../_model/Study';

@Component({
  selector: 'app-study-card',
  templateUrl: './study-card.component.html',
  styleUrls: ['./study-card.component.css']
})
export class StudyCardComponent {
  @Input() 
  public study!: Study;

}
