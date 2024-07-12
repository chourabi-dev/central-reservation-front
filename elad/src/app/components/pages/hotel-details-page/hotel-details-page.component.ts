import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hotel-details-page',
    templateUrl: './hotel-details-page.component.html',
    styleUrls: ['./hotel-details-page.component.scss']
})
export class HotelDetailsPageComponent implements OnInit {

    datePickerConfig = {
        format: 'YYYY-MM-DD'
    };

    constructor() { }

    ngOnInit(): void {}

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}