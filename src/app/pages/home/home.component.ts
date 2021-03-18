import { Component, OnInit } from '@angular/core';
import { Settings, AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public slides = [
    {
      "title": "Great food. Tastes good.",
      "desc": "Everything should be as simple as it is, but not simpler. Believe that life is worth living and your belief will help create the fact. We help your ideas come to life. Everything should be simple.",
      "image": "assets/images/carousel/1.jpg"
    },
    {
      "title": "Best foods in the city",
      "desc": "You can't just eat good food. You've got to talk about it too. And you've got to talk about it to somebody who understands that kind of food.",
      "image": "assets/images/carousel/3.jpg"
    },
    {
      "title": "Eat healthy. Stay healthy.",
      "desc": "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. Accept no one's definition.",
      "image": "assets/images/carousel/2.jpg"
    }
  ];

  public settings: Settings;
  constructor(public appSettings: AppSettings, public appService: AppService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
    // this.getSlides();
  }

  // public getSlides() {
  //   this.appService.getHomeCarouselSlides().subscribe((res: any) => {
  //     this.slides = res;
  //   });
  // }

}
