import { Component, OnInit ,Host} from '@angular/core';
import { Cwiczenie } from '../cwiczenie';

@Component({
  selector: 'app-trening',
  templateUrl: './trening.component.html',
  styleUrls: ['./trening.component.css']
})
export class TreningComponent implements OnInit {
  cwiczenia: Cwiczenie[] = [];

  constructor() { }

  ngOnInit() {
    this.cwiczenia.push(new Cwiczenie('klata'));
    this.cwiczenia.push(new Cwiczenie('biceps'));
  }
  zapiszTrening():void
  {
    alert(JSON.stringify(this.cwiczenia));
  }
} 
