import { Injectable } from '@angular/core';
import { PlanTreningowyValues } from './plan-treningowy-values';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class PlanTreningowyService {

  
  constructor() { }

  getPlany(): Observable<PlanTreningowyValues[]> {
    
    let lista = JSON.parse(localStorage.getItem("listaPlanow"));
    
    return lista;
    
      

  }
  //getPlany(): PlanTreningowyValues[] {
    //pobierać z localstorydża albo tworzyć pustą listę
  //}



}
