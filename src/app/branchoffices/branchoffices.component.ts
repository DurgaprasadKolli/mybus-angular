import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api/api-service.service';

@Component({
  selector: 'app-branchoffices',
  templateUrl: './branchoffices.component.html',
  styleUrls: ['./branchoffices.component.css']
})
export class BranchofficesComponent implements OnInit {
  branchOfficeBody: {};
  private page: number;
  private pageSize: number;
  private collectionSize: any;
  private branchOfficeData: any;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getAllBranchOfficesCount();
  }

  getAllBranchOffices() {
    console.log('---------------------------------------------------------------')
    this.apiService.get('/api/v1/branchOffices', this.branchOfficeBody).subscribe((response) => {
      console.log(response);
      if (response) {
        this.branchOfficeData = response.constructor.data;
      }
    }, (error) => {

    });
  }

  getAllBranchOfficesCount() {
    const branchOfficeBody = {};
    console.log('{}', branchOfficeBody)
    this.apiService.get('/api/v1/branchOffices/count', branchOfficeBody).subscribe((response) => {
      console.log('response', response);
      if (response === 0 || response) {
        this.page = 1;
        this.pageSize = 4;
        this.collectionSize = response.length;
        this.getAllBranchOffices();
      }
    });
  }

}
