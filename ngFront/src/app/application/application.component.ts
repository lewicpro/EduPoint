import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
    posts;


    constructor(private configService: UserService) {
        this.showForm();
    }

    ngOnInit() {
    }

    showForm() {
        this.configService.GetForm()
            .then(data => {
                    this.posts = data;

                }
            );

    }
}