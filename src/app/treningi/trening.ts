import { Cwiczenie } from './cwiczenie';

export class Trening {
    id: string;
    data: Date;
    cwiczenia: Cwiczenie[] = [];

    constructor(id: string){
        this.id = id;
    }
}