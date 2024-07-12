import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-hdt-banner',
    templateUrl: './hdt-banner.component.html',
    styleUrls: ['./hdt-banner.component.scss']
})
export class HdtBannerComponent implements OnInit {

    datePickerConfig = {
        format: 'DD-MM-YYYY'
    };

    form = new FormGroup({
        startDate: new FormControl("",Validators.required),
        endDate: new FormControl("",Validators.required),
    });

    constructor(private router:Router) { }

    ngOnInit(): void {}


    submit(){
        this.router.navigate(['/hotels-listing', { "startDate": this.form.value.startDate,"endDate": this.form.value.endDate }  ])
    }

}