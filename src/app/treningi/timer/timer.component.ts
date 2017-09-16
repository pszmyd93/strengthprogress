import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  x:number = 600;
  runTimer:any = false;

  time:string = ""
  constructor() { 
    this.secondsToMS(this.x);
  }

 secondsToMS(sek:number) :void {
   let m = Math.floor(sek/60);
   let s = Math.floor(sek%60);
   this.time =  m + ":" + (s < 10 ? "0" : "") + s;
 }
updateTimer():void {
     this.x -= 1;
     this.secondsToMS(this.x);
   }
   startTimer():void {
       if(!this.runTimer){
         this.updateTimer();
         this.runTimer = setInterval(() => {         //replaced function() by ()=>
          this.updateTimer();
        }, 1000);
       }
       else {
        clearInterval(this.runTimer);
         
         this.runTimer = false;
      }
     }
 sessionChange(time:number):void {
   debugger;
   if(!this.runTimer) {
     this.x += time;
    this.secondsToMS(this.x);
   }
 }
}
