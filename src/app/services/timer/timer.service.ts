import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private seconds = 0;
  private minutes = 0;
  private hours = 0;
  private intervalId: any;
  private running = new BehaviorSubject<boolean>(false);
  private timeSubject = new BehaviorSubject<{ hours: number, minutes: number, seconds: number }>({
    hours: this.hours,
    minutes: this.minutes,
    seconds: this.seconds
  });

  time$ = this.timeSubject.asObservable();
  running$ = this.running.asObservable();

  private updateTime() {
    this.timeSubject.next({
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds
    });
  }

  start() {
    this.running.next(true);
      this.intervalId = setInterval(() => {
        this.seconds++;
        if (this.seconds >= 60) {
          this.seconds = 0;
          this.minutes++;
          if (this.minutes >= 60) {
            this.minutes = 0;
            this.hours++;
          }
        }
        this.updateTime();
      }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.running.next(false);
    }
  }

  reset() {
    this.stop();
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.updateTime();
  }
}
