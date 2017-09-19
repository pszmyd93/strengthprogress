import { Seria } from './seria';

export class Cwiczenie {
    nazwaCwiczenia: string;
    serie: Seria[] = [];
    
    constructor(nazwaCwiczenia: string) {
        this.nazwaCwiczenia = nazwaCwiczenia;
    }
} 