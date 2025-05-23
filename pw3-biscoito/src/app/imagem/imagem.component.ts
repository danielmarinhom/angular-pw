import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
  @Input() isAberto : boolean = false;

  get biscoitoImagem(): string {
    return this.isAberto ? 'biscoito-aberto.png' : 'biscoito.png';
  }

}
