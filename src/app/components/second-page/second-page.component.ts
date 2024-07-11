import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer/timer.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  running = false;
  time = { hours: 0, minutes: 0, seconds: 0 };

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.time$.subscribe((time: { hours: number; minutes: number; seconds: number; }) => {this.time = time});
    this.timerService.running$.subscribe((running: boolean) => this.running = running);
  }

  start() {
    this.timerService.start();
  }

  pause() {
    this.timerService.stop();
  }

  reset() {
    this.timerService.reset();
  }
}
