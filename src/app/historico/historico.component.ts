import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  title = 'Histórico de Execuções';

  public screen = "";
  constructor() { }

  ngOnInit(): void {

    // this.screen.emitirDado.subscribe(
    //       hist => console.log(hist)
    // );
  }

}
