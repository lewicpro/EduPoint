import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  getpose = {'position': ''};

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  name: string;
  position: number;
  weight: any;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'ZHEJIANG NORMAL UNIVERSITY', weight: 'BACHELORS & MASTERS', symbol: 'Zhejiang/China'},
  {position: 2, name:'NANJING UNIVERSITY OF INFORMATION SCIENCE AND TECHNOLOGY (NUIST)', weight:'BACHELORS & MASTERS', symbol:'Nanjing/China'},
  {position: 3, name: 'ZHEJIANG UNIVERSITY OF SCIENCE AND TECHNOLOGY (ZUST)', weight: 'BACHELORS & MASTERS', symbol: 'Zhejiang/China'},
  {position: 4, name: 'HOHAI UNIVERSITY', weight: 'BACHELORS & MASTERS', symbol: 'Nanjing/China'},
  {position: 5, name: 'UNIVERITY OF NOTTINGHAM NINGBO', weight: 'BACHELORS & MASTERS', symbol: 'Ningbo city/China'},

];
