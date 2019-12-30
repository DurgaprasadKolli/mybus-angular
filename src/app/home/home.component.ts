import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api/api-service.service';
import {NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class HomeComponent implements OnInit {
  dashBoardDate = new Date();

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {}

}
