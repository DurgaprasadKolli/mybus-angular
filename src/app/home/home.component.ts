import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api/api-service.service';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiServiceService) {
    const treeviewMenu = $('.app-menu');

    // Toggle Sidebar
    // tslint:disable-next-line:only-arrow-functions
    $('[data-toggle="sidebar"]').click(function(event) {
      event.preventDefault();
      $('.app').toggleClass('sidenav-toggled');
    });

    // Activate sidebar treeview toggle
    $('[data-toggle=\'treeview\']').click(function(event) {
      event.preventDefault();
      if (!$(this).parent().hasClass('is-expanded')) {
        treeviewMenu.find('[data-toggle=\'treeview\']').parent().removeClass('is-expanded');
      }
      $(this).parent().toggleClass('is-expanded');
    });

    // Set initial active toggle
    $('[data-toggle=\'treeview.\'].is-expanded').parent().toggleClass('is-expanded');
  }

  ngOnInit() {}

}
