import { Component, HostListener, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],

})
export class NavBarComponent {
  
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public scrolled: boolean = false;
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .pipe(map((state) => state.matches))
      .subscribe((isMobile) => (this.isMobile = isMobile));
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 80; 
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
