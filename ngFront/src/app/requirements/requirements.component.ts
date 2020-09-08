import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from "../shared/user.service";

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {
  currentvalue;
  constructor(private route: ActivatedRoute, Userserv:UserService) { }

  ngOnInit() {
    this.route.params.subscribe((values: {id: number}) => {
      this.currentvalue = values.id;
    }
  );
}

}
