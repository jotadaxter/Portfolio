import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* Active link on Navbar */
    $(document).on('click', '.nav-link', function() {
        console.log($('nav-item'));
        $('.nav-item').removeClass('active');
        $(this).parent().addClass('active');
    });

  }

}
