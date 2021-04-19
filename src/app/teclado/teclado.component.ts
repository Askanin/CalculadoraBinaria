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

  public caractere: string = "";
  public expressao: string = "";

  public ehOperador(caractere:string):boolean{
    if(caractere == '+'){
      return true;
    } else{
      return false;
    }
  }
  
  public ehZero(caractere:string):boolean{
    if(caractere == '0'){
      return true;
    } else{
      return false;
    }
  }
  
  
  ehZeroDepoisDeOperador(caractere:string, expressao:string):boolean{
    let ultimoCaractere = expressao[expressao.length-1];
    if(this.ehOperador(ultimoCaractere) && this.ehZero(caractere)){
      return true;
    } else{
      return false;
    }
  }
  
  ehOperadorDepoisDeOperador(carcatere:string, expressao:string):boolean{
    let ultimoCaractere = expressao[expressao.length-1];
    if(this.ehOperador(ultimoCaractere) && this.ehOperador(carcatere)){
      return true;
    } else{
      return false;
    }
  }
  
  ehValidaExpressao(caractere:string, expressao:string):boolean{
    let valido:boolean = true;
    if(expressao.length==0){
      if(this.ehOperador(caractere) || this.ehZero(caractere)){
        valido=false;
      }
    } else{
      if(this.ehZeroDepoisDeOperador(caractere, expressao)){
        valido=false;
      } else if (this.ehOperadorDepoisDeOperador(caractere, expressao)){
        valido=false;
      }
    }
    return valido;
  }
  
  
  clicar(valor:string){
    if(this.ehValidaExpressao(valor, this.resultado)){
      this.resultado += valor;
    }
  }
  // montarResultado(digito:string){
  //   this.resultado+=digito;
  // }

  limpar(){
    this.resultado="";
  }

  finalizar(){
    

    let x = this.resultado.split("+");
    
    let auxiliar = this.resultado.split("+");
    let total = 0;
    

    

    for(let i=0; i<auxiliar.length; i++){
      this.emitirDado.emit(auxiliar[i]);  //Evento para enviar os inputs pro Historico
      let bin = parseInt(auxiliar[i], 2); 
      
      total += bin;
      console.log(total);
  }

  this.emitirDado.emit(total.toString());  //Evento para enviar o resultado pro Historico

  if(this.resultado==""){
    this.resultado="";
  } else{
    this.resultado= total.toString(2);
 
  }

} 

}


