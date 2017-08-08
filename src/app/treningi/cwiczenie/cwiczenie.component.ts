import { Component, OnInit, Input } from '@angular/core';
import { Cwiczenie } from '../cwiczenie';

@Component({
  selector: 'app-cwiczenie',
  templateUrl: './cwiczenie.component.html',
  styleUrls: ['./cwiczenie.component.css']
})
export class CwiczenieComponent implements OnInit {
  @Input() cwiczenie: Cwiczenie;
  @Input() nr: number;

  constructor() { }

  ngOnInit() {
  }

}
