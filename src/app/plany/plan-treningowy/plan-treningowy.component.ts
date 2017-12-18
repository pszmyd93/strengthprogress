import { Component, OnInit, Input, Host } from '@angular/core';
import { SzablonCwiczenia } from '../szablon-cwiczenia';
import { SzablonCwiczeniaFormValues } from '../szablon-cwiczenia-form-values';
import { PlanTreningowyValues } from '../plan-treningowy-values';
import { PlanTreningowyService } from '../plan-treningowy.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-plan-treningowy',
  templateUrl: './plan-treningowy.component.html',
  styleUrls: ['./plan-treningowy.component.css']
})
export class PlanTreningowyComponent implements OnInit {
  
  plany: PlanTreningowyValues[] = [];
  planTreningowy: PlanTreningowyValues = new PlanTreningowyValues("nazwa");

  domyslnaNazwaCwiczenia = "klata";
  

  constructor(private activatedRoute: ActivatedRoute) {

  }
  private onParamsChanged(params) {
    if(params.id) {
      this.planTreningowy.nazwaPlanu = params.id;
      let plany = JSON.parse(localStorage.getItem("listaPlanow"));
      for(let i = 0; i < plany.length; i++) { 
        let plan = plany[i]
        if(plan.nazwaPlanu == params.id) {
          this.planTreningowy = plan;
        }
      }

    } 
  }

  

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(this.onParamsChanged.bind(this));

  }
  onSubmit(formValues: SzablonCwiczenia){
    let c = new SzablonCwiczenia(formValues.nazwaCwiczenia);
    this.planTreningowy.szablonyCwiczen.push(c);
  }
  zapisz(): void {
    let obj = JSON.stringify(this.planTreningowy);//stringify values 
    localStorage.setItem(this.planTreningowy.nazwaPlanu,obj);
    alert(localStorage.getItem(this.planTreningowy.nazwaPlanu));//wyświetlić 
     //dodać do listy

    let obj2 = JSON.parse(localStorage.getItem("listaPlanow"));
    if(obj2) {
      this.plany = obj2;
      let numer = 0;
      //wyszukaj plan
      for(let i = 0; i < obj2.length; i++) {
        let planBiezacy = obj2[i];
        
        if(planBiezacy.nazwaPlanu == this.planTreningowy.nazwaPlanu) {
          numer = i;
        }
      }
      if(numer !== 0) {
        obj2[numer] = this.planTreningowy;
        this.plany = obj2;
        alert(JSON.stringify(this.plany));
        localStorage.setItem("listaPlanow",JSON.stringify(this.plany));
      }
      else {
        let nowy = new PlanTreningowyValues(this.planTreningowy.nazwaPlanu);
        nowy = this.planTreningowy;
        this.plany.push(nowy);
        alert(JSON.stringify(this.plany));
        localStorage.setItem("listaPlanow",JSON.stringify(this.plany));
      }
    }
    else {
      //dodac plan do listy
      this.plany.push(this.planTreningowy);
      localStorage.setItem("listaPlanow",JSON.stringify(this.plany));
    }
  }

  usun(nr: number): void {
    alert(nr);
    this.planTreningowy.szablonyCwiczen.splice(nr,1);
  }
}
