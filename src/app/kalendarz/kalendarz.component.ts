import { Component, OnInit } from '@angular/core';
import 'fullcalendar';
import { Trening } from '../treningi/trening';
import { forEach } from '@angular/router/src/utils/collection';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { RouterLinkActive } from '@angular/router/src/directives/router_link_active';

import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-kalendarz',
  templateUrl: './kalendarz.component.html',
  styleUrls: ['./kalendarz.component.css'
]
})
export class KalendarzComponent implements OnInit {
    pusta: Trening[] = [];

    listaTreningow: Trening[] = JSON.parse(localStorage.getItem("listaTreningow"));
  constructor(
    private route: ActivatedRoute,
    private router: Router ) {
    }
  events: any[];
  handleEventClick(e) {
}
  ngOnInit() {
    this.events = [
      {
          "title": "All Day Event",
          "start": "2017-12-01", 
          "id": "121"
      },
      {
        "title": "Trening A",
        "start": "2017-12-02",
        "id": "123"
      },
      {
          "title": "Long Event",
          "start": "2017-12-07",
          "end": "2017-12-10",
          "id": "122"
      }
  ];

  //dodajeventy
  this.dodajEventy();

  }

  dodajEventy():void {
      for(let i = 0; i < this.listaTreningow.length; i++){
        this.events.push(this.listaTreningow[i]);
        this.events[i + 3].title = this.listaTreningow[i].nazwa;
        this.events[i + 3].start = this.listaTreningow[i].data;
        this.events[i + 3].id = this.listaTreningow[i].id;
        alert
      }
  }

  wyczysc(): void {
      localStorage.setItem("listaTreningow", JSON.stringify(this.pusta));
  }
}
