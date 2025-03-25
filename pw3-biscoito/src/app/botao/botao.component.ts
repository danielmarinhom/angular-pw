import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  biscoitoaberto = 'biscoito-aberto.png'
  biscoito = 'biscoito.png'
  biscoitoatual = this.biscoito;

  @Output() isAberto : EventEmitter<boolean> = new EventEmitter<boolean>();

  quebrar(){
    this.isAberto.emit(true);
  }
  reiniciar(){
    this.isAberto.emit(false);
  }
}
