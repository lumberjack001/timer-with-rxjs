import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme/theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rxjs-timer';

  ngOnInit() {
    this.loadTheme();
  }
  
  constructor(private theme: ThemeService){
    this.loadTheme();
  }

  loadTheme() {
    const theme = this.theme.getTheme()
   if(theme && theme === 'dark') document.body.classList.add('dark')
  }

}
