import { Component, OnInit, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit {

  title= 'Calculadora Binária';

  public resultado: string = "";
  
  emitirDado = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  clicar(valor:string){
    this.resultado += valor;
  }
  // montarResultado(digito:string){
  //   this.resultado+=digito;
  // }

  limpar(){
    this.resultado="";
  }

  finalizar(){
    // this.resultado=eval(this.resultado);

    let x = this.resultado.split("+");
    // let stringExemplo = "111+0010+111";
    let auxiliar = this.resultado.split("+");
    let total = 0;
    // console.log(auxiliar);

    

    for(let i=0; i<auxiliar.length; i++){
      this.emitirDado.emit(auxiliar[i]);  //Evento para enviar os inputs pro Historico
      let bin = parseInt(auxiliar[i], 2); 
      
      total += bin;
      console.log(total);
  }

  this.emitirDado.emit(total.toString());  //Evento para enviar o resultado pro Historico

  this.resultado= total.toString(2);
  // console.log(foda);
  }

  

}
