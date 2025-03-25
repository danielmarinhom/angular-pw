import { Component, Input } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent {
  @Input() isAberto : boolean = false;
  frases: string[] = [
  "Não desanime: siga sonhando e acreditando na força que existe dentro de você.",
  "Há dias em que tudo parece dar errado. Nestes dias, tente fazer uma pausa. Recarregar as energias é sempre uma boa forma de começar bem um novo dia!",
  "Assim como as flores, para florir é preciso superar um inverno.",
  "Seja sempre inquieto e vez por outra paciente, parece contraditório soa meio diferente mas às vezes pisar no freio também é andar pra frente.",
  "Quando a tristeza bater à porta: convide-a para um café ou leve-a para passear. Aceitar que está triste é também uma forma de lidar com a dor.",
  "Nunca deixe que alguém diga o que você não pode fazer. Descubra por conta própria do que você é realmente capaz. Use e abuse da sua garra!",
  "E quando achar que você já não aguenta mais, acredite: há uma força dentro de você que ainda está prestes a se revelar.",
  "A grande sorte de um bom viajante é deixar que os dias sejam levados pelo inesperado.",
  "Às vezes, temos que parar para reavaliar o que deve seguir conosco e o que está na hora de deixar ir.",
  "As piores tempestades querem só ter certeza de que somos fortes o suficiente para esperarmos pelo sol que logo vai aparecer.",
]


getFrase() {
  return this.frases[(Math.floor(Math.random() * 10))];
}


}
