import { Component, OnInit } from '@angular/core';
import 'fullcalendar';
@Component({
  selector: 'app-kalendarz',
  templateUrl: './kalendarz.component.html',
  styleUrls: ['./kalendarz.component.css'
  


]
})
export class KalendarzComponent implements OnInit {

  constructor() { }
  events: any[];
  handleEventClick(e) {
    debugger;
    //e.calEvent = Selected event
    //e.jsEvent = Browser click event
    //e.view = Current view object
}
  ngOnInit() {
    this.events = [
      {
          "title": "All Day Event",
          "start": "2017-12-01"
      },
      {
          "title": "Long Event",
          "start": "2017-12-07",
          "end": "2017-12-10"
      },
      {
          "title": "Repeating Event",
          "start": "2017-12-09T16:00:00"
      },
      {
          "title": "Repeating Event",
          "start": "2017-12-16T16:00:00"
      },
      {
          "title": "Conference",
          "start": "2017-12-11",
          "end": "2017-12-13"
      }
  ];
  }

}
