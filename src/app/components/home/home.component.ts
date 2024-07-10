import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  themeMode!: string;

  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
    this.updateThemeIcons()
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


}
