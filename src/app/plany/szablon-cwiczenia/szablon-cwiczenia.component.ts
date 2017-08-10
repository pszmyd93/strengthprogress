import { Component, OnInit, Input } from '@angular/core';
import { SzablonCwiczenia } from '../szablon-cwiczenia';
import { SzablonCwiczeniaFormValues } from '../szablon-cwiczenia-form-values';

@Component({
  selector: 'app-szablon-cwiczenia',
  templateUrl: './szablon-cwiczenia.component.html',
  styleUrls: ['./szablon-cwiczenia.component.css']
})
export class SzablonCwiczeniaComponent {
  @Input() szablonCwiczenia: SzablonCwiczenia;
  @Input() nr: number;
  @Input() initialLiczbaSerii: number;
  constructor() { }

  onSubmit(formValues: SzablonCwiczeniaFormValues) {

    console.log(formValues);

  }
}
