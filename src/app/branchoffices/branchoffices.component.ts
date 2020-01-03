import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api/api-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-branchoffices',
  templateUrl: './branchoffices.component.html',
  styleUrls: ['./branchoffices.component.css']
})
export class BranchofficesComponent implements OnInit {
  private branchOfficeData: any;
  private params: { page: number; size: number; sorting: { name: any }; collectionSize: number };
  $index: 0;
  private count: number;

  constructor(private apiService: ApiServiceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllBranchOfficesCount();
  }

  getAllBranchOffices(params: { page: number; size: number; collectionSize: number }) {
    this.apiService.get('/api/v1/branchOffices', params).subscribe((response) => {
      if (response) {
        this.branchOfficeData = response.content;
        this.count = response.totalElements;
      }
    }, (error) => {

    });
  }

  getAllBranchOfficesCount() {
    this.params = {
      page: 1,
      size: 10,
      sorting: {
        name: 'asc'
      },
      collectionSize: 20
    };
    this.apiService.get('/api/v1/branchOffices/count', this.params).subscribe((response) => {
      if (response === 0 || response) {
        this.params = {
          page: 1,
          size: 10,
          sorting: {
            name: 'asc'
          },
          collectionSize: response
        };
        this.getAllBranchOffices(this.params);
      }
    });
  }

  deleteBranchOffice(branchOfficeId) {
    this.apiService.delete('/api/v1/branchOffice/' + branchOfficeId, this.params).subscribe((response) => {
      if (response) {
        console.log('data');
      }
    });
  }

}
