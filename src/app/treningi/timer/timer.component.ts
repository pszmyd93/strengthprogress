import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  x:number = 60;
  y:number = this.x;
  runTimer:any = false;

  time:string = ""
  constructor() { 
    this.secondsToMS(this.x);
  }

  sessionChange(time:number):void {
    debugger;
    if(!this.runTimer) {
      if(this.x + time > 0){
        this.x += time;
        this.y = this.x;
      }
      else {
        this.x = 0;
        this.y = this.x;
      }
     this.secondsToMS(this.x);
    }
  }
 secondsToMS(sek:number) :void {
   let m = Math.floor(sek/60);
   let s = Math.floor(sek%60);
   this.time =  m + ":" + (s < 10 ? "0" : "") + s;
 }
updateTimer():void {
     this.y -= 1;
     this.secondsToMS(this.y);
     if(this.y < 1) {
       this.reset();
     }
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

 reset() {
    this.y = this.x;
    this.secondsToMS(this.y);
    clearInterval(this.runTimer);
    this.runTimer = false;
 }
}
