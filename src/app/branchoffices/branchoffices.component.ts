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
  private params: { page: 1; size: 10; sorting: { name: 'asc' }};
  private count: number;
  private collectionSize: any;
  page: any = 1;
  size: any = 10;

  constructor(private apiService: ApiServiceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllBranchOfficesCount(this.page, this.size);
  }

  getAllBranchOfficesCount(page: number, size: number) {
    this.params = {
      page: page,
      size: size,
      sorting: {
        name: 'asc'
      },
    }
    console.log(this.params);
    this.apiService.get('/api/v1/branchOffices/count', this.params).subscribe((response) => {
      if (response === 0 || response) {
        this.params = {
          page: page,
          size: size,
          sorting: {
            name: 'asc'
          },
        };
        this.collectionSize = response;
        this.apiService.get('/api/v1/branchOffices', this.params).subscribe((responseData) => {
          if (responseData) {
            this.branchOfficeData = responseData.content;
            this.count = responseData.totalElements;
          }
        }, (error) => {

        });
      }
    });
  }

  // loadPage(page: number, size: number) {
  //   if (page || size) {
  //     this.getAllBranchOfficesCount(page, size);
  //   }
  // }

  deleteBranchOffice(branchOfficeId) {
    this.apiService.delete('/api/v1/branchOffice/' + branchOfficeId, this.params).subscribe((response) => {
      if (response) {
        console.log('data');
      }
    });
  }

}
