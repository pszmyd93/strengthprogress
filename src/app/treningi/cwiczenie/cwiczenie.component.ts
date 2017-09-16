import { Component, OnInit, Input } from '@angular/core';
import { Cwiczenie } from '../cwiczenie';
import { Seria } from '../seria';

@Component({
  selector: 'app-cwiczenie',
  templateUrl: './cwiczenie.component.html',
  styleUrls: ['./cwiczenie.component.css']
})
export class CwiczenieComponent {
  @Input() cwiczenie: Cwiczenie;
  @Input() nr: number;

  constructor() { }

  onSubmit(formValues: Seria) {
    console.log(formValues);
  }

}
