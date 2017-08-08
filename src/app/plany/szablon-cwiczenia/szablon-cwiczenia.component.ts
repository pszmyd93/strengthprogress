import { Component, OnInit, Input } from '@angular/core';
import { SzablonCwiczenia } from '../szablon-cwiczenia';

@Component({
  selector: 'app-szablon-cwiczenia',
  templateUrl: './szablon-cwiczenia.component.html',
  styleUrls: ['./szablon-cwiczenia.component.css']
})
export class SzablonCwiczeniaComponent implements OnInit {
  @Input() szablonCwiczenia: SzablonCwiczenia;
  @Input() nr: number;
  constructor() { }

  ngOnInit() {
  }

}
