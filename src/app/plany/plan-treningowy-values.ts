import { SzablonCwiczenia } from './szablon-cwiczenia';


export class PlanTreningowyValues {
    id: number;
    nazwaPlanu: string;
    szablonyCwiczen: SzablonCwiczenia[] = [];
    


    constructor(nazwaPlanu: string){
        this.nazwaPlanu = nazwaPlanu;
    }
}