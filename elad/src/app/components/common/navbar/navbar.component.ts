import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from '../../models/hotel';
import { CartService } from '../../service/cart.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    tmpList:Detail[]=[];
    constructor(
        public router: Router,
        private cart:CartService
    ) { }

    ngOnInit(): void {
        this.tmpList = this.cart.tmpList;
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

}