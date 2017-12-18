import { Component, OnInit ,Host, Input} from '@angular/core';
import { Cwiczenie } from '../cwiczenie';
import { Trening } from '../trening';
import { PlanTreningowyValues } from '../../plany/plan-treningowy-values';
import { ActivatedRoute, Router } from '@angular/router';
import { Seria } from '../seria';

@Component({
  selector: 'app-trening',
  templateUrl: './trening.component.html',
  styleUrls: ['./trening.component.css']
})
export class TreningComponent implements OnInit {
  @Input() nazwa = "plan";
  trening: Trening = new Trening(0);
  treningi: Trening[] = [];
  plan: PlanTreningowyValues = new PlanTreningowyValues("plan111");



  

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() { 

    this.activatedRoute.params
      .subscribe(this.onParamsChanged.bind(this));
  }

  private onParamsChanged(params) { //otrzymywanie planu
    if(params.nazwa) {
      this.nazwa = params.nazwa;
      let plany = JSON.parse(localStorage.getItem("listaPlanow"));
      for(let i = 0; i < plany.length; i++) {
        let plan = plany[i]
        if(plan.nazwaPlanu == params.nazwa) {
          this.plan = plan;
          alert(JSON.stringify(this.plan));
        }
      }
      this.pobierzDane(this.plan);
    }
    if(params.id){
      let treningi = JSON.parse(localStorage.getItem("listaTreningow"));
      for(let i = 0; i < treningi.length; i++) {
        let tr = treningi[i]
        if(tr.id == params.id) {
          this.trening.id = tr.id;
          this.trening.cwiczenia = tr.cwiczenia;
          this.nazwa = tr.nazwa;
          this.trening.data = tr.data;
          
          alert(JSON.stringify(this.trening));
        }
      }
      alert(params.id); // dopisać otwieranie treningu
    }
    
  }

  pobierzDane(plan: PlanTreningowyValues): void {
    plan = this.plan;
    for(let i = 0; i < plan.szablonyCwiczen.length; i++){
      this.trening.cwiczenia.push(new Cwiczenie(plan.szablonyCwiczen[i].nazwaCwiczenia));
      //if
      if(plan.szablonyCwiczen[i].liczbaSerii) {
        for(let j = 0; j < plan.szablonyCwiczen[i].liczbaSerii; j++){
          this.trening.cwiczenia[i].serie.push(new Seria(plan.szablonyCwiczen[i].liczbaPowtorzen,0));
        }
      }
    }
  }



  zapiszTrening():void {
    let obj = JSON.parse(localStorage.getItem("listaTreningow"));
    let nowyID = obj.length + 1;
    //this.treningi = obj;

    //ustaw date
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    let newdate = year + "/" + month + "/" + day;
    this.trening.data = newdate;
    this.trening.nazwa = this.nazwa;

    if(obj) {
      this.treningi = obj;
      let numer = 0;
      //wyszukaj trening
      for(let i = 0; i < obj.length; i++) {
        let planBiezacy = obj[i];
        
        if(planBiezacy.id == this.trening.id) {
          numer = i;
        }
      }
      if(numer !== 0) {
        //dodac dane treningu
        obj[numer].nazwa = this.trening.nazwa;
        obj[numer].cwiczenia = this.trening.cwiczenia;
        
        this.treningi = obj;
        alert(JSON.stringify(this.treningi));
        localStorage.setItem("listaTreningow",JSON.stringify(this.treningi));
      }
      else {
        let nowy = new Trening(nowyID);
        nowy = this.trening;
        nowy.id = nowyID;
        nowy.data = newdate;
        this.treningi.push(nowy);
        alert(JSON.stringify(this.treningi));
        localStorage.setItem("listaTreningow",JSON.stringify(this.treningi));
      }
    }
    else {
      this.trening.id = 0;
      this.treningi.push(this.trening);
      localStorage.setItem("listaTreningow",JSON.stringify(this.treningi));
      alert(JSON.stringify(this.trening));
    }
    
  }

  usunCwiczenie(nr: number) {
    this.trening.cwiczenia.splice(nr, 1);
  }
}
