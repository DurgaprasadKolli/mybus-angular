import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api/api-service.service';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {}

}
