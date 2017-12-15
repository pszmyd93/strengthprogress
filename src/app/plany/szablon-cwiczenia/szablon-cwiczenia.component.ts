import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SzablonCwiczenia } from '../szablon-cwiczenia';


@Component({
  selector: 'app-szablon-cwiczenia',
  templateUrl: './szablon-cwiczenia.component.html',
  styleUrls: ['./szablon-cwiczenia.component.css']
})
export class SzablonCwiczeniaComponent {
  @Input() szablonCwiczenia: SzablonCwiczenia;
  @Input() nr: number;
  @Output() onUsun = new EventEmitter();

  usun(nr: number) {
    this.onUsun.emit(nr);
  }

  constructor() { }


}
