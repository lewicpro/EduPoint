import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { RequestOptions, RequestMethod } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    selectedUser: User;
    lists: User[];
    configUrl = 'http://localhost:8000/api/all';
    Events = 'http://localhost:8000/api/all/events';
    ApplicationForm = 'http://localhost:8000/api/all/Applications';
    userlogin = 'http://localhost:8000/api/all/login/';
    usercreate = 'http://localhost:8000/api/all/UserCreate/';
    auth = 'http://localhost:8000/api/all/';
    Personals = 'http://localhost:8000/api/all/Personal';
    authoer = 'http://localhost:8000/api/all/login';
    Partner = 'http://localhost:8000/api/all/Partner';

  constructor(public http: HttpClient) {}

  getLists() {
    return new Promise(resolve => {

          this.http.get(this.configUrl).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getPersonalLists() {
    return new Promise(resolve => {

          this.http.get(this.Personals).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }







  GetEvents() {
    return new Promise(resolve => {

          this.http.get(this.Events).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  GetPartner() {
    return new Promise(resolve => {

          this.http.get(this.Partner).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }


    postFile(caption: string, fileToUpload: File) {
        const endpoint = 'http://localhost:8000/api/all/Dashboard/';
        const formData: FormData = new FormData();
        const headers = new HttpHeaders();
        formData.append('image', fileToUpload, fileToUpload.name);
        formData.append('caption', caption);
        return this.http
          .post(endpoint, formData);
    }


    postFile2(selectedFile: File) {
        const endpoint = 'http://localhost:8000/api/all/Personal/';
        const formData: FormData = new FormData();
        const headers = new HttpHeaders();
        formData.append('picture', selectedFile, selectedFile.name);
        return this.http
          .post(endpoint, formData);
    }

    postFiledata(selectedFile: File,
         selecteddata: File,
          selectedolevelcertificate: File,
           selectedlevelcertificate: File,
            selectedbachelortranscript: File,
             selectedbachelorcertificate: File,
              selectedmedicalexamination: File,
               selectedclinicalrecord: File,
                selectedphoto: File) {
        const endpoint = 'http://localhost:8000/api/all/Important/';
        const formData: FormData = new FormData();
        const headers = new HttpHeaders();
        formData.append('pasport', selectedFile, selectedFile.name);
        formData.append('olevelcertificate', selectedolevelcertificate, selectedolevelcertificate.name);
        formData.append('alevelcertificate', selectedlevelcertificate, selectedlevelcertificate.name);
        formData.append('bachelortranscript', selectedbachelortranscript, selectedbachelortranscript.name);
        formData.append('bachelorcertificate', selectedbachelorcertificate, selectedbachelorcertificate.name);
        formData.append('medicalexamination', selectedmedicalexamination, selectedmedicalexamination.name);
        formData.append('clinicalrecord', selectedclinicalrecord, selectedclinicalrecord.name);
        formData.append('photo', selectedphoto, selectedphoto.name);
        return this.http
          .post(endpoint, formData);
    }


  GetForm() {
    return new Promise(resolve => {

          this.http.get(this.ApplicationForm).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }


  getuser() {
    return new Promise(resolve => {

          this.http.get(this.authoer).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getLoginPosts(credentials, type) {

        return new Promise((resolve, reject) => {
            const headers = new HttpHeaders();
            this.http.post(this.auth + type, credentials, {headers: headers})
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);

            });

        });
    }
  }
