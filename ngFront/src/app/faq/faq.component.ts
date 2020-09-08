import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  posts;



  constructor(private configService: UserService) {
    this.showConfig();
   }

  ngOnInit() {
  }

  showConfig() {
      this.configService.getLists()
        .then(data => {
          this.posts = data;

        }

        );
}

}
