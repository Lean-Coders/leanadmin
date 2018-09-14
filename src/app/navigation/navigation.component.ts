import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthService} from "../auth/login/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{

  @Output() closeSidenav = new EventEmitter<void>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    isLoggedIn$: Observable<boolean>;

    constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthService) {}

    ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn;
    }

    onClose() {
        this.closeSidenav.emit();
    }

    onLogout() {
        this.authService.logout();
    }
  }
