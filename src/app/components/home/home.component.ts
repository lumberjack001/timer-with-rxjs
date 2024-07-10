import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme-service.service';
import { TimerService } from 'src/app/services/timer/timer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  time = { hours: 0, minutes: 0, seconds: 0 };
  running = false;
  themeMode!: string;

  constructor(
    private theme: ThemeService,
    private timerService: TimerService
  ) { }

  ngOnInit(): void {
    this.updateThemeIcons()
    this.timerService.time$.subscribe((time: { hours: number; minutes: number; seconds: number; }) => {this.time = time});
    this.timerService.running$.subscribe((running: boolean) => this.running = running);
  }

  click(){
    this.theme.toggleTheme()
    this.updateThemeIcons()

  }

  updateThemeIcons(){
    this.theme.theme$.subscribe(theme => {
      this.themeMode = theme;
    });
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

  pad(value: number): string {
    return value.toString().padStart(2, '0');
  }


}
