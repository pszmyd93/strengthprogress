import { Component, OnInit, Input, Host } from '@angular/core';
import {  Trening} from '../../treningi/trening';


@Component({
  selector: 'app-miniaturatr',
  templateUrl: './miniaturatr.component.html',
  styleUrls: ['./miniaturatr.component.css']
})
export class MiniaturatrComponent implements OnInit {
  @Input() trening: Trening; //do pobierania nazwy z listy obiektow-planow
  @Input() nr: number;
  lista: Trening[] = [];
  
  constructor() { }

  ngOnInit() {
    
  }
  usun(id: number): void {
    //pobierz liste
    this.lista = JSON.parse(localStorage.getItem("listaTreningow"));
    //wyszukaj cel
    //remove cel
    let listaNowa = this.lista.filter(function(trening: Trening) {
      return trening.id !== id;
  });
    //nadpisz liste
    localStorage.setItem("listaTreningow",JSON.stringify(listaNowa));
  }

}
