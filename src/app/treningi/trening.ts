import { Cwiczenie } from './cwiczenie';

export class Trening {
    id: number;
    nazwa: string;
    data: string;
    cwiczenia: Cwiczenie[] = [];

    constructor(id: number){
        this.id = id;
    }
}