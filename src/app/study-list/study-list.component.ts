import { Component} from '@angular/core';
import { Study } from '../../_model/Study';
@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.css']
})
export class StudyListComponent {
  public studys: Study[]  = [
    {
      name: "Julio Cesar",
      description: "HARVAD é para os fracos, Aqui é UNISUAM",
      matricula: "18104498",
      image: "../../assets/eu.jpg"
    },
    {
      name: "Felipe Lima da Silva",
      description: "ASKANIN",
      matricula: "18101727",
      image: "../../assets/felipe.jpeg"
    },
    {
      name: "Joelyne França Camara Reis",
      description: "Joelyne",
      matricula: "18103024",
      image: "../../assets/joelyne.jpeg"
    }
  ];

}
