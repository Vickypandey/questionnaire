import { Component, OnInit } from '@angular/core';
import { Settings, AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public slides = [];

  public settings: Settings;
  constructor(public appSettings: AppSettings, public appService: AppService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
    this.getSlides();
  }

  public getSlides() {
    this.appService.getHomeCarouselSlides().subscribe((res: any) => {
      this.slides = res;
    });
  }

}
