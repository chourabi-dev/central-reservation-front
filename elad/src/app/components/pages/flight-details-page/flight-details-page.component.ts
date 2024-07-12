import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-flight-details-page',
    templateUrl: './flight-details-page.component.html',
    styleUrls: ['./flight-details-page.component.scss']
})
export class FlightDetailsPageComponent implements OnInit {

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