import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hdo-banner',
    templateUrl: './hdo-banner.component.html',
    styleUrls: ['./hdo-banner.component.scss']
})
export class HdoBannerComponent implements OnInit {

    datePickerConfig = {
        format: 'YYYY-MM-DD'
    };

    constructor() { }

    ngOnInit(): void {}

}