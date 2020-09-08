import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgProgress } from '../../../node_modules/ngx-progressbar';

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.css']
})
export class HomeDashComponent implements OnInit {
  imageUrl = '/assets/images/profile.png';
  fileToUpload: File = null;
  datar;
  mint;
  user;
  email;
  username;
  date_joined;
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    // to show image preview
    const reader = new FileReader();
    reader.onload = (event: any ) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);


  }

  constructor(public ngProgress: NgProgress, public configService: UserService) {
    this.datar = localStorage.getItem('user');
    this.configService.getuser().then(data => {
      this.user = data;
      for (const k of this.user) {
        if (k.username === this.datar ) {
          this.email = k.email;
          this.username = k.username;
          this.date_joined = k.date_joined;



        }
      }

    }

    );

   }


  onsubmit(caption, image) {
    this.ngProgress.start();
    this.configService.postFile(caption.value, this.fileToUpload).subscribe(
      data => {
        console.log('done');
        this.ngProgress.done();
        caption.value = null;
        this.fileToUpload = null;
      }
    );

  }


  ngOnInit() {
  }

}
