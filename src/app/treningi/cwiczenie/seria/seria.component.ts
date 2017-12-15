import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Seria } from '../../seria';
import { Cwiczenie } from '../../cwiczenie';

@Component({
  selector: 'app-seria',
  templateUrl: './seria.component.html',
  styleUrls: ['./seria.component.css']
})
export class SeriaComponent implements OnInit {
  @Input() seria: Seria;
  @Input() nr: number;
  @Output() onUsunSerie = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  usunSerie() {
    this.onUsunSerie.emit(this.nr);
  }

} 
