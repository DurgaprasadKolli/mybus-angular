import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiServiceService} from '../../api/api-service.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-and-edit-branch-office',
  templateUrl: './add-and-edit-branch-office.component.html',
  styleUrls: ['./add-and-edit-branch-office.component.css']
})
export class AddAndEditBranchOfficeComponent implements OnInit {
  public branchOfficeId: any;
  private formTitle: string;
  private params: any;
  private office: {
    name: string, contact: string, cityId: string, managerId: string, email: string, address: string, allowCargoBooking: boolean
  };
  private cityList: any;
  private userManagers: any;

  constructor(private route: ActivatedRoute,
              private apiService: ApiServiceService,
              private router: Router,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.getCityList();
    this.getUserManager();
    this.office = {
      name: '',
      contact: '',
      cityId: '',
      managerId: '',
      email: '',
      address: '',
      allowCargoBooking: false
    };
    this.branchOfficeId = this.route.snapshot.paramMap.get('id');
    if (this.branchOfficeId) {
      this.formTitle = 'Edit';
      this.apiService.get('/api/v1/branchOffice/' + this.branchOfficeId, this.params).subscribe((response) => {
        this.office = response;
      });
    } else  {
      this.formTitle = 'Add';
    }
  }

  saveBranchOffice() {
    if (this.branchOfficeId) {
      this.apiService.put('/api/v1/branchOffice/' + this.branchOfficeId, this.office).subscribe((response) => {
        if (response) {
          console.log('update', response)
          this.toastrService.success('Branch Office Updated', 'Success');
          this.router.navigate(['/branchOffices']);
        }
      });
    } else  {
      this.apiService.post('/api/v1/branchOffice', this.office).subscribe((response) => {
        if (response) {
          this.toastrService.success('Branch Office Created', 'Success');
          this.router.navigate(['/branchOffices']);
        }
      });
    }
  }

  getCityList() {
    this.apiService.get('/api/v1/activeCityNames', this.params).subscribe((response) => {
      if (response) {
        this.cityList = response;
      }
    });
  }
  getUserManager() {
    this.apiService.get('/api/v1/userNames', this.params).subscribe((response) => {
      if (response) {
        this.userManagers = response;
      }
    });
  }

}
