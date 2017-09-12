import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  x: number = 600;
  runTimer: boolean = false;

  constructor() { }

  ngOnInit() {
  }



}
