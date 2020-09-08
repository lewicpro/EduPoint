import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { UserService } from '../shared/user.service';
import { Router } from '../../../node_modules/@angular/router';
import { NgProgress } from '../../../node_modules/ngx-progressbar';
export interface Fields {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  CurrentUser;
  countries = [
    {name: 'Afghanistan', code: 'AF'},
    {name: 'Åland Islands', code: 'AX'},
    {name: 'Albania', code: 'AL'},
    {name: 'Algeria', code: 'DZ'},
    {name: 'American Samoa', code: 'AS'},
    {name: 'AndorrA', code: 'AD'},
    {name: 'Angola', code: 'AO'},
    {name: 'Anguilla', code: 'AI'},
    {name: 'Antarctica', code: 'AQ'},
    {name: 'Antigua and Barbuda', code: 'AG'},
    {name: 'Argentina', code: 'AR'},
    {name: 'Armenia', code: 'AM'},
    {name: 'Aruba', code: 'AW'},
    {name: 'Australia', code: 'AU'},
    {name: 'Austria', code: 'AT'},
    {name: 'Azerbaijan', code: 'AZ'},
    {name: 'Bahamas', code: 'BS'},
    {name: 'Bahrain', code: 'BH'},
    {name: 'Bangladesh', code: 'BD'},
    {name: 'Barbados', code: 'BB'},
    {name: 'Belarus', code: 'BY'},
    {name: 'Belgium', code: 'BE'},
    {name: 'Belize', code: 'BZ'},
    {name: 'Benin', code: 'BJ'},
    {name: 'Bermuda', code: 'BM'},
    {name: 'Bhutan', code: 'BT'},
    {name: 'Bolivia', code: 'BO'},
    {name: 'Bosnia and Herzegovina', code: 'BA'},
    {name: 'Botswana', code: 'BW'},
    {name: 'Bouvet Island', code: 'BV'},
    {name: 'Brazil', code: 'BR'},
    {name: 'British Indian Ocean Territory', code: 'IO'},
    {name: 'Brunei Darussalam', code: 'BN'},
    {name: 'Bulgaria', code: 'BG'},
    {name: 'Burkina Faso', code: 'BF'},
    {name: 'Burundi', code: 'BI'},
    {name: 'Cambodia', code: 'KH'},
    {name: 'Cameroon', code: 'CM'},
    {name: 'Canada', code: 'CA'},
    {name: 'Cape Verde', code: 'CV'},
    {name: 'Cayman Islands', code: 'KY'},
    {name: 'Central African Republic', code: 'CF'},
    {name: 'Chad', code: 'TD'},
    {name: 'Chile', code: 'CL'},
    {name: 'China', code: 'CN'},
    {name: 'Christmas Island', code: 'CX'},
    {name: 'Cocos (Keeling) Islands', code: 'CC'},
    {name: 'Colombia', code: 'CO'},
    {name: 'Comoros', code: 'KM'},
    {name: 'Congo', code: 'CG'},
    {name: 'Congo, The Democratic Republic of the', code: 'CD'},
    {name: 'Cook Islands', code: 'CK'},
    {name: 'Costa Rica', code: 'CR'},
    {name: 'Cote D\'Ivoire', code: 'CI'},
    {name: 'Croatia', code: 'HR'},
    {name: 'Cuba', code: 'CU'},
    {name: 'Cyprus', code: 'CY'},
    {name: 'Czech Republic', code: 'CZ'},
    {name: 'Denmark', code: 'DK'},
    {name: 'Djibouti', code: 'DJ'},
    {name: 'Dominica', code: 'DM'},
    {name: 'Dominican Republic', code: 'DO'},
    {name: 'Ecuador', code: 'EC'},
    {name: 'Egypt', code: 'EG'},
    {name: 'El Salvador', code: 'SV'},
    {name: 'Equatorial Guinea', code: 'GQ'},
    {name: 'Eritrea', code: 'ER'},
    {name: 'Estonia', code: 'EE'},
    {name: 'Ethiopia', code: 'ET'},
    {name: 'Falkland Islands (Malvinas)', code: 'FK'},
    {name: 'Faroe Islands', code: 'FO'},
    {name: 'Fiji', code: 'FJ'},
    {name: 'Finland', code: 'FI'},
    {name: 'France', code: 'FR'},
    {name: 'French Guiana', code: 'GF'},
    {name: 'French Polynesia', code: 'PF'},
    {name: 'French Southern Territories', code: 'TF'},
    {name: 'Gabon', code: 'GA'},
    {name: 'Gambia', code: 'GM'},
    {name: 'Georgia', code: 'GE'},
    {name: 'Germany', code: 'DE'},
    {name: 'Ghana', code: 'GH'},
    {name: 'Gibraltar', code: 'GI'},
    {name: 'Greece', code: 'GR'},
    {name: 'Greenland', code: 'GL'},
    {name: 'Grenada', code: 'GD'},
    {name: 'Guadeloupe', code: 'GP'},
    {name: 'Guam', code: 'GU'},
    {name: 'Guatemala', code: 'GT'},
    {name: 'Guernsey', code: 'GG'},
    {name: 'Guinea', code: 'GN'},
    {name: 'Guinea-Bissau', code: 'GW'},
    {name: 'Guyana', code: 'GY'},
    {name: 'Haiti', code: 'HT'},
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
    {name: 'Holy See (Vatican City State)', code: 'VA'},
    {name: 'Honduras', code: 'HN'},
    {name: 'Hong Kong', code: 'HK'},
    {name: 'Hungary', code: 'HU'},
    {name: 'Iceland', code: 'IS'},
    {name: 'India', code: 'IN'},
    {name: 'Indonesia', code: 'ID'},
    {name: 'Iran, Islamic Republic Of', code: 'IR'},
    {name: 'Iraq', code: 'IQ'},
    {name: 'Ireland', code: 'IE'},
    {name: 'Isle of Man', code: 'IM'},
    {name: 'Israel', code: 'IL'},
    {name: 'Italy', code: 'IT'},
    {name: 'Jamaica', code: 'JM'},
    {name: 'Japan', code: 'JP'},
    {name: 'Jersey', code: 'JE'},
    {name: 'Jordan', code: 'JO'},
    {name: 'Kazakhstan', code: 'KZ'},
    {name: 'Kenya', code: 'KE'},
    {name: 'Kiribati', code: 'KI'},
    {name: 'Korea, Democratic People\'S Republic of', code: 'KP'},
    {name: 'Korea, Republic of', code: 'KR'},
    {name: 'Kuwait', code: 'KW'},
    {name: 'Kyrgyzstan', code: 'KG'},
    {name: 'Lao People\'S Democratic Republic', code: 'LA'},
    {name: 'Latvia', code: 'LV'},
    {name: 'Lebanon', code: 'LB'},
    {name: 'Lesotho', code: 'LS'},
    {name: 'Liberia', code: 'LR'},
    {name: 'Libyan Arab Jamahiriya', code: 'LY'},
    {name: 'Liechtenstein', code: 'LI'},
    {name: 'Lithuania', code: 'LT'},
    {name: 'Luxembourg', code: 'LU'},
    {name: 'Macao', code: 'MO'},
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
    {name: 'Madagascar', code: 'MG'},
    {name: 'Malawi', code: 'MW'},
    {name: 'Malaysia', code: 'MY'},
    {name: 'Maldives', code: 'MV'},
    {name: 'Mali', code: 'ML'},
    {name: 'Malta', code: 'MT'},
    {name: 'Marshall Islands', code: 'MH'},
    {name: 'Martinique', code: 'MQ'},
    {name: 'Mauritania', code: 'MR'},
    {name: 'Mauritius', code: 'MU'},
    {name: 'Mayotte', code: 'YT'},
    {name: 'Mexico', code: 'MX'},
    {name: 'Micronesia, Federated States of', code: 'FM'},
    {name: 'Moldova, Republic of', code: 'MD'},
    {name: 'Monaco', code: 'MC'},
    {name: 'Mongolia', code: 'MN'},
    {name: 'Montserrat', code: 'MS'},
    {name: 'Morocco', code: 'MA'},
    {name: 'Mozambique', code: 'MZ'},
    {name: 'Myanmar', code: 'MM'},
    {name: 'Namibia', code: 'NA'},
    {name: 'Nauru', code: 'NR'},
    {name: 'Nepal', code: 'NP'},
    {name: 'Netherlands', code: 'NL'},
    {name: 'Netherlands Antilles', code: 'AN'},
    {name: 'New Caledonia', code: 'NC'},
    {name: 'New Zealand', code: 'NZ'},
    {name: 'Nicaragua', code: 'NI'},
    {name: 'Niger', code: 'NE'},
    {name: 'Nigeria', code: 'NG'},
    {name: 'Niue', code: 'NU'},
    {name: 'Norfolk Island', code: 'NF'},
    {name: 'Northern Mariana Islands', code: 'MP'},
    {name: 'Norway', code: 'NO'},
    {name: 'Oman', code: 'OM'},
    {name: 'Pakistan', code: 'PK'},
    {name: 'Palau', code: 'PW'},
    {name: 'Palestinian Territory, Occupied', code: 'PS'},
    {name: 'Panama', code: 'PA'},
    {name: 'Papua New Guinea', code: 'PG'},
    {name: 'Paraguay', code: 'PY'},
    {name: 'Peru', code: 'PE'},
    {name: 'Philippines', code: 'PH'},
    {name: 'Pitcairn', code: 'PN'},
    {name: 'Poland', code: 'PL'},
    {name: 'Portugal', code: 'PT'},
    {name: 'Puerto Rico', code: 'PR'},
    {name: 'Qatar', code: 'QA'},
    {name: 'Reunion', code: 'RE'},
    {name: 'Romania', code: 'RO'},
    {name: 'Russian Federation', code: 'RU'},
    {name: 'RWANDA', code: 'RW'},
    {name: 'Saint Helena', code: 'SH'},
    {name: 'Saint Kitts and Nevis', code: 'KN'},
    {name: 'Saint Lucia', code: 'LC'},
    {name: 'Saint Pierre and Miquelon', code: 'PM'},
    {name: 'Saint Vincent and the Grenadines', code: 'VC'},
    {name: 'Samoa', code: 'WS'},
    {name: 'San Marino', code: 'SM'},
    {name: 'Sao Tome and Principe', code: 'ST'},
    {name: 'Saudi Arabia', code: 'SA'},
    {name: 'Senegal', code: 'SN'},
    {name: 'Serbia and Montenegro', code: 'CS'},
    {name: 'Seychelles', code: 'SC'},
    {name: 'Sierra Leone', code: 'SL'},
    {name: 'Singapore', code: 'SG'},
    {name: 'Slovakia', code: 'SK'},
    {name: 'Slovenia', code: 'SI'},
    {name: 'Solomon Islands', code: 'SB'},
    {name: 'Somalia', code: 'SO'},
    {name: 'South Africa', code: 'ZA'},
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
    {name: 'Spain', code: 'ES'},
    {name: 'Sri Lanka', code: 'LK'},
    {name: 'Sudan', code: 'SD'},
    {name: 'Suriname', code: 'SR'},
    {name: 'Svalbard and Jan Mayen', code: 'SJ'},
    {name: 'Swaziland', code: 'SZ'},
    {name: 'Sweden', code: 'SE'},
    {name: 'Switzerland', code: 'CH'},
    {name: 'Syrian Arab Republic', code: 'SY'},
    {name: 'Taiwan, Province of China', code: 'TW'},
    {name: 'Tajikistan', code: 'TJ'},
    {name: 'Tanzania, United Republic of', code: 'TZ'},
    {name: 'Thailand', code: 'TH'},
    {name: 'Timor-Leste', code: 'TL'},
    {name: 'Togo', code: 'TG'},
    {name: 'Tokelau', code: 'TK'},
    {name: 'Tonga', code: 'TO'},
    {name: 'Trinidad and Tobago', code: 'TT'},
    {name: 'Tunisia', code: 'TN'},
    {name: 'Turkey', code: 'TR'},
    {name: 'Turkmenistan', code: 'TM'},
    {name: 'Turks and Caicos Islands', code: 'TC'},
    {name: 'Tuvalu', code: 'TV'},
    {name: 'Uganda', code: 'UG'},
    {name: 'Ukraine', code: 'UA'},
    {name: 'United Arab Emirates', code: 'AE'},
    {name: 'United Kingdom', code: 'GB'},
    {name: 'United States', code: 'US'},
    {name: 'United States Minor Outlying Islands', code: 'UM'},
    {name: 'Uruguay', code: 'UY'},
    {name: 'Uzbekistan', code: 'UZ'},
    {name: 'Vanuatu', code: 'VU'},
    {name: 'Venezuela', code: 'VE'},
    {name: 'Viet Nam', code: 'VN'},
    {name: 'Virgin Islands, British', code: 'VG'},
    {name: 'Virgin Islands, U.S.', code: 'VI'},
    {name: 'Wallis and Futuna', code: 'WF'},
    {name: 'Western Sahara', code: 'EH'},
    {name: 'Yemen', code: 'YE'},
    {name: 'Zambia', code: 'ZM'},
    {name: 'Zimbabwe', code: 'ZW'},
  ];
  fields: Fields[] = [
    {value: 'Bachelor', viewValue: 'Bachelor'},
    {value: 'Masters', viewValue: 'Master'},
    {value: 'PhD', viewValue: 'PhD'},
    {value: 'Non_Degree', viewValue: 'Non-Degree'},
  ];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  responseData;
  user;
  userData= {
    'First_name': 'userdata',
   'Second_name': 'dfgdfgddfg',
    'Family_name': 'gfdfgdgdd',
     'Pasport_number': 'dfgdfg',
      'Valid_until': 'df',
       'Country_issue': 'dfgdfg',
        'Place_of_Birth': 'gdfg',
         'Date_of_birth': 'gdfgdg',
          'whats_app': 'gdgdfg',
           'mobile': 'dgdfgd',
            'Religion': '',
             'Marital_status': '', 'Highest_degree': '', 'occupation': '', 'Field': '', 'Gender': '', 'Degree_type': '' };
  responseData1;
  userData1;
  responseData2;
  userData2;

  responseData3;
  userData3;

  firstSecFormGroup: FormGroup;
  selectedFile: File = null;
  selecteddata: File = null;
  selectedolevelcertificate: File = null;
  selectedlevelcertificate: File = null;
  selectedbachelortranscript: File = null;
  selectedbachelorcertificate: File = null;
  selectedmedicalexamination: File = null;
  selectedclinicalrecord: File = null;
  selectedphoto: File = null;

  // isOptional: boolean = false;
  onfileSelected(file: FileList) {
    this.selectedFile = file[0];
  }

  onfile(file: FileList) {
    this.selecteddata = file[0];
  }

  onalevelcertificate(file: FileList) {
    this.selectedlevelcertificate = file[0];
  }

  onfolevelcert(file: FileList) {
    this.selectedolevelcertificate = file[0];
  }
  onbachelortranscript(file: FileList) {
    this.selectedbachelortranscript = file[0];
  }

  onbachelorcert(file: FileList) {
    this.selectedbachelorcertificate = file[0];
  }

  onmedicalexam(file: FileList) {
    this.selectedmedicalexamination = file[0];
  }

  onclinicalrec(file: FileList) {
    this.selectedclinicalrecord = file[0];
  }

  onphoto(file: FileList) {
    this.selectedphoto = file[0];
  }

  constructor(public ngProgress: NgProgress,
     public router: Router,
      public configService: UserService,
        private _formBuilder: FormBuilder,
          private http: HttpClient) {
           this.CurrentUser = localStorage.getItem('Patneruser')
           }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      // user : ['lewicpro'],
      First_name: [''],
      Second_name: [''],
      Family_name: [''],
      Pasport_number: [''],
      Valid_until: [''],
      Country_issue: [''],
      Place_of_Birth: [''],
      Date_of_birth: [''],
      whats_app: [''],
      mobile: [''],
      Religion: [''],
      Region: [''],
      Age: [''],
      Distric: [''],
      university: [''],
      Marital_status: [''],
      Highest_degree: [''],
      occupation: [''],
      Agent: [''],
      Field: [''],
      Gender: [''],
      Degree_type: [''],
      // picture: [''],
      Partner: this.CurrentUser
    });

    this.firstSecFormGroup = this._formBuilder.group({
      employer: [''],
      Year_range: [''],
      Responsibility: [''],
      Position: [''],

      employer2: [''],
      Year_range2: [''],
      Responsibility2: [''],
      Position2: [''],

      employer3: [''],
      Year_range3: [''],
      Responsibility3: [''],
      Position3: [''],

      employer4: [''],
      Year_range4: [''],
      Responsibility4: [''],
      Position4: ['']
    });

    this.secondFormGroup = this._formBuilder.group({
      Name_of_High_school_or_diploma: [''],
      From_to_adv: [''],
      Field_of_study_adv: [''],
      Name_of_school_secondary_level: [''],
      from_to_sec: [''],
      Field_of_study_sec: [''],
      Bachelor: [''],
      From_to_bach: [''],
      Field_of_study_bach: [''],
      Masters: [''],
      From_to_master: [''],
      Field_of_study_master: [''],
      Source_of_Funding: [''],
    });

    this.thirdFormGroup = this._formBuilder.group({
      Full_name1: [''],
      mobile_person1: [''],
      whatsap_person1: [''],
      Email_person1: [''],
      Street_person1: [''],
      Districprovince1: [''],
      Country_person1: [''],
      zip_no1: [''],

      Full_name2: [''],
      mobile_person2: [''],
      whatsap_person2: [''],
      Email_person2: [''],
      Street_person2: [''],
      Districprovince2: [''],
      Country_person2: [''],
      zip_no2: [''],

      Full_name3: [''],
      mobile_person3: [''],
      whatsap_person3: [''],
      Email_person3: [''],
      Street_person3: [''],
      Districprovince3: [''],
      Country_person3: [''],
      zip_no3: [''],
    });


    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ''
    });


    this.fifthFormGroup = this._formBuilder.group({
      First_name: [''],
      Second_name: [''],
      Family_name: [''],
      Pasport_number: [''],
      Valid_until: [''],
      Country_issue: [''],
      Place_of_Birth: [''],
      Date_of_birth: [''],
      whats_app: [''],
      mobile: [''],
      Religion: [''],
      Marital_status: [''],
      Highest_degree: [''],
      occupation: [''],
      Field: [''],
      Gender: [''],
      Degree_type: [''],
      // picture: [''],
      // Partner: this.CurrentUser
    });
  }
  saveform() {
    console.log(this.firstFormGroup.value);
    // console.log(this.userData);
  }

  openSnackBar() {

  }
  contact() {
    this.configService.getLoginPosts(this.thirdFormGroup.value, 'Contact/').then((result) => {
        this.responseData = result;
        // console.log(this.responseData);
        // console.log('USERDATA:' + this.thirdFormGroup.value);
        // alert(this.responseData.token);
        // alert(this.userData.username)
        // localStorage.setItem('userData', this.responseData);
        this.router.navigate(['/dashboard/dashHome']);
        }, (err) => {
  });

}


Working() {
  console.log(this.firstSecFormGroup.value);
  this.configService.getLoginPosts(this.firstSecFormGroup.value, 'WorkingExperienge/').then((result) => {
      this.responseData1 = result;
      // console.log(this.responseData1);
      // console.log('USERDATA:' + this.firstSecFormGroup.value);
      // alert(this.responseData.token);
      // alert(this.userData.username)
      // localStorage.setItem('userData1', this.responseData1);
      }, (err) => {
});

}

Education() {
  this.configService.getLoginPosts(this.secondFormGroup.value, 'Educational/').then((result) => {
      this.responseData2 = result;
      // console.log(this.responseData2);
      // console.log('USERDATA:' + this.secondFormGroup.value);
      // alert(this.responseData.token);
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData2);
      }, (err) => {
});

}

Personal() {
  console.log(this.firstFormGroup.value);
  this.configService.getLoginPosts(this.firstFormGroup.value, 'Personal/').then((result) => {
      this.responseData3 = result;
      // this.onUpload();
      // console.log(this.responseData3);
      // console.log('USERDATA:' + this.firstFormGroup.value);
      // alert(this.responseData.token);
      // alert(this.userData.username)
      // localStorage.setItem('userData3', this.responseData3);
      }, (err) => {
});

}
passed() {

}


  onUpload() {
    this.ngProgress.start();
    this.configService.postFile2(this.selectedFile).subscribe(
      data => {
        // console.log('done');
        this.ngProgress.done();
        this.selectedFile = null;
      }
    );

}



onUploadfiles() {
  this.user = localStorage.getItem('user');
  this.ngProgress.start();
  this.configService.postFiledata(this.selectedFile,
     this.selecteddata,
      this.selectedolevelcertificate,
       this.selectedlevelcertificate,
        this.selectedbachelortranscript,
         this.selectedbachelorcertificate,
          this.selectedmedicalexamination,
           this.selectedclinicalrecord,
            this.selectedphoto ).subscribe(
    data => {
      console.log('done');
      this.ngProgress.done();
    }
  );

}
}
