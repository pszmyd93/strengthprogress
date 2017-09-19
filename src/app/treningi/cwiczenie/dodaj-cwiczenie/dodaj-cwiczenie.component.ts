import { Component, OnInit,Host } from '@angular/core';
import { CwiczenieWartosci } from '../cwiczenie-wartosci';
import {TreningComponent} from '../../trening/trening.component';
import { Cwiczenie } from '../../cwiczenie';

@Component({
  selector: 'app-dodaj-cwiczenie',
  templateUrl: './dodaj-cwiczenie.component.html',
  styleUrls: ['./dodaj-cwiczenie.component.css']
})
export class DodajCwiczenieComponent {
  
  domyslnaNazwaCwiczenia = "klata";
  domyslnaLiczbaSerii = 3;
  parent :TreningComponent;

  constructor(@Host() parent :TreningComponent) { 
    this.parent = parent;
  }

  onSubmit(formValues: CwiczenieWartosci) {
    console.log(formValues);
    let c = new Cwiczenie(formValues.nazwaCwiczenia);
    //c.serie = this.domyslnaLiczbaSerii;
    this.parent.cwiczenia.push(c);
    alert(this.domyslnaNazwaCwiczenia);
    //this.domyslnaNazwaCwiczenia = "";
    //this.domyslnaLiczbaSerii = 0;
  }  

} 
