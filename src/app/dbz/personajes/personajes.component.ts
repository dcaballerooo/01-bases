import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { DbzModule } from '../dbz.module';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {


 //@Input('personajes') personajes: any []= [];

  get personajes(){
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DbzService){
    
  }
}
