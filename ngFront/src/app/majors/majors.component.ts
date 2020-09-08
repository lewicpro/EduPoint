import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.css'],
})
export class MajorsComponent implements OnInit {
  currentvalue;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe((values: {id: number}) => {
      this.currentvalue = values.id;
    }
  );
}

}

