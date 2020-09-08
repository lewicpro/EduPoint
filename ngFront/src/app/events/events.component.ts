import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
    posts;

  constructor(private configService: UserService) {
      this.showEvents();
   }


  ngOnInit() {
  }
  showEvents() {
      this.configService.GetEvents()
        .then(data => {
          this.posts = data;

        }

        );
}
}
